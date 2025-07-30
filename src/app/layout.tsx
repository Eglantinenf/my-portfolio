import { ThemeProvider } from "@/context/ThemeContext";
import "@/app/globals.css";
// import "@/i18n";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Nastaran Farjami | React Developer Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Nastaran — a React.js developer passionate about building clean, interactive web apps with TypeScript, Node.js, and MongoDB."
        />
      </head>

      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
