import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const articulos = [
  {
    slug: "como-elegir-sofa-perfecto",
    titulo: "¿Cómo elegir el sofá perfecto para tu sala?",
    descripcion: "Consejos prácticos para seleccionar el sofá ideal según tu espacio, estilo y necesidades.",
    imagen: "/images/encimera_Pinteres.webp",
    fecha: "2024-06-01",
    contenido: (
      <>
        <p className="mb-4">El sofá es el protagonista de la sala. Su comodidad, tamaño y diseño deben adaptarse a tu estilo de vida y al espacio disponible. Aquí te damos las claves para elegir el mejor:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Considera el tamaño y la distribución de tu sala.</li>
          <li>Elige materiales y tapizados fáciles de limpiar y duraderos.</li>
          <li>Piensa en el color y la forma que combine con tu decoración.</li>
          <li>Prueba la comodidad antes de comprar.</li>
        </ul>
        <p>En Mueblería te asesoramos para que tu sala sea el espacio más acogedor de tu hogar.</p>
      </>
    ),
  },
  {
    slug: "tendencias-comedores-2025",
    titulo: "Tendencias en comedores para el 2025: Lo que se viene",
    descripcion: "Explora los estilos, materiales y colores que marcarán la pauta en el mobiliario de comedor este año.",
    imagen: "/images/cocinalujo_Pinteres.webp",
    fecha: "2024-05-20",
    contenido: (
      <>
        <p className="mb-4">Los comedores modernos apuestan por la funcionalidad y el diseño. Este año destacan las mesas extensibles, las combinaciones de madera y metal, y los colores neutros con acentos cálidos.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Mesas redondas para optimizar el espacio.</li>
          <li>Sillas tapizadas en tonos tierra y beige.</li>
          <li>Iluminación colgante como punto focal.</li>
        </ul>
        <p>¡Inspírate y renueva tu comedor con las últimas tendencias en muebles!</p>
      </>
    ),
  },
  {
    slug: "maximizando-espacio-muebles",
    titulo: "Maximizando el espacio en departamentos pequeños",
    descripcion: "Ideas y tips para aprovechar cada rincón con muebles multifuncionales y soluciones inteligentes.",
    imagen: "/images/fachaletas-de-piedra.jpeg",
    fecha: "2024-05-10",
    contenido: (
      <>
        <p className="mb-4">Los muebles multifuncionales son la clave para aprovechar al máximo los espacios pequeños. Opta por sofás cama, mesas plegables y estanterías modulares.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Elige muebles con almacenamiento oculto.</li>
          <li>Prefiere colores claros para dar sensación de amplitud.</li>
          <li>Utiliza espejos y accesorios para multiplicar la luz.</li>
        </ul>
        <p>Descubre cómo transformar tu departamento con muebles inteligentes y funcionales.</p>
      </>
    ),
  },
  {
    slug: "guia-cuidado-muebles-madera",
    titulo: "Guía para el cuidado de tus muebles de madera",
    descripcion: "Aprende cómo mantener y restaurar tus muebles para que luzcan como nuevos por más tiempo.",
    imagen: "/images/1.jpg",
    fecha: "2024-05-01",
    contenido: (
      <>
        <p className="mb-4">La madera es un material noble y duradero, pero requiere cuidados especiales. Aquí te damos algunos consejos para mantener tus muebles impecables:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Limpia regularmente con un paño suave y seco.</li>
          <li>Evita la exposición directa al sol y la humedad.</li>
          <li>Utiliza productos específicos para nutrir y proteger la madera.</li>
        </ul>
        <p>En Mueblería te ayudamos a restaurar y mantener tus muebles para que duren toda la vida.</p>
      </>
    ),
  },
];

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const articulo = articulos.find((a) => a.slug === params.slug);
  if (!articulo) return notFound();

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Link href="/blog" className="text-marmolinas-yellow hover:underline mb-6 inline-block">← Volver al blog</Link>
        <h1 className="text-3xl md:text-4xl font-bold text-marmolinas-blue mb-2">{articulo.titulo}</h1>
        <div className="text-gray-500 text-sm mb-4">{new Date(articulo.fecha).toLocaleDateString()}</div>
        <Image src={articulo.imagen} alt={articulo.titulo} width={800} height={256} className="rounded-lg w-full h-64 object-cover mb-6" />
        <div className="text-lg text-gray-700 mb-6">{articulo.descripcion}</div>
        <article className="prose prose-marmolinas max-w-none">
          {articulo.contenido}
        </article>
        <div className="mt-8">
          <Link href="/blog" className="bg-marmolinas-blue text-white px-6 py-2 rounded hover:bg-marmolinas-blue/90 font-semibold">Volver al blog</Link>
        </div>
      </div>
    </div>
  );
} 