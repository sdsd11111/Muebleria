"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sofa, Utensils, BedDouble, Briefcase, Sun, Sparkles, PlusCircle } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

const productos = [
  {
    id: "nordica-esencia",
    nombre: "Colección Nórdica 'Esencia'",
    imagen: "/images/1.jpg",
    descripcion: "Minimalismo y calidez para ambientes modernos. Diseños limpios y funcionales.",
    precio: 499,
    detalles: "Incluye sofá, mesa de centro y estantería. Material: madera de roble, tapizado premium.",
  },
  {
    id: "comedor-majestic",
    nombre: "Comedor 'Majestic'",
    imagen: "/images/2.jpg",
    descripcion: "La elegancia atemporal con un toque contemporáneo. Ideal para reuniones familiares.",
    precio: 799,
    detalles: "Mesa extensible y 6 sillas tapizadas. Acabado en nogal oscuro.",
  },
  {
    id: "cama-cloud",
    nombre: "Cama 'Cloud' con Almacenamiento",
    imagen: "/images/3.jpg",
    descripcion: "Diseño inteligente que maximiza la funcionalidad y el orden en tu dormitorio.",
    precio: 599,
    detalles: "Cama queen con cajones laterales y cabecera acolchada.",
  },
  {
    id: "escritorio-focus",
    nombre: "Escritorio Ergonómico 'Focus'",
    imagen: "/images/4.jpg",
    descripcion: "Un espacio de trabajo que fomenta la productividad y el confort durante largas jornadas.",
    precio: 399,
    detalles: "Altura regulable, superficie amplia y organizador de cables.",
  },
  {
    id: "silla-comfort",
    nombre: "Silla Ejecutiva 'Comfort'",
    imagen: "/images/7.jpg",
    descripcion: "Ergonomía y diseño para largas jornadas de trabajo en oficina o home office.",
    precio: 199,
    detalles: "Respaldo reclinable, soporte lumbar y ruedas silenciosas.",
  },
  {
    id: "mesa-aura",
    nombre: "Mesa de Centro 'Aura'",
    imagen: "/images/8.jpg",
    descripcion: "Centro de sala moderno con espacio de almacenamiento oculto.",
    precio: 249,
    detalles: "Madera maciza, compartimento secreto y acabado mate.",
  },
  {
    id: "librero-versatil",
    nombre: "Librero Modular 'Versátil'",
    imagen: "/images/9.jpg",
    descripcion: "Organiza y decora tu sala u oficina con este librero adaptable a cualquier espacio.",
    precio: 299,
    detalles: "Módulos apilables, fácil de montar y personalizar.",
  },
  {
    id: "tocador-elegance",
    nombre: "Tocador 'Elegance'",
    imagen: "/images/10.jpg",
    descripcion: "Tocador con espejo y cajones, ideal para dormitorios modernos y clásicos.",
    precio: 349,
    detalles: "Espejo LED, 4 cajones y superficie de vidrio templado.",
  },
  {
    id: "mueble-tv-vision",
    nombre: "Mueble TV 'Vision'",
    imagen: "/images/11.jpg",
    descripcion: "Mueble para TV con estantes y espacio para dispositivos multimedia.",
    precio: 399,
    detalles: "Soporta TV hasta 70', puertas corredizas y organizador de cables.",
  },
  {
    id: "armario-classic",
    nombre: "Armario 'Classic'",
    imagen: "/images/12.jpg",
    descripcion: "Armario espacioso con puertas corredizas y acabados premium.",
    precio: 699,
    detalles: "Interior configurable, espejo integrado y cierre suave.",
  },
];

