"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-600 backdrop-blur">
      <div className="container px-10 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              SoftSell
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-white">
          <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
            How It Works
          </Link>
          <Link href="#why-choose-us" className="text-sm font-medium transition-colors hover:text-primary">
            Why Choose Us
          </Link>
          <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          
          <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">Get a Quote</Button>
        </nav>

        <div className="flex md:hidden items-center gap-4">
          
          <button className="flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#how-it-works"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#why-choose-us"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full">Get a Quote</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
