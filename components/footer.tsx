import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muebleria-primary text-muebleria-accent">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-muebleria-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-lg text-muebleria-accent">Mueblería</span>
            </div>
            <p className="text-muebleria-accent text-sm mb-4">
              Especialistas en diseño y fabricación de muebles a medida en Durán, Guayas, Ecuador. Calidad, diseño y satisfacción en cada pieza.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muebleria-accent hover:text-muebleria-accent/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muebleria-accent hover:text-muebleria-accent/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muebleria-accent hover:text-muebleria-accent/80 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h3 className="font-semibold text-lg mb-4 text-muebleria-accent">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muebleria-accent hover:text-muebleria-accent/80 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-muebleria-accent hover:text-muebleria-accent/80 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-muebleria-accent hover:text-muebleria-accent/80 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muebleria-accent hover:text-muebleria-accent/80 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          {/* Eliminado para simplificar el footer según requerimiento */}

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-muebleria-accent">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-marmolinas-yellow mt-0.5 flex-shrink-0" />
                <span className="text-muebleria-accent text-sm">
                  Dirección: Av. Principal y Calle 1, Centro, Durán, Guayas, Ecuador
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-marmolinas-yellow" />
                <span className="text-muebleria-accent text-sm">0986223966 / 072577961</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-marmolinas-yellow" />
                <span className="text-muebleria-accent text-sm">info@muebleria.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-muebleria-accent text-sm">
            © 2025 Mueblería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
