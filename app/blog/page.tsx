"use client";
import React, { useState } from "react";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const articulos = [
  {
    titulo: "Cómo elegir el sofá perfecto para tu sala: Guía completa",
    descripcion: "Consejos prácticos para seleccionar el sofá ideal según tu espacio, estilo y necesidades familiares. Descubre la clave del confort y el diseño.",
    imagen: "/images/1.jpg",
    slug: "sofa-perfecto-sala",
    categoria: "Diseño de Interiores",
    leidos: 210,
  },
  {
    titulo: "Tendencias en comedores para el 2025: Lo que se viene",
    descripcion: "Explora los estilos, materiales y colores que marcarán la pauta en el mobiliario de comedor este año. ¡Inspírate para tu próximo proyecto!",
    imagen: "/images/2.jpg",
    slug: "tendencias-comedores-2025",
    categoria: "Tendencias",
    leidos: 180,
  },
  {
    titulo: "Maximizando el espacio: Soluciones inteligentes para departamentos pequeños",
    descripcion: "Ideas innovadoras y muebles multifuncionales para aprovechar cada metro cuadrado de tu hogar sin sacrificar el estilo.",
    imagen: "/images/3.jpg",
    slug: "maximizando-espacio-pequeno",
    categoria: "Consejos de Muebles",
    leidos: 160,
  },
  {
    titulo: "Cómo mantener tus muebles de madera como nuevos: Guía de cuidados",
    descripcion: "Prácticas sencillas y productos recomendados para proteger y prolongar la vida de tus muebles de madera y mantener su belleza.",
    imagen: "/images/4.jpg",
    slug: "cuidados-muebles-madera",
    categoria: "Cuidado y Mantenimiento",
    leidos: 140,
  },
  {
    titulo: "Creando tu santuario: Claves para un dormitorio relajante",
    descripcion: "Consejos de diseño y mobiliario para transformar tu habitación en un oasis de calma y descanso, fomentando un sueño reparador.",
    imagen: "/images/5.jpg",
    slug: "dormitorio-relajante",
    categoria: "Espacios",
    leidos: 120,
  },
  {
    titulo: "Guía de telas para tapicería: Elige la ideal para tu sofá",
    descripcion: "Conoce los tipos de telas, sus ventajas, durabilidad y cómo elegir la mejor opción para la tapicería de tus muebles.",
    imagen: "/images/6.jpg",
    slug: "guia-telas-tapiceria",
    categoria: "Materiales",
    leidos: 100,
  },
];

const categorias = [
  "Todo",
  "Diseño de Interiores",
  "Consejos de Muebles",
  "Tendencias",
  "Cuidado y Mantenimiento",
  "Espacios",
  "Materiales",
];

const masLeidos = [
  "Cómo elegir el sofá perfecto para tu sala",
  "Tendencias en comedores para el 2025",
  "Maximizando el espacio en departamentos pequeños",
  "Guía para el cuidado de tus muebles de madera",
];

export default function BlogPage() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todo");
  const [pagina, setPagina] = useState(0);
  const porPagina = 4;
  const isMobile = useIsMobile();

  const articulosFiltrados = articulos.filter((art) => {
    const coincideCategoria = categoria === "Todo" || art.categoria === categoria;
    const coincideBusqueda =
      art.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      art.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  const totalPaginas = Math.ceil(articulosFiltrados.length / porPagina);
  const articulosPagina = articulosFiltrados.slice(pagina * porPagina, pagina * porPagina + porPagina);

  // Si cambia el filtro o búsqueda, vuelve a la primera página
  React.useEffect(() => { setPagina(0); }, [categoria, busqueda]);

  return (
    <main className="max-w-6xl mx-auto py-12 px-4 min-h-screen flex flex-col">
      <h1 className="text-4xl font-bold text-muebleria-text mb-2">Nuestro Blog</h1>
      {isMobile ? (
        <h2 className="text-base text-muebleria-text mb-8">Ideas y consejos para tu espacio.</h2>
      ) : (
        <h2 className="text-xl text-muebleria-text mb-8">Novedades, consejos y tendencias para inspirar tu hogar y oficina con Mueblería.</h2>
      )}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Listado vertical de artículos */}
        <section className="flex-1">
          <div className="flex flex-col gap-8">
            {articulosPagina.length === 0 ? (
              <p className="text-gray-500">No se encontraron artículos.</p>
            ) : (
              articulosPagina.map(art => (
                <div key={art.slug} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                  <img src={art.imagen} alt={art.titulo} className="rounded-t-lg h-64 w-full object-cover" />
                  <div className="p-6 flex flex-col">
                    <span className="text-xs text-muebleria-accent font-semibold mb-1">{art.categoria}</span>
                    <h3 className="text-2xl font-bold text-muebleria-text mb-2">{art.titulo}</h3>
                    <p className="text-gray-700 mb-4 flex-1">{art.descripcion}</p>
                    <a href={`/blog/${art.slug}`} className="text-muebleria-accent font-semibold hover:underline mt-auto">Leer artículo</a>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* Paginación */}
          {totalPaginas > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setPagina(p => Math.max(0, p - 1))}
                disabled={pagina === 0}
                className={`p-2 rounded-full border ${pagina === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-muebleria-accent/20'}`}
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="text-muebleria-text font-medium">Página {pagina + 1} de {totalPaginas}</span>
              <button
                onClick={() => setPagina(p => Math.min(totalPaginas - 1, p + 1))}
                disabled={pagina === totalPaginas - 1}
                className={`p-2 rounded-full border ${pagina === totalPaginas - 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-muebleria-accent/20'}`}
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </section>
        {/* Sidebar: buscador, filtros y más leídos */}
        <aside className="w-full md:w-80 flex-shrink-0">
          <div className="bg-muebleria-accent/20 rounded-lg p-4 mb-8">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-muebleria-accent text-muebleria-text"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {categorias.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  className={`px-4 py-2 rounded-full border transition-colors whitespace-nowrap font-medium ${categoria === cat ? "bg-muebleria-accent text-muebleria-text border-muebleria-accent" : "bg-white text-muebleria-text border-gray-200"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <h3 className="text-lg font-bold text-muebleria-text mb-4">Más Leídos</h3>
            <ul className="space-y-3">
              {masLeidos.map((titulo, idx) => (
                <li key={idx}>
                  <span className="text-black font-medium">{titulo}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
} 