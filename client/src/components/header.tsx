import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/education", label: "Обучение" },
    { path: "/movies", label: "Фильмы" },
    { path: "/music", label: "Музыка" },
    { path: "/books", label: "Книги" },
  ];

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <span
                className={`hover:text-primary transition-colors cursor-pointer ${
                  location === item.path ? "text-primary font-medium" : ""
                }`}
                data-testid={`link-${item.path.slice(1)}`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-menu-toggle"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`block hover:text-primary transition-colors cursor-pointer py-2 ${
                    location === item.path ? "text-primary font-medium" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-link-${item.path.slice(1)}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
