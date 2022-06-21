### Border

Available sizes for the border utility.

| class        | value                                                                           |
| ------------ | ------------------------------------------------------------------------------- |
| `{PREFIX}`   | `{PROPERTY}: 1px var(--border-style, solid) var(--border-color, currentcolor);` |
| `{PREFIX}`-0 | `{PROPERTY}: 0;`                                                                |
| `{PREFIX}`-2 | `{PROPERTY}: 2px var(--border-style, solid) var(--border-color, currentcolor);` |
| `{PREFIX}`-3 | `{PROPERTY}: 3px var(--border-style, solid) var(--border-color, currentcolor);` |

To extend this, use the `$utilpack-border-sizes` map.

The following options/direction are available.

- `border`
- `border-block-start`
- `border-block-end`
- `border-inline-start`
- `border-inline-end`

> Each option is using the writing direction.
> in LTR `border-inline-start` is the same as `border-left`.

It also has the following options available:
- Responsive classes
