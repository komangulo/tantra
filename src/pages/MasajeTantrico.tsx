import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Flower, Zap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import massageImage from "@/assets/massage-healing.jpg";

const MasajeTantrico = () => {
  const beneficios = [
    "Libera tensiones corporales y bloqueos energéticos sexuales",
    "Aumenta la sensibilidad y conexión con el placer corporal",
    "Mejora la circulación sanguínea y energética en zonas íntimas",
    "Reduce estrés y ansiedad relacionados con la sexualidad",
    "Desarrolla mayor conciencia corporal y sensorial",
    "Facilita orgasmos más intensos y placenteros",
    "Sana traumas sexuales almacenados en el cuerpo",
    "Expande la capacidad de recibir y dar placer consciente",
    "Equilibra la energía masculina y femenina interior",
    "Cultiva la sexualidad sagrada y el placer como sanación"
  ];

  const tiposSesiones = [
    {
      tipo: "Masaje Yoni Tántrico Sensual",
      descripcion: "Masaje erótico y terapéutico especializado en la anatomía femenina. Sesión sensual que integra técnicas tántricas para despertar la energía sexual y sanar bloqueos del yoni sagrado.",
      duracion: "120 minutos",
      enfoque: "Sanación femenina"
    },
    {
      tipo: "Masaje Lingam Tántrico Erótico",
      descripcion: "Masaje sexual terapéutico enfocado en la energía masculina. Sesión sensual que combina placer consciente con técnicas de control eyaculatorio y expansión orgásmica.",
      duracion: "90 minutos",
      enfoque: "Energía masculina"
    },
    {
      tipo: "Masaje Corporal Completo Tántrico",
      descripcion: "Experiencia sensual de cuerpo entero que integra masaje erótico, respiración tántrica y conexión energética. Sesión sexual completa para despertar todo el potencial de placer.",
      duracion: "180 minutos",
      enfoque: "Integración total"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-gentle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-sacred-purple/20 text-sacred-purple mb-4">
                Masaje Tántrico Sensual
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
                Masaje Tántrico Terapéutico
              </h1>
              <h2 className="text-2xl text-sacred-gold font-medium mb-6">
                Masaje Sensual para el Placer Consciente y la Sanación Sexual
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                El masaje tántrico es la expresión más pura del placer como medicina. A través de técnicas 
                sensuales y eróticas especializadas en masaje yoni, masaje lingam y masaje corporal completo, 
                liberamos tensiones profundas, desbloqueamos energía sexual estancada y cultivamos el placer 
                sagrado como camino de sanación y transformación personal.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary">Masaje Yoni</Badge>
                <Badge variant="secondary">Masaje Lingam</Badge>
                <Badge variant="secondary">Masaje Erótico</Badge>
                <Badge variant="secondary">Sanación Sexual</Badge>
              </div>
              <Link to="/contacto">
                <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred">
                  Agendar Sesión de Masaje Tántrico
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src={massageImage} 
                alt="Masaje tántrico terapéutico - Masaje yoni y lingam para sanación sexual sensual"
                className="rounded-lg shadow-sacred w-full"
              />
              <div className="absolute inset-0 bg-gradient-sacred/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-16 px-6 sm:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-hero bg-clip-text text-transparent">
            Beneficios del Masaje Tántrico Sensual
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                <CheckCircle className="text-sacred-gold mt-1 flex-shrink-0" size={20} />
                <p className="text-foreground">{beneficio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Sesiones */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-hero bg-clip-text text-transparent">
            Tipos de Sesiones Eróticas y Sensuales de Masaje Tántrico
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiposSesiones.map((sesion, index) => (
              <Card key={index} className="group hover:shadow-sacred transition-all duration-500 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {index === 0 && <Flower className="text-sacred-purple" size={24} />}
                    {index === 1 && <Zap className="text-sacred-purple" size={24} />}
                    {index === 2 && <Heart className="text-sacred-purple" size={24} />}
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-sacred-purple transition-colors">
                    {sesion.tipo}
                  </CardTitle>
                  <CardDescription className="text-sacred-gold font-medium">
                    Duración: {sesion.duracion}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {sesion.descripcion}
                  </p>
                  <Badge className="bg-sacred-purple/20 text-sacred-purple">
                    {sesion.enfoque}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-6 sm:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-hero bg-clip-text text-transparent">
            El Masaje Tántrico como Medicina Sexual
          </h3>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              El <strong>masaje tántrico terapéutico</strong> trasciende el concepto tradicional de masaje para 
              convertirse en una práctica sagrada de sanación sexual. A través del <strong>masaje yoni</strong> 
              (masaje del yoni sagrado femenino) y el <strong>masaje lingam</strong> (masaje del lingam masculino), 
              accedemos a niveles profundos de placer consciente y liberación energética.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Las técnicas de <strong>masaje erótico tántrico</strong> que utilizo integran la sabiduría ancestral 
              del tantra con conocimientos modernos de anatomía sexual y neurofisiología del placer. Cada sesión 
              sensual está diseñada para despertar la energía kundalini, desbloquear traumas sexuales almacenados 
              en el cuerpo y expandir la capacidad de experimentar <strong>orgasmos múltiples</strong> y placer extendido.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              El <strong>masaje corporal completo tántrico</strong> es una experiencia transformadora que combina 
              el trabajo con los chakras, la respiración consciente y técnicas específicas de sensibilización 
              corporal. Esta práctica de <strong>sanación sexual</strong> permite no solo liberar tensiones físicas, 
              sino también sanar heridas emocionales y reconectar con nuestra naturaleza sexual auténtica.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Experimenta el Poder Sanador del Masaje Tántrico
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Descubre cómo el masaje sensual puede transformar tu relación con el placer y la sexualidad. 
            Agenda tu sesión de masaje tántrico terapéutico y experimenta la sanación a través del tacto consciente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred">
                Agendar Masaje Tántrico
              </Button>
            </Link>
            <Link to="/servicios">
              <Button size="lg" variant="outline" className="hover:bg-gradient-sunset hover:text-primary-foreground">
                Explorar Otras Técnicas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MasajeTantrico;