@AGENTS.md

# Design Flow Portfolio

## Проєкт і стек

Портфоліо UX/UI-дизайнера Design Flow і його дизайн-система.

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4: токени в блоці `@theme` у `src/app/globals.css`, значення й джерела в `docs/tokens.md`
- Storybook 10 (`@storybook/nextjs-vite`, addons `docs` і `a11y`), конфіг у `.storybook/`
- Команди: `npm run dev`, `npm run build`, `npm run lint`, `npm run storybook` (порт 6006), `npm run build-storybook`

## Робота з Git

- Уся робота ведеться в гілці `main`.
- Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт, тому перед пушем питай мене.

## Кольори

Стандартна палітра Tailwind скинута (`--color-*: initial`), працюють лише ці токени
(класи `bg-*`, `text-*`, `border-*`, `outline-*`):

- `canvas` — фон сторінки (`bg-canvas`)
- `surface` — поверхня великих блоків, фон вимкнених кнопок; не для портрета
- `line` — лише декоративні розділювачі й межа вимкненого, не рамки елементів
- `accent` — кораловий: заливка кнопок, декор; не для тексту (`bg-accent`)
- `accent-text` — акцентний текст, рамка primary-кнопки
- `ink` — основний текст (`text-ink`)
- `ink-muted` — меню, підписи, вторинна кнопка (`text-ink-muted`)
- `on-accent` — текст на заливці `accent`
- `danger` — текст помилки й межа поля в стані помилки
- `border-interactive` — рамки інтерактивних елементів і полів
- `focus-ring` — контур фокуса (`outline-focus-ring`)
- `card-1`, `card-2`, `card-3` — кольори папок проєктів (попередні)
- `card-inner-1`, `card-inner-2`, `card-inner-3` — підкладки всередині карток (попередні)
- `logo-deep`, `logo-light`, `logo-glow`, `logo-leaf-light`, `logo-leaf-dark`, `logo-sheen` —
  градієнти й відблиск логотипа, лише для `Logo`

## Типографіка

- Шрифти (`src/app/fonts.ts`, `next/font`): `font-body` (Inter), `font-heading` (Manrope, лише H1).
- Розміри (`--text-*`, разом із висотою рядка, трекінгом і жирністю; стандартні скинуті):
  `text-logo` (24/32), `text-h1` (32/36, телефон), `text-h1-md` (40/46, планшет),
  `text-h1-lg` (52/60, десктоп), `text-greeting` (20/28), `text-lead` (18/28),
  `text-menu` (16/24), `text-button` (16/24), `text-card-title` (18/28), `text-card-caption` (14/20).
- H1 адаптивний: `font-heading text-h1 md:text-h1-md lg:text-h1-lg`.

## Відступи, радіуси й пропорції

- Відступи окремо не оголошені: кроки 8, 12, 16, 24, 32 px — числа 2, 3, 4, 6, 8 (`p-4`, `gap-2`, `px-6`).
- Радіуси (стандартні скинуті): `rounded-control` (8 px, кнопки й поля), `rounded-card` (12 px, картки).
- Пропорції: `aspect-cover` (2/1, обкладинка), `aspect-portrait` (4/5, лише орієнтир для портрета).
  Стандартні `aspect-*` лишаються.
- Лише для сторінок: `max-w-page` (1290 px), `py-section` (128 px).
- Лише для `Portrait`: `max-w-portrait` (560 px), `--portrait-fade-from` (65%).
- Портрет на першому екрані без картки (без підкладки, рамки, тіні, заокруглення), прямо на `canvas`; фото не обрізати.

## Компоненти

Кожен у `src/components/<Назва>/`, поруч `<Назва>.stories.tsx` (одна історія з Controls і docs).

- **Button**: варіанти `primary`, `secondary`; розміри `md`, `lg`; `disabled` + `disabledReason`;
  з `href` стає `<a>` з тим самим виглядом. Стани: default, hover, focus, disabled.
- **FormField**: поле з підписом над ним. Пропси `label`, `error`, `disabled`, `defaultValue` + пропси `<input>`.
  Стани: default, hover, focus, заповнене, помилка, disabled.
- **WorkCard**: картка роботи, уся є посиланням. Пропси `title`, `description`, `cover`, `coverAlt`, `href`.
  Без `cover` порожня підкладка `card-inner-1`. Стани: default, hover, focus.
- **Logo**: логотип; проп `href` (за замовчуванням `#top`); стилі `.logo*` у кінці `globals.css`;
  анімація вимикається при `prefers-reduced-motion`.
- **Portrait**: пропси `src`, `alt`, `mirrored`, `priority`; нижній край розчиняється (`.portrait` у `globals.css`).
- **Navigation**: пропси `items` (`{ id, label, href }`), `activeId`, `label`, `openLabel`, `closeLabel`.
  Стани пункту: default, hover, focus, активний (`aria-current="page"`). Нижче `md` згортається в кнопку;
  відкрите меню закривається Escape, кліком поза меню або вибором пункту.

## Правила

- Кольори, розміри тексту, радіуси й пропорції беруться лише з токенів.
- Класів, яких немає в `@theme` (`text-white`, `bg-black`, `text-sm`, `rounded-lg` тощо), не використовувати.
- Відступи в компонентах лише з кроків 8, 12, 16, 24, 32 px (числа 2, 3, 4, 6, 8 у класах).
  Токени розкладки (`max-w-page`, `py-section`) лише на сторінках.
- Довільні значення в квадратних дужках заборонені: `p-[13px]`, `h-[150px]`, `text-[#...]`.
- Нові кольори не додавати.
- Використовуй готові компоненти замість нових.
- Кожен інтерактивний елемент має стани default, hover, focus, disabled; поле форми ще й помилку.
- Вимкнена кнопка через `aria-disabled` (проп `disabled`) із поясненням (`disabledReason`).
- Картинки лежать у `src/assets` і імпортуються.
- Після змін у компоненті оновлюй його історію й документацію в Storybook.

## Посилання

- План сайту: `docs/plan.html`
- Токени: `docs/tokens.md`
- Storybook: локально `npm run storybook` → http://localhost:6006; опублікованої адреси в проєкті не записано
