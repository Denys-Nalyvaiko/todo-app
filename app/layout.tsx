import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/globals.css";
import ContextProvider from "./providers/ContextProvider";
import GlobalStyleProvider from "./providers/GlobalStyleProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To-do app",
  description: "Application designed to efficient task and project management",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <GlobalStyleProvider>{children}</GlobalStyleProvider>
        </ContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
