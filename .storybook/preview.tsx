import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";
import { inter, manrope } from "../src/app/fonts";

// Документація (MDX) не проходить через декоратори. Токени --font-body/--font-heading
// оголошені на :root, тож змінні шрифтів ставимо на <html>, як це робить layout сайту.
if (typeof document !== "undefined") {
  document.documentElement.classList.add(inter.variable, manrope.variable);
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        className={`${inter.variable} ${manrope.variable} bg-canvas font-body text-ink`}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
