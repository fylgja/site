### Position

| class    | value                 |
| -------- | --------------------- |
| static   | `position: static;`   |
| relative | `position: relative;` |
| absolute | `position: absolute;` |
| fixed    | `position: fixed;`    |
| sticky   | `position: sticky;`   |

The Utilpack also ship's with the position inset options;

- inset
- top
- right
- bottom
- left
- inset-y
- inset-x

> the inset property still uses the older spec until the newer spec is better supported.

And the following values are available;

| class           | value               |
| --------------- | ------------------- |
| `{PREFIX}`-auto | `{PROPERTY}: auto;` |
| `{PREFIX}`-0    | `{PROPERTY}: 0;`    |
| `{PREFIX}`-50   | `{PROPERTY}: 50%;`  |
| `{PREFIX}`-full | `{PROPERTY}: 100%;` |

To extend this, use the `$utilpack-positions` map.

It also has the following options available:
- Responsive classes
