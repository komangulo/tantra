import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Shield, Users, BookOpen, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import quienSoyHero from "@/assets/quien-soy-hero.jpg";

const QuienSoy = () => {
  const paradigmas = [
    "Coaching Integral",
    "Sexualidad Consciente", 
    "Tantra Tradicional",
    "Ontología del Lenguaje",
    "Trabajo Corporal Somático",
    "Sexological Bodywork",
    "Terapia de Parejas"
  ];

  const roles = [
    { name: "Coach Especializado", icon: Users },
    { name: "Maestro Tántrico", icon: Heart },
    { name: "Facilitador Corporal", icon: Star },
    { name: "Terapeuta Somático", icon: Shield },
    { name: "Educador en Sexualidad", icon: BookOpen },
    { name: "Sexological Bodyworker", icon: Lightbulb }
  ];

  const principios = [
    {
      title: "Respeto Incondicional",
      description: "Honro a todos los seres humanos sin importar su identidad, orientación, historia o aspiraciones personales."
    },
    {
      title: "Compromiso Total",
      description: "Mi dedicación completa está enfocada en los objetivos y el bienestar de cada persona que acompaño."
    },
    {
      title: "Confidencialidad Absoluta",
      description: "La privacidad es sagrada - proteger tu intimidad es proteger tu libertad más fundamental."
    },
    {
      title: "Responsabilidad Consciente",
      description: "Asumo la responsabilidad de crear el espacio perfecto para tu transformación y crecimiento personal."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-gentle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Quién Soy
          </h1>
          <p className="text-xl text-sacred-gold font-medium mb-6">
            Mi Camino hacia la Maestría en Sanación Sexual y Transformación Personal
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Llevo **más de una década** acompañando procesos de transformación personal, 
            facilitando talleres de **coaching, tantra y meditación desde 2008**, 
            integrando sabiduría ancestral con metodologías modernas.
          </p>
        </div>
      </section>

      {/* Mi Historia Personal */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Mi Historia de Transformación Personal
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              Mi verdadero despertar como especialista en **sanación sexual y transformación personal** 
              comenzó durante mi adolescencia, cuando enfrenté lo que en esos tiempos se denominaba 
              **disfunción eréctil**. A los **15 años**, esta experiencia me sumergió en sentimientos profundos 
              de vergüenza y frustración que marcarían el inicio de mi búsqueda hacia la sanación.
            </p>
            
            <p className="text-lg leading-relaxed">
              Durante años evité las relaciones íntimas hasta que, a los **17 años**, encontré el valor 
              para establecer una conexión estable con una pareja. Fue entonces cuando decidí buscar 
              ayuda profesional y comencé un proceso terapéutico con un **psicólogo especializado en sexualidad**.
            </p>
            
            <p className="text-lg leading-relaxed">
              Este proceso duró **tres años intensos** de sesiones semanales. Aunque la solución final 
              resultó ser relativamente simple - **algunas técnicas específicas y prácticas conscientes** - 
              el camino recorrido me proporcionó una comprensión profunda de la **psicología humana** y 
              los procesos de transformación personal.
            </p>
            
            <p className="text-lg leading-relaxed">
              Esta experiencia personal se convirtió en el catalizador que me llevó a explorar 
              **técnicas ancestrales** y enfoques alternativos: **meditación profunda, biodanza, 
              prácticas chamánicas, trabajo corporal consciente, técnicas de respiración avanzadas**, 
              y especialmente, la **sabiduría milenaria del tantra**.
            </p>
          </div>
        </div>
      </section>

      {/* Mi Evolución Profesional */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Mi Evolución como Facilitador
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              Mi inmersión en el **coaching y la ontología del lenguaje** me permitió descubrir 
              cómo integrar estas poderosas herramientas con la **sabiduría tántrica**, 
              especialmente en el contexto de la intimidad y la sexualidad consciente.
            </p>
            
            <p className="text-lg leading-relaxed">
              Buscando la **máxima efectividad** para mis clientes, me propuse ofrecer algo 
              tan transformador como había sido mi propia sanación: **herramientas simples 
              pero profundamente efectivas**. Esto me llevó a investigar el **coaching sexual 
              somático**, enfocado en la sabiduría del cuerpo.
            </p>
            
            <p className="text-lg leading-relaxed">
              Mi búsqueda me conectó con el trabajo pionero de **Joseph Kramer** y otros 
              profesionales que habían desarrollado durante décadas el campo del 
              **Sexological Bodywork**. Esta formación especializada complementó, estructuró 
              y perfeccionó toda mi experiencia previa, creando un enfoque integral 
              que ahora pongo al servicio de quienes acompaño.
            </p>
            
            <p className="text-lg leading-relaxed">
              Desde entonces, trabajo desde esta metodología integrada y encuentro 
              profunda satisfacción al observar las transformaciones en las personas 
              que confían en mi acompañamiento, así como en mi propio crecimiento continuo, 
              ya que mi profesión es mi forma de vida y crecimiento espiritual.
            </p>
          </div>
        </div>
      </section>

      {/* Cómo Trabajo */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sunset/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Mi Metodología de Acompañamiento
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-sacred-purple mb-6">
                Espacio de Seguridad y Confianza
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Comprendo profundamente que la sexualidad es un territorio sagrado e íntimo. 
                Como especialista en este campo, mi prioridad absoluta es crear un ambiente 
                donde te sientas completamente seguro, respetado y cómodo.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Esta confianza se establece desde nuestra primera conversación. Tú diriges 
                completamente el proceso - cada sesión se adapta a tus necesidades específicas, 
                utilizando las técnicas y paradigmas que más resuenen contigo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Aunque algunas sesiones pueden ser puramente conversacionales, integro 
                técnicas diversas de meditación, trabajo corporal consciente y prácticas 
                somáticas según tu comodidad y objetivos.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-sacred-purple mb-6">
                Paradigmas que Integro
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {paradigmas.map((paradigma, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-sacred-gold/20 text-sacred-gold p-3 text-center justify-center"
                  >
                    {paradigma}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mis Roles */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Mis Roles como Facilitador
          </h2>
          
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            **Mi sabiduría está al servicio de activar la tuya.** No puedo transformar nada en ti - 
            solo tú tienes ese poder. Sin embargo, **estaré a tu lado ejerciendo de:**
          </p>
          
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-card/60 backdrop-blur-sm p-8 rounded-xl border border-border/50">
              <ul className="space-y-3 text-lg">
                <li className="flex items-center text-foreground">
                  <Users className="h-5 w-5 text-sacred-gold mr-3" />
                  <span className="font-semibold">Coach</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Heart className="h-5 w-5 text-sacred-gold mr-3" />
                  <span className="font-semibold">Guía tántrico</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Star className="h-5 w-5 text-sacred-gold mr-3" />
                  <span className="font-semibold">Facilitador de técnicas corporales y de meditación</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Shield className="h-5 w-5 text-sacred-gold mr-3" />
                  <span className="font-semibold">Masajista</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Lightbulb className="h-5 w-5 text-sacred-gold mr-3" />
                  <span className="font-semibold">Sexological Bodyworker</span>
                </li>
                <li className="flex items-center text-foreground">
                  <BookOpen className="h-5 w-5 text-sacred-gold mr-3" />
                  <span className="font-semibold">Educador Sexual</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Heart className="h-5 w-5 text-sacred-gold mr-3" />
                  <span className="font-semibold">Terapeuta</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            Para que encuentres lo que buscas: **aprendizaje, placer y salud**. 
            Obtendrás las tres, porque van unidas. **Si así lo eliges**.
          </p>
        </div>
      </section>

      {/* Principios */}
      <section className="py-16 px-6 sm:px-8 bg-gradient-sacred/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Trabajo Aplicando Conscientemente estos Principios
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/60 backdrop-blur-sm p-8 rounded-xl border border-border/50">
              <ul className="space-y-6 text-lg">
                <li className="flex items-start">
                  <span className="text-sacred-gold mr-3 font-bold">•</span>
                  <div>
                    <span className="font-bold text-primary">Respeto:</span> A todos los seres sea cual sea su identidad y orientación sexual, cuerpo, creencia, pasado y objetivo.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sacred-gold mr-3 font-bold">•</span>
                  <div>
                    <span className="font-bold text-primary">Compromiso absoluto:</span> Con los objetivos de mis clientes.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sacred-gold mr-3 font-bold">•</span>
                  <div>
                    <span className="font-bold text-primary">Confidencialidad:</span> La privacidad de mis clientes es su derecho más fundamental, ya que equivale a su libertad.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sacred-gold mr-3 font-bold">•</span>
                  <div>
                    <span className="font-bold text-primary">Responsabilidad:</span> Declararme siempre responsable de los resultados obtenidos me permite acompañar a mis clientes en todo momento y al mismo tiempo aprender siempre. Como profesional responsable, cuento con la colaboración de otros colegas, que pueden entrar en acción, considerando siempre la solución más rápida y efectiva para el cliente.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía Final */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            Mi Filosofía de Vida y Trabajo
          </h2>
          
          <div className="bg-gradient-hero p-8 rounded-2xl shadow-sacred mb-8">
            <p className="text-primary-foreground text-lg font-medium italic mb-4">
              "En la vida, todos compartimos un objetivo común: **disfrutar y ser felices**. 
              Cuando esto no se logra, siempre podemos **aprender** para disfrutar más en el futuro."
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              En mis sesiones sucede lo mismo: **se trata de disfrutar**. Cuando no se logra completamente, 
              podemos observar las razones y **aprender**, para experimentar mayor plenitud. 
              Esta **actitud de apertura al aprendizaje** da sentido completo a nuestro trabajo juntos.
            </p>
            
            <p className="text-lg leading-relaxed">
              **No puedo resolver los desafíos de otros**, solo los míos propios. 
              Sin embargo, **sí puedo acompañarte** para que encuentres tus propias soluciones.
            </p>
            
            <p className="text-lg leading-relaxed">
              **No puedo generar placer en otros**, solo en mí mismo. **Solo tú tienes ese poder**. 
              Pero **sí puedo facilitarte el camino** para que lo experimentes plenamente.
            </p>
            
            <p className="text-xl text-sacred-gold font-medium mt-8">
              **¡Que disfrutes cada paso de este hermoso camino de autodescubrimiento!**
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuienSoy;