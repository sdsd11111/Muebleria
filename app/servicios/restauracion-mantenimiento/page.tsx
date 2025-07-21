"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, DollarSign, RefreshCw, Wrench, Paintbrush, Sofa, ShieldCheck, ArrowRightLeft } from "lucide-react";

export default function RestauracionMantenimientoPage() {
  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/4.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">Restauración y Mantenimiento de Muebles</h1>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow">Devuelve la vida a tus piezas más preciadas: Cuidado experto que perdura.</p>
          <Button className="bg-muebleria-accent text-muebleria-text font-bold px-10 py-4 rounded-full text-base shadow-lg">Consultar Servicio de Restauración</Button>
        </div>
      </section>

      {/* INTRODUCCIÓN Y BENEFICIOS */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-6 text-center">Preserva la Historia, Renueva la Belleza</h2>
          <p className="text-lg text-muebleria-text mb-10 text-center">En Mueblería, sabemos que algunos muebles tienen un valor incalculable, ya sea sentimental o estético. Nuestro servicio de Restauración y Mantenimiento está dedicado a preservar la belleza, funcionalidad y esencia de tus piezas, prolongando su vida útil y actualizando su apariencia cuando sea necesario.</p>
          <div className="flex flex-wrap justify-center gap-8 mb-4">
            <div className="flex flex-col items-center w-48">
              <Heart className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1">Valor Sentimental</span>
              <span className="text-gray-600 text-center text-sm">Conserva recuerdos y herencias.</span>
            </div>
            <div className="flex flex-col items-center w-48">
              <Leaf className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1">Sostenibilidad</span>
              <span className="text-gray-600 text-center text-sm">Reutiliza y reduce el impacto ambiental.</span>
            </div>
            <div className="flex flex-col items-center w-48">
              <DollarSign className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1">Ahorro</span>
              <span className="text-gray-600 text-center text-sm">Alternativa económica a comprar nuevo.</span>
            </div>
            <div className="flex flex-col items-center w-48">
              <RefreshCw className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1">Personalización</span>
              <span className="text-gray-600 text-center text-sm">Actualiza el estilo sin perder la esencia.</span>
            </div>
          </div>
        </div>
      </section>

      {/* DETALLE DE SERVICIOS */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-12 text-center">Cuidado Integral para tus Muebles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
              <Wrench className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1 text-center">Reparación Estructural</span>
              <span className="text-gray-600 text-center text-sm">Solucionamos problemas de estabilidad, uniones rotas o piezas faltantes, garantizando la solidez y seguridad de tu mobiliario.</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
              <Paintbrush className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1 text-center">Renovación de Acabados</span>
              <span className="text-gray-600 text-center text-sm">Desde el pulido y barnizado hasta el lacado y la pintura, restauramos la superficie de tus muebles para devolverles su brillo original o darles un nuevo look.</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
              <Sofa className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1 text-center">Retapizado y Relleno</span>
              <span className="text-gray-600 text-center text-sm">Renueva tus sillones, sillas o sofás con nuestra selección de telas y rellenos de alta calidad, combinando confort y diseño moderno o clásico.</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
              <ShieldCheck className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1 text-center">Mantenimiento Preventivo</span>
              <span className="text-gray-600 text-center text-sm">Ofrecemos asesoría y servicios para el cuidado regular de tus muebles, protegiéndolos del deterioro y manteniendo su estado óptimo.</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA ANTES Y DESPUÉS */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-12 text-center">Transformaciones Asombrosas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="relative w-full h-56 mb-3">
                <Image src="/images/5.jpg" alt="Antes y después 1" fill className="object-cover rounded-xl" />
              </div>
              <span className="font-bold text-muebleria-text">Silla restaurada</span>
              <span className="text-gray-600 text-sm text-center">De pieza antigua a protagonista del comedor.</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full h-56 mb-3">
                <Image src="/images/6.jpg" alt="Antes y después 2" fill className="object-cover rounded-xl" />
              </div>
              <span className="font-bold text-muebleria-text">Sofá renovado</span>
              <span className="text-gray-600 text-sm text-center">Nuevo tapizado y estructura reforzada.</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full h-56 mb-3">
                <Image src="/images/7.jpg" alt="Antes y después 3" fill className="object-cover rounded-xl" />
              </div>
              <span className="font-bold text-muebleria-text">Mueble clásico modernizado</span>
              <span className="text-gray-600 text-sm text-center">Acabados y color renovados para un look actual.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full py-16 bg-muebleria-accent">
        <div className="container mx-auto flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-4">¿Tus Muebles Necesitan una Segunda Oportunidad?</h3>
          <p className="text-lg text-muebleria-text mb-6 max-w-2xl">Déjanos evaluarlos sin compromiso y descubre cómo podemos devolverles su esplendor.</p>
          <Button className="bg-muebleria-text text-muebleria-accent font-bold px-8 py-3">Solicitar Evaluación Gratuita</Button>
        </div>
      </section>
    </div>
  );
} 