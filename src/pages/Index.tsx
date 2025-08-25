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
            <span className="block text-sacred-gold">Tantra Sexual</span>
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

      {/* Beneficios Section */}
      <section className="py-20 px-6 sm:px-8">
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

      <Footer />
    </div>
  );
};

export default Index;
