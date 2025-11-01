import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Montserrat } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NIMMS - Nesodden IM Makerspace",
  description: "Skaperglede, teknologi og fellesskap for ungdom 14–24 år på Nesodden",
  openGraph: {
    title: "NIMMS - Nesodden IM Makerspace",
    description: "Skaperglede, teknologi og fellesskap for ungdom 14–24 år på Nesodden",
    type: "website",
    locale: "nb_NO",
  },
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no" className={`${openSans.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
