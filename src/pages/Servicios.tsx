import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import meditationImage from "@/assets/meditation-energy.jpg";
import massageImage from "@/assets/massage-healing.jpg";
import conversacionImage from "@/assets/conversacion-terapeutica.jpg";
import mappingImage from "@/assets/mapping-corporal.jpg";
import respiracionImage from "@/assets/respiracion-consciente.jpg";
import movimientoImage from "@/assets/movimiento-terapeutico.jpg";
import expresionImage from "@/assets/expresion-vocal.jpg";
import masturbacionImage from "@/assets/masturbacion-consciente.jpg";
import kegelsImage from "@/assets/ejercicios-kegel.jpg";
import entregaImage from "@/assets/entrega-posesion.jpg";

const Servicios = () => {
  const servicios = [
    {
      id: "conversacion-terapeutica",
      title: "Conversación Terapéutica Sexual",
      subtitle: "La Conversación como herramienta de Coaching Sexual",
      description: "Conversar es lo primero que hacemos en una sesión. A través del diálogo profundo exploramos creencias, miedos y patrones que limitan el placer y la expresión sexual. La comunicación consciente es la base de toda transformación íntima.",
      keywords: "comunicación sexual, diálogo íntimo, coaching sexual",
      image: conversacionImage,
    },
    {
      id: "meditacion-tantrica",
      title: "Meditación y Conexión Tántrica",
      subtitle: "Meditación para el Despertar de la Energía Sexual",
      description: "La meditación es la observación consciente del momento presente. En el tantra, utilizamos técnicas meditativas específicas para despertar la energía kundalini, expandir la consciencia y conectar con el placer más sutil y profundo.",
      keywords: "meditación tántrica, energía kundalini, consciencia sexual",
      image: meditationImage,
    },
    {
      id: "mapping-corporal",
      title: "Mapping Corporal y Exploración Sensorial",
      subtitle: "Focalización Sensorial para el Placer Consciente",
      description: "Utilizo este método basado en la 'focalización sensorial' para mapear las zonas erógenas y puntos de placer del cuerpo. Esta técnica permite descubrir nuevas sensaciones y aumentar la sensibilidad corporal de manera gradual y placentera.",
      keywords: "exploración corporal, sensibilidad, zonas erógenas",
      image: mappingImage,
    },
    {
      id: "masaje-tantrico",
      title: "Masaje Tántrico Terapéutico",
      subtitle: "Masaje Tántrico para el Placer Consciente y la Sanación",
      description: "El masaje es el ejemplo más claro del placer como medio de salud y transformación. A través de técnicas de masaje yoni, lingam y de cuerpo completo, liberamos tensiones, desbloqueamos energía estancada y cultivamos el placer sagrado.",
      keywords: "masaje tántrico, masaje yoni, masaje lingam, sanación sexual",
      image: massageImage,
    },
    {
      id: "respiracion-consciente",
      title: "Respiración Consciente Tántrica",
      subtitle: "Respiración para la Energía Tántrica y el Control Sexual",
      description: "Podemos intervenir voluntariamente en nuestra respiración para regular nuestro estado emocional, energético y sexual. Las técnicas de respiración circular y consciente son fundamentales para el control eyaculatorio y la expansión del placer.",
      keywords: "respiración tántrica, control eyaculatorio, energía vital",
      image: respiracionImage,
    },
    {
      id: "movimiento-terapeutico",
      title: "Movimiento Terapéutico y Danza Tántrica",
      subtitle: "Movimiento para Liberar Bloqueos Corporales",
      description: "Somos seres diseñados para movernos. El movimiento consciente y la danza tántrica nos permiten liberar emociones reprimidas, desbloquear la energía sexual estancada y expresar nuestra naturaleza erótica de forma libre y auténtica.",
      keywords: "danza tántrica, movimiento sexual, liberación emocional",
      image: movimientoImage,
    },
    {
      id: "expresion-vocal",
      title: "Expresión Vocal y Sonidos Tántricos",
      subtitle: "La Voz como Expresión y Liberación Sexual",
      description: "La voz es una forma de expresión que utilizamos para liberar emociones, conectar con nuestra fuerza vital y amplificar las sensaciones placenteras. Los sonidos tántricos activan la energía sexual y permiten una experiencia más intensa y liberadora.",
      keywords: "sonidos tántricos, expresión vocal, liberación emocional",
      image: expresionImage,
    },
    {
      id: "masturbacion-consciente",
      title: "Masturbación Consciente y Sagrada",
      subtitle: "Autoplacer Tántrico para el Crecimiento Personal",
      description: "Podemos, mediante la masturbación consciente, practicar sexo muy a menudo y desarrollar nuestra capacidad de placer. Esta práctica sagrada nos permite conocer nuestro cuerpo, controlar la energía sexual y cultivar el autoplacer de forma consciente.",
      keywords: "masturbación consciente, autoplacer tántrico, masturbación sagrada",
      image: masturbacionImage,
    },
    {
      id: "ejercicios-kegel",
      title: "Ejercicios de Kegel para el Placer",
      subtitle: "Fortalecimiento Pélvico para el Placer y la Salud Sexual",
      description: "Los ejercicios de Kegel están destinados a fortalecer los músculos pélvicos, fundamentales para el placer sexual, el control eyaculatorio y la salud reproductiva. Estos ejercicios son la base física de una sexualidad plena y consciente.",
      keywords: "ejercicios Kegel, fortalecimiento pélvico, control sexual",
      image: kegelsImage,
    },
    {
      id: "entrega-posesion",
      title: "Entrega y Posesión Tántrica",
      subtitle: "Estados Profundos de Conexión y Éxtasis",
      description: "La entrega nos conecta con la total aceptación del momento presente, mientras la posesión nos permite experimentar estados de éxtasis y conexión profunda. Estas prácticas avanzadas del tantra nos llevan a la transformación más profunda del ser.",
      keywords: "entrega tántrica, éxtasis sexual, estados de consciencia",
      image: entregaImage,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-gentle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Técnicas y Servicios de Coaching y Tantra Sexual
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Descubre las 10 técnicas fundamentales que utilizo como maestro de tantra y coach sexual 
            para ayudarte a alcanzar el placer consciente, la salud sexual y el crecimiento personal.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicios.map((servicio, index) => (
              <Card key={index} className="group hover:shadow-sacred transition-all duration-500 bg-card/80 backdrop-blur-sm border-border/50">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={servicio.image} 
                    alt={`${servicio.title} - ${servicio.keywords}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-sacred/20"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-primary group-hover:text-sacred-purple transition-colors">
                    {servicio.title}
                  </CardTitle>
                  <CardDescription className="text-sacred-gold font-medium">
                    {servicio.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {servicio.description}
                  </p>
                  <div className="text-xs text-sacred-purple/70 mb-4">
                    Palabras clave: {servicio.keywords}
                  </div>
                  <Link to={`/servicios/${servicio.id}`}>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-gradient-sunset group-hover:text-primary-foreground group-hover:border-transparent transition-all duration-300"
                    >
                      Más Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;