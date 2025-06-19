
import { cn } from "@/lib/utils";

interface ColorSelectorProps {
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const colors = [
  { name: "violet", label: "Violet", gradient: "from-violet-600 to-purple-600", hex: "#8B5CF6" },
  { name: "indigo", label: "Indigo", gradient: "from-indigo-600 to-blue-600", hex: "#6366F1" },
  { name: "blue", label: "Blue", gradient: "from-blue-600 to-cyan-600", hex: "#3B82F6" },
  { name: "green", label: "Green", gradient: "from-green-600 to-emerald-600", hex: "#10B981" },
  { name: "yellow", label: "Yellow", gradient: "from-yellow-600 to-orange-500", hex: "#F59E0B" },
  { name: "orange", label: "Orange", gradient: "from-orange-600 to-red-500", hex: "#EA580C" },
  { name: "red", label: "Red", gradient: "from-red-600 to-pink-600", hex: "#DC2626" },
];

export const ColorSelector = ({ selectedColor, onColorSelect }: ColorSelectorProps) => {
  return (
    <div className="grid grid-cols-7 gap-3">
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => onColorSelect(color.name)}
          className={cn(
            "group relative w-12 h-12 rounded-full transition-all duration-300 hover:scale-110",
            selectedColor === color.name && "scale-110 ring-4 ring-white/50"
          )}
        >
          <div 
            className={cn(
              "w-full h-full rounded-full bg-gradient-to-br transition-all duration-300",
              color.gradient,
              "group-hover:shadow-lg group-hover:shadow-current/50"
            )}
          />
          {selectedColor === color.name && (
            <div className="absolute inset-0 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          )}
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 whitespace-nowrap">
            {color.label}
          </span>
        </button>
      ))}
    </div>
  );
};
