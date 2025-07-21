"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { CartWidget } from "./cart-widget"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { state } = useCart()

  const whatsappUrl = "https://wa.me/593986223966"

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Logo.jpg"
                alt="Mueblería Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span className="font-bold text-muebleria-text block">Mueblería</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-marmolinas-blue transition-colors">
                Inicio
              </Link>
              <div className="relative group">
                <Link href="/servicios" className="text-gray-700 hover:text-marmolinas-blue transition-colors flex items-center">
                  Servicios
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </Link>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50 border border-gray-100 pt-2">
                  <Link href="/servicios/diseno-fabricacion" className="block px-4 py-3 text-muebleria-text hover:bg-muebleria-accent hover:text-muebleria-text transition-colors">
                    Diseño y Fabricación Personalizada
                  </Link>
                  <Link href="/servicios/restauracion-mantenimiento" className="block px-4 py-3 text-muebleria-text hover:bg-muebleria-accent hover:text-muebleria-text transition-colors">
                    Restauración y Mantenimiento de Muebles
                  </Link>
                  <Link href="/servicios/asesoria-interiorismo" className="block px-4 py-3 text-muebleria-text hover:bg-muebleria-accent hover:text-muebleria-text transition-colors">
                    Asesoría y Proyectos de Interiorismo
                  </Link>
                </div>
              </div>
              <Link href="/productos" className="text-gray-700 hover:text-marmolinas-blue transition-colors">
                Productos
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-marmolinas-blue transition-colors">
                Blog
              </Link>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(true)} className="relative">
                <ShoppingCart className="h-5 w-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-marmolinas-yellow text-marmolinas-blue text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {state.items.reduce((sum, item) => sum + item.cantidad, 0)}
                  </span>
                )}
              </Button>

              <Button
                asChild
                className="bg-muebleria-accent text-muebleria-primary hover:bg-muebleria-accent/90 font-semibold"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Cotiza
                </a>
              </Button>

              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-marmolinas-blue transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="/servicios"
                  className="text-gray-700 hover:text-marmolinas-blue transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </Link>
                <div className="pl-4 flex flex-col space-y-1">
                  <Link href="/servicios/diseno-fabricacion" className="block py-2 text-muebleria-text hover:bg-muebleria-accent hover:text-muebleria-text rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Diseño y Fabricación Personalizada
                  </Link>
                  <Link href="/servicios/restauracion-mantenimiento" className="block py-2 text-muebleria-text hover:bg-muebleria-accent hover:text-muebleria-text rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Restauración y Mantenimiento de Muebles
                  </Link>
                  <Link href="/servicios/asesoria-interiorismo" className="block py-2 text-muebleria-text hover:bg-muebleria-accent hover:text-muebleria-text rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Asesoría y Proyectos de Interiorismo
                  </Link>
                </div>
                <Link
                  href="/productos"
                  className="text-gray-700 hover:text-marmolinas-blue transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Productos
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-marmolinas-blue transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Cart Widget */}
      <CartWidget isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
