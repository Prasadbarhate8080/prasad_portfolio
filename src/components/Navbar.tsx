import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar({
  resumeopen,
  setReumeopen,
}: {
  resumeopen: boolean;
  setReumeopen: (value: boolean) => void;
}) {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-16 md:h-20  justify-between max-w-7xl mx-auto px-4 items-center">
        <a href="#">
          <span className="text-xl font-bold">
            <span className="text-2xl  font-bold gradient-text">
              <img
                width={70}
                className="rotate-15 w-[60px] md:w-[70px]"
                src="/portfolio_logo.png"
                alt="prasad portfolio"
              />
            </span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden md:flex  gap-2 justify-center items-center">
          <Button variant="heroOutline" size="lg" asChild
          onClick={() => {setReumeopen(true)}}
          >
            <a href="#">Resume</a>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex  gap-2 flex-col justify-center items-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="#contact">Let's Talk</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
