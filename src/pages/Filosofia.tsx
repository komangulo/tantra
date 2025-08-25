import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import paradigm images
import tantraImg from "@/assets/paradigma-tantra.jpg";
import sexoTantricoImg from "@/assets/paradigma-sexo-tantrico.jpg";
import coachingImg from "@/assets/paradigma-coaching.jpg";
import coachingOntologicoImg from "@/assets/paradigma-coaching-ontologico.jpg";
import coachingSomaticoImg from "@/assets/paradigma-coaching-somatico.jpg";
import sexCoachingImg from "@/assets/paradigma-sex-coaching.jpg";
import sexologicalBodyworkImg from "@/assets/paradigma-sexological-bodywork.jpg";

const Filosofia = () => {
  const paradigmas = [
    {
      id: "tantra",
      title: "Tantra",
      subtitle: "La Sabiduría Ancestral del Despertar Espiritual",
      description: "El tantra es una filosofía milenaria que ve la vida como una manifestación sagrada de la energía divina. Esta práctica ancestral nos enseña a despertar la consciencia a través de la integración de todos los aspectos de la existencia, incluyendo la sexualidad como camino espiritual.",
      keywords: "tantra, espiritualidad, consciencia, energía divina",
      image: tantraImg,
    },
    {
      id: "sexo-tantrico",
      title: "Sexo Tántrico",
      subtitle: "La Sexualidad como Portal de Trascendencia",
      description: "El sexo tántrico trasciende el placer físico para convertirse en una práctica sagrada de conexión espiritual. A través de técnicas específicas de respiración, presencia y energía, transformamos el encuentro íntimo en una experiencia de expansión de consciencia y unión divina.",
      keywords: "sexo tántrico, sexualidad sagrada, conexión espiritual, energía sexual",
      image: sexoTantricoImg,
    },
    {
      id: "coaching",
      title: "Coaching",
      subtitle: "Acompañamiento para la Transformación Personal",
      description: "El coaching es una metodología de acompañamiento que facilita el autodescubrimiento y la transformación personal. A través de preguntas poderosas y herramientas específicas, te ayudo a identificar y superar obstáculos, desarrollar tu potencial y crear la vida que realmente deseas.",
      keywords: "coaching personal, transformación, desarrollo personal, crecimiento",
      image: coachingImg,
    },
    {
      id: "coaching-ontologico",
      title: "Coaching Ontológico",
      subtitle: "Transformación del Ser desde la Raíz",
      description: "El coaching ontológico trabaja con el 'ser' de la persona, no solo con sus comportamientos. Esta disciplina profunda nos permite transformar la forma en que observamos el mundo, nuestras emociones y nuestras acciones, generando cambios fundamentales en nuestra forma de vivir y relacionarnos.",
      keywords: "coaching ontológico, transformación del ser, ontología, cambio profundo",
      image: coachingOntologicoImg,
    },
    {
      id: "coaching-somatico",
      title: "Coaching Somático",
      subtitle: "El Cuerpo como Fuente de Sabiduría",
      description: "El coaching somático reconoce que el cuerpo guarda la memoria de nuestras experiencias y emociones. A través del trabajo corporal consciente, la respiración y la atención somática, accedemos a información valiosa para sanar traumas y desarrollar una relación más auténtica con nosotros mismos.",
      keywords: "coaching somático, sabiduría corporal, trauma somático, consciencia corporal",
      image: coachingSomaticoImg,
    },
    {
      id: "sex-coaching",
      title: "Sex Coaching",
      subtitle: "Acompañamiento Especializado en Sexualidad",
      description: "El sex coaching es una disciplina especializada que aborda todos los aspectos de la sexualidad humana. Como sex coach certificado, proporciono educación sexual integral, trabajo con disfunciones, exploración de la identidad sexual y desarrollo de una sexualidad plena y consciente.",
      keywords: "sex coaching, sexualidad consciente, educación sexual, bienestar sexual",
      image: sexCoachingImg,
    },
    {
      id: "sexological-bodywork",
      title: "Sexological Bodywork",
      subtitle: "Trabajo Corporal Sexológico Integral",
      description: "El Sexological Bodywork es una modalidad terapéutica que combina educación sexual, trabajo corporal y técnicas somáticas. Esta práctica permite abordar de manera integral los aspectos físicos, emocionales y energéticos de la sexualidad para facilitar procesos profundos de sanación y expansión.",
      keywords: "sexological bodywork, trabajo corporal sexual, sanación sexual, terapia somática",
      image: sexologicalBodyworkImg,
    },
  ];

  const principios = [
    "El placer es tu derecho natural y camino de sanación",
    "Tu cuerpo es templo sagrado y fuente de sabiduría",
    "La sexualidad consciente transforma todos los aspectos de tu vida",
    "Cada persona tiene su ritmo y proceso único de despertar",
    "La vulnerabilidad es fuerza y la entrega es poder",
    "El amor y el erotismo pueden coexistir en armonía",
  ];

  return (
    <div className="min-h-screen bg-gradient-gentle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Mi Filosofía: Paradigmas de Coaching y Tantra
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            Mi enfoque integra diferentes paradigmas y metodologías para ofrecerte un camino 
            holístico hacia la sanación sexual, el placer consciente y el crecimiento personal. 
            Cada paradigma aporta herramientas únicas para tu transformación.
          </p>
        </div>
      </section>

      {/* Paradigmas Section */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Los Paradigmas Fundamentales de Mi Práctica
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {paradigmas.map((paradigma, index) => (
              <Card key={index} className="group hover:shadow-sacred transition-all duration-500 bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={paradigma.image} 
                    alt={paradigma.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-primary group-hover:text-sacred-purple transition-colors">
                    {paradigma.title}
                  </CardTitle>
                  <CardDescription className="text-sacred-gold font-medium">
                    {paradigma.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {paradigma.description}
                  </p>
                  <div className="text-xs text-sacred-purple/70 mb-4">
                    Palabras clave: {paradigma.keywords}
                  </div>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full group/btn border-sacred-gold/30 hover:bg-sacred-gold/10 hover:border-sacred-gold/50"
                  >
                    <Link to={`/paradigma/${paradigma.id}`}>
                      Más Información
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principios Section */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Mis Principios Fundamentales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principios.map((principio, index) => (
              <div 
                key={index} 
                className="bg-gradient-sunset/10 p-6 rounded-lg border border-sacred-gold/20 hover:shadow-gentle transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-sunset rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-foreground font-medium">
                    {principio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            ¿Resonas con Esta Filosofía?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Si te sientes llamado/a a explorar tu sexualidad desde un lugar sagrado y consciente, 
            estoy aquí para acompañarte en este hermoso viaje de autodescubrimiento.
          </p>
          <div className="bg-gradient-hero p-8 rounded-2xl shadow-sacred">
            <p className="text-primary-foreground text-lg font-medium italic">
              "La sexualidad consciente no es solo sobre el placer del cuerpo, 
              es sobre el despertar del alma."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Filosofia;