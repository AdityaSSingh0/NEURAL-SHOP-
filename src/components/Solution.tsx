
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Brain, LineChart, Sparkles, Zap } from "lucide-react";

const Solution = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-purple-400 text-purple-400 mb-4">Solution</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            NEURAL SHOP™ – The AI-Powered Mind-Reading Assistant
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Our revolutionary approach combines machine learning, emotional intelligence, and offline capabilities
          </p>
        </div>
        
        <Tabs defaultValue="intent" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-slate-800/50 p-1">
            <TabsTrigger value="intent" className="data-[state=active]:bg-purple-800/50 data-[state=active]:text-purple-50">
              Intent Decoding
            </TabsTrigger>
            <TabsTrigger value="emotional" className="data-[state=active]:bg-purple-800/50 data-[state=active]:text-purple-50">
              Emotional Context
            </TabsTrigger>
            <TabsTrigger value="relationship" className="data-[state=active]:bg-purple-800/50 data-[state=active]:text-purple-50">
              Relationship Mapping
            </TabsTrigger>
            <TabsTrigger value="offline" className="data-[state=active]:bg-purple-800/50 data-[state=active]:text-purple-50">
              Offline Architecture
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 md:p-6">
            <TabsContent value="intent" className="space-y-6">
              <div className="flex items-start gap-4 md:items-center">
                <div className="h-12 w-12 rounded-lg bg-purple-900/50 flex items-center justify-center mt-1">
                  <Brain className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Behavioral Intent Decoding</h3>
                  <p className="text-slate-300">Our proprietary LLM models analyze your behavior to anticipate needs.</p>
                </div>
              </div>
              
              <div className="bg-slate-900/70 rounded-lg p-4">
                <h4 className="text-md font-medium text-white mb-3">Our system analyzes:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400 mt-1" />
                    <span>Clickstream patterns (hover time, scroll speed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400 mt-1" />
                    <span>Semantic search queries ("formal but comfortable shoes")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400 mt-1" />
                    <span>Purchase sequence logic (camera → SD card prediction)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-purple-500/10">
                <p className="text-purple-200 italic">
                  "When a user views a suitcase for 45+ seconds but doesn't add to cart, Neural Shop suggests packing cubes with a 78% conversion rate"
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="emotional" className="space-y-6">
              <div className="flex items-start gap-4 md:items-center">
                <div className="h-12 w-12 rounded-lg bg-purple-900/50 flex items-center justify-center mt-1">
                  <LineChart className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Emotional Context Engine</h3>
                  <p className="text-slate-300">Adapt in real-time to how users feel when browsing your store.</p>
                </div>
              </div>
              
              <div className="bg-slate-900/70 rounded-lg p-4">
                <h4 className="text-md font-medium text-white mb-3">Real-time mood detection via:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400 mt-1" />
                    <span>Review sentiment analysis (-1 to +1 scoring)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400 mt-1" />
                    <span>Interaction velocity (angry = rapid clicks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400 mt-1" />
                    <span>Voice tone (for voice-enabled platforms)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-purple-500/10">
                <p className="text-purple-200 italic">
                  "When a user shows frustration signals, Neural Shop offers calming exclusive deals - reducing abandonment by 42%"
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="relationship" className="space-y-6">
              <div className="flex items-start gap-4 md:items-center">
                <div className="h-12 w-12 rounded-lg bg-purple-900/50 flex items-center justify-center mt-1">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Autonomous Relationship Mapping</h3>
                  <p className="text-slate-300">Our system discovers product connections without manual intervention.</p>
                </div>
              </div>
              
              <div className="bg-slate-900/70 rounded-lg p-4">
                <h4 className="text-md font-medium text-white mb-3">Self-learning product graph that:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400 mt-1" />
                    <span>Discovers hidden associations (yoga mats → foam rollers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400 mt-1" />
                    <span>Updates continuously via SQLite transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400 mt-1" />
                    <span>Requires zero manual tagging</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-purple-500/10">
                <p className="text-purple-200 italic">
                  "Neural Shop autonomously discovered that customers who buy pregnancy tests often need prenatal vitamins within 30 days"
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="offline" className="space-y-6">
              <div className="flex items-start gap-4 md:items-center">
                <div className="h-12 w-12 rounded-lg bg-purple-900/50 flex items-center justify-center mt-1">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Offline-First Architecture</h3>
                  <p className="text-slate-300">Reach customers anywhere, even in low-connectivity environments.</p>
                </div>
              </div>
              
              <div className="bg-slate-900/70 rounded-lg p-4">
                <h4 className="text-md font-medium text-white mb-3">Hybrid Ollama (LLM) + SQLite deployment:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400 mt-1" />
                    <span>Full functionality without internet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400 mt-1" />
                    <span>Syncs when connectivity resumes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400 mt-1" />
                    <span>Optimized for low-resource environments</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-purple-500/10">
                <p className="text-purple-200 italic">
                  "Neural Shop enabled rural merchants in India to increase sales by 156% through offline-first recommendations"
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Innovation Spotlight</h3>
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-purple-500/20 max-w-3xl mx-auto">
            <p className="text-xl text-purple-100 mb-6">
              Our Predictive Bundling Algorithm increases average order value by 22% by automatically grouping:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/70 p-4 rounded-lg border border-purple-500/10">
                <p className="font-medium text-white mb-1">Logical combos</p>
                <p className="text-sm text-slate-300">phone + case + charger</p>
              </div>
              <div className="bg-slate-900/70 p-4 rounded-lg border border-purple-500/10">
                <p className="font-medium text-white mb-1">Emotional pairings</p>
                <p className="text-sm text-slate-300">breakup playlist + ice cream</p>
              </div>
              <div className="bg-slate-900/70 p-4 rounded-lg border border-purple-500/10">
                <p className="font-medium text-white mb-1">Contextual adds</p>
                <p className="text-sm text-slate-300">umbrellas when rain predicted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
