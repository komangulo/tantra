import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Target } from "lucide-react";
import masturbacionImage from "@/assets/masturbacion-consciente.jpg";

const MasturbacionConsciente = () => {
  const beneficios = [
    "Desarrollo del autoconocimiento sexual y corporal profundo",
    "Cultivo del autoplacer como práctica sagrada y sanadora",
    "Control de la energía sexual y técnicas de retención",
    "Sanación de vergüenza sexual y culpa através del autoamor",
    "Expansión de la capacidad orgásmica personal",
    "Práctica regular de sexualidad consciente y mindful",
    "Integración de la masturbación como medicina sexual"
  ];

  const tiposSesiones = [
    {
      nombre: "Autoplacer Consciente Masculino",
      descripcion: "Sesión especializada en técnicas de masturbación consciente para hombres, incluyendo control eyaculatorio, masaje testicular, ejercicios de edging y técnicas de orgasmo seco. Aprende a cultivar tu energía sexual através del autoplacer sagrado y consciente.",
      duracion: "75-90 minutos",
      enfoque: "Control masculino, orgasmos secos, energía sexual masculina"
    },
    {
      nombre: "Autoplacer Sagrado Femenino",
      descripcion: "Exploración profunda del autoplacer femenino consciente, incluyendo técnicas de automasaje yónico, estimulación multi-orgásmica, conexión con ciclos lunares y práticas de masturbación sagrada para la sanación y empoderamiento sexual femenino.",
      duracion: "75-90 minutos", 
      enfoque: "Empoderamiento femenino, orgasmos múltiples, ciclos sagrados"
    },
    {
      nombre: "Práticas Avanzadas de Autoplacer",
      descripcion: "Sesión avanzada que combina masturbación consciente con respiración tántrica, visualizaciones eróticas, técnicas de canalización energética y práticas de autosanación sexual. Para personas con experiencia en tantra que desean profundizar su práctica personal.",
      duracion: "90-120 minutos",
      enfoque: "Práticas avanzadas, sanación sexual, tantra personal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-gentle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
              Masturbación Consciente y Sagrada
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transforma el autoplacer en una práctica sagrada de autoconocimiento, sanación sexual y cultivo de energía vital attraverso técnicas conscientes de masturbación tántrica.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Agendar Sesión de Autoplacer Consciente
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Beneficios de la Masturbación Consciente Tántrica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-sacred-gold mt-1 flex-shrink-0" size={20} />
                <p className="text-muted-foreground">{beneficio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-16 px-6 sm:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Tipos de Sesiones de Autoplacer Sagrado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiposSesiones.map((sesion, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-sacred transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-sacred-purple">{sesion.nombre}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock size={16} />
                    <span>{sesion.duracion}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{sesion.descripcion}</p>
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-xs">
                      <Target size={12} className="mr-1" />
                      {sesion.enfoque}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Link to="/contacto" className="block">
                      <Button variant="outline" className="w-full hover:bg-gradient-sunset hover:text-primary-foreground transition-all duration-300">
                        Agendar Sesión
                      </Button>
                    </Link>
                    <Link to="/servicios/masturbacion-consciente/info-sesiones" className="block">
                      <Button variant="ghost" className="w-full text-sacred-purple hover:text-sacred-gold">
                        Más Información
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-8">El Autoplacer como Práctica Espiritual</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-sacred-purple mb-4">Masturbación Sagrada y Sanación</h3>
                <p className="text-muted-foreground mb-4">
                  La <strong>masturbación consciente</strong> trasciende el simple placer físico para convertirse en una poderosa práctica de <strong>autoconocimiento sexual</strong>, <strong>sanación de traumas</strong> y <strong>cultivo de energía vital</strong>. En la tradición tántrica, el <strong>autoplacer sagrado</strong> es considerado una forma de meditación activa que conecta cuerpo, mente y espíritu.
                </p>
                <p className="text-muted-foreground">
                  A través de técnicas conscientes de <strong>autoestimulación tántrica</strong>, <strong>respiración sexual</strong> y <strong>presencia mindful</strong>, transformamos la masturbación en una práctica de <strong>autoamor</strong>, <strong>sanación sexual</strong> y <strong>desarrollo personal</strong> profundo.
                </p>
              </div>
              
              <div>
                <img 
                  src={masturbacionImage} 
                  alt="Masturbación consciente y autoplacer sagrado tántrico"
                  className="w-full h-64 object-cover rounded-lg shadow-gentle"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-sacred-purple mb-4">Técnicas de Autoplacer Consciente y Tántrico</h3>
            <p className="text-muted-foreground mb-6">
              En mis sesiones de <strong>coaching de masturbación consciente</strong> enseño técnicas específicas: <strong>automasaje genital consciente</strong>, <strong>técnicas de edging y control</strong>, <strong>respiración orgásmica</strong> y <strong>práticas de canalización energética</strong>. Cada sesión está diseñada para expandir tu capacidad de autoplacer, sanar vergüenza sexual y cultivar una relación sagrada con tu sexualidad.
            </p>
            
            <p className="text-muted-foreground mb-8">
              La <strong>masturbación sagrada</strong> no es solo sobre técnica, sino sobre cultivar <strong>presencia</strong>, <strong>autocompasión</strong> y <strong>conexión espiritual</strong> através de la sexualidad. Es medicina sexual que sana, nutre y empodera tu ser integral.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Cultiva una Práctica Sagrada de Autoplacer
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Transforma tu relación con la masturbación y descubre el poder sanador del autoplacer consciente y sagrado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Reservar Sesión de Autoplacer
              </Button>
            </Link>
            <Link to="/contacto">
              <Button size="lg" variant="outline" className="hover:bg-gradient-sunset hover:text-primary-foreground transition-all duration-300">
                Consulta Gratuita
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MasturbacionConsciente;