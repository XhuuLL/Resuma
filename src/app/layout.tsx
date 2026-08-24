import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import {
  fontLato,
  fontLora,
  fontMerriweather,
  fontOpenSans,
  fontPlayfairDisplay,
  fontRoboto,
} from "@/app/fonts";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://resuma.vercel.app"),
  title: "Resuma | Editor CV",
  description:
    "Editor CV sumber terbuka dan gratis. Tulis sekali, pratinjau langsung, ekspor ke PDF — tanpa perlu akun",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Resuma | Editor CV",
    description:
      "Editor CV sumber terbuka dan gratis. Tulis sekali, pratinjau langsung, ekspor ke PDF — tanpa perlu akun",
    url: "/",
    siteName: "Resuma | Editor CV",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Resuma | Editor CV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resuma | Editor CV",
    description:
      "Editor CV sumber terbuka dan gratis. Tulis sekali, pratinjau langsung, ekspor ke PDF — tanpa perlu akun",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        inter.variable,
        geistMono.variable,
        fontLato.variable,
        fontOpenSans.variable,
        fontRoboto.variable,
        fontMerriweather.variable,
        fontPlayfairDisplay.variable,
        fontLora.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
