// global layout page FOR ALL PAGES INCLUDING AUTH AND ROOT, MAIN ETC FOR ALL
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // CHANGE HERE YOUR GLOBAL FONT , METADATA HERE
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "EVENTIFY",
  description: "HANDLE YOUR EVENTS ....",
  icons: {
    icon: "/assets/images/logo.svg", // LOGO TO BE PUT IN UPPER BROWSER SYMBOL WITH TITLE
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // wrap your app or all pages under one authentication here by the clerk
    <ClerkProvider
    // appearance={{
    //   baseTheme: [neobrutalism],
    // }}
    >
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
