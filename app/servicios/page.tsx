'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { HeroSection } from '@/components/hero-section';
import { PencilRuler, Brush, Home, Truck, PiggyBank, Users } from 'lucide-react';

// Servicios principales
const servicios = [
  { id: "diseno", titulo: "Diseño y Fabricación Personalizada", icono: "/images/1.jpg", descripcion: "Creamos muebles únicos y a medida para cada espacio de tu hogar u oficina." },
  { id: "restauracion", titulo: "Restauración y Mantenimiento de Muebles", icono: "/images/2.jpg", descripcion: "Devolvemos la vida y funcionalidad a tus muebles favoritos con técnicas profesionales." },
  { id: "asesoria", titulo: "Asesoría y Proyectos de Interiorismo", icono: "/images/3.jpg", descripcion: "Te ayudamos a elegir, combinar y ubicar tus muebles para lograr ambientes armoniosos y funcionales." },
  { id: "tendencias", titulo: "Tendencias y Decoración", icono: "/images/4.jpg", descripcion: "Descubre lo último en estilos, materiales y colores para tu mobiliario." },
  { id: "accesorios", titulo: "Accesorios y Complementos", icono: "/images/5.jpg", descripcion: "Detalles que realzan y personalizan cada ambiente: lámparas, espejos, alfombras, cojines." },
];

// Ofertas destacadas
const ofertas = [
  { id: 1, nombre: "Sofá Seccional Moderno", imagen: "/images/1.jpg", precio: 499, descripcion: "Comodidad y estilo para tu sala." },
  { id: 2, nombre: "Comedor Extensible", imagen: "/images/2.jpg", precio: 799, descripcion: "Ideal para reuniones familiares y espacios versátiles." },
  { id: 3, nombre: "Cama Queen con Almacenamiento", imagen: "/images/3.jpg", precio: 599, descripcion: "Funcionalidad y diseño para tu dormitorio." },
  { id: 4, nombre: "Escritorio Ergonómico", imagen: "/images/4.jpg", precio: 399, descripcion: "Productividad y confort en tu oficina en casa." },
];

// Categorías de productos
const categorias1 = [
  { id: 1, nombre: "Salas y Sofás", imagen: "/images/1.jpg", descripcion: "Comodidad y diseño para tu espacio de encuentro." },
  { id: 2, nombre: "Comedores", imagen: "/images/2.jpg", descripcion: "Muebles que reúnen a la familia y amigos." },
  { id: 3, nombre: "Dormitorios", imagen: "/images/3.jpg", descripcion: "Camas, cómodas y mesas de noche para tu descanso." },
  { id: 4, nombre: "Oficina", imagen: "/images/4.jpg", descripcion: "Escritorios, sillas y estanterías para tu espacio de trabajo." },
];
const categorias2 = [
  { id: 1, nombre: "Exterior y Terraza", imagen: "/images/5.jpg", descripcion: "Muebles resistentes y elegantes para exteriores." },
  { id: 2, nombre: "Accesorios y Decoración", imagen: "/images/6.jpg", descripcion: "Lámparas, espejos, alfombras y más para complementar tu ambiente." },
];

const heroPinteres = [
  '/images/cocinalujo_Pinteres.webp',
  '/images/encimera_Pinteres.webp',
  '/images/cocina_Pinteres.webp',
  '/images/lavamanos_Pinteres.webp',
  '/images/meson_Pinteres.webp',
  '/images/grifococina_Pinteres.webp',
];

