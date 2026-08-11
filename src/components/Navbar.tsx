import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border/60 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.15)]"
          : "bg-background/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="font-display text-2xl md:text-[2rem] leading-none tracking-tight text-foreground hover:text-accent transition-colors"
          >
            CB
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[0.66rem] lg:text-xs uppercase tracking-[0.18em] lg:tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button variant="accent" size="sm" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:bg-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-5 animate-fade-up">
            <div className="rounded-2xl border border-border/70 bg-background/80 p-4 shadow-soft backdrop-blur-xl">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors py-2 px-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button variant="accent" asChild className="mt-2">
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get in Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
