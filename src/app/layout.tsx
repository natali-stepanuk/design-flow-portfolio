import type { Metadata } from "next";
import { inter, manrope } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Наталія Рашевська — UX/UI дизайнерка",
  description: "Портфоліо UX/UI дизайнерки Наталії Рашевської",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uk"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas font-body text-ink">
        {children}
      </body>
    </html>
  );
}
