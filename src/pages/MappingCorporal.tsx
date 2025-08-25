import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Target } from "lucide-react";
import mappingImage from "@/assets/mapping-corporal.jpg";

const MappingCorporal = () => {
  const beneficios = [
    "Descubrimiento de nuevas zonas erógenas y puntos de placer",
    "Aumento progresivo de la sensibilidad corporal y sexual",
    "Sanación de traumas sexuales através del tacto consciente",
    "Desarrollo de la comunicación sexual y consentimiento",
    "Expansión del mapa de placer personal y corporal",
    "Liberación de tensiones y bloqueos energéticos",
    "Cultivo de la presencia y mindfulness erótico"
  ];

  const tiposSesiones = [
    {
      nombre: "Mapping Individual Completo",
      descripcion: "Exploración sensorial personalizada de todo el cuerpo para crear tu mapa de placer único. Utilizamos técnicas de focalización sensorial, tacto consciente y respiración para descubrir zonas de alta sensibilidad y expandir tu capacidad de placer.",
      duracion: "90-120 minutos",
      enfoque: "Autoconocimiento corporal, expansión sensorial, desarrollo del placer"
    },
    {
      nombre: "Mapping en Pareja",
      descripcion: "Sesión guiada para que las parejas aprendan a explorar mutuamente sus cuerpos de forma consciente y respetuosa. Incluye técnicas de comunicación sexual, establecimiento de límites y creación de mapas de placer compartidos.",
      duracion: "90-120 minutos", 
      enfoque: "Intimidad de pareja, comunicación sexual, exploración mutua"
    },
    {
      nombre: "Mapping Genital Especializado",
      descripcion: "Exploración específica de la anatomía genital masculina y femenina para descubrir puntos de alta sensibilidad, técnicas de estimulación consciente y desarrollo de la capacidad orgásmica através del tacto tántrico especializado.",
      duracion: "75-90 minutos",
      enfoque: "Anatomía sexual, orgasmos múltiples, placer genital consciente"
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
              Mapping Corporal y Exploración Sensorial
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Técnica avanzada de exploración corporal para descubrir tu mapa de placer personal, expandir la sensibilidad y crear nuevas vías de conexión erótica através del tacto consciente tántrico.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Agendar Sesión de Mapping Corporal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Beneficios del Mapping Corporal Tántrico
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
            Tipos de Sesiones de Mapping Corporal
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
                    <Link to="/servicios/mapping-corporal/info-sesiones" className="block">
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
            <h2 className="text-3xl font-bold text-primary mb-8">La Exploración Corporal como Herramienta de Autoconocimiento</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-sacred-purple mb-4">Focalización Sensorial Tántrica</h3>
                <p className="text-muted-foreground mb-4">
                  El <strong>mapping corporal</strong> es una técnica avanzada de <strong>exploración sensorial</strong> que utiliza el tacto consciente para cartografiar las zonas erógenas y puntos de placer del cuerpo. Esta práctica, basada en la <strong>focalización sensorial Masters & Johnson</strong> y enriquecida con principios tántricos, permite descubrir nuevas vías de placer y sanación sexual.
                </p>
                <p className="text-muted-foreground">
                  A través del <strong>tacto consciente</strong> y la <strong>respiración sincronizada</strong>, creamos un mapa personalizado de sensibilidad corporal que expande exponencialmente tu capacidad de experimentar <strong>placer sexual consciente</strong> y <strong>sensaciones eróticas amplificadas</strong>.
                </p>
              </div>
              
              <div>
                <img 
                  src={mappingImage} 
                  alt="Mapping corporal y exploración sensorial tántrica"
                  className="w-full h-64 object-cover rounded-lg shadow-gentle"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-sacred-purple mb-4">Técnicas de Exploración Corporal Consciente</h3>
            <p className="text-muted-foreground mb-6">
              En mis sesiones de <strong>coaching sexual corporal</strong> utilizamos técnicas específicas: <strong>tocamiento consciente</strong>, <strong>exploración de zonas erógenas</strong>, <strong>estimulación progresiva</strong> y <strong>técnicas de sensibilización corporal</strong>. Cada sesión está diseñada para expandir tu <strong>consciencia corporal</strong>, desarrollar nuevas vías de placer y sanar traumas através del tacto terapéutico.
            </p>
            
            <p className="text-muted-foreground mb-8">
              El <strong>mapping corporal tántrico</strong> no solo aumenta la sensibilidad física, sino que también desarrolla la <strong>intimidad consciente</strong>, mejora la <strong>comunicación sexual</strong> y cultiva una relación más profunda y amorosa con tu propio cuerpo y sexualidad.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Descubre tu Mapa de Placer Personal
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Embárcate en un viaje de exploración corporal consciente y descubre nuevas dimensiones de placer y sensibilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Reservar Sesión de Mapping
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

export default MappingCorporal;