export default function ServicesPage() {
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroPinteres.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // Autoplay para el carrusel de ofertas
  const ofertasApiRef = useRef<CarouselApi | null>(null)
  useEffect(() => {
    const interval = setInterval(() => {
      if (ofertasApiRef.current) {
        ofertasApiRef.current.scrollNext()
      }
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-white">
      {/* HERO PRINCIPAL */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center relative" style={{ backgroundImage: "url('/images/Portada.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">Transformamos tus Ideas en Mobiliario Excepcional</h1>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow">En Mueblería, cada servicio está diseñado para crear, restaurar y perfeccionar tus espacios.</p>
          <Button className="bg-muebleria-accent text-muebleria-text font-bold px-10 py-4 rounded-full text-base shadow-lg">Solicita una Consulta</Button>
        </div>
      </section>

      {/* SERVICIOS PRINCIPALES */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-12 text-center">Nuestros Servicios Principales</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Diseño y Fabricación Personalizada */}
            <div className="flex flex-col items-center w-64 bg-white rounded-xl shadow p-6">
              <div className="w-16 h-16 rounded-full bg-muebleria-accent flex items-center justify-center mb-4">
                <PencilRuler className="w-8 h-8 text-muebleria-text" />
              </div>
              <h3 className="font-bold text-lg text-muebleria-text mb-2 text-center">Diseño y Fabricación Personalizada</h3>
              <p className="text-gray-600 text-center text-sm">Creamos muebles únicos que se ajustan perfectamente a tus medidas, estilo y necesidades. Desde el concepto inicial hasta la pieza final, cada detalle es cuidadosamente elaborado por nuestros expertos.</p>
            </div>
            {/* Restauración y Mantenimiento de Muebles */}
            <div className="flex flex-col items-center w-64 bg-white rounded-xl shadow p-6">
              <div className="w-16 h-16 rounded-full bg-muebleria-accent flex items-center justify-center mb-4">
                <Brush className="w-8 h-8 text-muebleria-text" />
              </div>
              <h3 className="font-bold text-lg text-muebleria-text mb-2 text-center">Restauración y Mantenimiento de Muebles</h3>
              <p className="text-gray-600 text-center text-sm">Devolvemos la vida a tus muebles favoritos. Nuestro equipo restaura, repara, retapiza y da acabados, asegurando que tus piezas conserven su belleza y funcionalidad por más tiempo.</p>
            </div>
            {/* Asesoría y Proyectos de Interiorismo */}
            <div className="flex flex-col items-center w-64 bg-white rounded-xl shadow p-6">
              <div className="w-16 h-16 rounded-full bg-muebleria-accent flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-muebleria-text" />
              </div>
              <h3 className="font-bold text-lg text-muebleria-text mb-2 text-center">Asesoría y Proyectos de Interiorismo</h3>
              <p className="text-gray-600 text-center text-sm">Te guiamos en la elección del mobiliario ideal y la optimización de tus espacios. Ofrecemos soluciones integrales para hogares y oficinas, garantizando ambientes armoniosos y funcionales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALOR AÑADIDO */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-12 text-center">Valor Añadido a tu Proyecto</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Entrega y Ensamblaje Profesional */}
            <div className="flex flex-col items-center w-64 bg-gray-50 rounded-xl shadow p-6">
              <div className="w-16 h-16 rounded-full bg-muebleria-accent flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-muebleria-text" />
              </div>
              <h3 className="font-bold text-lg text-muebleria-text mb-2 text-center">Entrega y Ensamblaje Profesional</h3>
              <p className="text-gray-600 text-center text-sm">Nos encargamos del transporte seguro de tus muebles hasta tu hogar u oficina y de su ensamblaje experto, garantizando una instalación perfecta sin preocupaciones.</p>
            </div>
            {/* Opciones de Financiamiento */}
            <div className="flex flex-col items-center w-64 bg-gray-50 rounded-xl shadow p-6">
              <div className="w-16 h-16 rounded-full bg-muebleria-accent flex items-center justify-center mb-4">
                <PiggyBank className="w-8 h-8 text-muebleria-text" />
              </div>
              <h3 className="font-bold text-lg text-muebleria-text mb-2 text-center">Opciones de Financiamiento</h3>
              <p className="text-gray-600 text-center text-sm">Ofrecemos diversas facilidades de pago y opciones de financiamiento para que puedas hacer realidad tus proyectos de mobiliario sin comprometer tu presupuesto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REMODELA TU ESPACIO */}
      <section className="w-full py-16 bg-muebleria-accent">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-muebleria-text mb-4">Transforma tu Hogar con Mueblería</h2>
            <p className="text-lg text-muebleria-text mb-6">Descubre cómo nuestros servicios de diseño y fabricación personalizada pueden renovar cada rincón de tu hogar. ¡Hacemos realidad tus ideas!</p>
            <Button className="bg-muebleria-text text-muebleria-accent font-bold px-6 py-3" asChild>
              <a href="https://wa.me/593986223966" target="_blank" rel="noopener noreferrer">Agenda una Consulta Gratuita</a>
            </Button>
          </div>
          <div className="flex-1 min-w-[220px] max-w-md flex justify-center">
            <Home className="w-40 h-40 text-muebleria-text opacity-30" />
          </div>
        </div>
      </section>
    </div>
  )
}
