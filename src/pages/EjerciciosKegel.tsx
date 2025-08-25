import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Target } from "lucide-react";
import kegelsImage from "@/assets/ejercicios-kegel.jpg";

const EjerciciosKegel = () => {
  const beneficios = [
    "Fortalecimiento del suelo pélvico para mayor placer sexual",
    "Control eyaculatorio masculino y duración en la penetración",
    "Intensificación de orgasmos femeninos y masculinos",
    "Mejora de la sensibilidad genital y capacidad eréctil",
    "Prevención de incontinencia y problemas pélvicos",
    "Desarrollo de músculo PC y control sexual voluntario",
    "Aumento de la vitalidad sexual y energía genital"
  ];

  const tiposSesiones = [
    {
      nombre: "Kegels para Control Masculino",
      descripcion: "Entrenamiento especializado del músculo pubococcígeo masculino para desarrollar control eyaculatorio, mejorar la erección y aumentar la duración sexual. Incluye ejercicios progresivos, técnicas de contracción consciente y aplicación práctica durante la estimulación.",
      duracion: "60-75 minutos",
      enfoque: "Control eyaculatorio, erección, duración sexual masculina"
    },
    {
      nombre: "Fortalecimiento Pélvico Femenino",
      descripcion: "Programa integral de ejercicios Kegel para mujeres enfocado en intensificar orgasmos, mejorar la sensibilidad vaginal y desarrollar control muscular consciente. Incluye técnicas de contracción vaginal, ejercicios con bolas chinas y fortalecimiento del músculo PC.",
      duracion: "60-75 minutos", 
      enfoque: "Orgasmos intensos, sensibilidad vaginal, control muscular"
    },
    {
      nombre: "Kegels Avanzados y Tantra",
      descripcion: "Sesión avanzada que combina ejercicios Kegel con respiración tántrica, técnicas de canalización energética y práticas de micromovimientos sexuales. Para personas que quieren integrar el fortalecimiento pélvico en su práctica tántrica personal.",
      duracion: "75-90 minutos",
      enfoque: "Técnicas avanzadas, tantra pélvico, energía sexual"
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
              Ejercicios de Kegel para el Placer
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Fortalece tu suelo pélvico, desarrolla control sexual consciente e intensifica tus orgasmos através de ejercicios Kegel especializados y técnicas de entrenamiento del músculo PC.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Agendar Sesión de Ejercicios Kegel
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Beneficios de los Ejercicios Kegel Especializados
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
            Tipos de Sesiones de Entrenamiento Pélvico
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
                    <Link to="/servicios/ejercicios-kegel/info-sesiones" className="block">
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
            <h2 className="text-3xl font-bold text-primary mb-8">El Suelo Pélvico como Base del Placer Sexual</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-sacred-purple mb-4">Fortalecimiento del Músculo PC</h3>
                <p className="text-muted-foreground mb-4">
                  Los <strong>ejercicios de Kegel</strong> son la base física de una sexualidad plena y consciente. El <strong>fortalecimiento del suelo pélvico</strong> no solo mejora la salud reproductiva, sino que es fundamental para desarrollar <strong>control eyaculatorio</strong>, <strong>intensificar orgasmos</strong> y cultivar una <strong>sexualidad consciente</strong> y poderosa.
                </p>
                <p className="text-muted-foreground">
                  El <strong>músculo pubococcígeo (PC)</strong> es el músculo del placer sexual. A través de <strong>ejercicios especializados</strong>, <strong>técnicas de contracción consciente</strong> y <strong>entrenamiento progresivo</strong>, desarrollamos control voluntario sobre nuestras respuestas sexuales y expandimos exponencialmente nuestra capacidad de placer.
                </p>
              </div>
              
              <div>
                <img 
                  src={kegelsImage} 
                  alt="Ejercicios de Kegel para fortalecimiento pélvico y placer sexual"
                  className="w-full h-64 object-cover rounded-lg shadow-gentle"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-sacred-purple mb-4">Técnicas Avanzadas de Entrenamiento Pélvico</h3>
            <p className="text-muted-foreground mb-6">
              En mis sesiones de <strong>coaching de fortalecimiento pélvico</strong> enseño técnicas específicas: <strong>contracciones rápidas y lentas</strong>, <strong>ejercicios de resistencia</strong>, <strong>técnicas de relajación consciente</strong> y <strong>aplicación práctica durante la estimulación</strong>. Cada programa está personalizado según tus objetivos específicos de control sexual y intensificación del placer.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Los <strong>ejercicios Kegel especializados</strong> van más allá del fortalecimiento básico para incluir <strong>coordinación respiratoria</strong>, <strong>técnicas de edging</strong> y <strong>aplicación tántrica</strong> que transforma estos ejercicios en una práctica integral de <strong>medicina sexual</strong> y <strong>desarrollo personal</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Desarrolla tu Fundación de Placer Sexual
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Fortalece tu suelo pélvico y descubre el poder del control sexual consciente através de ejercicios Kegel especializados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Reservar Sesión de Kegels
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

export default EjerciciosKegel;