import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, Briefcase } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/success-stories", label: "Success Stories" },
    { to: "/resources", label: "Resources" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Briefcase className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-navy">Career Bootcamp</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth rounded-md hover:bg-muted"
                activeClassName="text-primary bg-accent-light"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild>
              <NavLink to="/contact">Book Free Call</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-up">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth rounded-md hover:bg-muted"
                activeClassName="text-primary bg-accent-light"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full">
                <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Book Free Call
                </NavLink>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
