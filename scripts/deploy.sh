#!/usr/bin/env bash
#
# Build the site and sync dist/ to the fylgja.dev web root over SSH.
#
# Usage:
#   npm run deploy              build, preview the changes, then confirm
#   npm run deploy -- -y        no confirmation prompt
#   npm run deploy -- -n        dry run only, nothing is written
#   npm run deploy -- -s        skip the build, sync the existing dist/

set -euo pipefail

REMOTE_HOST="fylgja"
REMOTE_PATH="domains/fylgja.dev/public_html/"
DIST_DIR="dist"

# Paths that live only on the server and must survive --delete.
# macOS ships openrsync, which rejects --filter alongside --delete, so these
# are plain excludes rather than protect rules.
EXCLUDES=(
	--exclude ".well-known/"
	--exclude "google*.html"
)

assume_yes=0
dry_run=0
skip_build=0

usage() {
	sed -n '3,9p' "$0" | sed 's/^# \{0,1\}//'
	exit 0
}

while [ $# -gt 0 ]; do
	case "$1" in
		-y | --yes) assume_yes=1 ;;
		-n | --dry-run) dry_run=1 ;;
		-s | --skip-build) skip_build=1 ;;
		-h | --help) usage ;;
		*)
			echo "Unknown option: $1" >&2
			echo "Try --help." >&2
			exit 1
			;;
	esac
	shift
done

cd "$(dirname "$0")/.."

branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")
if [ -n "$branch" ] && [ "$branch" != "main" ]; then
	echo "Note: deploying from branch '$branch', not main."
fi

if [ "$skip_build" -eq 0 ]; then
	echo "Building..."
	npm run build
fi

if [ ! -f "$DIST_DIR/index.html" ]; then
	echo "No $DIST_DIR/index.html found. Build first, or drop --skip-build." >&2
	exit 1
fi

rsync_flags=(-rlptz --delete-after --itemize-changes --human-readable)

# .htaccess ships from public/ but is gitignored, so a fresh clone has none.
# Without this the delete pass would drop the server copy.
if [ ! -f "$DIST_DIR/.htaccess" ]; then
	echo "No $DIST_DIR/.htaccess locally, leaving the server copy untouched."
	EXCLUDES+=(--exclude ".htaccess")
fi

sync() {
	rsync "${rsync_flags[@]}" "$@" \
		"${EXCLUDES[@]}" \
		"$DIST_DIR/" "$REMOTE_HOST:$REMOTE_PATH"
}

if [ "$dry_run" -eq 1 ]; then
	echo "Dry run against $REMOTE_HOST:$REMOTE_PATH"
	sync --dry-run
	exit 0
fi

if [ "$assume_yes" -eq 0 ]; then
	echo "Changes to be sent to $REMOTE_HOST:$REMOTE_PATH"
	sync --dry-run
	printf "\nDeploy these changes? [y/N] "
	read -r reply
	case "$reply" in
		[yY] | [yY][eE][sS]) ;;
		*)
			echo "Aborted."
			exit 1
			;;
	esac
fi

echo "Deploying..."
sync --stats
echo "Done. https://fylgja.dev/"
