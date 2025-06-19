
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Download, Shuffle, Sparkles } from "lucide-react";
import { ColorSelector } from "./ColorSelector";
import { StyleSelector } from "./StyleSelector";
import { MoodSelector } from "./MoodSelector";
import { WallpaperPreview } from "./WallpaperPreview";
import { useToast } from "@/hooks/use-toast";

interface WallpaperGeneratorProps {
  onBack: () => void;
}

export const WallpaperGenerator = ({ onBack }: WallpaperGeneratorProps) => {
  const [selectedColor, setSelectedColor] = useState("violet");
  const [selectedStyle, setSelectedStyle] = useState("abstract");
  const [selectedMood, setSelectedMood] = useState("calm");
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedWallpaper, setGeneratedWallpaper] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation process
    setTimeout(() => {
      // Generate a gradient-based wallpaper preview based on selections
      const gradients = {
        violet: "from-violet-600 via-purple-600 to-indigo-600",
        indigo: "from-indigo-600 via-blue-600 to-purple-600",
        blue: "from-blue-600 via-cyan-600 to-indigo-600",
        green: "from-green-600 via-emerald-600 to-teal-600",
        yellow: "from-yellow-600 via-orange-600 to-amber-600",
        orange: "from-orange-600 via-red-600 to-pink-600",
        red: "from-red-600 via-rose-600 to-pink-600"
      };
      
      setGeneratedWallpaper(gradients[selectedColor as keyof typeof gradients]);
      setIsGenerating(false);
      
      toast({
        title: "Wallpaper Generated!",
        description: "Your unique wallpaper has been created successfully.",
      });
    }, 3000);
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your wallpaper is being prepared for download.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="text-white hover:bg-white/10 mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        
        <h2 className="text-4xl font-bold text-white mb-2">Create Your Wallpaper</h2>
        <p className="text-white/70 text-lg">Customize every aspect to match your vision</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Controls Section */}
        <div className="space-y-6">
          {/* Color Selection */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Choose Your Color</h3>
            <ColorSelector 
              selectedColor={selectedColor} 
              onColorSelect={setSelectedColor} 
            />
          </Card>

          {/* Style Selection */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Select Style</h3>
            <StyleSelector 
              selectedStyle={selectedStyle} 
              onStyleSelect={setSelectedStyle} 
            />
          </Card>

          {/* Mood Selection */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Set the Mood</h3>
            <MoodSelector 
              selectedMood={selectedMood} 
              onMoodSelect={setSelectedMood} 
            />
          </Card>

          {/* Description Input */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
            <Label htmlFor="description" className="text-white text-lg font-medium mb-2 block">
              Describe Your Vision (Optional)
            </Label>
            <Textarea
              id="description"
              placeholder="E.g., 'A calm blue wallpaper with soft waves and gentle lighting...'"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
            />
          </Card>

          {/* Generate Button */}
          <Button 
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {isGenerating ? (
              <>
                <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                Generating Magic...
              </>
            ) : (
              <>
                <Shuffle className="mr-2 h-5 w-5" />
                Generate Wallpaper
              </>
            )}
          </Button>
        </div>

        {/* Preview Section */}
        <div className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Preview</h3>
              {generatedWallpaper && (
                <Button 
                  onClick={handleDownload}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              )}
            </div>
            
            <WallpaperPreview 
              color={selectedColor}
              style={selectedStyle}
              mood={selectedMood}
              description={description}
              isGenerating={isGenerating}
              generatedWallpaper={generatedWallpaper}
            />
          </Card>

          {/* Generation Status */}
          {isGenerating && (
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-white mb-2">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  <span className="font-medium">AI is creating your wallpaper...</span>
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full animate-pulse"></div>
                </div>
                <p className="text-white/70 text-sm">This usually takes 2-3 seconds</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
