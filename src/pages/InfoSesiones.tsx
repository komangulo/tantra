import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useParams, Navigate } from "react-router-dom";
import { Clock, Target, Heart, Users, Sparkles } from "lucide-react";

const InfoSesiones = () => {
  const { tecnica } = useParams();

  const sesionesData = {
    "conversacion-terapeutica": {
      titulo: "Sesiones de Conversación Terapéutica Sexual",
      descripcion: "Información detallada sobre los diferentes tipos de sesiones de coaching sexual através del diálogo consciente",
      sesiones: [
        {
          nombre: "Conversación Individual Profunda",
          descripcion: "Sesión personal de coaching sexual através del diálogo consciente donde exploramos creencias limitantes, patrones sexuales y trabajamos en la transformación de la relación con tu sexualidad. Utilizamos técnicas de comunicación terapéutica, escucha empática y herramientas de coaching ontológico para crear cambios profundos.",
          duracion: "75-90 minutos",
          enfoque: "Autoconocimiento sexual, sanación personal, transformación íntima",
          beneficios: [
            "Identificación y transformación de creencias limitantes sobre sexualidad",
            "Desarrollo de comunicación sexual auténtica y asertiva",
            "Sanación de traumas sexuales através del diálogo terapéutico",
            "Clarificación de objetivos y deseos sexuales personales",
            "Herramientas prácticas para mejorar la intimidad personal"
          ],
          precio: "Consultar",
          icono: <Heart className="text-sacred-purple" size={24} />
        },
        {
          nombre: "Terapia de Pareja Sexual",
          descripcion: "Sesión diseñada para parejas que desean mejorar su comunicación sexual, resolver conflictos íntimos y fortalecer su conexión erótica. Trabajamos con técnicas de diálogo facilitado, comunicación no violenta y herramientas específicas de terapia sexual para parejas.",
          duracion: "90-120 minutos",
          enfoque: "Comunicación de pareja, resolución de conflictos, intimidad compartida",
          beneficios: [
            "Mejora significativa en la comunicación sexual de pareja",
            "Resolución de conflictos y malentendidos sexuales",
            "Desarrollo de intimidad emocional y física profunda",
            "Herramientas para expresar deseos y límites de forma sana",
            "Fortalecimiento del vínculo erótico y afectivo"
          ],
          precio: "Consultar",
          icono: <Users className="text-sacred-gold" size={24} />
        },
        {
          nombre: "Exploración Sexual Guiada",
          descripcion: "Sesión especializada en explorar fantasías, deseos ocultos y aspectos inexplorados de la sexualidad através del diálogo seguro y la facilitación consciente. Incluye técnicas de exploración de fantasías, comunicación de deseos y planificación de experiencias sexuales conscientes.",
          duracion: "60-75 minutos",
          enfoque: "Exploración de fantasías, expansión sexual, comunicación de deseos",
          beneficios: [
            "Exploración segura de fantasías y deseos sexuales",
            "Desarrollo de comunicación abierta sobre preferencias íntimas",
            "Planificación consciente de experiencias sexuales nuevas",
            "Superación de tabúes y limitaciones autoimpuestas",
            "Expansión del repertorio sexual personal o de pareja"
          ],
          precio: "Consultar",
          icono: <Sparkles className="text-sacred-purple" size={24} />
        }
      ]
    },
    "meditacion-tantrica": {
      titulo: "Sesiones de Meditación y Conexión Tántrica",
      descripcion: "Información detallada sobre los diferentes tipos de sesiones de meditación tántrica para despertar la energía sexual",
      sesiones: [
        {
          nombre: "Meditación Tántrica Individual",
          descripcion: "Sesión personal de meditación con técnicas específicas para despertar la energía sexual, trabajar con mantras sagrados y cultivar la presencia erótica. Incluye meditación kundalini, respiración sexual y visualizaciones tántricas para conectar con tu naturaleza sexual sagrada.",
          duracion: "60-90 minutos",
          enfoque: "Despertar energético, conexión íntima personal, sanación sexual meditativa",
          beneficios: [
            "Activación de la energía kundalini y chakras sexuales",
            "Desarrollo de presencia y mindfulness erótico",
            "Sanación de traumas sexuales através de la meditación",
            "Conexión profunda con tu naturaleza sexual sagrada",
            "Técnicas de meditación sexual para práctica personal"
          ],
          precio: "Consultar",
          icono: <Heart className="text-sacred-purple" size={24} />
        },
        {
          nombre: "Meditación en Pareja",
          descripcion: "Práctica meditativa compartida para sincronizar energías, crear conexión profunda y experimentar estados de unidad através de técnicas tántricas ancestrales. Incluye miradas sagradas, respiración sincronizada y meditación sexual conjunta para fortalecer el vínculo energético.",
          duracion: "75-90 minutos",
          enfoque: "Conexión de pareja, sincronización energética, éxtasis compartido",
          beneficios: [
            "Sincronización energética profunda entre parejas",
            "Desarrollo de intimidad emocional y espiritual",
            "Experiencias de éxtasis y conexión sagrada compartida",
            "Fortalecimiento del vínculo através de prácticas espirituales",
            "Técnicas de meditación sexual para práctica conjunta"
          ],
          precio: "Consultar",
          icono: <Users className="text-sacred-gold" size={24} />
        },
        {
          nombre: "Meditación Kundalini Sexual",
          descripcion: "Sesión avanzada de activación de la energía kundalini através de la sexualidad consciente. Combina posturas tántricas, respiración de fuego sexual y técnicas de canalización energética para despertar el potencial erótico completo y acceder a estados alterados de consciencia.",
          duracion: "90-120 minutos",
          enfoque: "Activación kundalini, expansión consciencia sexual, transformación energética",
          beneficios: [
            "Activación completa de la energía kundalini sexual",
            "Acceso a estados alterados de consciencia erótica",
            "Transformación energética profunda y permanente",
            "Desarrollo de capacidades sexuales extraordinarias",
            "Integración de sexualidad como práctica espiritual avanzada"
          ],
          precio: "Consultar",
          icono: <Sparkles className="text-sacred-purple" size={24} />
        }
      ]
    },
    // Puedo agregar más técnicas aquí siguiendo el mismo patrón
  };

  const datos = sesionesData[tecnica as keyof typeof sesionesData];

  if (!datos) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-gentle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
              {datos.titulo}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {datos.descripcion}
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Agendar Consulta Gratuita
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Sessions */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {datos.sesiones.map((sesion, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-sacred transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    {sesion.icono}
                    <CardTitle className="text-2xl text-primary">{sesion.nombre}</CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{sesion.duracion}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target size={16} />
                      <span>{sesion.enfoque}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {sesion.descripcion}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-sacred-purple mb-4">Beneficios Principales:</h4>
                    <ul className="space-y-2">
                      {sesion.beneficios.map((beneficio, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-sacred-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{beneficio}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-border/50 pt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <Badge variant="secondary" className="text-sm">
                          Precio: {sesion.precio}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link to="/contacto">
                          <Button 
                            size="lg" 
                            className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300"
                          >
                            Agendar Esta Sesión
                          </Button>
                        </Link>
                        <Link to="/contacto">
                          <Button 
                            size="lg" 
                            variant="outline" 
                            className="hover:bg-gradient-sunset hover:text-primary-foreground transition-all duration-300"
                          >
                            Más Información
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            ¿Listo para Transformar tu Sexualidad?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Cada sesión está diseñada para llevarte hacia una sexualidad más consciente, plena y satisfactoria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:shadow-sacred transition-all duration-300">
                Reservar Sesión Ahora
              </Button>
            </Link>
            <Link to="/servicios">
              <Button size="lg" variant="outline" className="hover:bg-gradient-sunset hover:text-primary-foreground transition-all duration-300">
                Ver Otras Técnicas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfoSesiones;