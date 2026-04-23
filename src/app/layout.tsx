import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StudioProvider } from "@/context/StudioContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kryto Studio | Crafting Digital Excellence",
  description: "High-end Dev & Edit Studio providing Custom Web Development, App Development, and High-End Video Editing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <StudioProvider>
          <SmoothScroll>
            <Navbar />
            <main className="flex-1 w-full flex flex-col">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </StudioProvider>
      </body>
    </html>
  );
}
