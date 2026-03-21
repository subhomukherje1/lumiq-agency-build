/**
 * DEVELOPER HANDOFF — Files to update before launch:
 *
 * 1. .env                          — Fill in all VITE_* environment variables (see .env.example)
 * 2. src/components/Footer.tsx     — Update phone number, LinkedIn URL, email address
 * 3. src/data/casestudies.ts       — Verify / update case study content
 * 4. src/pages/Index.tsx           — Replace placeholder client logos (Section 6)
 * 5. public/og-home.png            — Add real Open Graph image
 * 6. public/robots.txt             — Update for production
 * 7. index.html                    — Add GA4 script tag using VITE_GA4_MEASUREMENT_ID
 *
 * See README.md for full pre-launch checklist.
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CalendlyButton from "@/components/CalendlyButton";
import Index from "./pages/Index";

const CRO = lazy(() => import("./pages/CRO"));
const Analytics = lazy(() => import("./pages/Analytics"));
const PaidMedia = lazy(() => import("./pages/PaidMedia"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Partners = lazy(() => import("./pages/Partners"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-dark flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cro" element={<CRO />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/paid-advertising" element={<PaidMedia />} />
              <Route path="/paid-media" element={<PaidMedia />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
          <CalendlyButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
