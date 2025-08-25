import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Heart, Brain, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import conversacionImage from "@/assets/conversacion-terapeutica.jpg";

const ConversacionTerapeutica = () => {
  const beneficios = [
    "Mejora la comunicación íntima y sexual en pareja",
    "Identifica y transforma creencias limitantes sobre la sexualidad",
    "Desarrolla confianza y autoestima sexual",
    "Reduce ansiedad y bloqueos emocionales relacionados con el sexo",
    "Fomenta la expresión auténtica de deseos y fantasías",
    "Establece límites saludables en la intimidad",
    "Mejora la conexión emocional en las relaciones",
    "Desarrolla habilidades de escucha activa y empatía sexual"
  ];

  const tiposSesiones = [
    {
      tipo: "Sesión Individual de Coaching Sexual",
      descripcion: "Conversación terapéutica personalizada para explorar tu sexualidad, resolver bloqueos y desarrollar una comunicación sexual más auténtica y placentera.",
      duracion: "90 minutos",
      enfoque: "Desarrollo personal sexual"
    },
    {
      tipo: "Sesión de Pareja - Diálogo Tántrico",
      descripcion: "Sesión erótica y sensual donde las parejas aprenden técnicas de comunicación tántrica para profundizar su conexión íntima y sexual.",
      duracion: "120 minutos",
      enfoque: "Comunicación en pareja"
    },
    {
      tipo: "Sesión de Exploración Sensual",
      descripcion: "Conversación combinada con exploración sensorial para conectar el diálogo con las sensaciones corporales y el placer consciente.",
      duracion: "150 minutos",
      enfoque: "Integración mente-cuerpo"
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
                Coaching Sexual Tántrico
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
                Conversación Terapéutica Sexual
              </h1>
              <h2 className="text-2xl text-sacred-gold font-medium mb-6">
                La Conversación como Herramienta de Coaching Sexual Tántrico
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                La conversación terapéutica sexual es la base fundamental de toda transformación íntima. 
                A través del diálogo profundo y consciente, exploramos creencias, miedos y patrones que 
                limitan el placer y la expresión sexual auténtica. Esta técnica de coaching sexual 
                tántrico permite crear un espacio seguro para la sanación y el crecimiento personal.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary">Comunicación Sexual</Badge>
                <Badge variant="secondary">Diálogo Íntimo</Badge>
                <Badge variant="secondary">Coaching Sexual</Badge>
                <Badge variant="secondary">Terapia Tántrica</Badge>
              </div>
              <Link to="/contacto">
                <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred">
                  Agendar Sesión de Conversación Terapéutica
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src={conversacionImage} 
                alt="Conversación terapéutica sexual - Coaching sexual tántrico para comunicación íntima"
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
            Beneficios de la Conversación Terapéutica Sexual
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
            Tipos de Sesiones Sensuales y Tántricas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiposSesiones.map((sesion, index) => (
              <Card key={index} className="group hover:shadow-sacred transition-all duration-500 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {index === 0 && <Heart className="text-sacred-purple" size={24} />}
                    {index === 1 && <Users className="text-sacred-purple" size={24} />}
                    {index === 2 && <Brain className="text-sacred-purple" size={24} />}
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
            La Conversación como Camino de Sanación Sexual
          </h3>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En el coaching sexual tántrico, la <strong>conversación terapéutica sexual</strong> es mucho más que 
              palabras. Es un ritual sagrado de conexión donde exploramos los aspectos más profundos de la 
              sexualidad humana. Esta práctica de <strong>comunicación sexual consciente</strong> permite acceder 
              a niveles de intimidad y placer que van más allá de lo físico.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Durante las sesiones de <strong>diálogo íntimo tántrico</strong>, trabajamos con técnicas específicas 
              que incluyen la escucha profunda, la expresión auténtica de deseos y la comunicación no violenta 
              aplicada a la sexualidad. Estas herramientas de <strong>coaching sexual</strong> transforman no solo 
              la manera de comunicarnos sobre sexo, sino también cómo experimentamos el placer y la conexión.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              La <strong>conversación terapéutica sexual</strong> integra elementos del tantra tradicional con 
              técnicas modernas de coaching ontológico y sexological bodywork, creando un enfoque holístico 
              para la sanación y expansión sexual. Es el primer paso hacia una sexualidad más consciente, 
              placentera y auténtica.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Inicia tu Transformación Sexual Hoy
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            La conversación es el primer paso hacia una sexualidad más plena y consciente. 
            Agenda tu sesión de coaching sexual tántrico y descubre el poder transformador del diálogo íntimo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred">
                Agendar Sesión Individual
              </Button>
            </Link>
            <Link to="/servicios">
              <Button size="lg" variant="outline" className="hover:bg-gradient-sunset hover:text-primary-foreground">
                Ver Todas las Técnicas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConversacionTerapeutica;