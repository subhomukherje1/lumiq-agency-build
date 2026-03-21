import { useState, useEffect, useRef } from "react";
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-5 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 shrink-0">
          <span className={`font-display text-xl md:text-2xl font-extrabold tracking-tight ${scrolled || mobileOpen ? "text-foreground" : "text-white"}`}>
            Revium Labs
          </span>
          <span className="text-accent-pink font-display text-xl md:text-2xl font-extrabold">.</span>
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
          <Link to="/partners" className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
            Partners
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
            Request a Revenue Teardown
          </Link>
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-testid="mobile-menu-toggle"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled || mobileOpen ? "text-foreground" : "text-white"}`} />
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0D0D1A] overflow-hidden"
            data-testid="mobile-menu"
          >
            <div className="px-5 py-6 space-y-1">
              {/* Services with sub-items */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-[18px] font-medium text-white hover:text-accent-pink transition-colors min-h-[48px]"
                data-testid="mobile-services-toggle"
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 space-y-1"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        className="block px-4 py-3 text-[16px] font-medium text-white/70 hover:text-white transition-colors min-h-[48px] flex items-center"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link to="/case-studies" className="block px-4 py-3 text-[18px] font-medium text-white hover:text-accent-pink transition-colors min-h-[48px] flex items-center">
                Case Studies
              </Link>
              <Link to="/pricing" className="block px-4 py-3 text-[18px] font-medium text-white hover:text-accent-pink transition-colors min-h-[48px] flex items-center">
                Our Model
              </Link>
              <Link to="/partners" className="block px-4 py-3 text-[18px] font-medium text-white hover:text-accent-pink transition-colors min-h-[48px] flex items-center">
                Partners
              </Link>
              <Link to="/contact" className="block px-4 py-3 text-[18px] font-medium text-white hover:text-accent-pink transition-colors min-h-[48px] flex items-center">
                Contact
              </Link>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-4 rounded-full bg-primary text-primary-foreground text-[16px] font-semibold min-h-[52px] flex items-center justify-center"
                  data-testid="mobile-cta-btn"
                >
                  Request a Revenue Teardown
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
