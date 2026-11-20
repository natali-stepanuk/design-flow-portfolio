import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import cover from "@/assets/work-cover.svg";
import { WorkCard } from "./WorkCard";

const docs = `
Картка роботи для списку проєктів у портфоліо: обкладинка, назва й короткий опис. Уся картка клікабельна й веде на сторінку роботи.

## Параметри

| Параметр | Значення | За замовчуванням | Що робить |
|---|---|---|---|
| \`title\` | текст | немає | Назва роботи |
| \`description\` | текст | немає | Короткий опис, один-два речення |
| \`cover\` | імпортована картинка | немає | Обкладинка з теки \`assets\`. Необов'язкова: без неї показується порожня підкладка \`card-inner-1\` тієї самої пропорції |
| \`coverAlt\` | текст | порожній | Опис картинки для скрінрідера; порожній, якщо вона суто декоративна |
| \`href\` | адреса | немає | Куди веде картка |

## Варіанти

Один вигляд, без варіантів і розмірів. Ширину задає контейнер, у якому лежить картка.

## Стани

- **default**: підкладка \`surface\`, назва \`ink\`, опис \`ink-muted\`.
- **hover**: підкладка стає \`card-1\`, назва підкреслюється.
- **focus** (з клавіатури, Tab): контур \`focus-ring\` завтовшки 3 px з відступом 2 px, контраст з фоном не менше 3:1.

## Токени

- Кольори: \`surface\`, \`card-1\`, \`card-inner-1\` (підкладка без обкладинки), \`ink\`, \`ink-muted\`, \`focus-ring\`.
- Текст: \`text-card-title\` (назва), \`text-card-caption\` (опис), шрифт \`font-body\`.
- Радіус: \`rounded-card\`.
- Пропорція обкладинки: \`aspect-cover\`.
- Відступи: \`p-4\`, \`gap-2\`.

## Коли використовувати

- Список або сітка робіт: кілька карток однакової ширини.
- Картка веде на сторінку роботи, тож \`href\` обов'язковий.
- Не клади всередину інші кнопки чи посилання: вся картка вже посилання.
- Обкладинка має бути співвідношенням близько 2:1, інакше її обріже \`object-cover\`.

## Як брати в код

\`\`\`tsx
import cover from "@/assets/work-cover.svg";
import { WorkCard } from "@/components/WorkCard/WorkCard";

<WorkCard
  title="Редизайн мобільного застосунку"
  description="Нова навігація й головний екран."
  cover={cover}
  coverAlt="Макет головного екрана застосунку"
  href="/projects/app-redesign"
/>
\`\`\`
`;

const meta = {
  title: "Components/WorkCard",
  component: WorkCard,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: docs } },
  },
  decorators: [
    (Story) => (
      <div className="w-1/2">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    coverAlt: { control: "text" },
    href: { control: "text" },
    cover: { control: false },
  },
  args: {
    title: "Редизайн мобільного застосунку",
    description: "Нова навігація й головний екран для сервісу доставки.",
    cover,
    coverAlt: "Макет головного екрана застосунку",
    href: "#",
  },
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
