import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Users, Clock, Heart } from "lucide-react";
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

const ParadigmaDetalle = () => {
  const { id } = useParams();

  const paradigmasData: Record<string, any> = {
    "tantra": {
      title: "Tantra",
      subtitle: "La Sabiduría Ancestral del Despertar Espiritual",
      image: tantraImg,
      description: "El tantra es una filosofía milenaria originaria de la India que ve la vida como una manifestación sagrada de la energía divina. No es solo una práctica sexual, sino un camino integral de despertar espiritual que abraza todos los aspectos de la existencia humana.",
      longDescription: "El tantra, que significa 'tejer' o 'expandir', es un sistema filosófico y práctico que reconoce la divinidad inherente en toda la creación. A diferencia de muchas tradiciones espirituales que rechazan el mundo material, el tantra celebra la vida terrenal como un camino hacia la iluminación. En mi práctica como maestro tántrico, integro las enseñanzas tradicionales con enfoques modernos de psicología transpersonal y trabajo energético.",
      benefits: [
        "Despertar de la consciencia espiritual",
        "Integración de aspectos físicos y espirituales",
        "Desarrollo de la sensibilidad energética",
        "Sanación de traumas ancestrales",
        "Conexión profunda con lo sagrado",
        "Transformación de la percepción de la realidad",
        "Equilibrio entre el dar y recibir",
        "Expansión de la capacidad de amar"
      ],
      sessions: [
        {
          name: "Iniciación Tántrica",
          duration: "2 horas",
          description: "Introducción a los principios básicos del tantra, meditaciones de conexión energética y prácticas de respiración consciente."
        },
        {
          name: "Despertar Energético",
          duration: "90 minutos",
          description: "Trabajo con los chakras, activación de la energía Kundalini y técnicas de canalización energética."
        },
        {
          name: "Ritual Sagrado Personal",
          duration: "3 horas",
          description: "Ceremonia personalizada de conexión con lo divino, incluyendo meditación, trabajo corporal y activación energética."
        }
      ],
      keywords: "tantra, espiritualidad, consciencia, energía divina, kundalini, chakras, meditación tántrica"
    },
    "sexo-tantrico": {
      title: "Sexo Tántrico",
      subtitle: "La Sexualidad como Portal de Trascendencia",
      image: sexoTantricoImg,
      description: "El sexo tántrico trasciende el placer físico para convertirse en una práctica sagrada de conexión espiritual. Es un arte ancestral que honra la sexualidad como una de las fuerzas más poderosas para el despertar de la consciencia.",
      longDescription: "El sexo tántrico no busca el orgasmo como meta, sino la expansión de la consciencia a través del encuentro íntimo. Esta práctica milenaria enseña a usar la energía sensual como combustible para la transformación espiritual. A través de técnicas específicas de respiración, presencia consciente y movimiento energético, transformamos el encuentro íntimo en una experiencia de unión divina que sana, transforma y eleva.",
      benefits: [
        "Expansión de la consciencia durante la intimidad",
        "Sanación de traumas y bloqueos íntimos",
        "Aumento exponencial de la sensibilidad",
        "Desarrollo de orgasmos energéticos",
        "Conexión espiritual profunda con la pareja",
        "Transformación de la energía en fuerza creativa",
        "Equilibrio de las polaridades masculina y femenina",
        "Experiencia de éxtasis prolongado y consciente"
      ],
      sessions: [
        {
          name: "Fundamentos del Sexo Tántrico",
          duration: "2 horas",
          description: "Introducción a las técnicas básicas de respiración, presencia y conexión energética durante la intimidad."
        },
        {
          name: "Masaje Tántrico Sagrado",
          duration: "90 minutos",
          description: "Técnicas de masaje tántrico para despertar la energía sensual y crear espacios sagrados de intimidad."
        },
        {
          name: "Ritual de Unión Sagrada",
          duration: "3 horas",
          description: "Ceremonia completa de sexo tántrico incluyendo preparación energética, encuentro sagrado y integración espiritual."
        }
      ],
      keywords: "sexo tántrico, sexualidad sagrada, conexión espiritual, energía sensual, orgasmo energético, intimidad consciente"
    },
    "coaching": {
      title: "Coaching",
      subtitle: "Acompañamiento para la Transformación Personal",
      image: coachingImg,
      description: "El coaching es una metodología poderosa de acompañamiento que facilita el autodescubrimiento y la transformación personal. Como coach certificado, utilizo herramientas específicas para ayudarte a crear la vida que realmente deseas.",
      longDescription: "El coaching es mucho más que dar consejos o enseñar técnicas. Es un proceso de facilitación que te ayuda a descubrir tus propias respuestas, desarrollar tu potencial innato y crear cambios duraderos en tu vida. Mi enfoque integra coaching tradicional con elementos de psicología transpersonal y trabajo energético, creando un espacio único de transformación personal.",
      benefits: [
        "Claridad en objetivos y propósito de vida",
        "Desarrollo del potencial personal",
        "Superación de creencias limitantes",
        "Mejora en la toma de decisiones",
        "Aumento de la autoconfianza",
        "Desarrollo de habilidades de liderazgo",
        "Balance vida personal-profesional",
        "Creación de estrategias efectivas de cambio"
      ],
      sessions: [
        {
          name: "Sesión de Descubrimiento",
          duration: "90 minutos",
          description: "Exploración profunda de objetivos, valores y visión personal para crear un mapa de transformación."
        },
        {
          name: "Coaching de Breakthrough",
          duration: "2 horas",
          description: "Sesión intensiva para superar obstáculos específicos y crear avances significativos."
        },
        {
          name: "Proceso de Transformación Integral",
          duration: "3 meses",
          description: "Programa completo de coaching personalizado con sesiones semanales y seguimiento continuo."
        }
      ],
      keywords: "coaching personal, transformación, desarrollo personal, crecimiento, potencial humano, liderazgo"
    },
    "coaching-ontologico": {
      title: "Coaching Ontológico",
      subtitle: "Transformación del Ser desde la Raíz",
      image: coachingOntologicoImg,
      description: "El coaching ontológico es una disciplina profunda que trabaja con el 'ser' de la persona, no solo con sus comportamientos. Genera cambios fundamentales en la forma de observar y vivir la vida.",
      longDescription: "El coaching ontológico se basa en la premisa de que los seres humanos somos seres lingüísticos, emocionales y corporales. Este enfoque revolucionario no se enfoca solo en lo que hacemos, sino en quiénes somos siendo. A través del trabajo con el lenguaje, las emociones y la corporalidad, facilitamos transformaciones profundas que impactan todos los aspectos de la vida.",
      benefits: [
        "Transformación profunda de la identidad",
        "Nueva forma de observar la realidad",
        "Expansión de posibilidades personales",
        "Desarrollo de competencias emocionales",
        "Mejora en la comunicación y relaciones",
        "Incremento de la efectividad personal",
        "Desarrollo de nuevas competencias del ser",
        "Cambios duraderos y sustentables"
      ],
      sessions: [
        {
          name: "Diagnóstico Ontológico",
          duration: "2 horas",
          description: "Evaluación integral de dominios lingüístico, emocional y corporal para identificar áreas de transformación."
        },
        {
          name: "Sesión de Quiebre Ontológico",
          duration: "90 minutos",
          description: "Trabajo profundo para generar quiebres que permitan el surgimiento de nuevas posibilidades del ser."
        },
        {
          name: "Proceso de Rediseño Personal",
          duration: "6 meses",
          description: "Programa integral de transformación ontológica con sesiones quincenales y prácticas específicas."
        }
      ],
      keywords: "coaching ontológico, transformación del ser, ontología, cambio profundo, identidad, competencias del ser"
    },
    "coaching-somatico": {
      title: "Coaching Somático",
      subtitle: "El Cuerpo como Fuente de Sabiduría",
      image: coachingSomaticoImg,
      description: "El coaching somático reconoce que el cuerpo guarda la memoria de nuestras experiencias y es una fuente invaluable de información para el crecimiento personal y la sanación.",
      longDescription: "El enfoque somático del coaching integra la sabiduría del cuerpo en el proceso de transformación personal. Reconocemos que el cuerpo no miente y que las sensaciones corporales nos proporcionan información valiosa sobre nuestros patrones, traumas y potenciales. A través de la atención consciente al cuerpo, la respiración y el movimiento, accedemos a niveles profundos de sanación y transformación.",
      benefits: [
        "Conexión profunda con la sabiduría corporal",
        "Sanación de traumas almacenados en el cuerpo",
        "Desarrollo de la inteligencia somática",
        "Liberación de tensiones crónicas",
        "Aumento de la vitalidad y energía",
        "Mejora en la regulación emocional",
        "Desarrollo de límites sanos",
        "Integración cuerpo-mente-espíritu"
      ],
      sessions: [
        {
          name: "Mapeo Corporal",
          duration: "90 minutos",
          description: "Exploración consciente del cuerpo para identificar tensiones, bloqueos y áreas de vitalidad."
        },
        {
          name: "Liberación Somática",
          duration: "2 horas",
          description: "Trabajo intensivo de liberación de traumas y tensiones usando técnicas de movimiento y respiración."
        },
        {
          name: "Integración Somática",
          duration: "75 minutos",
          description: "Sesión de integración de nuevos patrones corporales y consolidación de cambios somáticos."
        }
      ],
      keywords: "coaching somático, sabiduría corporal, trauma somático, consciencia corporal, inteligencia somática"
    },
    "sex-coaching": {
      title: "Sex Coaching",
      subtitle: "Acompañamiento Especializado en Sexualidad",
      image: sexCoachingImg,
      description: "El sex coaching es una disciplina especializada que aborda todos los aspectos de la sexualidad humana con un enfoque holístico, educativo y transformador.",
      longDescription: "El sex coaching va más allá de la terapia sexual tradicional, integrando educación sexual integral, trabajo con creencias y patrones, exploración de la identidad erótica y desarrollo de una sexualidad consciente y plena. Como sex coach certificado, creo un espacio seguro y sin juicios para explorar todos los aspectos de tu sexualidad, desde los más básicos hasta los más complejos y espirituales.",
      benefits: [
        "Educación sexual integral y actualizada",
        "Superación de disfunciones y bloqueos íntimos",
        "Desarrollo de una identidad erótica auténtica",
        "Mejora en la comunicación íntima",
        "Exploración segura de fantasías y deseos",
        "Sanación de traumas relacionados con la sexualidad",
        "Aumento del placer y la satisfacción íntima",
        "Desarrollo de una sexualidad consciente y espiritual"
      ],
      sessions: [
        {
          name: "Evaluación de Bienestar Íntimo",
          duration: "90 minutos",
          description: "Evaluación integral de la salud íntima, patrones relacionales y objetivos de crecimiento erótico."
        },
        {
          name: "Sesión de Educación Erótica",
          duration: "75 minutos",
          description: "Educación personalizada sobre anatomía, respuesta sensual y técnicas de placer consciente."
        },
        {
          name: "Proceso de Despertar Erótico",
          duration: "3 meses",
          description: "Programa completo de desarrollo de una sexualidad plena con sesiones semanales y ejercicios prácticos."
        }
      ],
      keywords: "sex coaching, sexualidad consciente, educación erótica, bienestar íntimo, identidad erótica, placer consciente"
    },
    "sexological-bodywork": {
      title: "Sexological Bodywork",
      subtitle: "Trabajo Corporal Íntimo Integral",
      image: sexologicalBodyworkImg,
      description: "El Sexological Bodywork es una modalidad terapéutica única que combina educación erótica, trabajo corporal y técnicas somáticas para abordar integralmente la sexualidad.",
      longDescription: "El Sexological Bodywork es una práctica profesional que utiliza el tacto consciente, técnicas de respiración, movimiento corporal y educación erótica para facilitar la sanación y el crecimiento en el ámbito de la sexualidad. Esta modalidad reconoce que muchos aspectos de la sexualidad están almacenados en el cuerpo y requieren un enfoque corporal directo para su transformación.",
      benefits: [
        "Sanación profunda de traumas íntimos",
        "Desarrollo de sensibilidad y placer corporal",
        "Liberación de bloqueos energéticos relacionados con la sexualidad",
        "Educación anatómica experiencial",
        "Desarrollo de límites sanos en la intimidad",
        "Conexión profunda con el cuerpo erótico",
        "Integración de aspectos fragmentados de la sexualidad",
        "Expansión de la capacidad de placer y éxtasis"
      ],
      sessions: [
        {
          name: "Consulta de Sexological Bodywork",
          duration: "2 horas",
          description: "Evaluación integral y primera sesión de trabajo corporal enfocado en objetivos específicos de sanación erótica."
        },
        {
          name: "Sesión de Mapping Corporal Erótico",
          duration: "90 minutos",
          description: "Exploración consciente del cuerpo erótico para identificar áreas de placer, tensión y potencial de sanación."
        },
        {
          name: "Proceso de Sanación Erótica Integral",
          duration: "6 sesiones",
          description: "Programa completo de transformación íntima usando técnicas avanzadas de Sexological Bodywork."
        }
      ],
      keywords: "sexological bodywork, trabajo corporal erótico, sanación íntima, cuerpo erótico, tacto consciente, terapia somática"
    }
  };

  const paradigma = paradigmasData[id as string];

  if (!paradigma) {
    return (
      <div className="min-h-screen bg-gradient-gentle flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Paradigma no encontrado</h1>
          <Link to="/filosofia">
            <Button variant="outline">Volver a Filosofía</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-gentle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/filosofia" className="inline-flex items-center text-primary hover:text-sacred-purple transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Filosofía
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
                {paradigma.title}
              </h1>
              <p className="text-xl text-sacred-gold font-medium mb-6">
                {paradigma.subtitle}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {paradigma.description}
              </p>
            </div>
            
            <div className="relative">
              <img 
                src={paradigma.image} 
                alt={paradigma.title}
                className="w-full h-96 object-cover rounded-2xl shadow-sacred"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Descripción Extendida */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Comprende Profundamente Este Paradigma
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              {paradigma.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Beneficios de Este Enfoque
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paradigma.benefits.map((benefit: string, index: number) => (
              <div key={index} className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:shadow-gentle transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-sacred-gold flex-shrink-0 mt-1" />
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Sesiones */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sunset/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Tipos de Sesiones Especializadas
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {paradigma.sessions.map((session: any, index: number) => (
              <Card key={index} className="group hover:shadow-sacred transition-all duration-500 bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-sacred-gold/20 text-sacred-gold">
                      <Clock className="mr-1 h-3 w-3" />
                      {session.duration}
                    </Badge>
                    <Heart className="h-5 w-5 text-sacred-purple" />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-sacred-purple transition-colors">
                    {session.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {session.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Keywords SEO */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Palabras Clave y Especialización
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Términos relacionados con este paradigma:
          </p>
          <p className="text-sacred-purple/80 italic">
            {paradigma.keywords}
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary-foreground">
            ¿Resonas con Este Paradigma?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Si sientes que este enfoque puede ser transformador para ti, 
            estoy aquí para acompañarte en este hermoso proceso de crecimiento.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contacto">
              <Users className="mr-2 h-5 w-5" />
              Reservar Consulta
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParadigmaDetalle;