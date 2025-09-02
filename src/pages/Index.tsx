import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-tantra.jpg";

const Index = () => {
  const beneficios = [
    {
      title: "PLACER",
      description: "Experimenta el placer más sutil e intenso, alcanza el éxtasis y explora nuevas formas de erotismo y amor. Descubre la sexualidad sagrada a través del tantra.",
      cta: "EXPERIMENTA EL PLACER",
      link: "/servicios",
      gradient: "bg-gradient-sunset",
      keywords: "placer sexual, éxtasis, erotismo, tantra sexual"
    },
    {
      title: "SALUD", 
      description: "Soluciona cualquier problema sexual: físico, emocional o mental, de forma placentera y rápida. Mejora tu bienestar general y salud sexual.",
      cta: "MEJORA TU SALUD",
      link: "/contacto",
      gradient: "bg-gradient-sacred",
      keywords: "salud sexual, disfunción sexual, bienestar, sanación sexual"
    },
    {
      title: "CRECIMIENTO",
      description: "La sexualidad como camino de aprendizaje y transformación. Un enfoque efectivo, placentero y rápido, basado en la sabiduría ancestral del tantra.",
      cta: "TRANSFORMA TU SER", 
      link: "/filosofia",
      gradient: "bg-gradient-hero",
      keywords: "crecimiento personal, transformación, desarrollo espiritual"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-gentle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Tantra Sexual - Coach y Maestro de Tantra para el Placer Consciente y Crecimiento Personal"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-8 leading-tight">
            Transforma tu Vida a través del 
            <span className="block text-sacred-purple/90">Tantra Sexual</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            Descubre un camino de <strong>sanación sexual</strong> y <strong>desarrollo personal</strong> a través del tantra. 
            Como tu <strong>coach sexual</strong> y <strong>maestro de tantra</strong>, te guiaré hacia una vida más plena, 
            placentera y consciente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-sunset hover:shadow-sacred text-lg px-8 py-4 transition-all duration-300"
            >
              <Link to="/contacto">Consulta Gratuita</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-sacred-gold text-sacred-purple hover:bg-sacred-gold/10 text-lg px-8 py-4 transition-all duration-300"
            >
              <Link to="/servicios">Conoce las Técnicas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className="py-16 px-6 sm:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sacred-purple mb-6">
              Tantra sexual y coach sexual | Descubre una experiencia transformadora
            </h1>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-sacred-purple mb-4">¿Qué es el tantra sexual?</h2>
              <div className="ml-6 space-y-4 mt-4">
                <h3 className="text-xl font-semibold text-sacred-purple/90">El origen del tantra y su conexión con la sexualidad</h3>
                <h3 className="text-xl font-semibold text-sacred-purple/90">Cómo el tantra sexual potencia la energía y la intimidad</h3>
              </div>
            </div>

            <div className="pt-8 border-t border-sacred-gold/20">
              <h2 className="text-3xl font-bold text-sacred-purple mb-4">Beneficios del tantra sexual en tu vida</h2>
              <div className="ml-6 space-y-4 mt-4">
                <h3 className="text-xl font-semibold text-sacred-purple/90">Conexión profunda con tu cuerpo y tu pareja</h3>
                <h3 className="text-xl font-semibold text-sacred-purple/90">Sanación emocional y liberación de bloqueos</h3>
                <h3 className="text-xl font-semibold text-sacred-purple/90">Desarrollo de la energía sexual como fuerza vital</h3>
                <h3 className="text-xl font-semibold text-sacred-purple/90">Aumento del placer consciente y duradero</h3>
              </div>
            </div>

            <div className="pt-8 border-t border-sacred-gold/20">
              <h2 className="text-3xl font-bold text-sacred-purple mb-4">¿Qué es un coach sexual?</h2>
              <div className="ml-6 space-y-4 mt-4">
                <h3 className="text-xl font-semibold text-sacred-purple/90">Diferencia entre terapeuta sexual y coach sexual</h3>
                <h3 className="text-xl font-semibold text-sacred-purple/90">Cómo un coach sexual te guía en el autoconocimiento</h3>
                <h3 className="text-xl font-semibold text-sacred-purple/90">El papel del coach sexual en el tantra</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-b from-white/50 to-sacred-beige/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Tu Camino hacia la Transformación Sexual
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="group hover:shadow-sacred transition-all duration-500 bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
                <div className={`h-2 ${beneficio.gradient}`}></div>
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl font-bold text-primary group-hover:text-sacred-purple transition-colors mb-4">
                    {beneficio.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {beneficio.description}
                  </p>
                  
                  <Button 
                    asChild 
                    className={`w-full ${beneficio.gradient} hover:shadow-gentle text-primary-foreground font-semibold py-3 transition-all duration-300`}
                  >
                    <Link to={beneficio.link}>{beneficio.cta}</Link>
                  </Button>
                  
                  <div className="text-xs text-sacred-purple/70 mt-4">
                    {beneficio.keywords}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Técnicas Preview */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-sacred/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-primary">
            Técnicas de Coaching Sexual y Tantra
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Utilizo 10 técnicas fundamentales para ayudarte a alcanzar el <strong>placer consciente</strong>, 
            superar disfunciones sexuales y experimentar la <strong>sexualidad sagrada</strong>.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {[
              "Conversación Terapéutica", "Meditación Tántrica", "Mapping Corporal", 
              "Masaje Tántrico", "Respiración Consciente", "Movimiento Liberador",
              "Expresión Vocal", "Masturbación Sagrada", "Ejercicios Kegel", "Entrega y Posesión"
            ].map((tecnica, index) => (
              <div key={index} className="p-4 bg-gradient-sunset/10 rounded-lg border border-sacred-gold/20 hover:shadow-gentle transition-all duration-300">
                <p className="text-sm font-medium text-sacred-purple">{tecnica}</p>
              </div>
            ))}
          </div>
          
          <Button asChild size="lg" className="bg-gradient-sacred hover:shadow-sacred">
            <Link to="/servicios">Explorar Todas las Técnicas</Link>
          </Button>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-hero p-12 rounded-3xl shadow-sacred">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              ¿Listo para Transformar tu Sexualidad?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Como <strong>maestro de tantra</strong> certificado y <strong>coach sexual</strong> especializado, 
              estoy aquí para acompañarte en este sagrado viaje hacia el placer consciente y la sanación sexual.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="bg-white text-sacred-purple hover:bg-sacred-gold/20 font-semibold px-8 py-4"
            >
              <Link to="/contacto">Agenda tu Consulta Gratuita</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Sección de Coach Sexual */}
      <section className="py-12 px-6 sm:px-8 bg-gradient-to-b from-sacred-beige/30 to-white/50">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-sacred-purple mb-4">
            Coach Sexual Profesional
          </h1>
          
          <div className="space-y-6 text-left">
            <div>
              <h2 className="text-lg font-bold text-sacred-purple mb-3">¿Por qué necesitas un Coach Sexual?</h2>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-sacred-purple/90">Supera bloqueos emocionales y creencias limitantes</h3>
                <h3 className="text-base font-medium text-sacred-purple/90">Mejora la comunicación en tu relación de pareja</h3>
                <h3 className="text-base font-medium text-sacred-purple/90">Descubre el placer consciente y la intimidad profunda</h3>
              </div>
            </div>
            
            <div className="pt-6 border-t border-sacred-purple/20">
              <h2 className="text-lg font-bold text-sacred-purple mb-3">Mi Enfoque como Coach Sexual</h2>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-sacred-purple/90">Sesiones personalizadas adaptadas a tus necesidades</h3>
                <h3 className="text-base font-medium text-sacred-purple/90">Técnicas de tantra y mindfulness aplicadas a la sexualidad</h3>
                <h3 className="text-base font-medium text-sacred-purple/90">Acompañamiento profesional con absoluta confidencialidad</h3>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-sunset hover:shadow-sacred text-lg px-8 py-6 transition-all duration-300"
            >
              <Link to="/contacto">Agenda tu Sesión</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Servicios y Preguntas Frecuentes */}
      <section className="py-16 px-6 sm:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
              <h2 className="text-xl font-bold text-sacred-purple mb-4">Servicios de tantra sexual y coaching íntimo</h2>
              <div className="ml-6 space-y-3">
                <h3 className="text-lg font-semibold text-sacred-purple/90">Sesiones individuales de tantra sexual</h3>
                <h3 className="text-lg font-semibold text-sacred-purple/90">Talleres de tantra para parejas</h3>
                <h3 className="text-lg font-semibold text-sacred-purple/90">Ejercicios de respiración y meditación sexual</h3>
                <h3 className="text-lg font-semibold text-sacred-purple/90">Dinámicas de conexión cuerpo-mente</h3>
              </div>
          </div>

          <div className="pt-8 border-t border-sacred-gold/20">
              <h2 className="text-xl font-bold text-sacred-purple mb-4">Tantra sexual para parejas</h2>
              <div className="ml-6 space-y-3">
                <h3 className="text-lg font-semibold text-sacred-purple/90">Fortalecer la comunicación íntima</h3>
                <h3 className="text-lg font-semibold text-sacred-purple/90">Redescubrir la pasión en la relación</h3>
                <h3 className="text-lg font-semibold text-sacred-purple/90">Crear un espacio de confianza y entrega</h3>
              </div>
          </div>

          <div className="pt-8 border-t border-sacred-gold/20">
              <h2 className="text-xl font-bold text-sacred-purple mb-4">Preguntas frecuentes sobre tantra sexual y coaching íntimo</h2>
              <div className="ml-6 space-y-3">
                <h3 className="text-lg font-semibold text-sacred-purple/90">¿En qué consiste una sesión de tantra sexual?</h3>
                <h3 className="text-lg font-semibold text-sacred-purple/90">¿Qué beneficios tiene trabajar con un coach sexual?</h3>
                <h3 className="text-lg font-semibold text-sacred-purple/90">¿Es necesario tener pareja para practicar tantra sexual?</h3>
                <h3 className="text-lg font-semibold text-sacred-purple/90">¿Qué diferencia hay entre tantra erótico y tantra espiritual?</h3>
                <h3 className="text-lg font-semibold text-sacred-purple/90">¿Cuánto dura un proceso de coaching sexual?</h3>
              </div>
          </div>

          <div className="pt-8 border-t border-sacred-gold/20">
              <h2 className="text-xl font-bold text-sacred-purple mb-4">Mi filosofía como coach sexual</h2>
              <div className="ml-6 space-y-3">
                <h3 className="text-lg font-semibold text-sacred-purple/90">Acompañar sin juicios ni tabúes</h3>
                <h3 className="text-lg font-semibold text-sacred-purple/90">Respetar los límites y la libertad personal</h3>
                <h3 className="text-lg font-semibold text-sacred-purple/90">Generar un espacio seguro y de confianza</h3>
              </div>
          </div>

          <div className="pt-8 border-t border-sacred-gold/20 text-center">
              <h2 className="text-xl font-bold text-sacred-purple mb-4">Contacto para sesiones de tantra sexual y coaching íntimo</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-sacred-purple/90">Agenda tu primera sesión de tantra sexual</h3>
                <h3 className="text-lg font-semibold text-sacred-purple/90">Descubre el poder transformador de tu energía sexual</h3>
                <h3 className="text-lg font-semibold text-sacred-purple/90">Conecta conmigo y empieza tu viaje de autoconocimiento</h3>
              </div>
            <div className="mt-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-sunset hover:shadow-sacred text-lg px-8 py-6 transition-all duration-300"
              >
                <Link to="/contacto">Solicitar Información</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección Transformadora */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-b from-sacred-beige/30 to-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sacred-purple mb-8">
            El Viaje de Transformación a través del Tantra Sexual
          </h1>
          
          <div className="space-y-12 mt-16 text-left">
            <div>
              <h2 className="text-2xl font-bold text-sacred-purple mb-4">Descubre tu Potencial Energético</h2>
              <div className="ml-6 space-y-3">
                <h3 className="text-xl font-semibold text-sacred-purple/90">Activación de la energía Kundalini</h3>
                <p className="text-base text-foreground/80 ml-4">Despierta tu energía vital y experimenta una renovación física y espiritual.</p>
                
                <h3 className="text-xl font-semibold text-sacred-purple/90 mt-4">Técnicas de respiración consciente</h3>
                <p className="text-base text-foreground/80 ml-4">Aprende a controlar tu energía vital a través de la respiración.</p>
                
                <h3 className="text-xl font-semibold text-sacred-purple/90 mt-4">Meditaciones tántricas guiadas</h3>
                <p className="text-base text-foreground/80 ml-4 mb-6">Profundiza en tu conexión interior y con el universo.</p>
                
                <div className="mt-10 text-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-gradient-sunset hover:shadow-sacred text-lg px-8 py-6 transition-all duration-300"
                  >
                    <Link to="/contacto">Comienza tu Transformación</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios del Tantra */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-b from-white/50 to-sacred-beige/20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-sacred-purple mb-12">
            Beneficios Profundos del Tantra Sexual en tu Vida Diaria
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-sacred-purple mb-4">Transformación Personal</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-sacred-purple/90">Autoconocimiento y Autoaceptación</h3>
                  <p className="text-foreground/80 text-sm">Descubre aspectos profundos de tu ser y aprende a amarte plenamente.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sacred-purple/90">Manejo del Estrés</h3>
                  <p className="text-foreground/80 text-sm">Técnicas para liberar tensiones y encontrar equilibrio emocional.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-sacred-purple mb-4">Relaciones más Plenas</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-sacred-purple/90">Conexión Emocional</h3>
                  <p className="text-foreground/80 text-sm">Fomenta la intimidad y comprensión en tus relaciones.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sacred-purple/90">Comunicación Auténtica</h3>
                  <p className="text-foreground/80 text-sm">Aprende a expresar tus necesidades y deseos con claridad.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-sunset hover:shadow-sacred text-lg px-8 py-6 transition-all duration-300"
            >
              <Link to="/contacto">Descubre Más Beneficios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Filosofías */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-to-b from-white/50 to-sacred-beige/30">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sacred-purple text-center mb-12">
            Filosofías que Guían Mi viaje como Coach Sexual en el Tantra Sexual
          </h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-sacred-purple mb-4">Tantra y Sexualidad Sagrada</h2>
              <p className="text-foreground/90 mb-6">
                El tantra ve la vida como una manifestación sagrada de la energía divina, integrando la sexualidad como camino espiritual de autoconocimiento y trascendencia.
              </p>
              
              <h3 className="text-xl font-semibold text-sacred-purple/90 mb-3">Principios Clave:</h3>
              <ul className="space-y-2 pl-6 list-disc list-outside text-foreground/80">
                <li>El placer como derecho natural y camino de sanación</li>
                <li>El cuerpo como templo sagrado y fuente de sabiduría</li>
                <li>La sexualidad consciente como vía de transformación personal</li>
                <li>La importancia de la presencia plena en la experiencia erótica</li>
              </ul>
            </div>
            
            <div className="pt-8 border-t border-sacred-purple/20">
              <h2 className="text-2xl font-bold text-sacred-purple mb-4">Coaching Transformacional</h2>
              <p className="text-foreground/90 mb-6">
                El coaching es un acompañamiento profesional que facilita el autodescubrimiento y la transformación personal a través de metodologías vanguardistas.
              </p>
              
              <h3 className="text-xl font-semibold text-sacred-purple/90 mb-3">Enfoques que Integro:</h3>
              <ul className="space-y-2 pl-6 list-disc list-outside text-foreground/80">
                <li>Coaching Ontológico: Transformación desde el ser</li>
                <li>Coaching Somático: Sabiduría corporal y consciencia</li>
                <li>Sex Coaching: Educación y acompañamiento sexual integral</li>
                <li>Sexological Bodywork: Integración cuerpo-mente-espíritu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Técnicas */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-to-b from-sacred-beige/30 to-white/50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sacred-purple text-center mb-12">
            Técnicas de Coaching y Tantra Sexual
          </h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-sacred-purple mb-4">Técnicas de Conciencia Corporal</h2>
              <p className="text-foreground/90 mb-6">
                Métodos para desarrollar una relación más profunda con tu cuerpo y despertar la sensibilidad erótica.
              </p>
              
              <h3 className="text-xl font-semibold text-sacred-purple/90 mb-3">Técnicas Principales:</h3>
              <ul className="space-y-2 pl-6 list-disc list-outside text-foreground/80">
                <li>Mapping Corporal y Exploración Sensorial</li>
                <li>Respiración Consciente Tántrica</li>
                <li>Movimiento Terapéutico y Danza Tántrica</li>
                <li>Ejercicios de Kegel para el Placer</li>
              </ul>
            </div>
            
            <div className="pt-8 border-t border-sacred-purple/20">
              <h2 className="text-2xl font-bold text-sacred-purple mb-4">Técnicas de Expresión y Conexión</h2>
              <p className="text-foreground/90 mb-6">
                Herramientas para liberar la expresión auténtica y profundizar en la conexión íntima.
              </p>
              
              <h3 className="text-xl font-semibold text-sacred-purple/90 mb-3">Técnicas Principales:</h3>
              <ul className="space-y-2 pl-6 list-disc list-outside text-foreground/80">
                <li>Expresión Vocal y Sonidos Tántricos</li>
                <li>Masturbación Consciente y Sagrada</li>
                <li>Entrega y Posesión Tántrica</li>
                <li>Conversación Terapéutica Sexual</li>
              </ul>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-sunset hover:shadow-sacred text-lg px-8 py-6 transition-all duration-300"
              >
                <Link to="/servicios">
                  Conoce Todos Mis Servicios
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
