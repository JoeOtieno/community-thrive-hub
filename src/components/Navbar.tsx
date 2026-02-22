import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/gaford-logo.jpg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Impact", to: "/impact" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="GaFORD Logo" className="h-10 md:h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors border-b-2 ${
                location.pathname === link.to
                  ? "text-foreground border-orange-500"
                  : "text-muted-foreground hover:text-foreground border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/donate">
            <Button className="rounded-full px-6 bg-orange-500 hover:bg-orange-600 text-white">Donate Now</Button>
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors border-b-2 ${
                  location.pathname === link.to
                    ? "text-foreground border-orange-500"
                    : "text-muted-foreground hover:text-foreground border-transparent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/donate" onClick={() => setOpen(false)}>
              <Button className="w-full mt-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white">Donate Now</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
