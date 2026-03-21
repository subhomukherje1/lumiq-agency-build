import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand */}
          {/* TODO: Replace with Revium Labs logo before launch */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-extrabold">Revium Labs</span>
              <span className="text-accent-pink font-display text-2xl font-extrabold">.</span>
            </Link>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Smarter data. Sharper growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/paid-advertising" className="text-sm text-white/70 hover:text-white transition-colors">Paid Advertising</Link></li>
              <li><Link to="/cro" className="text-sm text-white/70 hover:text-white transition-colors">Conversion Rate Optimization</Link></li>
              <li><Link to="/analytics" className="text-sm text-white/70 hover:text-white transition-colors">Analytics & Attribution</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/case-studies" className="text-sm text-white/70 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/pricing" className="text-sm text-white/70 hover:text-white transition-colors">Our Model</Link></li>
              <li><Link to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@reviumlabs.co" className="inline-flex items-center justify-center md:justify-start gap-2 text-sm text-white/70 hover:text-white transition-colors min-h-[44px]">
                  <Mail className="w-4 h-4" /> hello@reviumlabs.co
                </a>
              </li>
              <li>
                <a href="https://wa.me/14155551234" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center md:justify-start gap-2 text-sm text-white/70 hover:text-white transition-colors min-h-[44px]">
                  <Phone className="w-4 h-4" /> +1 (415) 555-1234
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/reviumlabs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center md:justify-start gap-2 text-sm text-white/70 hover:text-white transition-colors min-h-[44px]">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Revium Labs. All rights reserved.</p>
          <p className="text-xs text-white/40">Built for B2B companies in the US & Canada.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
