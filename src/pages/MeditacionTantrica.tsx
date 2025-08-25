import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Target } from "lucide-react";
import meditationImage from "@/assets/meditation-energy.jpg";

const MeditacionTantrica = () => {
  const beneficios = [
    "Despertar de la energía kundalini y chakras sexuales",
    "Expansión de la consciencia sexual y sensorial",
    "Conexión profunda con la energía vital y primordial",
    "Desarrollo de la presencia y atención plena erótica",
    "Sanación de traumas sexuales a través de la meditación",
    "Cultivo del placer sutil y estados alterados de consciencia",
    "Integración de la sexualidad como práctica espiritual"
  ];

  const tiposSesiones = [
    {
      nombre: "Meditación Tántrica Individual",
      descripcion: "Sesión personal de meditación con técnicas específicas para despertar la energía sexual, trabajar con mantras sagrados y cultivar la presencia erótica. Incluye meditación kundalini, respiración sexual y visualizaciones tántricas.",
      duracion: "60-90 minutos",
      enfoque: "Despertar energético, conexión íntima personal, sanación sexual meditativa"
    },
    {
      nombre: "Meditación en Pareja",
      descripcion: "Práctica meditativa compartida para sincronizar energías, crear conexión profunda y experimentar estados de unidad através de técnicas tántricas ancestrales. Incluye miradas sagradas, respiración sincronizada y meditación sexual conjunta.",
      duracion: "75-90 minutos", 
      enfoque: "Conexión de pareja, sincronización energética, éxtasis compartido"
    },
    {
      nombre: "Meditación Kundalini Sexual",
      descripcion: "Sesión avanzada de activación de la energía kundalini através de la sexualidad consciente. Combina posturas tántricas, respiración de fuego sexual y técnicas de canalización energética para despertar el potencial erótico completo.",
      duracion: "90-120 minutos",
      enfoque: "Activación kundalini, expansión consciencia sexual, transformación energética"
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
              Meditación y Conexión Tántrica
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Técnicas meditativas avanzadas para despertar la energía sexual, expandir la consciencia erótica y conectar con el placer sagrado através de la práctica contemplativa tántrica.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Agendar Sesión de Meditación Tántrica
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Beneficios de la Meditación Tántrica
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
            Tipos de Sesiones de Meditación Tántrica
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
                    <Link to="/servicios/meditacion-tantrica/info-sesiones" className="block">
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
            <h2 className="text-3xl font-bold text-primary mb-8">La Meditación como Puerta al Éxtasis Sexual</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-sacred-purple mb-4">Despertar de la Energía Kundalini</h3>
                <p className="text-muted-foreground mb-4">
                  La <strong>meditación tántrica</strong> es una práctica milenaria que utiliza la sexualidad como vehículo de transformación espiritual. A través de técnicas específicas de <strong>respiración consciente</strong>, <strong>mantras sagrados</strong> y <strong>visualizaciones eróticas</strong>, despertamos la energía kundalini que reside en la base de la columna vertebral.
                </p>
                <p className="text-muted-foreground">
                  Esta <strong>energía sexual primordial</strong> asciende por los chakras, creando estados de éxtasis, expansión de consciencia y conexión con lo sagrado a través del placer consciente y la sensualidad meditativa.
                </p>
              </div>
              
              <div>
                <img 
                  src={meditationImage} 
                  alt="Meditación tántrica y despertar de energía sexual kundalini"
                  className="w-full h-64 object-cover rounded-lg shadow-gentle"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-sacred-purple mb-4">Técnicas de Meditación Sexual Avanzada</h3>
            <p className="text-muted-foreground mb-6">
              En mis sesiones de <strong>coaching sexual tántrico</strong> utilizamos múltiples enfoques meditativos: <strong>meditación kundalini sexual</strong>, <strong>práticas de presencia erótica</strong>, <strong>respiración sexual consciente</strong> y <strong>técnicas de canalización energética</strong>. Cada práctica está diseñada para expandir tu capacidad de placer, sanar traumas sexuales y conectar con tu naturaleza erótica más auténtica.
            </p>
            
            <p className="text-muted-foreground mb-8">
              La <strong>meditación tántrica</strong> no es solo una técnica de relajación, sino una poderosa herramienta de <strong>transformación sexual</strong> que integra cuerpo, mente y espíritu en una experiencia de <strong>sanación erótica</strong> y <strong>despertar sensual</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Comienza tu Viaje de Meditación Tántrica
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Descubre el poder transformador de la meditación sexual y cultiva una conexión profunda con tu energía erótica sagrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Reservar Sesión Individual
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

export default MeditacionTantrica;