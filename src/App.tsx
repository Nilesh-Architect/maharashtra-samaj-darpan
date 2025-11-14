import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Schemes from "./pages/Schemes";
import Login from "./pages/Login";
import Certificate from "./pages/Certificate";
import Grievances from "./pages/Grievances";
import Employment from "./pages/Employment";
import CitizenDashboard from "./pages/dashboards/CitizenDashboard";
import SchemeDetail from "./pages/SchemeDetail";
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
          <Route path="/about" element={<About />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/grievances" element={<Grievances />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/dashboard/citizen" element={<CitizenDashboard />} />
          <Route path="/schemes/:schemeId" element={<SchemeDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
