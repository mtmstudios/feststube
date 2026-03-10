import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CityPage from "./pages/CityPage";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Zeltvermietung from "./pages/Zeltvermietung";
import ZeltvermietungCityPage from "./pages/ZeltvermietungCityPage";
import Veranstaltungstechnik from "./pages/Veranstaltungstechnik";
import VeranstaltungstechnikCityPage from "./pages/VeranstaltungstechnikCityPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stadt/:city" element={<CityPage />} />
          <Route path="/zeltvermietung" element={<Zeltvermietung />} />
          <Route path="/zeltvermietung/:city" element={<ZeltvermietungCityPage />} />
          <Route path="/veranstaltungstechnik" element={<Veranstaltungstechnik />} />
          <Route path="/veranstaltungstechnik/:city" element={<VeranstaltungstechnikCityPage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
