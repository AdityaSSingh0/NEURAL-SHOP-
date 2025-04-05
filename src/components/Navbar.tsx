
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Brain, ShoppingBag, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-violet-950 to-purple-900 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-purple-200" />
            <span className="text-xl font-bold text-white">NEURAL SHOP™</span>
          </div>
          
          {isMobile ? (
            <>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-purple-800"
                onClick={toggleMenu}
              >
                <Menu className="h-6 w-6" />
              </Button>
              
              {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-purple-900 shadow-lg animate-fade-in">
                  <div className="flex flex-col p-4 space-y-3">
                    <a href="#" className="text-purple-100 hover:text-white">Features</a>
                    <a href="#" className="text-purple-100 hover:text-white">How It Works</a>
                    <a href="#" className="text-purple-100 hover:text-white">Pricing</a>
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                      Get Started
                    </Button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="hidden md:flex items-center space-x-6">
                <a href="#features" className="text-purple-100 hover:text-white transition-colors">Features</a>
                <a href="#how-it-works" className="text-purple-100 hover:text-white transition-colors">How It Works</a>
                <a href="#pricing" className="text-purple-100 hover:text-white transition-colors">Pricing</a>
              </div>
              <Button className="hidden md:flex bg-purple-500 hover:bg-purple-600 text-white">
                <ShoppingBag className="mr-2 h-4 w-4" /> Get Started
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
