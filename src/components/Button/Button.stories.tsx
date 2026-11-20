import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const docs = `
Кнопка для основних дій на сторінці: «Написати мені», «Надіслати», «Відкрити проєкт». Має два варіанти, два розміри і чотири стани. Вимкнена кнопка лишається у фокусі клавіатури й може мати пояснення під собою.

## Параметри

| Параметр | Значення | За замовчуванням | Що робить |
|---|---|---|---|
| \`variant\` | \`primary\`, \`secondary\` | \`primary\` | Вигляд кнопки |
| \`size\` | \`md\`, \`lg\` | \`md\` | Розмір |
| \`disabled\` | \`true\`, \`false\` | \`false\` | Вимикає кнопку (через \`aria-disabled\`) |
| \`disabledReason\` | текст | немає | Пояснення під вимкненою кнопкою |
| \`children\` | текст | немає | Напис на кнопці |
| \`onClick\`, \`type\` та інші | як у \`<button>\` | \`type="button"\` | Звичайні властивості кнопки |

## Варіанти

- **primary**: заливка \`accent\`, текст \`on-accent\`, межа \`accent-text\`. Контраст тексту на заливці 5,64:1 (мінімум 4,5:1). Для головної дії на екрані.
- **secondary**: без заливки, межа \`ink-muted\` (контраст з фоном 7,08:1, мінімум 3:1), текст \`ink-muted\`. Для другорядних дій поруч з основною.

## Розміри

- **md**: звичайний, відступи \`px-6 py-3\`.
- **lg**: великий, відступи \`px-8 py-4\`.

Обидва розміри вищі за 44 px, тож сенсорна ціль достатня. Кути завжди \`rounded-control\`, текст \`text-button\`.

## Стани

- **default**: спокій.
- **hover**: primary світлішає (\`accent\` з прозорістю) і підкреслюється; secondary отримує заливку \`surface\` і підкреслення.
- **focus** (з клавіатури, Tab): контур \`focus-ring\` завтовшки 3 px з відступом 2 px, контраст з фоном не менше 3:1.
- **disabled**: заливка \`surface\`, текст \`ink-muted\`, межа \`line\`, курсор «заборонено». Кнопка не спрацьовує на клік, але лишається у фокусі. Пояснення під нею з'єднане з кнопкою через \`aria-describedby\`.

## Токени

- Кольори: \`accent\`, \`accent-text\`, \`on-accent\`, \`ink-muted\`, \`surface\`, \`line\`, \`focus-ring\`.
- Текст: \`text-button\`, шрифт \`font-body\`; пояснення: \`text-card-caption\`.
- Радіус: \`rounded-control\`.
- Відступи: числа 2, 3, 4, 6, 8 (\`py-3\`, \`px-6\`, \`gap-2\` тощо).

## Коли використовувати

- Дія на сторінці: надіслати, написати, відкрити. Одна \`primary\` на екран, \`secondary\` поруч як альтернатива.
- Вимикай кнопку лише з поясненням у \`disabledReason\`: користувач має зрозуміти, що зробити, щоб вона стала активною.
- Не використовуй для переходів між сторінками, там потрібне посилання (\`<a>\`).
- Не став кілька \`primary\` в одному місці.

## Як брати в код

\`\`\`tsx
import { Button } from "@/components/Button/Button";

<Button>Написати мені</Button>

<Button variant="secondary" size="lg">Дивитись проєкти</Button>

<Button disabled disabledReason="Заповніть форму, щоб надіслати.">
  Надіслати
</Button>
\`\`\`
`;

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: docs } },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["md", "lg"] },
    disabled: { control: "boolean" },
    disabledReason: { control: "text" },
  },
  args: {
    children: "Написати мені",
    variant: "primary",
    size: "md",
    disabled: false,
    disabledReason: "Заповніть форму, щоб надіслати повідомлення.",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
