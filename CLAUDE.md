@AGENTS.md

# Design Flow Portfolio

## Стек

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Робота з Git

- Уся робота ведеться в гілці `main`.
- Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт, тому перед пушем питай мене.

## Токени

Оголошені в блоці `@theme` у `src/app/globals.css`, значення й джерела — у `docs/tokens.md`.
Стандартні палітра, розміри тексту й радіуси Tailwind скинуті, тож працюють лише наведені назви.
Відступи окремо не оголошені: тільки кроки 8, 12, 16, 24, 32 px (числа 2, 3, 4, 6, 8, наприклад `p-4`).

- **Кольори** (`--color-*`, класи `bg-canvas`, `text-ink` тощо): `canvas`, `surface`, `line`, `accent`, `accent-text`, `ink`, `ink-muted`, `on-accent`, `danger`, `border-interactive`, `focus-ring`, `card-1`, `card-2`, `card-3`, `card-inner-1`, `card-inner-2`, `card-inner-3`.
- **Шрифти** (`--font-*`): `body` (Inter), `heading` (Manrope, лише H1). Підключені через `next/font` у `src/app/fonts.ts`.
- **Текст** (`--text-*`, разом із висотою рядка, трекінгом і жирністю): `logo`, `h1` (телефон), `h1-md` (планшет), `h1-lg` (десктоп), `greeting`, `lead`, `menu`, `button`, `card-title`, `card-caption`.
- **Радіуси** (`--radius-*`): `control` (кнопки й поля, 8 px), `card` (картки, 12 px).
- **Пропорції** (`--aspect-*`): `cover` (2/1), `portrait` (4/5). Стандартні лишаються.
- **Портрет на першому екрані**: розміщується без декоративної картки (без плитки `surface`, підкладки, рамки, тіні й заокруглення) і використовує прозорий фон фотографії прямо на `canvas`. Пропорція `aspect-portrait` (4/5) лише орієнтир; фото не обрізати, якщо це погіршує композицію. Токен `surface` лишається для інших елементів.
- **Лише для сторінок, не для компонентів**: `--container-page` (1290 px, `max-w-page`), `--spacing-section` (128 px, наприклад `py-section`).

## Компоненти

Кожен компонент лежить у `src/components/<Назва>/`, поруч історія `<Назва>.stories.tsx` (одна історія з Controls і docs).

- **Button** (`src/components/Button/Button.tsx`): варіанти `primary`, `secondary`, розміри `md`, `lg`, стан `disabled` з `disabledReason`. Історія: `Components/Button`.
- **FormField** (`src/components/FormField/FormField.tsx`): текстове поле з підписом над ним. Пропси `label`, `error`, `disabled`, `defaultValue` і звичайні пропси `<input>`. Стани: default, hover, focus, заповнене, помилка, disabled. Межа `ink-muted`, помилка `danger`. Історія: `Components/FormField`.

## Правила

Заповнимо далі.

## Посилання

- План сайту: `docs/plan.html`
