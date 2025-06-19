
import { cn } from "@/lib/utils";
import { Sparkles, Monitor, Smartphone } from "lucide-react";

interface WallpaperPreviewProps {
  color: string;
  style: string;
  mood: string;
  description: string;
  isGenerating: boolean;
  generatedWallpaper: string | null;
}

export const WallpaperPreview = ({ 
  color, 
  style, 
  mood, 
  description, 
  isGenerating, 
  generatedWallpaper 
}: WallpaperPreviewProps) => {
  const getPreviewGradient = () => {
    if (generatedWallpaper) {
      return generatedWallpaper;
    }
    
    const colorGradients = {
      violet: "from-violet-600 via-purple-600 to-indigo-600",
      indigo: "from-indigo-600 via-blue-600 to-purple-600",
      blue: "from-blue-600 via-cyan-600 to-indigo-600",
      green: "from-green-600 via-emerald-600 to-teal-600",
      yellow: "from-yellow-600 via-orange-600 to-amber-600",
      orange: "from-orange-600 via-red-600 to-pink-600",
      red: "from-red-600 via-rose-600 to-pink-600"
    };
    
    return colorGradients[color as keyof typeof colorGradients] || colorGradients.violet;
  };

  const getStylePattern = () => {
    switch (style) {
      case "geometric":
        return (
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div 
                  key={i} 
                  className="border border-white/20 hover:bg-white/10 transition-colors duration-1000"
                  style={{ animationDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
          </div>
        );
      case "fluid":
        return (
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        );
      case "nature":
        return (
          <div className="absolute inset-0 opacity-25">
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-900/50 to-transparent"></div>
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-900/30 to-transparent"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {/* Desktop Preview */}
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <Monitor className="w-4 h-4 text-white/70" />
          <span className="text-sm text-white/70">Desktop (1920×1080)</span>
        </div>
        
        <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-white/20">
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br transition-all duration-1000",
            getPreviewGradient()
          )}>
            {getStylePattern()}
            
            {isGenerating && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-12 h-12 text-white animate-spin mx-auto mb-4" />
                  <p className="text-white font-medium animate-pulse">Generating...</p>
                </div>
              </div>
            )}
            
            {!isGenerating && !generatedWallpaper && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <p>Preview will appear here</p>
                  <p className="text-sm mt-1">Click "Generate Wallpaper" to create</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Preview */}
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <Smartphone className="w-4 h-4 text-white/70" />
          <span className="text-sm text-white/70">Mobile (1080×1920)</span>
        </div>
        
        <div className="relative w-32 h-56 mx-auto rounded-lg overflow-hidden border-2 border-white/20">
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br transition-all duration-1000",
            getPreviewGradient()
          )}>
            {getStylePattern()}
            
            {isGenerating && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white animate-spin" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Settings Summary */}
      <div className="bg-white/5 rounded-lg p-3 text-sm text-white/80">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <span className="text-white/60">Color:</span>
            <p className="font-medium capitalize">{color}</p>
          </div>
          <div>
            <span className="text-white/60">Style:</span>
            <p className="font-medium capitalize">{style}</p>
          </div>
          <div>
            <span className="text-white/60">Mood:</span>
            <p className="font-medium capitalize">{mood}</p>
          </div>
        </div>
        {description && (
          <div className="mt-2 pt-2 border-t border-white/10">
            <span className="text-white/60">Description:</span>
            <p className="text-xs mt-1">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};
