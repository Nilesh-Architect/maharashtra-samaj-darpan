import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, Globe, ZoomIn, ZoomOut, Type } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large'>('normal');

  const toggleFontSize = () => {
    const sizes: ('small' | 'normal' | 'large')[] = ['small', 'normal', 'large'];
    const currentIndex = sizes.indexOf(fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    const nextSize = sizes[nextIndex];
    setFontSize(nextSize);
    document.body.className = document.body.className.replace(
      /font-size-\w+/g,
      ''
    );
    document.body.classList.add(`font-size-${nextSize}`);
  };

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About Department", path: "/about" },
    { label: "Schemes", path: "/schemes" },
    { label: "PwD Certificate", path: "/certificate" },
    { label: "Grievances", path: "/grievances" },
    { label: "Employment", path: "/employment" },
    { label: "Login", path: "/login" },
  ];

  return (
    <>
      {/* Skip to content for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top Info Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-4 flex-wrap">
              <a href="tel:18001234567" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Phone className="h-3 w-3" aria-hidden="true" />
                <span>1800-123-4567 (Toll Free)</span>
              </a>
              <a href="mailto:pwd@maharashtra.gov.in" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Mail className="h-3 w-3" aria-hidden="true" />
                <span>pwd@maharashtra.gov.in</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleFontSize}
                className="flex items-center gap-1 px-2 py-1 hover:bg-muted rounded transition-colors"
                aria-label="Change text size"
              >
                <Type className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs font-medium">
                  {fontSize === 'small' ? 'A-' : fontSize === 'large' ? 'A+' : 'A'}
                </span>
              </button>
              <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Globe className="h-3 w-3" aria-hidden="true" />
                <span>मराठी</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="gov-header sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo and Department Name */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl" aria-hidden="true">PwD</span>
                </div>
              </div>
              <div className="hidden md:block">
                <h1 className="text-lg lg:text-xl font-bold leading-tight">
                  Persons with Disabilities Welfare Department
                </h1>
                <p className="text-sm opacity-90">Government of Maharashtra</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 rounded hover:bg-primary-foreground/10 transition-colors font-medium text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden pb-4 border-t border-primary-foreground/20 mt-2" aria-label="Mobile navigation">
              <ul className="space-y-1 mt-2">
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="block px-4 py-2 rounded hover:bg-primary-foreground/10 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
