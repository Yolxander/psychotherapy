'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Playfair_Display } from 'next/font/google'
import { Menu, X } from 'lucide-react'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
})

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <div className={`min-h-screen ${playfair.className}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#d8dde2] z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-5">
          <Link href="/" className="text-[#4c637b] font-serif">
            <span className="text-2xl font-bold tracking-tight">Guelph Psychotherapy</span>
          </Link>
          
          <div className="flex items-center">
            <nav className="hidden md:flex items-center mr-8">
              {["Home", "Location", "Expertise", "Services", "Fees", "Contact"].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`} 
                  className="text-[#4c637b] text-[18px] font-medium hover:text-[#8090a2] px-3"
                >
                  {item}
                </Link>
              ))}
            </nav>
            <Button 
              className="hidden md:block bg-[#4c637b] text-white hover:bg-[#8090a2] rounded-full px-8"
            >
              BOOK TODAY
            </Button>
            <button
              className="md:hidden text-[#4c637b]"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#d8dde2] z-50 flex flex-col justify-center items-center">
          <button
            className="absolute top-6 right-6 text-[#4c637b]"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col items-center space-y-6">
            {["Home", "Location", "Expertise", "Services", "Fees", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase()}`} 
                className="text-[#4c637b] text-[20px] font-medium hover:text-[#8090a2]"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
            <Button 
              className="mt-4 bg-[#4c637b] text-white hover:bg-[#8090a2] rounded-full px-8 py-2"
              onClick={toggleMenu}
            >
              BOOK TODAY
            </Button>
          </nav>
        </div>
      )}

      {/* Hero Content */}
      <main className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center z-20 md:pt-24 pt-20">
        <div className="max-w-[90rem] mx-auto space-y-6">
          <h1 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight max-w-[95%] mx-auto">
            Counselling and Psychotherapy Services
          </h1>
          <div className="w-32 h-px bg-white mx-auto opacity-70"></div>
          <div className="space-y-3">
            <h3 className="text-white text-[22px] font-semibold">
              We are Here to Support you
            </h3>
            <p className="text-white text-[20px] tracking-wide max-w-4xl mx-auto font-semibold ">
              We will work together in a way that ensures your comfort and satisfaction with therapy.
            </p>
          </div>
          <Button 
            className="mt-8 bg-[#d8dde2] text-[#4c637b] hover:bg-[#8090a2] hover:text-white rounded-full text-lg px-16 py-7 transition-colors duration-300"
          >
            BOOK TODAY
          </Button>
        </div>
      </main>

      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/header.jpg-7AVcFm2pzb69UuDBm7PExeOG7gKa4a.jpeg')`,
        }}
      />

      {/* Overlay for better text readability */}
      <div className="fixed inset-0 bg-black opacity-40 z-10"></div>
    </div>
  )
}