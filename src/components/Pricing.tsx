
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small e-commerce stores looking to get started with AI personalization",
    features: [
      "Intent Prediction Engine",
      "Basic Mood Detection",
      "10,000 monthly predictions",
      "Self-learning product relationships",
      "Email support"
    ],
    popular: false,
    buttonText: "Start Free Trial"
  },
  {
    name: "Growth",
    price: "$799",
    period: "/month",
    description: "For growing businesses ready to maximize conversion rates and AOV",
    features: [
      "Everything in Starter",
      "Advanced Emotional Context Engine",
      "50,000 monthly predictions",
      "API access",
      "Offline capabilities",
      "Priority support"
    ],
    popular: true,
    buttonText: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large retailers with complex needs and high-volume sales",
    features: [
      "Everything in Growth",
      "Unlimited predictions",
      "White labeling",
      "Custom ML model training",
      "Dedicated success manager",
      "24/7 premium support"
    ],
    popular: false,
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Start with our 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden border ${
                plan.popular
                  ? "border-purple-500 bg-gradient-to-b from-purple-900/30 to-slate-800"
                  : "border-slate-700 bg-slate-800"
              }`}
            >
              {plan.popular && (
                <div className="bg-purple-600 text-white text-center py-1">
                  <p className="text-sm font-medium">Most Popular</p>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-1">{plan.period}</span>
                </div>
                <p className="mt-4 text-slate-300">{plan.description}</p>
                
                <div className="mt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button
                  className={`w-full mt-8 ${
                    plan.popular
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-slate-700 hover:bg-slate-600"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
