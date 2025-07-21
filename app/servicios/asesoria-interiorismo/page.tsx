"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Ruler, User, Home, Layout, Lightbulb, Users, Star, Layers, ArrowRightLeft } from "lucide-react";

export default function AsesoriaInteriorismoPage() {
  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/8.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">Asesoría y Proyectos de Interiorismo</h1>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow">Armonía y funcionalidad en tu espacio: Expertos que guían tus decisiones.</p>
          <Button className="bg-muebleria-accent text-muebleria-text font-bold px-10 py-4 rounded-full text-base shadow-lg">Agenda tu Asesoría</Button>
        </div>
      </section>

      {/* INTRODUCCIÓN Y PROPUESTA DE VALOR */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-6 text-center">Diseñamos el Ambiente Perfecto para Ti</h2>
          <p className="text-lg text-muebleria-text mb-10 text-center">Elegir los muebles adecuados es clave para crear un ambiente que te inspire y se adapte a tu estilo de vida. En Mueblería, vamos más allá de la venta, ofreciéndote un servicio de Asesoría y Proyectos de Interiorismo diseñado para optimizar tus espacios y materializar la atmósfera que deseas.</p>
          <div className="flex flex-wrap justify-center gap-8 mb-4">
            <div className="flex flex-col items-center w-48">
              <Layout className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1">Optimización</span>
              <span className="text-gray-600 text-center text-sm">Aprovecha cada metro cuadrado.</span>
            </div>
            <div className="flex flex-col items-center w-48">
              <User className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1">Estilo</span>
              <span className="text-gray-600 text-center text-sm">Ambientes que reflejan tu personalidad.</span>
            </div>
            <div className="flex flex-col items-center w-48">
              <Home className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1">Funcionalidad</span>
              <span className="text-gray-600 text-center text-sm">Espacios prácticos y cómodos.</span>
            </div>
            <div className="flex flex-col items-center w-48">
              <Layers className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1">Coherencia</span>
              <span className="text-gray-600 text-center text-sm">Armonía en cada detalle.</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO DE ASESORÍA */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-12 text-center">Tu Proyecto, Paso a Paso con Nuestros Expertos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
              <span className="text-muebleria-accent font-bold text-2xl mb-2">1</span>
              <Lightbulb className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1 text-center">Análisis y Conceptualización</span>
              <span className="text-gray-600 text-center text-sm">Evaluamos las dimensiones de tu área, la iluminación, el flujo de movimiento y tus preferencias personales para proponerte las mejores soluciones y un concepto inicial.</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
              <span className="text-muebleria-accent font-bold text-2xl mb-2">2</span>
              <Ruler className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1 text-center">Propuesta de Diseño y Selección de Mobiliario</span>
              <span className="text-gray-600 text-center text-sm">Te ayudamos a definir el estilo decorativo, paleta de colores y a seleccionar piezas de nuestro catálogo o a diseñar muebles a medida que se integren con tu visión y presupuesto.</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
              <span className="text-muebleria-accent font-bold text-2xl mb-2">3</span>
              <Layout className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1 text-center">Planificación y Distribución</span>
              <span className="text-gray-600 text-center text-sm">Creamos planos de distribución y renders que te permiten visualizar cómo quedará tu espacio, optimizando la ubicación de cada mueble y elemento decorativo.</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
              <span className="text-muebleria-accent font-bold text-2xl mb-2">4</span>
              <ArrowRightLeft className="w-10 h-10 text-muebleria-accent mb-2" />
              <span className="font-bold text-muebleria-text mb-1 text-center">Implementación y Acompañamiento</span>
              <span className="text-gray-600 text-center text-sm">Te acompañamos durante la adquisición e instalación de los muebles, asegurando que el proyecto se ejecute según lo planificado hasta el resultado final.</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA DE PROYECTOS */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-12 text-center">Inspiración para tu Espacio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="relative w-full h-56 mb-3">
                <Image src="/images/9.jpg" alt="Sala de estar" fill className="object-cover rounded-xl" />
              </div>
              <span className="font-bold text-muebleria-text">Sala de estar moderna</span>
              <span className="text-gray-600 text-sm text-center">Ambiente cálido y funcional para compartir en familia.</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full h-56 mb-3">
                <Image src="/images/10.jpg" alt="Dormitorio principal" fill className="object-cover rounded-xl" />
              </div>
              <span className="font-bold text-muebleria-text">Dormitorio principal</span>
              <span className="text-gray-600 text-sm text-center">Diseño personalizado para descanso y relax.</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full h-56 mb-3">
                <Image src="/images/11.jpg" alt="Oficina en casa" fill className="object-cover rounded-xl" />
              </div>
              <span className="font-bold text-muebleria-text">Oficina en casa</span>
              <span className="text-gray-600 text-sm text-center">Espacio eficiente y elegante para trabajar desde el hogar.</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-12 text-center">Experiencias de Clientes Satisfechos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <Users className="w-10 h-10 text-muebleria-accent mb-2" />
              <p className="text-gray-700 text-center mb-2">“Gracias a la asesoría de Mueblería, mi sala ahora es mucho más funcional y refleja mi estilo. ¡Recomendados!”</p>
              <span className="font-bold text-muebleria-text">María González</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <Users className="w-10 h-10 text-muebleria-accent mb-2" />
              <p className="text-gray-700 text-center mb-2">“El equipo de interiorismo me ayudó a aprovechar cada rincón de mi departamento. Excelente atención y resultados.”</p>
              <span className="font-bold text-muebleria-text">Ana Rodríguez</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full py-16 bg-muebleria-accent">
        <div className="container mx-auto flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-4">¿Listo para Transformar tu Espacio?</h3>
          <p className="text-lg text-muebleria-text mb-6 max-w-2xl">Agenda una cita con nuestros expertos y comienza a crear el ambiente que siempre soñaste.</p>
          <Button className="bg-muebleria-text text-muebleria-accent font-bold px-8 py-3">Contáctanos para tu Proyecto</Button>
        </div>
      </section>
    </div>
  );
} 