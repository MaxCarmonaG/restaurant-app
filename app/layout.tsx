import type { Metadata } from "next";
import { montserrat, quicksand } from "../fonts";
import "./globals.css";
import MainHeader from "@/components/MainHeader";

export const metadata: Metadata = {
  title: "Restaurant App",
  description: "Restaurant app created with NextJS",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${montserrat.variable} ${quicksand.variable}`}>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
