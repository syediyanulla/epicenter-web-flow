import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Heart className="w-8 h-8 text-secondary fill-secondary/20" strokeWidth={2} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-5 bg-secondary rounded-sm" />
              </div>
            </div>
            <span className="text-2xl font-bold text-foreground">Cure-On</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                >
                  Contact
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/")}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                Home
              </button>
            )}
            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" aria-label="Menu">
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-foreground" />
              <div className="w-6 h-0.5 bg-foreground" />
              <div className="w-6 h-0.5 bg-foreground" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
