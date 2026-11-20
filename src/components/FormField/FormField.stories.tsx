import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./FormField";

const docs = `
Текстове поле форми з підписом: «Ім'я», «Email», «Повідомлення». Підпис завжди над полем. Має шість станів, а помилка показується текстом, іконкою і межею, а не самим кольором.

## Параметри

| Параметр | Значення | За замовчуванням | Що робить |
|---|---|---|---|
| \`label\` | текст | немає (обов'язковий) | Підпис над полем |
| \`defaultValue\` | текст | порожньо | Початкове значення; непорожнє дає стан «заповнене» |
| \`error\` | текст | немає | Текст помилки; якщо заданий, поле в стані помилки |
| \`disabled\` | \`true\`, \`false\` | \`false\` | Вимикає поле |
| \`type\`, \`placeholder\`, \`name\`, \`required\` та інші | як у \`<input>\` | \`type="text"\` | Звичайні властивості поля |

## Стани

- **default**: межа \`ink-muted\` (контраст з фоном 7,08:1, мінімум 3:1), фон \`canvas\`.
- **hover**: межа темнішає до \`ink\`.
- **focus** (клік або Tab): контур \`focus-ring\` завтовшки 3 px з відступом 2 px, контраст не менше 3:1.
- **заповнене**: те саме, що default, але з текстом \`ink\`. У Controls задай \`defaultValue\`.
- **помилка**: межа \`danger\`, під полем іконка й текст помилки кольором \`danger\`. Поле має \`aria-invalid\`, текст зв'язаний через \`aria-describedby\`.
- **disabled**: заливка \`surface\`, межа \`line\`, текст \`ink-muted\`, курсор «заборонено», без hover.

## Токени

- Кольори: \`canvas\`, \`ink\`, \`ink-muted\`, \`danger\`, \`line\`, \`surface\`, \`focus-ring\`.
- Текст: \`text-menu\` для підпису й значення, \`text-card-caption\` для помилки, шрифт \`font-body\`.
- Радіус: \`rounded-control\`.
- Відступи: числа 2, 3, 4 (\`gap-2\`, \`px-4\`, \`py-3\`).

## Коли використовувати

- Короткий текстовий ввід у формі: ім'я, email, тема.
- Пиши в помилці, що виправити («Введіть email у форматі name@example.com»), а не лише «Помилка».
- Не прибирай підпис і не заміняй його підказкою всередині поля.
- Не використовуй для довгого тексту (потрібне багаторядкове поле) і для вибору зі списку.

## Як брати в код

\`\`\`tsx
import { FormField } from "@/components/FormField/FormField";

<FormField label="Ім'я" name="name" />

<FormField label="Email" type="email" error="Введіть email у форматі name@example.com" />

<FormField label="Тема" disabled defaultValue="Співпраця" />
\`\`\`
`;

const meta = {
  title: "Components/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: docs } },
  },
  argTypes: {
    label: { control: "text" },
    defaultValue: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Email",
    defaultValue: "",
    error: "",
    disabled: false,
  },
  render: (args) => <FormField key={String(args.defaultValue)} {...args} />,
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
