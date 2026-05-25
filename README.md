# Qwik Icons

Latest [lucide](https://lucide.dev) icons as Qwik components 🚀

## Installation

```bash
npm i qwicons
yarn add qwicons
pnpm add qwicons
bun add qwicons
```

## Usage

```tsx
import { LuRocket } from "qwicons";

export const MyComponent = component$(() => {
  // Icon size and color are inherited via CSS ⬇️
  return (
    <div style={{ color: "red", fontSize: "40px" }}>
      <LuRocket />
    </div>
  );
});
```

Icons accept all standard SVG props via `IconProps` (`QwikIntrinsicElements["svg"]`):

```tsx
import { LuRocket, type IconProps } from "qwicons";

<LuRocket width="24px" height="24px" class="my-icon" />
```

## Icon Names

All lucide icons are available with the `Lu` prefix in `CamelCase`:

| Import | Lucide icon |
|--------|-------------|
| `LuRocket` | `rocket` |
| `LuChevronDown` | `chevron-down` |
| `LuCircleCheck` | `circle-check` |

Browse all icons at [lucide.dev/icons](https://lucide.dev/icons).

> **Missing something?** Feel free to [open an issue](https://github.com/xiaofan2406/qwicons/issues/new) 🤝
