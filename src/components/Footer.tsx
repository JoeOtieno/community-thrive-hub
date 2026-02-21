import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/gaford-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="GaFORD" className="h-14 w-auto mb-4 bg-card rounded p-1" />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Gateway for Rural Development — empowering youth, strengthening communities through health, education, and economic opportunity.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Programs", to: "/programs" },
                { label: "Impact & Stories", to: "/impact" },
                { label: "Get Involved", to: "/get-involved" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>Registered in USA</span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={16} className="shrink-0 text-primary" />
                <span>info@gaford.org</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone size={16} className="shrink-0 text-primary" />
                <span>+254 700 000 000</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-secondary-foreground/70 mb-3">
              Stay updated on our impact and opportunities.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                placeholder="Your email"
                type="email"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
              />
              <Button type="submit" size="sm">
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-secondary-foreground/50 gap-4">
          <p>© {new Date().getFullYear()} GaFORD — Gateway for Rural Development. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