export default function ProductosPage() {
  const [expandida, setExpandida] = useState<string | null>(null);
  const { dispatch } = useCart();

  // Para centrar la última fila si hay 2 cards
  function getGridClasses(idx: number) {
    if (productos.length % 4 === 2 && idx >= productos.length - 2) {
      return "col-span-2 flex justify-center";
    }
    return "";
  }

  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center relative" style={{ backgroundImage: "url('/images/Portada.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">Mueblería</h1>
          <p className="text-lg md:text-2xl text-white mb-2 max-w-2xl mx-auto drop-shadow">Especialistas en diseño, fabricación y venta de muebles a medida en Loja, Ecuador. Creamos soluciones de calidad para tu hogar y oficina, combinando funcionalidad, estilo y la mejor atención personalizada.</p>
          <p className="text-base text-gray-200 mb-8 max-w-xl mx-auto">Calidad, diseño y funcionalidad en cada pieza para transformar tus espacios.</p>
          <Button className="bg-muebleria-accent text-muebleria-text font-bold px-10 py-4 rounded-full text-base shadow-lg mb-2" asChild>
            <a href="#categorias">Explorar Categorías</a>
          </Button>
        </div>
      </section>

      {/* CATEGORÍAS PRINCIPALES */}
      <section id="categorias" className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-12 text-center">Explora Nuestras Categorías de Muebles</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Salas y Sofás */}
            <div className="flex flex-col items-center w-48">
              <div className="w-24 h-24 rounded-full bg-muebleria-accent flex items-center justify-center mb-4">
                <Sofa className="w-12 h-12 text-muebleria-text" />
              </div>
              <h3 className="font-bold text-lg text-muebleria-text mb-2 text-center">Salas y Sofás</h3>
              <p className="text-gray-600 text-center text-sm mb-2">Comodidad y estilo para tu espacio de encuentro. Desde sofás seccionales hasta sillones individuales.</p>
              <Button className="bg-muebleria-accent text-muebleria-text w-full" asChild>
                <a href="#colecciones">Ver Productos</a>
              </Button>
                  </div>
            {/* Comedores */}
            <div className="flex flex-col items-center w-48">
              <div className="w-24 h-24 rounded-full bg-muebleria-accent flex items-center justify-center mb-4">
                <Utensils className="w-12 h-12 text-muebleria-text" />
                    </div>
              <h3 className="font-bold text-lg text-muebleria-text mb-2 text-center">Comedores</h3>
              <p className="text-gray-600 text-center text-sm mb-2">Muebles que reúnen a la familia y amigos en torno a la buena mesa. Sets completos y mesas extensibles.</p>
              <Button className="bg-muebleria-accent text-muebleria-text w-full" asChild>
                <a href="#colecciones">Ver Productos</a>
                    </Button>
            </div>
            {/* Dormitorios */}
            <div className="flex flex-col items-center w-48">
              <div className="w-24 h-24 rounded-full bg-muebleria-accent flex items-center justify-center mb-4">
                <BedDouble className="w-12 h-12 text-muebleria-text" />
              </div>
              <h3 className="font-bold text-lg text-muebleria-text mb-2 text-center">Dormitorios</h3>
              <p className="text-gray-600 text-center text-sm mb-2">Crea tu santuario personal con diseños que invitan al descanso. Camas, cómodas, mesas de noche y más.</p>
              <Button className="bg-muebleria-accent text-muebleria-text w-full" asChild>
                <a href="#colecciones">Ver Productos</a>
              </Button>
                  </div>
            {/* Oficina */}
            <div className="flex flex-col items-center w-48">
              <div className="w-24 h-24 rounded-full bg-muebleria-accent flex items-center justify-center mb-4">
                <Briefcase className="w-12 h-12 text-muebleria-text" />
                    </div>
              <h3 className="font-bold text-lg text-muebleria-text mb-2 text-center">Muebles de Oficina</h3>
              <p className="text-gray-600 text-center text-sm mb-2">Ergonomía y diseño para un ambiente de trabajo productivo. Escritorios, sillas ejecutivas, estanterías.</p>
              <Button className="bg-muebleria-accent text-muebleria-text w-full" asChild>
                <a href="#colecciones">Ver Productos</a>
                    </Button>
            </div>
            {/* Exterior */}
            <div className="flex flex-col items-center w-48">
              <div className="w-24 h-24 rounded-full bg-muebleria-accent flex items-center justify-center mb-4">
                <Sun className="w-12 h-12 text-muebleria-text" />
              </div>
              <h3 className="font-bold text-lg text-muebleria-text mb-2 text-center">Muebles de Exterior</h3>
              <p className="text-gray-600 text-center text-sm mb-2">Diseña tu oasis al aire libre con mobiliario resistente y elegante para terrazas y jardines.</p>
              <Button className="bg-muebleria-accent text-muebleria-text w-full" asChild>
                <a href="#colecciones">Ver Productos</a>
              </Button>
                  </div>
            {/* Accesorios y Decoración */}
            <div className="flex flex-col items-center w-48">
              <div className="w-24 h-24 rounded-full bg-muebleria-accent flex items-center justify-center mb-4">
                <Sparkles className="w-12 h-12 text-muebleria-text" />
                    </div>
              <h3 className="font-bold text-lg text-muebleria-text mb-2 text-center">Accesorios y Decoración</h3>
              <p className="text-gray-600 text-center text-sm mb-2">Detalles que complementan y realzan cada ambiente: lámparas, espejos, alfombras, cojines.</p>
              <Button className="bg-muebleria-accent text-muebleria-text w-full" asChild>
                <a href="#colecciones">Ver Productos</a>
                    </Button>
            </div>
          </div>
                  </div>
      </section>

      {/* COLECCIONES DESTACADAS */}
      <section id="colecciones" className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-12 text-center">Nuestras Colecciones Destacadas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productos.map((prod, idx) => (
              <div key={prod.id} className={`flex flex-col bg-white rounded-xl shadow p-6 items-center relative transition-all duration-300 ${getGridClasses(idx)}`}
                style={expandida === prod.id ? { zIndex: 10, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' } : {}}>
                <div className="relative w-full h-48 mb-4 cursor-pointer" onClick={() => setExpandida(expandida === prod.id ? null : prod.id)}>
                  <Image src={prod.imagen} alt={prod.nombre} fill className="object-cover rounded-xl" />
                    </div>
                <h3 className="font-bold text-lg text-muebleria-text mb-2 text-center">{prod.nombre}</h3>
                <p className="text-gray-600 text-center text-sm mb-2">{prod.descripcion}</p>
                <span className="text-black font-bold text-xl mb-2">Desde ${prod.precio}</span>
                <Button className="bg-muebleria-accent text-muebleria-text w-full mb-2" onClick={() => setExpandida(expandida === prod.id ? null : prod.id)}>
                  {expandida === prod.id ? "Cerrar" : (idx === 0 ? "Ver Colección" : "Ver Detalles")}
                </Button>
                {expandida === prod.id && (
                  <div className="w-full mt-2 p-4 border-t border-gray-200 animate-fade-in">
                    <p className="text-muebleria-text text-sm mb-2"><b>Detalles:</b> {prod.detalles}</p>
                    <Button className="bg-muebleria-text text-muebleria-accent w-full font-bold" onClick={() => dispatch({ type: "ADD_ITEM", payload: { id: prod.id, nombre: prod.nombre, precio: prod.precio, imagen: prod.imagen } })}>
                      Agregar al carrito
                    </Button>
                  </div>
                )}
              </div>
              ))}
            </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full py-16 bg-muebleria-text">
        <div className="container mx-auto flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-accent mb-4">¿No encuentras el Mueble Perfecto?</h2>
          <p className="text-lg text-muebleria-accent mb-6 max-w-2xl">Permítenos diseñar y fabricar una pieza exclusivamente para ti. Explora nuestro servicio de personalización.</p>
          <Button className="bg-muebleria-accent text-muebleria-text font-bold px-8 py-3" asChild>
            <a href="https://wa.me/593986223966" target="_blank" rel="noopener noreferrer">Diseña tu Mueble Soñado</a>
          </Button>
        </div>
      </section>
      </div>
  );
}
