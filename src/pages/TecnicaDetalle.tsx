import { useParams, Navigate } from "react-router-dom";
import ConversacionTerapeutica from "./ConversacionTerapeutica";
import MasajeTantrico from "./MasajeTantrico";
import MeditacionTantrica from "./MeditacionTantrica";
import MappingCorporal from "./MappingCorporal";
import RespiracionConsciente from "./RespiracionConsciente";
import MovimientoTerapeutico from "./MovimientoTerapeutico";
import ExpresionVocal from "./ExpresionVocal";
import MasturbacionConsciente from "./MasturbacionConsciente";
import EjerciciosKegel from "./EjerciciosKegel";
import EntregaPosesion from "./EntregaPosesion";

const TecnicaDetalle = () => {
  const { id } = useParams();

  const renderTechnique = () => {
    switch (id) {
      case "conversacion-terapeutica":
        return <ConversacionTerapeutica />;
      case "masaje-tantrico":
        return <MasajeTantrico />;
      case "meditacion-tantrica":
        return <MeditacionTantrica />;
      case "mapping-corporal":
        return <MappingCorporal />;
      case "respiracion-consciente":
        return <RespiracionConsciente />;
      case "movimiento-terapeutico":
        return <MovimientoTerapeutico />;
      case "expresion-vocal":
        return <ExpresionVocal />;
      case "masturbacion-consciente":
        return <MasturbacionConsciente />;
      case "ejercicios-kegel":
        return <EjerciciosKegel />;
      case "entrega-posesion":
        return <EntregaPosesion />;
      default:
        return <Navigate to="/servicios" replace />;
    }
  };

  return renderTechnique();
};

export default TecnicaDetalle;