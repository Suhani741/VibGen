
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WallpaperGenerator } from "@/components/WallpaperGenerator";
import { Sparkles, Palette, Download, Zap } from "lucide-react";

const Index = () => {
  const [showGenerator, setShowGenerator] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/20 to-yellow-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {!showGenerator ? (
          // Hero Section
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <Sparkles className="text-yellow-400 w-8 h-8" />
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-violet-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-fade-in">
                  Luminous
                </h1>
                <Sparkles className="text-yellow-400 w-8 h-8" />
              </div>
              
              <p className="text-xl md:text-2xl text-white/80 mb-4 animate-fade-in delay-200">
                AI-Powered Wallpaper Creation Tool
              </p>
              
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 animate-fade-in delay-300">
                Transform your imagination into stunning wallpapers. Choose colors, styles, and moods 
                to create unique backgrounds powered by artificial intelligence.
              </p>

              <Button 
                onClick={() => setShowGenerator(true)}
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in delay-500"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Creating
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in delay-700">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">VIBGYOR Colors</h3>
                  <p className="text-white/70">
                    Choose from the full spectrum of colors with intelligent blending and mood matching.
                  </p>
                </div>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in delay-900">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">AI Generation</h3>
                  <p className="text-white/70">
                    Advanced AI models trained on thousands of images to create unique wallpapers.
                  </p>
                </div>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in delay-1100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Instant Preview</h3>
                  <p className="text-white/70">
                    See your wallpaper come to life with real-time preview and instant download.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          // Generator Interface
          <WallpaperGenerator onBack={() => setShowGenerator(false)} />
        )}
      </div>
    </div>
  );
};

export default Index;
