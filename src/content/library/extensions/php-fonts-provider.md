---
title: "Fonts Provider for PHP"
pageTitle: "Fylgja Fonts Provider for PHP"
description: "Self host web fonts from Fontsource, Google Fonts, Bunny Fonts and Fontshare in any PHP application, with the same output as the Node version."
composer: "fylgja/fonts-provider"
git: "https://github.com/fylgja/php-fonts-provider"
sortOrder: 23
keywords: ["php", "composer", "font-face", "self host", "google fonts", "magento", "laravel"]
faq:
  - question: Is the output the same as the Node version?
    answer: Yes. Both versions have the same API and render the same CSS for
      the same families.
  - question: Does it work in frameworks like Laravel or Magento 2?
    answer: Yes. It is framework neutral and only needs a PSR-18 HTTP client,
      a PSR-17 request factory and a folder to store the fonts in. Guzzle
      provides both.
  - question: Do I need ext-brotli?
    answer: No. Without it, the metrics of a woff2 are read from a woff or ttf
      of the same face instead. A variable font is then measured on its 400
      instance, which can differ by a fraction of a percent.
  - question: Why does generating fail on my server?
    answer: The server needs outbound https access to the provider APIs
      (api.fontsource.org, fonts.googleapis.com, fonts.bunny.net,
      api.fontshare.com) and their file hosts. Rendering a page with the
      stored CSS needs no access.
  - question: Can I use Adobe Fonts?
    answer: No. The Adobe Fonts license does not allow self hosting the files.
---

The Fylgja Fonts Provider for PHP self hosts web fonts from Fontsource, Google Fonts, Bunny Fonts and Fontshare in any PHP application.
It is a port of the [Node version](/library/extensions/fonts-provider/), with the same API and output.

