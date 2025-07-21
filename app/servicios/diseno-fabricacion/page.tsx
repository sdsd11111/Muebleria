"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Ruler, Layers, Hammer, Truck, Users, Star } from "lucide-react";

export default function DisenoFabricacionPage() {
  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/2.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">Diseño y Fabricación Personalizada</h1>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow">Tus ideas toman forma: Creamos el mobiliario perfecto para cada rincón.</p>
          <Button className="bg-muebleria-accent text-muebleria-text font-bold px-10 py-4 rounded-full text-base shadow-lg">Solicitar Diseño Personalizado</Button>
        </div>
      </section>

      {/* INTRODUCCIÓN Y BENEFICIOS */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-6 text-center">Tu Visión, Nuestra Creación</h2>
          <p className="text-lg text-muebleria-text mb-10 text-center">En Mueblería, entendemos que cada espacio es único y merece mobiliario que refleje tu estilo y satisfaga tus necesidades específicas. Nuestro servicio de Diseño y Fabricación Personalizada te permite ser el cocreador de tus muebles soñados, garantizando piezas exclusivas que se ajustan a la perfección.</p>
          <div className="flex flex-wrap justify-center gap-8 mb-4">
            <div className="flex flex-col items-center w-48">
              <CheckCircle className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1">Unicidad</span>
              <span className="text-gray-600 text-center text-sm">Muebles exclusivos y originales.</span>
            </div>
            <div className="flex flex-col items-center w-48">
              <Layers className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1">Funcionalidad</span>
              <span className="text-gray-600 text-center text-sm">Optimizamos cada detalle para tu uso.</span>
            </div>
            <div className="flex flex-col items-center w-48">
              <Star className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1">Calidad</span>
              <span className="text-gray-600 text-center text-sm">Materiales premium y acabados impecables.</span>
            </div>
            <div className="flex flex-col items-center w-48">
              <Ruler className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1">Ajuste Perfecto</span>
              <span className="text-gray-600 text-center text-sm">Diseños a medida para cualquier espacio.</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO DE DISEÑO */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-12 text-center">Así Creamos tus Muebles Soñados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
              <span className="text-muebleria-accent font-bold text-2xl mb-2">1</span>
              <Users className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1 text-center">Consulta Inicial y Conceptualización</span>
              <span className="text-gray-600 text-center text-sm">Nos reunimos contigo para entender tus ideas, preferencias estéticas y requisitos funcionales. Desde croquis iniciales hasta renders 3D, visualizamos juntos cada detalle.</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
              <span className="text-muebleria-accent font-bold text-2xl mb-2">2</span>
              <Layers className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1 text-center">Selección de Materiales y Acabados</span>
              <span className="text-gray-600 text-center text-sm">Te asesoramos en la elección de las mejores maderas, herrajes, tapizados y acabados, asegurando durabilidad, belleza y armonía con tu ambiente.</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
              <span className="text-muebleria-accent font-bold text-2xl mb-2">3</span>
              <Hammer className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1 text-center">Fabricación Artesanal</span>
              <span className="text-gray-600 text-center text-sm">Nuestros expertos artesanos transforman tus diseños en realidad, utilizando técnicas tradicionales y modernas para construir muebles robustos y con acabados impecables.</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
              <span className="text-muebleria-accent font-bold text-2xl mb-2">4</span>
              <Truck className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1 text-center">Entrega e Instalación</span>
              <span className="text-gray-600 text-center text-sm">Nos encargamos del transporte seguro de tus muebles y de su ensamblaje experto en tu hogar u oficina, garantizando una instalación perfecta y sin preocupaciones.</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA DE PROYECTOS */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-12 text-center">Proyectos Destacados de Diseño Personalizado</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="relative w-full h-56 mb-3">
                <Image src="/images/1.jpg" alt="Cocina personalizada" fill className="object-cover rounded-xl" />
              </div>
              <span className="font-bold text-muebleria-text">Cocina con isla personalizada</span>
              <span className="text-gray-600 text-sm text-center">Diseño a medida para optimizar espacio y funcionalidad.</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full h-56 mb-3">
                <Image src="/images/2.jpg" alt="Mueble de TV empotrado" fill className="object-cover rounded-xl" />
              </div>
              <span className="font-bold text-muebleria-text">Mueble de TV empotrado</span>
              <span className="text-gray-600 text-sm text-center">Solución personalizada para sala moderna.</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full h-56 mb-3">
                <Image src="/images/3.jpg" alt="Vestidor a medida" fill className="object-cover rounded-xl" />
              </div>
              <span className="font-bold text-muebleria-text">Vestidor a medida</span>
              <span className="text-gray-600 text-sm text-center">Aprovechamiento total del espacio y acabados premium.</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-12 text-center">Lo que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <Users className="w-10 h-10 text-muebleria-accent mb-2" />
              <p className="text-gray-700 text-center mb-2">“El equipo de Mueblería entendió exactamente lo que quería y el resultado superó mis expectativas. ¡Mi cocina es única!”</p>
              <span className="font-bold text-muebleria-text">Ana Rodríguez</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <Users className="w-10 h-10 text-muebleria-accent mb-2" />
              <p className="text-gray-700 text-center mb-2">“Excelente calidad y atención personalizada. Recomiendo totalmente el servicio de diseño a medida.”</p>
              <span className="font-bold text-muebleria-text">Carlos Mendoza</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full py-16 bg-muebleria-accent">
        <div className="container mx-auto flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-4">¿Listo para Diseñar tu Mueble Ideal?</h3>
          <p className="text-lg text-muebleria-text mb-6 max-w-2xl">Contáctanos hoy mismo y comienza a transformar tus espacios con piezas únicas y a tu medida.</p>
          <Button className="bg-muebleria-text text-muebleria-accent font-bold px-8 py-3">Agenda una Consulta Gratuita</Button>
        </div>
      </section>
    </div>
  );
} 