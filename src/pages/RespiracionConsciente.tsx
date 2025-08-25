import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Target } from "lucide-react";
import respiracionImage from "@/assets/respiracion-consciente.jpg";

const RespiracionConsciente = () => {
  const beneficios = [
    "Control eyaculatorio masculino y orgasmos múltiples",
    "Regulación del arousal y gestión de la energía sexual",
    "Expansión de la capacidad orgásmica femenina",
    "Sanación de ansiedad sexual através de la respiración",
    "Desarrollo de presencia y mindfulness erótico",
    "Activación de energía kundalini y chakras sexuales",
    "Conexión profunda entre respiración y placer sexual"
  ];

  const tiposSesiones = [
    {
      nombre: "Respiración para Control Eyaculatorio",
      descripcion: "Técnicas especializadas de respiración circular y consciente diseñadas específicamente para desarrollar el control eyaculatorio masculino. Incluye ejercicios de respiración de fuego, retención consciente y técnicas de redireccionamiento energético.",
      duracion: "60-75 minutos",
      enfoque: "Control sexual masculino, duración, multiorgasmos masculinos"
    },
    {
      nombre: "Respiración Orgásmica Femenina",
      descripcion: "Práticas respiratorias avanzadas para expandir la capacidad orgásmica femenina, desarrollar orgasmos de cuerpo completo y conectar con la energía sexual primordial. Incluye respiración ovárica, técnicas de activación yónica y respiración del útero.",
      duracion: "75-90 minutos", 
      enfoque: "Orgasmos femeninos, expansión sexual, energía ovárica"
    },
    {
      nombre: "Respiración Tántrica en Pareja",
      descripcion: "Sesión de sincronización respiratoria para parejas que desean conectar energéticamente y experimentar estados de éxtasis compartido através de técnicas de respiración consciente, sincronizada y circular. Incluye ejercicios de mirada y conexión energética.",
      duracion: "90-120 minutos",
      enfoque: "Sincronización energética, éxtasis compartido, conexión profunda"
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
              Respiración Consciente Tántrica
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Técnicas avanzadas de respiración sexual para desarrollar control eyaculatorio, expandir orgasmos, activar energía kundalini y crear estados de éxtasis através del poder transformador del aliento consciente.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Agendar Sesión de Respiración Tántrica
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Beneficios de la Respiración Consciente Sexual
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
            Tipos de Sesiones de Respiración Sexual
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
                    <Link to="/servicios/respiracion-consciente/info-sesiones" className="block">
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
            <h2 className="text-3xl font-bold text-primary mb-8">El Poder de la Respiración en la Sexualidad Consciente</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-sacred-purple mb-4">Respiración y Control Sexual</h3>
                <p className="text-muted-foreground mb-4">
                  La <strong>respiración consciente</strong> es la herramienta más poderosa para desarrollar <strong>control eyaculatorio</strong>, expandir la <strong>capacidad orgásmica</strong> y activar la <strong>energía sexual kundalini</strong>. A través de técnicas específicas como la <strong>respiración circular</strong>, <strong>respiración de fuego sexual</strong> y <strong>retención consciente</strong>, podemos regular nuestro estado de arousal y crear experiencias sexuales extraordinarias.
                </p>
                <p className="text-muted-foreground">
                  La <strong>respiración tántrica</strong> nos permite canalizar la energía sexual attraverso todo el cuerpo, transformando el placer genital en experiencias de <strong>éxtasis de cuerpo completo</strong> y <strong>orgasmos energéticos</strong> que trascienden la sexualidad convencional.
                </p>
              </div>
              
              <div>
                <img 
                  src={respiracionImage} 
                  alt="Respiración consciente tántrica para control sexual y éxtasis"
                  className="w-full h-64 object-cover rounded-lg shadow-gentle"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-sacred-purple mb-4">Técnicas Avanzadas de Respiración Sexual</h3>
            <p className="text-muted-foreground mb-6">
              En mis sesiones de <strong>coaching respiratorio sexual</strong> enseño técnicas específicas: <strong>respiración ovárica</strong> para mujeres, <strong>respiración testicular</strong> para hombres, <strong>respiración sincronizada en pareja</strong> y <strong>técnicas de activación kundalini</strong>. Cada práctica está diseñada para expandir tu capacidad de placer, desarrollar control sexual y acceder a estados alterados de consciencia através de la sexualidad.
            </p>
            
            <p className="text-muted-foreground mb-8">
              La <strong>respiración sexual consciente</strong> no solo mejora la performance sexual, sino que también sana traumas, libera bloqueos energéticos y cultiva una conexión profunda entre <strong>respiración, placer y espiritualidad</strong> en la tradición tántrica auténtica.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Domina el Arte de la Respiración Sexual
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Transforma tu sexualidad através del poder de la respiración consciente y descubre nuevos niveles de placer y control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Reservar Sesión de Respiración
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

export default RespiracionConsciente;