
import { cn } from "@/lib/utils";
import { Heart, Zap, Sparkles, Moon, Sun, Coffee } from "lucide-react";

interface MoodSelectorProps {
  selectedMood: string;
  onMoodSelect: (mood: string) => void;
}

const moods = [
  { id: "calm", label: "Calm", icon: Moon, color: "text-blue-400", description: "Peaceful and serene" },
  { id: "energetic", label: "Energetic", icon: Zap, color: "text-yellow-400", description: "Vibrant and dynamic" },
  { id: "romantic", label: "Romantic", icon: Heart, color: "text-pink-400", description: "Soft and loving" },
  { id: "mystical", label: "Mystical", icon: Sparkles, color: "text-purple-400", description: "Magical and ethereal" },
  { id: "cheerful", label: "Cheerful", icon: Sun, color: "text-orange-400", description: "Bright and uplifting" },
  { id: "focused", label: "Focused", icon: Coffee, color: "text-amber-400", description: "Clean and minimal" },
];

export const MoodSelector = ({ selectedMood, onMoodSelect }: MoodSelectorProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {moods.map((mood) => {
        const Icon = mood.icon;
        return (
          <button
            key={mood.id}
            onClick={() => onMoodSelect(mood.id)}
            className={cn(
              "p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 text-left",
              selectedMood === mood.id
                ? "bg-white/20 border-white/50 shadow-lg"
                : "bg-white/10 border-white/20 hover:bg-white/15"
            )}
          >
            <div className="flex items-center space-x-3">
              <Icon className={cn("w-5 h-5", mood.color)} />
              <div>
                <h4 className="font-semibold text-white text-sm">{mood.label}</h4>
                <p className="text-xs text-white/70">{mood.description}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};
