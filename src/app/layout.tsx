import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { cormorantGaramond, manrope } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gianetto | Official Website (Preview)",
  description:
    "A working preview of Gianetto's official website. Menu, branch, event, reservation, and private-event content shown here is provisional and pending owner verification.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only rounded-md bg-gianetto-red px-4 py-2 text-sm font-medium text-gianetto-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
