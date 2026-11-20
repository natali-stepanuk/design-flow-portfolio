import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import portrait from "@/assets/portrait.png";
import { Portrait } from "./Portrait";

const docs = `
Фото автора на першому екрані. Фото з прозорим фоном лежить прямо на \`canvas\`, без картки, підкладки, рамки, тіні й заокруглення. Нижній край плавно розчиняється у фон, тож фото «виростає» зі сторінки.

## Параметри

| Параметр | Значення | За замовчуванням | Що робить |
|---|---|---|---|
| \`src\` | імпортована картинка | немає | Фото з прозорим фоном із теки \`assets\` |
| \`alt\` | текст | немає | Опис фото для скрінрідера |
| \`mirrored\` | \`true\`, \`false\` | \`false\` | Віддзеркалює фото по горизонталі (файл не змінюється) |
| \`priority\` | \`true\`, \`false\` | \`false\` | Пріоритетне завантаження; \`true\` для першого екрана |

## Варіанти

Один вигляд. Ширина: на телефоні на всю ширину колонки, на великих екранах не більше \`max-w-portrait\` (560 px). Висота йде за пропорціями фото, його не обрізано.

## Розчинення знизу

Нижня частина фото плавно стає прозорою. Де саме починається розчинення, задає токен \`--portrait-fade-from\` (зараз 65% висоти). Це маска, а не колір, тож фото працює на будь-якому фоні сторінки.

## Токени

- Розмір: \`--container-portrait\` (клас \`max-w-portrait\`).
- Розчинення: \`--portrait-fade-from\`.
- Кольорів компонент не використовує: фон — це \`canvas\` сторінки.

## Коли використовувати

- Один раз на першому екрані. Не клади фото на кольорову плитку й не додавай рамку чи тінь.
- Фото має бути з прозорим фоном і вищим за ширину (близько 2:3), інакше розчинення виглядатиме інакше.

## Як брати в код

\`\`\`tsx
import portrait from "@/assets/portrait.png";
import { Portrait } from "@/components/Portrait/Portrait";

<Portrait src={portrait} alt="Наталія Рашевська з ноутбуком" mirrored priority />
\`\`\`
`;

const meta = {
  title: "Components/Portrait",
  component: Portrait,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: docs } },
  },
  argTypes: {
    alt: { control: "text" },
    mirrored: { control: "boolean" },
    priority: { control: "boolean" },
    src: { control: false },
  },
  args: {
    src: portrait,
    alt: "Наталія Рашевська з ноутбуком",
    mirrored: true,
    priority: false,
  },
} satisfies Meta<typeof Portrait>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
