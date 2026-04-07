import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-5 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-display text-xl md:text-2xl font-extrabold">
                Revium Labs
              </span>
              <span className="text-accent-pink font-display text-xl md:text-2xl font-extrabold">
                .
              </span>
            </Link>
            <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-xs mx-auto md:mx-0">
              Smarter data. Sharper growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li><Link to="/paid-advertising" className="footer-link">Paid Advertising</Link></li>
              <li><Link to="/cro" className="footer-link">Conversion Rate Optimization</Link></li>
              <li><Link to="/analytics" className="footer-link">Analytics & Attribution</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link to="/case-studies" className="footer-link">Case Studies</Link></li>
              <li><Link to="/pricing" className="footer-link">Our Model</Link></li>
              <li><Link to="/partners" className="footer-link">Partners</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+13464854645" className="footer-link">
                  <Phone className="w-4 h-4 shrink-0" />
                  +1 346 485 4645
                </a>
              </li>
              <li>
                <a href="mailto:hello@reviumlabs.co" className="footer-link">
                  <Mail className="w-4 h-4 shrink-0" />
                  hello@reviumlabs.co
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/reviumlabs" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <Linkedin className="w-4 h-4 shrink-0" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Revium Labs. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built for B2B companies in the US & Canada.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
