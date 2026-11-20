import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navigation } from "./Navigation";

const items = [
  { id: "about", label: "Про мене", href: "#about" },
  { id: "works", label: "Роботи", href: "#works" },
  { id: "contacts", label: "Контакти", href: "#contacts" },
];

const docs = `
Навігація сайту: пункти меню в шапці. На широкому екрані пункти стоять у рядок, на вузькому меню згортається в кнопку «Меню». Відкрите меню лежить поверх контенту й не зсуває сторінку вниз. Вузький екран дивись через Viewport у тулбарі Storybook (іконка з прямокутником, наприклад Mobile).

## Параметри

| Параметр | Значення | За замовчуванням | Що робить |
|---|---|---|---|
| \`items\` | масив \`{ id, label, href }\` | немає (обов'язковий) | Пункти меню |
| \`activeId\` | \`id\` одного з пунктів | немає | Який пункт активний (поточна сторінка) |
| \`label\` | текст | \`Головне меню\` | Назва меню для скрінрідера |
| \`openLabel\` | текст | \`Меню\` | Напис кнопки на вузькому екрані |
| \`closeLabel\` | текст | \`Закрити\` | Напис кнопки, коли меню відкрите |

## Стани пункту

Мінімалістичний стиль: лише текст, без підкладки, рамки й підкреслення. Перевір стани в історії вживу: наведи мишу (hover), пройди клавішею Tab (focus), перемкни \`activeId\` у Controls (активний).

- **default**: тільки текст \`ink-muted\`.
- **hover**: плавно (200 мс) змінюється лише колір літер на \`accent-text\`. Фон, підкреслення й інші ефекти не додаються.
- **focus** (з клавіатури, Tab): контур \`focus-ring\` завтовшки 3 px з відступом 2 px, контраст з фоном не менше 3:1.
- **активний**: текст \`accent-text\` і під ним по центру маленька кругла крапка кольору \`accent\` (близько 6 px). Крапка позначає лише активний розділ, не hover: при переході до іншого розділу вона переміщується. Окрім кольору й крапки пункт має \`aria-current="page"\`, тож стан передається і скрінрідеру.

## Вузький екран

- Нижче планшетної ширини пункти ховаються, показується кнопка (\`Button\`, варіант \`secondary\`) з \`aria-expanded\`.
- Відкрите меню — панель поверх контенту: фон \`canvas\`, межа \`border-interactive\`, кути \`rounded-card\`. Контент під нею не зсувається.
- Закривається клавішею **Escape** (фокус повертається на кнопку), кліком поза меню або вибором пункту.

## Токени

- Кольори: \`canvas\`, \`ink-muted\`, \`accent-text\`, \`accent\` (крапка), \`border-interactive\`, \`focus-ring\`.
- Текст: \`text-menu\`, шрифт \`font-body\`.
- Радіуси: \`rounded-control\` (контур фокуса пункту), \`rounded-card\` (панель на вузькому екрані й круглість крапки).
- Відступи: числа 2, 4 (\`px-4\`, \`py-4\`, \`gap-2\`, \`p-2\`, \`mt-2\`, \`bottom-2\`).

## Коли використовувати

- Одна навігація на сторінку, у шапці, з 3–5 пунктами.
- Активним став пункт сторінки, на якій користувач зараз.
- Не використовуй для дій (надіслати, відкрити): для цього є \`Button\`.
- Не став кілька навігацій з однаковою назвою на одній сторінці: різним меню дай різні \`label\`.

## Як брати в код

\`\`\`tsx
import { Navigation } from "@/components/Navigation/Navigation";

const items = [
  { id: "about", label: "Про мене", href: "/about" },
  { id: "works", label: "Роботи", href: "/works" },
  { id: "contacts", label: "Контакти", href: "/contacts" },
];

<Navigation items={items} activeId="works" />
\`\`\`
`;

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: docs } },
  },
  argTypes: {
    activeId: {
      control: "select",
      options: ["", ...items.map((item) => item.id)],
      description: "Активний пункт (порожньо: немає активного)",
    },
    items: { control: false },
  },
  args: {
    items,
    activeId: "works",
  },
  render: (args) => (
    <div className="font-body">
      <Navigation {...args} activeId={args.activeId || undefined} />
      <p className="mt-6 text-lead text-ink">
        Контент сторінки під меню. Відкрите меню на вузькому екрані лягає поверх
        цього тексту і не зсуває його вниз.
      </p>
    </div>
  ),
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
