// components/ToolCard.tsx
import { TechItem } from '@/constant/techStack';

export default function ToolCard({ name, category, Icon, color }: TechItem) {
  // Use a default gray if no color is provided
  const iconColorClass = color || 'text-gray-700 dark:text-gray-300';

  return (
    <div className="flex items-center gap-4 p-5bg-white border border-gray-100 rounded-lg p-5 pt-3 shadow-xl transition-all duration-300 hover:border-gray-300 group">
      {/* Icon Container */}
      <div className={`p-3 rounded-xl bg-gray-100 group-hover:bg-gray-50 dark:group-hover:bg-white-400/50 transition-colors ${iconColorClass}`}>
        <Icon className="w-7 h-7 stroke-[1.5]" />
      </div>

      {/* Text Container */}
      <div className="flex flex-col gap-0.5">
        <h3 className="font-semibold text-base text-gray-950 group-hover:text-gray-800 dark:group-hover:text-gray-400 transition-colors">
          {name}
        </h3>
        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gray-500 text-gray-200 w-fit">
          {category}
        </span>
      </div>
    </div>
  );
}