
import { Brain, TrendingUp, Smile, Zap } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-8 w-8 text-purple-400" />,
    title: "Intent Prediction",
    description: "Reads hidden desires (e.g., 'suitcase' → suggests 'packing cubes'). LLM trained on 10M+ shopping behaviors."
  },
  {
    icon: <Smile className="h-8 w-8 text-purple-400" />,
    title: "Mood-Smart Suggestions",
    description: "Detects user mood via clicks/reviews. Angry? Discounts. Happy? Premium upsells."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-purple-400" />,
    title: "Self-Learning System",
    description: "Auto-discovers product links with zero manual work. Our SQLite Product Graph autonomously finds hidden relationships."
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-400" />,
    title: "Works Offline",
    description: "Perfect for low-connectivity areas. Ollama-powered AI delivers hyper-personalized results even in offline environments."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Neural Shop isn't just another recommendation engine. Our revolutionary technology transforms how people shop online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-800/70 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5"
            >
              <div className="h-12 w-12 rounded-lg bg-purple-900/50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
