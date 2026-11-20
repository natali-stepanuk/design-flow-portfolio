import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Наталія Рашевська — UX/UI дизайнерка",
  description: "Портфоліо UX/UI дизайнерки Наталії Рашевської",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
