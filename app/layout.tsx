import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { CartProvider } from "@/lib/cart-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mueblería",
  description:
    "Especialistas en diseño, fabricación, restauración y venta de muebles a medida en Loja, Ecuador. Calidad, estilo y atención personalizada para tu hogar y oficina.",
  keywords: "muebles, mueblería, diseño de interiores, salas, comedores, dormitorios, oficina, Loja, Ecuador, fabricación, restauración, asesoría, decoración",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          <ChatWidget />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
