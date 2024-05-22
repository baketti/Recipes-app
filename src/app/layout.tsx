import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Healthy Meals",
  description: "Recipes app designed to help you watch and make healthy meals. Coded by Emanuele Giovanni Bachetti - May,2024.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml"></link>
      </head>
      <body className={inter.className} style={{
          overflowX:"hidden", margin:0, padding:0,boxSizing:"border-box"
        }}
      >
        {children}
      </body>
    </html>
  );
}
