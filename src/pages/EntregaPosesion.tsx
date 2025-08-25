import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Target } from "lucide-react";
import entregaImage from "@/assets/entrega-posesion.jpg";

const EntregaPosesion = () => {
  const beneficios = [
    "Experiencia de estados alterados de consciencia erótica",
    "Trascendencia del ego a través de la entrega sexual total",
    "Conexión profunda con la energía primordial y divina",
    "Sanación de traumas e integración de la sombra sexual",
    "Desarrollo de vulnerabilidad consciente y confianza íntima",
    "Acceso a éxtasis y experiencias místicas através del sexo",
    "Integración de polaridades masculina y femenina"
  ];

  const tiposSesiones = [
    {
      nombre: "Entrega Consciente y Vulnerabilidad",
      descripcion: "Exploración segura de estados de entrega total através de técnicas de respiración consciente, liberación de control y práticas de vulnerabilidad íntima. Incluye trabajo con límites, consentimiento consciente y técnicas de entrega gradual hacia estados de éxtasis.",
      duracion: "90-120 minutos",
      enfoque: "Vulnerabilidad consciente, entrega segura, estados alterados"
    },
    {
      nombre: "Posesión Energética y Éxtasis",
      descripcion: "Sesión avanzada para experimentar estados de posesión energética consciente, conexión con arquetipos sexuales y experiencias de éxtasis místico através de técnicas tántricas de activación energética, respiración alterada y movimiento extático.",
      duracion: "120-150 minutos", 
      enfoque: "Estados extáticos, posesión consciente, experiencias místicas"
    },
    {
      nombre: "Integración de Polaridades Sexuales",
      descripcion: "Trabajo profundo con las energías masculina y femenina internas, exploración de dominación y sumisión consciente, y técnicas de integración de la sombra sexual. Para personas expertas que buscan trascender dualidades attraverso la sexualidad sagrada.",
      duracion: "120-180 minutos",
      enfoque: "Integración de sombra, polaridades, dominación consciente"
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
              Entrega y Posesión Tántrica
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experimenta estados profundos de entrega consciente, éxtasis místico y posesión energética através de prácticas tántricas avanzadas de trascendencia y transformación sexual espiritual.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Agendar Sesión de Entrega Tántrica
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Beneficios de las Prácticas de Entrega y Posesión
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
            Tipos de Sesiones de Entrega y Éxtasis
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
                    <Link to="/servicios/entrega-posesion/info-sesiones" className="block">
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
            <h2 className="text-3xl font-bold text-primary mb-8">La Entrega como Puerta al Éxtasis Místico</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-sacred-purple mb-4">Estados Alterados de Consciencia Sexual</h3>
                <p className="text-muted-foreground mb-4">
                  La <strong>entrega tántrica</strong> y la <strong>posesión energética consciente</strong> son prácticas avanzadas que permiten acceder a <strong>estados alterados de consciencia</strong> através de la sexualidad sagrada. Estas experiencias trascienden el placer físico para conectarnos con dimensiones místicas de la existencia y la <strong>energía primordial universal</strong>.
                </p>
                <p className="text-muted-foreground">
                  A través de <strong>técnicas de entrega consciente</strong>, <strong>respiración alterada</strong> y <strong>prácticas de vulnerabilidad sagrada</strong>, experimentamos la disolución del ego, estados de <strong>éxtasis místico</strong> y conexión directa con lo divino através de la sexualidad como portal espiritual.
                </p>
              </div>
              
              <div>
                <img 
                  src={entregaImage} 
                  alt="Entrega tántrica y posesión energética para éxtasis místico"
                  className="w-full h-64 object-cover rounded-lg shadow-gentle"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-sacred-purple mb-4">Prácticas Avanzadas de Trascendencia Sexual</h3>
            <p className="text-muted-foreground mb-6">
              En mis sesiones de <strong>coaching de entrega tántrica</strong> exploramos técnicas profundas: <strong>estados de vulnerabilidad consciente</strong>, <strong>técnicas de posesión energética</strong>, <strong>trabajo con arquetipos sexuales</strong> y <strong>prácticas de integración de polaridades</strong>. Cada sesión está diseñada para expandir los límites de la consciencia sexual y acceder a experiencias transformadoras de éxtasis sagrado.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Las <strong>prácticas de entrega y posesión</strong> requieren preparación, confianza y guía experta. Son el nivel más avanzado del <strong>tantra sexual</strong>, donde la sexualidad se convierte en <strong>medicina espiritual</strong> y portal de <strong>transformación consciencial</strong> profunda.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Explora las Profundidades del Éxtasis Sagrado
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Embárcate en un viaje de entrega consciente y descubre estados alterados de consciencia através de la sexualidad místical.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Reservar Sesión de Entrega
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

export default EntregaPosesion;