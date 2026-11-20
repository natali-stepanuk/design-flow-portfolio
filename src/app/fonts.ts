import { Inter, Manrope } from "next/font/google";

// Inter — основний шрифт інтерфейсу. Підключається як змінна CSS --font-inter,
// яку токен --font-body у globals.css підхоплює.
export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

// Manrope — лише для заголовка H1 (токен --font-heading).
export const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
});
