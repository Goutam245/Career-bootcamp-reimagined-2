import { NavLink } from "@/components/NavLink";
import { Briefcase, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Career Bootcamp</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Switzerland's Premier Career Coaching Boutique Since 2019. Helping professionals secure their next great role faster and smarter.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/programs" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Programs
                </NavLink>
              </li>
              <li>
                <NavLink to="/success-stories" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Success Stories
                </NavLink>
              </li>
              <li>
                <NavLink to="/resources" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li className="text-sm text-secondary-foreground/80">Career Accelerator</li>
              <li className="text-sm text-secondary-foreground/80">Executive Coaching</li>
              <li className="text-sm text-secondary-foreground/80">Job Search Mastery</li>
              <li className="text-sm text-secondary-foreground/80">LinkedIn Optimization</li>
              <li className="text-sm text-secondary-foreground/80">Interview Preparation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-secondary-foreground/80">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Zurich, Switzerland</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-secondary-foreground/80">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:info@careerbootcamp.ch" className="hover:text-primary transition-smooth">
                  info@careerbootcamp.ch
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-secondary-foreground/80">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:+41123456789" className="hover:text-primary transition-smooth">
                  +41 12 345 67 89
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/80">
              © {currentYear} Career Bootcamp. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
