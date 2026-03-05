import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contact App",
  description: "A simple contact form application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="slide-in bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white p-4 shadow-xl sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent hover:scale-110 transition-transform">Contact App</Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-yellow-200 font-medium transition-colors duration-300">Home</Link>
              <Link href="/contact" className="hover:text-yellow-200 font-medium transition-colors duration-300">Contact</Link>
              <Link href="/dashboard" className="hover:text-yellow-200 font-medium transition-colors duration-300">Dashboard</Link>
            </div>
          </div>
        </nav>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
