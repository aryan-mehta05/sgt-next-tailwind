import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import Favicon from "@/app/favicon.ico";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SGT Practice",
  description: "A Next.js 13 Meta Threads Application by Aryan Mehta",
  icons: [{ rel: 'icon', url: Favicon.src }]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={inter.className}>

          <main className='flex flex-row'>
            {children}
          </main>

        </body>
      </html>
    </ClerkProvider>
  );
};