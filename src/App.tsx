import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Filosofia from "./pages/Filosofia";
import Contacto from "./pages/Contacto";
import InfoSesiones from "./pages/InfoSesiones";
import NotFound from "./pages/NotFound";
import TecnicaDetalle from "./pages/TecnicaDetalle";
import ParadigmaDetalle from "./pages/ParadigmaDetalle";
import QuienSoy from "./pages/QuienSoy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:id" element={<TecnicaDetalle />} />
          <Route path="/servicios/:tecnica/info-sesiones" element={<InfoSesiones />} />
          <Route path="/filosofia" element={<Filosofia />} />
          <Route path="/paradigma/:id" element={<ParadigmaDetalle />} />
          <Route path="/quien-soy" element={<QuienSoy />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
