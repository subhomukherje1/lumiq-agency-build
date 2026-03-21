import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { label: "Paid Advertising", href: "/paid-advertising" },
  { label: "Conversion Rate Optimization", href: "/cro" },
  { label: "Analytics & Attribution", href: "/analytics" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        {/* TODO: Replace with Revium Labs logo before launch */}
        <Link to="/" className="flex items-center gap-2">
          <span className={`font-display text-2xl font-extrabold tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            Revium Labs
          </span>
          <span className="text-accent-pink font-display text-2xl font-extrabold">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-border p-2"
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="block px-4 py-3 rounded-lg text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium"
                    >
                      {s.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/case-studies" className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
            Case Studies
          </Link>
          <Link to="/pricing" className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
            Our Model
          </Link>
          <Link to="/contact" className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
            Contact
          </Link>
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Free Audit
          </Link>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 pt-2">Services</p>
              {services.map((s) => (
              <Link key={s.href} to={s.href} className="block px-3 py-3 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-primary/5 min-h-[44px] flex items-center">
                  {s.label}
                </Link>
              ))}
              <Link to="/case-studies" className="block px-3 py-3 text-sm font-medium text-foreground hover:text-primary min-h-[44px] flex items-center">Case Studies</Link>
              <Link to="/pricing" className="block px-3 py-3 text-sm font-medium text-foreground hover:text-primary min-h-[44px] flex items-center">Our Model</Link>
              <Link to="/contact" className="block px-3 py-3 text-sm font-medium text-foreground hover:text-primary min-h-[44px] flex items-center">Contact</Link>
              <Link to="/contact" className="block mt-4 text-center px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold min-h-[44px] flex items-center justify-center">
                Get Free Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
