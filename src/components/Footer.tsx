import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-primary-foreground/20 pb-2">
              About Department
            </h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Persons with Disabilities Welfare Department is committed to empowering PwDs through inclusive policies, schemes, and support services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-primary-foreground/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/schemes" className="hover:text-accent transition-colors">
                  Schemes & Services
                </Link>
              </li>
              <li>
                <Link to="/certificate" className="hover:text-accent transition-colors">
                  PwD Certificate
                </Link>
              </li>
              <li>
                <Link to="/grievances" className="hover:text-accent transition-colors">
                  Grievance Redressal
                </Link>
              </li>
              <li>
                <Link to="/employment" className="hover:text-accent transition-colors">
                  Employment Portal
                </Link>
              </li>
              <li>
                <Link to="/dashboard/citizen" className="hover:text-accent transition-colors">
                  Citizen Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-primary-foreground/20 pb-2">
              Important Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors inline-flex items-center gap-1">
                  India.gov.in
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors inline-flex items-center gap-1">
                  Maharashtra.gov.in
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.digitalindia.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors inline-flex items-center gap-1">
                  Digital India
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <Link to="/about/organizations" className="hover:text-accent transition-colors">
                  Organizations Under Department
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-primary-foreground/20 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Persons with Disabilities Welfare Department, Mantralaya, Mumbai - 400032</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <a href="tel:18001234567" className="hover:text-accent transition-colors">
                  1800-123-4567 (Toll Free)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:pwd@maharashtra.gov.in" className="hover:text-accent transition-colors">
                  pwd@maharashtra.gov.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="opacity-90">
              © {currentYear} Persons with Disabilities Welfare Department, Government of Maharashtra. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/privacy-policy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/accessibility" className="hover:text-accent transition-colors">
                Accessibility Statement
              </Link>
              <Link to="/sitemap" className="hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
