
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your e-commerce experience?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Join the revolution of AI-powered shopping with Neural Shop™. Start your 14-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-200 hover:text-white hover:bg-purple-800/50">
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
