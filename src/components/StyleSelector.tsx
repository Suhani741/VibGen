
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Waves, Mountain, Zap, Flower, Grid3X3, Paintbrush } from "lucide-react";

interface StyleSelectorProps {
  selectedStyle: string;
  onStyleSelect: (style: string) => void;
}

const styles = [
  { 
    id: "abstract", 
    label: "Abstract", 
    icon: Zap, 
    description: "Flowing shapes and patterns",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  { 
    id: "nature", 
    label: "Nature", 
    icon: Mountain, 
    description: "Landscapes and organic forms",
    gradient: "from-green-500/20 to-blue-500/20"
  },
  { 
    id: "geometric", 
    label: "Geometric", 
    icon: Grid3X3, 
    description: "Clean lines and shapes",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  { 
    id: "fluid", 
    label: "Fluid", 
    icon: Waves, 
    description: "Smooth flowing gradients",
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  { 
    id: "floral", 
    label: "Floral", 
    icon: Flower, 
    description: "Botanical and organic",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  { 
    id: "artistic", 
    label: "Artistic", 
    icon: Paintbrush, 
    description: "Paint-like textures",
    gradient: "from-orange-500/20 to-red-500/20"
  },
];

export const StyleSelector = ({ selectedStyle, onStyleSelect }: StyleSelectorProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {styles.map((style) => {
        const Icon = style.icon;
        return (
          <Card
            key={style.id}
            onClick={() => onStyleSelect(style.id)}
            className={cn(
              "p-4 cursor-pointer transition-all duration-300 hover:scale-105 border-2",
              selectedStyle === style.id
                ? "bg-white/20 border-white/50 shadow-lg"
                : "bg-white/10 border-white/20 hover:bg-white/15",
              `bg-gradient-to-br ${style.gradient}`
            )}
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <Icon className="w-6 h-6 text-white" />
              <div>
                <h4 className="font-semibold text-white text-sm">{style.label}</h4>
                <p className="text-xs text-white/70">{style.description}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
