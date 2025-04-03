// importação de dependências:
import React from "react";

// importações de contextos:
import { IndiceProvider } from "@/contexts/IndiceContext";

// importação de componentes:
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import SidebarRightClient from "@/components/sidebar-right-client";
import { Toaster } from "@/components/ui/sonner"


// importação de estilos:
import "./globals.css";

// importação de fontes:
import { Inter, Reenie_Beanie } from "next/font/google";
import { Footer } from "@/components/ui/footer";

const inter = Inter({
  variable: "--font-inter",
  weights: ["400"],
  subsets: ["latin"],
});

const reenie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-reenie",
});

export const metadata = {
  title: "Piblio",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicons/p-preto.svg",
        href: "/favicons/p-preto.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicons/p-branco.svg",
        href: "/favicons/p-branco.svg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${reenie.variable} antialiased [--header-height:calc(theme(spacing.14))]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <IndiceProvider>
            <SidebarProvider className="flex flex-col">
              <SiteHeader />
              <div className="flex flex-1">
                <AppSidebar />
                <SidebarInset>
                  {children}
                  <Footer />
                </SidebarInset>
                <SidebarRightClient />
              </div>
            </SidebarProvider>
          </IndiceProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
