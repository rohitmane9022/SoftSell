import React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "react-hot-toast"

import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SoftSell - Maximize the Value of Your Unused Software Licenses",
  description:
    "SoftSell helps businesses sell their unused software licenses quickly and at the best market rates. Turn your idle software assets into cash today.",
  keywords: "software resale, license reselling, software asset management, sell software licenses",
  openGraph: {
    title: "SoftSell - Maximize the Value of Your Unused Software Licenses",
    description: "SoftSell helps businesses sell their unused software licenses quickly and at the best market rates.",
    url: "https://softsell.vercel.app",
    siteName: "SoftSell",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SoftSell",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#020817]`}>
        
          <Header />
          {children}
          <Toaster position="top-right" reverseOrder={false} />
          <Footer />
        
      </body>
    </html>
  )
}
