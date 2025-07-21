'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { HeroSection } from '@/components/hero-section';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Head from 'next/head';
import { useIsMobile } from '@/hooks/use-mobile';

// Hero slides y otras imágenes de secciones
const heroSlides = [
  {
    imagen: '/images/1.jpg',
    titulo: 'Muebles a tu Medida para Cada Espacio',
    subtitulo: 'Transforma tu hogar u oficina con Mueblería: diseño, calidad y estilo.',
    cta: 'Cotiza Ahora',
    href: '#contacto',
  },
  {
    imagen: '/images/2.jpg',
    titulo: 'Ambientes Modernos y Elegantes',
    subtitulo: 'Muebles funcionales y personalizados para tu vida diaria.',
    cta: 'Ver Productos',
    href: '/productos',
  },
  {
    imagen: '/images/3.jpg',
    titulo: 'Tendencias en Mueblería',
    subtitulo: 'Descubre lo último en diseño y confort para tu hogar.',
    cta: 'Ver Inspiración',
    href: '/blog',
  },
];

// Promociones
const promociones = [
  { id: 1, titulo: 'Descuento en Sofás Seccionales', descripcion: 'Aprovecha 10% de descuento en tu compra de salas modernas', imagen: '/images/4.jpg', href: '/productos/nordica-esencia' },
  { id: 2, titulo: 'Comedores en Oferta', descripcion: 'Diseños exclusivos para tu comedor a precio especial', imagen: '/images/5.jpg', href: '/productos/comedor-majestic' },
  { id: 3, titulo: 'Dormitorios Personalizados', descripcion: 'Renueva tu dormitorio con 15% de descuento', imagen: '/images/6.jpg', href: '/productos/cama-cloud' },
  { id: 4, titulo: 'Oficinas Modernas', descripcion: 'Muebles de oficina seleccionados a precio especial', imagen: '/images/7.jpg', href: '/productos/escritorio-focus' },
  { id: 5, titulo: 'Sillas y Accesorios', descripcion: 'Llévate 2 y paga 1 en sillas ejecutivas y accesorios', imagen: '/images/8.jpg', href: '/productos/silla-comfort' },
  { id: 6, titulo: 'Decoración y Estilo', descripcion: '20% de descuento en accesorios y decoración', imagen: '/images/9.jpg', href: '/productos/librero-versatil' },
];

// Blog
const blog = [
  {
    id: 1,
    titulo: '¿Cómo elegir el sofá perfecto para tu sala?',
    resumen: 'Consejos prácticos para seleccionar el sofá ideal según tu espacio, estilo y necesidades familiares. Descubre la clave del confort y el diseño.',
    imagen: '/images/10.jpg',
    slug: 'como-elegir-sofa-perfecto',
  },
  {
    id: 2,
    titulo: 'Tendencias en comedores para el 2025: Lo que se viene',
    resumen: 'Explora los estilos, materiales y colores que marcarán la pauta en el mobiliario de comedor este año. ¡Inspírate para tu próximo proyecto!',
    imagen: '/images/11.jpg',
    slug: 'tendencias-comedores-2025',
  },
  {
    id: 3,
    titulo: 'Maximizando el espacio en departamentos pequeños',
    resumen: 'Ideas y tips para aprovechar cada rincón con muebles multifuncionales y soluciones inteligentes.',
    imagen: '/images/12.jpg',
    slug: 'maximizando-espacio-muebles',
  },
  {
    id: 4,
    titulo: 'Guía para el cuidado de tus muebles de madera',
    resumen: 'Aprende cómo mantener y restaurar tus muebles para que luzcan como nuevos por más tiempo.',
    imagen: '/images/1.jpg',
    slug: 'guia-cuidado-muebles-madera',
  },
];

// Showrooms
const showrooms = [
  { id: 1, sucursal: 'Sucursal Centro', empresa: 'Mueblería', direccion: 'Av. Emiliano Ortega 195-05, Loja', imagen: '/images/1.jpg', maps: 'https://goo.gl/maps/...', cotiza: '#contacto' },
  { id: 2, sucursal: 'Sucursal Sur', empresa: 'Mueblería', direccion: 'Av. Loja Sur y Principal, Loja', imagen: '/images/2.jpg', maps: '#', cotiza: '#contacto' },
  { id: 3, sucursal: 'Sucursal Norte', empresa: 'Mueblería', direccion: 'Av. Granito y Mármol, Esq. con Piedra, Loja', imagen: '/images/3.jpg', maps: '#', cotiza: '#contacto' },
];

