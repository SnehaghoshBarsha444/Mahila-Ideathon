
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Marketplace from "./pages/Marketplace";
import FinancialAI from "./pages/FinancialAI";
import Learn from "./pages/Learn";
import CourseDetail from "./pages/CourseDetail";
import Blockchain from "./pages/Blockchain";
import Insights from "./pages/Insights";
import Accessibility from "./pages/Accessibility";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main Feature Pages */}
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/financial-ai" element={<FinancialAI />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/course/:courseId" element={<CourseDetail />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/about" element={<About />} />
          
          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Other routes that still use NotFound as placeholder */}
          <Route path="/ai-credit" element={<NotFound />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
