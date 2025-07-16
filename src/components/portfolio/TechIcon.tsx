
interface TechIconProps {
  name: string;
  icon: string;
  delay?: number;
}

export const TechIcon = ({ name, icon, delay = 0 }: TechIconProps) => {
  return (
    <div
      className="flex flex-col items-center space-y-1 animate-fade-in cursor-pointer hover-pop"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl bg-transparent transition-colors duration-200">
        {icon}
      </div>
      <span className="text-sm text-muted-foreground text-center">{name}</span>
    </div>
  );
};
