import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Logo } from "./Logo";

const docs = `
Логотип «Design Flow — UX/UI • Web Design» для шапки сайту. Перенесений без змін із тренувального портфоліо: знак із градієнтом і відблиском, роздільник, напис і підпис. Усе посилання, веде на початок сторінки.

## Параметри

| Параметр | Значення | За замовчуванням | Що робить |
|---|---|---|---|
| \`href\` | адреса | \`#top\` | Куди веде логотип |

## Варіанти й стани

- Один вигляд, без розмірів і варіантів.
- **hover**: знак трохи повертається й збільшується.
- **анімація**: градієнт знака, відблиск і перелив слова «Flow» рухаються постійно; при системному «зменшити рух» перелив напису вимикається.

## Токени

- Кольори: \`logo-deep\`, \`logo-light\`, \`logo-glow\`, \`logo-leaf-light\`, \`logo-leaf-dark\`, \`logo-sheen\`, \`accent\`, \`ink\`. Токени \`logo-*\` призначені лише для цього компонента.
- Шрифт: \`font-heading\` (Manrope). Розміри знака й напису задані в стилях \`.logo*\` у \`globals.css\`.

## Коли використовувати

- Один раз у шапці кожної сторінки. Не змінюй пропорції, кольори й склад логотипа.

## Як брати в код

\`\`\`tsx
import { Logo } from "@/components/Logo/Logo";

<Logo />
\`\`\`
`;

const meta = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: docs } },
  },
  argTypes: {
    href: { control: "text" },
  },
  args: {
    href: "#top",
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
