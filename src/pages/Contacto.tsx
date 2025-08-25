import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    consultaTipo: "",
  });
  
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xanbgejl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          tipoConsulta: formData.consultaTipo,
          mensaje: formData.mensaje,
        }),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Te responderé a la brevedad. Gracias por contactarme.",
        });
        
        // Reset form
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          mensaje: "",
          consultaTipo: "",
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const consultaTipos = [
    "Consulta inicial gratuita",
    "Sesión Individual de Coaching Sexual",
    "Sesión de Pareja - Diálogo Tántrico",
    "Sesión de Exploración Sensual",
    "Meditación Tántrica Individual",
    "Meditación Kundalini Sexual",
    "Meditación en Pareja",
    "Mapping Individual Completo",
    "Mapping Genital Especializado",
    "Masaje Yoni Tántrico Sensual",
    "Masaje Corporal Completo Tántrico",
    "Respiración para Control Eyaculatorio",
    "Respiración Orgásmica Femenina",
    "Respiración Tántrica",
    "Danza Tántrica Individual",
    "Movimiento Terapéutico de Sanación",
    "Danza Sensual de pareja",
    "Liberación Vocal Sexual",
    "Mantras Tántricos y Sonidos Sagrados",
    "Expresión Vocal en Pareja",
    "Autoplacer Sagrado Femenino",
    "Prácticas Avanzadas de Autoplacer",
    "Fortalecimiento Pélvico Femenino",
    "Kegels Avanzados y Tantra",
    "Entrega Consciente y Vulnerabilidad",
    "Posesión Energética y Éxtasis",
    "Integración de Polaridades Sexuales",
    "Terapia de pareja",
    "Curso de tantra sexual",
    "Formación en técnicas tántricas",
    "Retiro de sanación sexual",
    "Consulta sobre disfunción sexual",
    "Otro (especificar en mensaje)",
  ];

  return (
    <div className="min-h-screen bg-gradient-gentle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Contacta con tu Coach de Tantra Sexual
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Estoy aquí para guiarte en tu camino hacia el placer consciente, la salud sexual 
            y la transformación personal. Da el primer paso hacia una sexualidad más plena y sagrada.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <Card className="shadow-sacred bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Agenda tu Consulta Personalizada
              </CardTitle>
              <CardDescription>
                Completa el formulario y te responderé en máximo 24 horas para agendar 
                tu primera sesión de coaching sexual o tantra.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form action="https://formspree.io/f/xanbgejl" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre">Nombre Completo *</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="telefono">Teléfono / WhatsApp</Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <Label htmlFor="consultaTipo">Tipo de Consulta</Label>
                  <select
                    id="consultaTipo"
                    name="consultaTipo"
                    value={formData.consultaTipo}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="">Selecciona el tipo de consulta</option>
                    {consultaTipos.map((tipo, index) => (
                      <option key={index} value={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="mensaje">Mensaje *</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Cuéntame brevemente sobre tu situación, tus objetivos o qué te gustaría trabajar en las sesiones de coaching sexual o tantra..."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-sunset hover:shadow-sacred transition-all duration-300"
                  size="lg"
                >
                  Enviar Consulta
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info and Benefits */}
          <div className="space-y-8">
            <Card className="bg-gradient-sacred text-primary-foreground shadow-sacred">
              <CardHeader>
                <CardTitle className="text-2xl">
                  ¿Por qué Elegir Coaching Tántrico?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-sacred-gold rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Enfoque Integral</h4>
                    <p className="text-primary-foreground/90">
                      Combino tantra, coaching ontológico y sexological bodywork
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-sacred-gold rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Resultados Duraderos</h4>
                    <p className="text-primary-foreground/90">
                      Transformación profunda del ser, no solo técnicas superficiales
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-sacred-gold rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Espacio Seguro</h4>
                    <p className="text-primary-foreground/90">
                      Ambiente de total confidencialidad y respeto
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-sacred-gold rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Experiencia Comprobada</h4>
                    <p className="text-primary-foreground/90">
                      Años ayudando a personas a sanar y expandir su sexualidad
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Modalidades de Trabajo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-gradient-sunset/10 rounded-lg border border-sacred-gold/20">
                  <h4 className="font-semibold text-sacred-purple">Sesiones Presenciales</h4>
                  <p className="text-sm text-muted-foreground">
                    Para trabajo corporal, masaje tántrico y técnicas somáticas
                  </p>
                </div>
                
                <div className="p-3 bg-gradient-sunset/10 rounded-lg border border-sacred-gold/20">
                  <h4 className="font-semibold text-sacred-purple">Consultas Online</h4>
                  <p className="text-sm text-muted-foreground">
                    Coaching sexual, conversación terapéutica y seguimiento
                  </p>
                </div>
                
                <div className="p-3 bg-gradient-sunset/10 rounded-lg border border-sacred-gold/20">
                  <h4 className="font-semibold text-sacred-purple">Retiros Grupales</h4>
                  <p className="text-sm text-muted-foreground">
                    Experiencias intensivas de tantra y sanación sexual
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-hero p-6 rounded-2xl shadow-sacred text-center">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                Consulta Inicial Gratuita
              </h3>
              <p className="text-primary-foreground/90 text-sm">
                Conversemos 30 minutos sin compromiso para conocer tu situación 
                y ver cómo puedo ayudarte en tu proceso de sanación sexual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keywords Section */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-primary">
            Especializado en Estas Áreas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              "Tantra Sexual", "Coach Sexual", "Terapia Sexual", "Masaje Tántrico",
              "Sanación Sexual", "Placer Consciente", "Disfunción Eréctil", "Eyaculación Precoz",
              "Falta de Deseo", "Traumas Sexuales", "Meditación Tántrica", "Ejercicios Kegel",
              "Coaching Ontológico", "Sexological Bodywork", "Crecimiento Personal", "Salud Sexual"
            ].map((keyword, index) => (
              <div key={index} className="p-2 bg-white/50 rounded-lg text-sacred-purple font-medium">
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;