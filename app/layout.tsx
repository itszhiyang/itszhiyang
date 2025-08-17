import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Pacifico } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Student Portfolio - University Applications",
  description:
    "Professional student portfolio showcasing A-level achievements and projects for university applications",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${pacifico.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}