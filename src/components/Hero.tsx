
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-violet-950 to-purple-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-800/50 text-purple-200 mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Revolutionary AI Shopping</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The E-Commerce Platform That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Reads Minds</span>
          </h1>
          
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mb-8">
            NEURAL SHOP™ transforms e-commerce with AI that predicts desires before users do. This isn't personalization, it's precognition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-purple-200 hover:text-white border-purple-400 hover:bg-purple-700/50">
              Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-12 relative w-full max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-30 rounded-lg"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/20 p-2 md:p-4 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://placehold.co/1200x600/3a1b71/e9d5ff?text=Neural+Shop+Dashboard" 
                alt="Neural Shop Dashboard Preview" 
                className="w-full rounded-lg shadow-inner"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
