import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-sacred text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Tantra Sexual Coach</h3>
            <p className="text-primary-foreground/80">
              Transformación personal a través del placer consciente y la salud sexual.
              Maestro de tantra y coach sexual certificado.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <Link to="/servicios" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Técnicas de Tantra
              </Link>
              <Link to="/filosofia" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Filosofía Tántrica
              </Link>
              <Link to="/contacto" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Consulta Personalizada
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Palabras Clave</h3>
            <div className="text-sm text-primary-foreground/80 space-y-1">
              <p>Coach Sexual • Maestro de Tantra</p>
              <p>Terapia Sexual • Masaje Tántrico</p>
              <p>Sanación Sexual • Placer Consciente</p>
              <p>Crecimiento Personal • Salud Sexual</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/80">
            &copy; 2024 Tantra Sexual Coach. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;