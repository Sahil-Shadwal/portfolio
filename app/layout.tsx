import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil Shadwal Portfolio",
  description: "Modern & Minimilistic Developer Portfolio",
};
export { dancingScript };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
