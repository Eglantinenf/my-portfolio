"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import "@/app/globals.css";
import "@/i18n";
import { useTranslation } from "react-i18next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  return (
    <html lang={i18n.language} dir={i18n.language === "fa" ? "rtl" : "ltr"}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
