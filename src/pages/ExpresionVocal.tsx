import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Target } from "lucide-react";
import expresionImage from "@/assets/expresion-vocal.jpg";

const ExpresionVocal = () => {
  const beneficios = [
    "Liberación de emociones reprimidas através de la voz",
    "Amplificación de sensaciones placenteras y orgásmicas",
    "Conexión con la fuerza vital y poder personal",
    "Sanación de traumas sexuales através del sonido",
    "Desarrollo de comunicación sexual auténtica",
    "Activación de energía sexual attraverso mantras tántricos",
    "Expresión libre y sin censura de la naturaleza erótica"
  ];

  const tiposSesiones = [
    {
      nombre: "Liberación Vocal Sexual",
      descripcion: "Sesión especializada en liberar la voz sexual auténtica através de técnicas de respiración vocal, sonidos primordiales y expresión emocional libre. Incluye prácticas de gemidos conscientes, gritos de liberación y mantras de activación sexual.",
      duracion: "60-75 minutos",
      enfoque: "Liberación emocional, expresión sexual vocal, autenticidad"
    },
    {
      nombre: "Mantras Tántricos y Sonidos Sagrados",
      descripcion: "Exploración de mantras tradicionales tántricos, sonidos de activación de chakras sexuales y técnicas vocales para canalizar energía kundalini. Incluye mantras de shakti, sonidos primordiales y vocalizaciones de poder sexual.",
      duracion: "75-90 minutos", 
      enfoque: "Activación energética, sonidos sagrados, poder de la voz"
    },
    {
      nombre: "Expresión Vocal en Pareja",
      descripcion: "Sesión para parejas que desean desarrollar comunicación sexual auténtica, expresión vocal libre durante la intimidad y técnicas de sonido compartido. Incluye ejercicios de eco vocal, comunicación de deseos y sonidos de conexión energética.",
      duracion: "90-120 minutos",
      enfoque: "Comunicación íntima, expresión compartida, conexión vocal"
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
              Expresión Vocal y Sonidos Tántricos
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Libera tu voz sexual auténtica, amplifica el placer através del sonido y conecta con tu poder personal attraverso mantras tántricos y técnicas de expresión vocal consciente.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Agendar Sesión de Expresión Vocal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Beneficios de la Expresión Vocal Sexual
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
            Tipos de Sesiones de Expresión Vocal Tántrica
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
                    <Link to="/servicios/expresion-vocal/info-sesiones" className="block">
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
            <h2 className="text-3xl font-bold text-primary mb-8">La Voz como Herramienta de Transformación Sexual</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-sacred-purple mb-4">Sonidos Tántricos Sanadores</h3>
                <p className="text-muted-foreground mb-4">
                  La <strong>expresión vocal sexual</strong> es una práctica tántrica ancestral que utiliza el poder del sonido para liberar bloqueos emocionales, amplificar sensaciones placenteras y conectar con la fuerza vital primordial. Los <strong>sonidos tántricos</strong> y <strong>mantras sexuales</strong> activan la energía kundalini y crean estados alterados de consciencia erótica.
                </p>
                <p className="text-muted-foreground">
                  A través de la <strong>voz sexual libre</strong> y los <strong>gemidos conscientes</strong>, liberamos represiones, sanamos traumas almacenados en la garganta y cultivamos una <strong>comunicación sexual auténtica</strong> que transforma la intimidad en una experiencia sagrada.
                </p>
              </div>
              
              <div>
                <img 
                  src={expresionImage} 
                  alt="Expresión vocal sexual y sonidos tántricos para liberación"
                  className="w-full h-64 object-cover rounded-lg shadow-gentle"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-sacred-purple mb-4">Técnicas de Liberación Vocal Sexual</h3>
            <p className="text-muted-foreground mb-6">
              En mis sesiones de <strong>coaching vocal sexual</strong> exploramos técnicas poderosas: <strong>respiración vocal profunda</strong>, <strong>mantras de activación sexual</strong>, <strong>sonidos primordiales de placer</strong> y <strong>técnicas de liberación emocional</strong> através de la voz. Cada práctica está diseñada para desinhibir tu expresión sexual, amplificar el placer y conectar con tu poder personal auténtico.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Los <strong>sonidos tántricos</strong> no son solo expresión, sino medicina vibracional que sana, activa y transforma la energía sexual en estados de <strong>éxtasis vocal</strong> y <strong>liberación emocional profunda</strong> a través del poder sagrado de la voz.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Libera tu Voz Sexual Auténtica
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Descubre el poder transformador de la expresión vocal y conecta con tu fuerza vital através del sonido sagrado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Reservar Sesión Vocal
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

export default ExpresionVocal;