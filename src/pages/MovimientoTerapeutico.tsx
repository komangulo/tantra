import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Target } from "lucide-react";
import movimientoImage from "@/assets/movimiento-terapeutico.jpg";

const MovimientoTerapeutico = () => {
  const beneficios = [
    "Liberación de traumas sexuales almacenados en el cuerpo",
    "Desbloqueó de energía sexual estancada através del movimiento",
    "Expresión auténtica de la naturaleza erótica personal",
    "Desarrollo de fluidez y gracia en la sexualidad",
    "Conexión profunda con el cuerpo y sensualidad natural",
    "Sanación de vergüenza sexual através de la danza libre",
    "Activación de energía kundalini através del movimiento consciente"
  ];

  const tiposSesiones = [
    {
      nombre: "Danza Tántrica Individual",
      descripcion: "Sesión personal de movimiento libre y danza consciente para conectar con tu naturaleza erótica auténtica. Incluye técnicas de movimiento ondulatorio, expresión corporal sexual y danza de activación energética através de música y ritmos sagrados.",
      duracion: "75-90 minutos",
      enfoque: "Expresión sexual auténtica, liberación corporal, conexión sensual"
    },
    {
      nombre: "Movimiento Terapéutico de Sanación",
      descripcion: "Sesión especializada en liberación de traumas y bloqueos sexuales através del movimiento consciente. Combina técnicas de danza terapéutica, expresión emocional corporal y movimientos de liberación energética para sanar heridas sexuales profundas.",
      duracion: "90-120 minutos", 
      enfoque: "Sanación de traumas, liberación emocional, desbloqueó sexual"
    },
    {
      nombre: "Danza Sensual en Pareja",
      descripcion: "Práctica de movimiento conjunto para desarrollar conexión, sensualidad y juego erótico através de la danza. Incluye técnicas de movimiento sincronizado, danza de seducción mutua y expresión de fantasías através del cuerpo en movimiento.",
      duracion: "90-120 minutos",
      enfoque: "Conexión de pareja, seducción, juego erótico corporal"
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
              Movimiento Terapéutico y Danza Tántrica
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Libera tu expresión sexual auténtica através del movimiento consciente, sana traumas corporales y conecta con tu naturaleza erótica primordial através de la danza terapéutica tántrica.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Agendar Sesión de Danza Tántrica
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Beneficios del Movimiento Terapéutico Sexual
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
            Tipos de Sesiones de Movimiento y Danza Sexual
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
                    <Link to="/servicios/movimiento-terapeutico/info-sesiones" className="block">
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
            <h2 className="text-3xl font-bold text-primary mb-8">El Movimiento como Medicina Sexual</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-sacred-purple mb-4">Danza Tántrica Sanadora</h3>
                <p className="text-muted-foreground mb-4">
                  El <strong>movimiento terapéutico</strong> es una poderosa herramienta de <strong>sanación sexual</strong> que utiliza la danza consciente para liberar traumas almacenados en el cuerpo, desbloquear energía estancada y expresar la naturaleza erótica auténtica. La <strong>danza tántrica</strong> combina movimientos ondulatorios, expresión corporal libre y técnicas de activación energética.
                </p>
                <p className="text-muted-foreground">
                  A través del <strong>movimiento sexual consciente</strong> y la <strong>danza sensual terapéutica</strong>, reconectamos con nuestra sabiduría corporal primordial, liberamos patrones de represión sexual y cultivamos una expresión erótica fluida, natural y gozosa.
                </p>
              </div>
              
              <div>
                <img 
                  src={movimientoImage} 
                  alt="Danza tántrica y movimiento terapéutico para sanación sexual"
                  className="w-full h-64 object-cover rounded-lg shadow-gentle"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-sacred-purple mb-4">Técnicas de Liberación Corporal Sexual</h3>
            <p className="text-muted-foreground mb-6">
              En mis sesiones de <strong>coaching de movimiento sexual</strong> utilizamos técnicas diversas: <strong>danza de liberación emocional</strong>, <strong>movimientos ondulatorios de la columna</strong>, <strong>expresión pélvica consciente</strong> y <strong>danza de activación kundalini</strong>. Cada sesión está diseñada para liberar bloqueos específicos, expresar emociones reprimidas y reconectar con tu poder sexual natural.
            </p>
            
            <p className="text-muted-foreground mb-8">
              El <strong>movimiento tántrico</strong> no es solo ejercicio físico, sino una práctica de <strong>medicina sexual</strong> que integra cuerpo, emoción y espíritu en una experiencia transformadora de <strong>liberación erótica</strong> y <strong>expresión sexual auténtica</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Libera tu Expresión Sexual Auténtica
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Descubre el poder sanador del movimiento consciente y conecta con tu naturaleza erótica més profunda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Reservar Sesión de Danza
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

export default MovimientoTerapeutico;