It resolves a list of font families, downloads the woff2 files, and renders the `@font-face` rules and CSS variables, including a fallback face with metric overrides so the page does not shift when the font arrives.
It is framework neutral: it needs a [PSR-18](https://www.php-fig.org/psr/psr-18/) HTTP client and a folder to store the fonts in, nothing else.

## Installation

```sh
composer require fylgja/fonts-provider
```

Requires PHP 8.2 or newer with `ext-intl` and `ext-zlib`, plus any PSR-18 client and PSR-17 request factory.
[Guzzle](https://docs.guzzlephp.org/) provides both.

`ext-brotli` is optional. Without it, the metrics of a woff2 are read from a woff or ttf of the same face instead, see [Fallback metrics](#fallback-metrics).

## Usage

```php
use Fylgja\FontsProvider\FontsProvider;
use Fylgja\FontsProvider\Options;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\HttpFactory;

$fonts = FontsProvider::create(new Client(['timeout' => 10]), new HttpFactory(), '/var/www/public/fonts');

$result = $fonts->generate([
    ['name' => 'Inter', 'weights' => ['100 900'], 'styles' => ['normal', 'italic'], 'preload' => true],
    ['name' => 'Lora', 'provider' => 'google-fonts', 'weights' => [400, 700], 'cssVariable' => '--font-heading', 'fallbacks' => ['Georgia', 'serif']],
], new Options(urlBase: '/fonts'));

$css = $result->css();
```

`generate()` asks the providers which files a family needs and downloads the ones that are not in the fonts folder yet.
Run it when the fonts change, such as when an admin form is saved, and store the CSS it returns. Rendering a page needs no request.

### Validating first

`normalize()` validates the families without any request, so a form can show every error before saving:

```php
$config = $fonts->normalize($input);

if (!$config->isValid()) {
    return $config->errors; // ['fonts[0].weights lists "400" and "300 700", which cover the same weight. ...']
}
```

`generate()` throws a `ConfigException` with the same `errors()` when the config is invalid, before any request is made.

### Result

| Method | Returns |
| --- | --- |
| `css()` | The `@font-face` rules followed by the CSS variables. |
| `fontFaceCss()` | Only the `@font-face` rules, the faces and the fallback faces. |
| `variablesCss()` | Only the selector blocks declaring the CSS variables. |
| `variables()` | The font stack per CSS variable, such as `['--font-heading' => 'Inter, "Inter fallback", sans-serif']`, to declare them yourself. |
| `preloads()` | A `Preload` (`family`, `file`, `url`, `type`) for every file of a family with `preload` set. |
| `preloadHtml()` | `<link rel="preload" as="font" type="font/woff2" href="..." crossorigin>` per preload. |
| `downloaded()` | The number of files downloaded in this run. |

The result also has the properties `families` (a `ResolvedFamily` each, with its `font`, `faces`, `fallbackFace` and `metrics`), `downloads` (a `Download` per file, with its `DownloadStatus` and `error`) and `warnings`.

A family that could not be resolved is not an error, since the rest of the fonts still work.
It is listed in `warnings`, and its CSS variable is still declared with only the fallbacks.
Pass `strict: true` to throw a `WarningException` instead, which holds the result through `result()`.

When you keep the CSS of an earlier run, keep it when a run has warnings, so a provider that is down never removes a working font.

### Options

| Option | Default | |
| --- | --- | --- |
| `urlBase` | `'/fonts'` | Path or URL of the fonts folder as the page sees it, such as a media URL. |
| `cssSelector` | `':root'` | Selector for the CSS variables of families that do not name one. |
| `force` | `false` | Download every file again, even when it is present. |
| `strict` | `false` | Throw a `WarningException` when there are warnings. |
| `maxFileSize` | `10485760` | A larger font file is refused. |

## Configuration

Each family is an array of options.

| Key | Default | |
| --- | --- | --- |
| `name` | required | The family name. |
| `provider` | `'fontsource'` | `fontsource`, `google-fonts`, `bunny-fonts`, `fontshare` or `local`. |
| `id` | slug of `name` | The id in the provider's URLs, for the rare family where it differs (Fontshare spells JetBrains Mono `jet-brains-mono`). |
| `cssVariable` | `'--font-<slug>'` | The leading `--` is added when missing. Must be unique. |
| `cssSelector` | `Options::$cssSelector` | Selector to declare the variable in. |
| `weights` | `['400']` | Single weights, or a range such as `'100 900'` (also `'100..900'` or `'100-900'`) for a variable font. |
| `styles` | `['normal']` | `normal` and `italic`. |
| `subsets` | `['latin']` | Ignored by Fontshare, which serves one file per family. |
| `fallbacks` | `['sans-serif']` | The rest of the font stack. |
| `display` | `'swap'` | The `font-display` value. |
| `preload` | `false` | List the files in `preloads()`. |
| `adjustFallback` | `true` | Add a fallback face with metric overrides. |

The `local` provider serves files that are already in the fonts folder.
Instead of weights and styles it takes `variants`, each with a `src` list of paths relative to the fonts folder, and optionally `weight`, `style`, `stretch`, `unicodeRange` and `display`.

Every value that ends up in the CSS, a file name or a URL is validated, so the families can come from a form.

### Providers

| Provider | Variable fonts | Subsets | Files from |
| --- | --- | --- | --- |
| `fontsource` | yes | yes | `cdn.jsdelivr.net` |
| `google-fonts` | yes | yes | `fonts.gstatic.com` |
| `bunny-fonts` | no | yes | `fonts.bunny.net`, `cdn.jsdelivr.net` |
| `fontshare` | no | no | `cdn.fontshare.com` |
| `local` | yes | no | the fonts folder |

A file is only downloaded over https from the hosts its provider serves fonts from, must start with the woff2 signature, and must stay under `maxFileSize`.
Add a provider, or replace one with other hosts, through the `ProviderRegistry`:

```php
use Fylgja\FontsProvider\FontsProvider;
use Fylgja\FontsProvider\Http\Psr18Fetcher;
use Fylgja\FontsProvider\Provider\Fontsource;
use Fylgja\FontsProvider\Provider\ProviderRegistry;
use Fylgja\FontsProvider\Storage\LocalStorage;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\HttpFactory;

$providers = ProviderRegistry::default()->add(new Fontsource(['cdn.jsdelivr.net', 'fonts.example.com']));

$fonts = new FontsProvider(
    new LocalStorage('/var/www/public/fonts'),
    new Psr18Fetcher(new Client(['timeout' => 10]), new HttpFactory()),
    $providers,
);
```

The server needs outbound https access to the provider APIs (`api.fontsource.org`, `fonts.googleapis.com`, `fonts.bunny.net`, `api.fontshare.com`) and their file hosts.
Adobe Fonts is not supported, since its license does not allow self hosting the files.

## Fallback metrics

The fallback face scales a local font (Arial for `sans-serif`, Times New Roman for `serif`, Courier New for `monospace`, or a named one such as Georgia) to the size of the webfont.
Its numbers are measured from the first file of the family.

Reading a woff2 needs Brotli. With `ext-brotli` loaded, the file is read directly.
Without it, a woff or ttf of the same face is fetched and measured instead: the woff Fontsource serves next to each woff2, the woff or ttf listed in the Bunny Fonts and Fontshare stylesheets, or the ttf Google Fonts returns to a plain request.
A variable font is measured on its 400 instance in that case, which can differ from the default instance of the woff2 by a fraction of a percent.

When nothing can be measured, the family has no fallback face and a warning says so.

## Storage

`LocalStorage` stores the fonts in a folder on disk. To store them elsewhere, implement `StorageInterface`, with paths relative to the fonts folder:

```php
interface StorageInterface
{
    public function exists(string $path): bool;
    public function read(string $path): ?string;
    public function write(string $path, string $contents): void;
    public function location(): string;
}
```

Files are never deleted. The file names only depend on the family, subset, weight and style, so families that share a folder share their files.
