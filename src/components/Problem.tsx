
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown, Wifi, Zap } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="border-red-400 text-red-400">Problem Statement</Badge>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🛒 The E-Commerce Personalization Crisis
          </h2>
          
          <div className="bg-slate-900/70 backdrop-blur-sm border border-red-500/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-red-400" /> The Problem
            </h3>
            <p className="text-slate-300 mb-4">35% of potential sales lost due to:</p>
            <ul className="space-y-2 text-slate-300 ml-6 list-disc mb-0">
              <li>Generic recommendations ("You bought shoes? Here are more shoes!")</li>
              <li>Missed subconscious needs (camera buyers forget memory cards)</li>
              <li>Emotional blindness (treats frustrated and happy users the same)</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-4">🔍 Root Causes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/70 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-red-900/30 flex items-center justify-center">
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                </div>
                <h4 className="font-medium text-white">Manual Product Tagging</h4>
              </div>
              <p className="text-sm text-slate-400">200+ hours/month wasted on manual work</p>
            </div>
            
            <div className="bg-slate-900/70 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-red-900/30 flex items-center justify-center">
                  <TrendingDown className="h-4 w-4 text-red-400" />
                </div>
                <h4 className="font-medium text-white">Static Algorithms</h4>
              </div>
              <p className="text-sm text-slate-400">Ignore real-time behavior and context</p>
            </div>
            
            <div className="bg-slate-900/70 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-red-900/30 flex items-center justify-center">
                  <Wifi className="h-4 w-4 text-red-400" />
                </div>
                <h4 className="font-medium text-white">Internet Dependency</h4>
              </div>
              <p className="text-sm text-slate-400">Excludes 3B offline shoppers globally</p>
            </div>
          </div>
          
          <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
              <TrendingDown className="h-5 w-5 text-red-400" /> Consequences
            </h3>
            <p className="text-slate-300 mb-2">$6.3T industry suffering:</p>
            <ul className="space-y-2 text-slate-300 ml-6 list-disc">
              <li>62% cart abandonment (Baymard)</li>
              <li>29% lower conversion (McKinsey)</li>
            </ul>
          </div>
          
          <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-purple-400" /> Our Breakthrough
            </h3>
            <p className="text-xl text-center font-semibold text-purple-200 mb-4">
              Neural Shop: AI that finally understands shoppers
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-purple-800/50 hover:bg-purple-800 text-purple-100 border-purple-700">Intent Prediction</Badge>
              <Badge className="bg-purple-800/50 hover:bg-purple-800 text-purple-100 border-purple-700">Mood Intelligence</Badge>
              <Badge className="bg-purple-800/50 hover:bg-purple-800 text-purple-100 border-purple-700">Zero Manual Work</Badge>
              <Badge className="bg-purple-800/50 hover:bg-purple-800 text-purple-100 border-purple-700">Offline Capability</Badge>
            </div>
          </div>
          
          <div className="text-xs text-slate-500 mt-4">
            Source: McKinsey 2023, Baymard Institute
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