// Imágenes de alta calidad para el hero
const heroPinteres = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
];

export default function HomePage() {
  const isMobile = useIsMobile();
  return (
    <div className="min-h-screen w-full bg-white">
      <Head>
        <title>Página de Inicio - Mueblería</title>
      </Head>
      {/* SECCIÓN PRINCIPAL */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center relative" style={{ backgroundImage: "url('/images/Portada.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow">Diseñamos y Creamos Tus Muebles Soñados</h1>
          {isMobile ? (
            <p className="text-base text-white mb-8 max-w-xs mx-auto drop-shadow">Muebles a tu medida, sin complicaciones.</p>
          ) : (
            <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow">Transforma cada espacio con Mueblería, tu aliado en mobiliario de calidad.</p>
          )}
          <Button className="bg-muebleria-accent text-muebleria-text font-bold px-10 py-4 rounded-full text-base shadow-lg" asChild>
            <a href="https://wa.me/593986223966" target="_blank" rel="noopener noreferrer">Solicitar Cotización</a>
          </Button>
        </div>
      </section>
      {/* OFERTAS DESTACADAS */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-8 text-center">Ofertas Destacadas</h2>
          {isMobile ? (
            <Carousel>
              <CarouselContent>
                {promociones.map((promo, idx) => (
                  <CarouselItem key={idx}>
                    <Card>
                      <div className="relative w-full h-48">
                        <Image src={promo.imagen} alt={promo.titulo} fill className="object-cover w-full h-48 rounded-t-xl" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-muebleria-text">{promo.titulo}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muebleria-text">{promo.descripcion}</CardDescription>
                        <Button className="mt-4 w-full bg-muebleria-accent text-muebleria-text" asChild>
                          <Link href="/productos">Ver Oferta</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {/* Oferta 1 */}
              <Card>
                <div className="relative w-full h-48">
                  <Image src={promociones[0].imagen} alt={promociones[0].titulo} fill className="object-cover w-full h-48 rounded-t-xl" />
                </div>
                <CardHeader>
                  <CardTitle className="text-muebleria-text">{promociones[0].titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muebleria-text">{promociones[0].descripcion}</CardDescription>
                  <Button className="mt-4 w-full bg-muebleria-accent text-muebleria-text" asChild>
                    <Link href="/productos">Ver Oferta</Link>
                  </Button>
                </CardContent>
              </Card>
              {/* Oferta 2 */}
              <Card>
                <div className="relative w-full h-48">
                  <Image src={promociones[1].imagen} alt={promociones[1].titulo} fill className="object-cover w-full h-48 rounded-t-xl" />
                </div>
                <CardHeader>
                  <CardTitle className="text-muebleria-text">{promociones[1].titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muebleria-text">{promociones[1].descripcion}</CardDescription>
                  <Button className="mt-4 w-full bg-muebleria-accent text-muebleria-text" asChild>
                    <Link href="/productos">Ver Oferta</Link>
                  </Button>
                </CardContent>
              </Card>
              {/* Oferta 3 */}
              <Card>
                <div className="relative w-full h-48">
                  <Image src={promociones[2].imagen} alt={promociones[2].titulo} fill className="object-cover w-full h-48 rounded-t-xl" />
                </div>
                <CardHeader>
                  <CardTitle className="text-muebleria-text">{promociones[2].titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muebleria-text">{promociones[2].descripcion}</CardDescription>
                  <Button className="mt-4 w-full bg-muebleria-accent text-muebleria-text" asChild>
                    <Link href="/productos">Ver Oferta</Link>
                  </Button>
                </CardContent>
              </Card>
              {/* Oferta 4 */}
              <Card>
                <div className="relative w-full h-48">
                  <Image src={promociones[3].imagen} alt={promociones[3].titulo} fill className="object-cover w-full h-48 rounded-t-xl" />
                </div>
                <CardHeader>
                  <CardTitle className="text-muebleria-text">{promociones[3].titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muebleria-text">{promociones[3].descripcion}</CardDescription>
                  <Button className="mt-4 w-full bg-muebleria-accent text-muebleria-text" asChild>
                    <Link href="/productos">Ver Oferta</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
      {/* NUESTROS SERVICIOS */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-8 text-center">Nuestros Servicios</h2>
          {isMobile ? (
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-bold text-lg text-muebleria-text mb-2">Diseño a Medida</h3>
                <p className="text-muebleria-text">En Mueblería, creamos muebles que se ajustan perfectamente a tus necesidades y estilo, desde cero.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-bold text-lg text-muebleria-text mb-2">Fabricación y Ensamblaje</h3>
                <p className="text-muebleria-text">Expertos en la construcción de muebles de alta calidad, garantizando durabilidad y acabados impecables en Mueblería.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-bold text-lg text-muebleria-text mb-2">Restauración de Muebles</h3>
                <p className="text-muebleria-text">Devuelve la vida a tus muebles antiguos o dañados con nuestro servicio especializado de restauración en Mueblería.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-bold text-lg text-muebleria-text mb-2">Asesoría en Decoración</h3>
                <p className="text-muebleria-text">En Mueblería, te ayudamos a elegir los muebles ideales y a integrar tu mobiliario con la decoración de tu hogar u oficina.</p>
              </div>
            </div>
          ) : (
            <Tabs defaultValue="medida" className="w-full">
              <TabsList className="flex justify-center gap-2 mb-8">
                <TabsTrigger value="medida">Diseño a Medida</TabsTrigger>
                <TabsTrigger value="fabricacion">Fabricación y Ensamblaje</TabsTrigger>
                <TabsTrigger value="restauracion">Restauración de Muebles</TabsTrigger>
                <TabsTrigger value="asesoria">Asesoría en Decoración</TabsTrigger>
              </TabsList>
              <TabsContent value="medida">
                <p className="text-center text-lg text-muebleria-text">En Mueblería, creamos muebles que se ajustan perfectamente a tus necesidades y estilo, desde cero.</p>
              </TabsContent>
              <TabsContent value="fabricacion">
                <p className="text-center text-lg text-muebleria-text">Expertos en la construcción de muebles de alta calidad, garantizando durabilidad y acabados impecables en Mueblería.</p>
              </TabsContent>
              <TabsContent value="restauracion">
                <p className="text-center text-lg text-muebleria-text">Devuelve la vida a tus muebles antiguos o dañados con nuestro servicio especializado de restauración en Mueblería.</p>
              </TabsContent>
              <TabsContent value="asesoria">
                <p className="text-center text-lg text-muebleria-text">En Mueblería, te ayudamos a elegir los muebles ideales y a integrar tu mobiliario con la decoración de tu hogar u oficina.</p>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </section>
      {/* QUIÉNES SOMOS */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 md:px-16">
          <div className="flex-1 flex flex-col justify-center items-start px-2 md:px-8 mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-muebleria-text mb-6 leading-tight">QUIÉNES SOMOS</h2>
            <p className="text-base sm:text-lg text-black mb-8 max-w-xl font-normal !text-black !opacity-100">
              En Mueblería, somos una empresa familiar apasionada por el diseño y la fabricación de mobiliario de alta calidad. Con una trayectoria sólida y una visión clara, nos especializamos en transformar tus espacios con piezas únicas que combinan estética, funcionalidad y durabilidad. Nos enorgullece ser creadores directos de muebles en Loja, Guayas, Ecuador, ofreciendo soluciones personalizadas y adaptadas a los gustos más exigentes de nuestros clientes.
            </p>
            <Button className="bg-muebleria-accent text-muebleria-text font-bold px-8 py-3 rounded-full text-base shadow-lg" asChild>
              <Link href="/servicios">Ver más</Link>
            </Button>
          </div>
          <div className="flex-1 flex justify-center items-center relative min-h-[200px] sm:min-h-[300px] md:min-h-[400px] px-2 md:px-8 w-full">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg h-40 sm:h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
              {/* Sugerencia de video: Tour por nuestro taller de fabricación */}
              <iframe
                src="https://www.youtube.com/embed/syyKrXrN8g8"
                title="Tour por nuestro taller de fabricación"
                className="w-full h-full object-cover rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
      {/* NUESTRAS TIENDAS (SHOWROOMS) */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-8 text-center">Nuestras Tiendas</h2>
          <p className="text-center text-muebleria-text mb-8">Encuentra el mueble perfecto para tu espacio</p>
          {isMobile ? (
            <Carousel>
              <CarouselContent>
                {showrooms.map((tienda, idx) => (
                  <CarouselItem key={idx}>
                    <Card>
                      <div className="relative w-full h-48">
                        <Image src={tienda.imagen} alt={tienda.sucursal} fill className="object-cover w-full h-48 rounded-t-xl" />
                      </div>
                      <CardHeader>
                        <CardTitle>{tienda.empresa} - {tienda.sucursal}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{tienda.direccion}</CardDescription>
                        <div className="flex gap-2 mt-4">
                          <Button className="bg-gray-300 text-muebleria-text font-bold flex-1 rounded-full" asChild>
                            <a href="#ubicacion">Ver mapa</a>
                          </Button>
                          <Button className="bg-muebleria-accent text-muebleria-primary font-bold flex-1 rounded-full" asChild>
                            <a href="https://wa.me/593986223966" target="_blank" rel="noopener noreferrer">Cotizar</a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Tienda 1 */}
              <Card>
                <div className="relative w-full h-48">
                  <Image src={showrooms[0].imagen} alt={showrooms[0].sucursal} fill className="object-cover w-full h-48 rounded-t-xl" />
                </div>
                <CardHeader>
                  <CardTitle>{showrooms[0].empresa} - {showrooms[0].sucursal}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{showrooms[0].direccion}</CardDescription>
                  <div className="flex gap-2 mt-4">
                    <Button className="bg-gray-300 text-muebleria-text font-bold flex-1 rounded-full" asChild>
                      <a href="#ubicacion">Ver mapa</a>
                    </Button>
                    <Button className="bg-muebleria-accent text-muebleria-primary font-bold flex-1 rounded-full" asChild>
                      <a href="https://wa.me/593986223966" target="_blank" rel="noopener noreferrer">Cotizar</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              {/* Tienda 2 */}
              <Card>
                <div className="relative w-full h-48">
                  <Image src={showrooms[1].imagen} alt={showrooms[1].sucursal} fill className="object-cover w-full h-48 rounded-t-xl" />
                </div>
                <CardHeader>
                  <CardTitle>{showrooms[1].empresa} - {showrooms[1].sucursal}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{showrooms[1].direccion}</CardDescription>
                  <div className="flex gap-2 mt-4">
                    <Button className="bg-gray-300 text-muebleria-text font-bold flex-1 rounded-full" asChild>
                      <a href="#ubicacion">Ver mapa</a>
                    </Button>
                    <Button className="bg-muebleria-accent text-muebleria-primary font-bold flex-1 rounded-full" asChild>
                      <a href="https://wa.me/593986223966" target="_blank" rel="noopener noreferrer">Cotizar</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              {/* Tienda 3 */}
              <Card>
                <div className="relative w-full h-48">
                  <Image src={showrooms[2].imagen} alt={showrooms[2].sucursal} fill className="object-cover w-full h-48 rounded-t-xl" />
                </div>
                <CardHeader>
                  <CardTitle>{showrooms[2].empresa} - {showrooms[2].sucursal}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{showrooms[2].direccion}</CardDescription>
                  <div className="flex gap-2 mt-4">
                    <Button className="bg-gray-300 text-muebleria-text font-bold flex-1 rounded-full" asChild>
                      <a href="#ubicacion">Ver mapa</a>
                    </Button>
                    <Button className="bg-muebleria-accent text-muebleria-primary font-bold flex-1 rounded-full" asChild>
                      <a href="https://wa.me/593986223966" target="_blank" rel="noopener noreferrer">Cotizar</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
      {/* BLOG */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muebleria-text mb-8 text-center">Blog</h2>
          {isMobile ? (
            <Carousel>
              <CarouselContent>
                {blog.map((art, idx) => (
                  <CarouselItem key={idx}>
                    <Card>
                      <div className="relative w-full h-48">
                        <Image src={art.imagen} alt={art.titulo} fill className="object-cover w-full h-48 rounded-t-xl" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-black">{art.titulo}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muebleria-text">{art.resumen}</CardDescription>
                        <Button className="mt-4 w-full bg-muebleria-accent text-muebleria-text" asChild>
                          <Link href="/blog">Leer más</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {blog.map((art, idx) => (
                <Card key={idx}>
                  <div className="relative w-full h-48">
                    <Image src={art.imagen} alt={art.titulo} fill className="object-cover w-full h-48 rounded-t-xl" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-black">{art.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muebleria-text">{art.resumen}</CardDescription>
                    <Button className="mt-4 w-full bg-muebleria-accent text-muebleria-text" asChild>
                      <Link href="/blog">Leer más</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* UBICACIÓN */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-muebleria-text mb-8 text-center">Ubicación</h2>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=-3.99313,-79.20422&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Mueblería Loja"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
