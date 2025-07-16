
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = ['Projects', 'Experience', 'Tools'];

  return (
    <nav className="flex space-x-2 mt-8">
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant="ghost"
          onClick={() => onTabChange(tab)}
          className={`text-sm tab-transition ${activeTab === tab
            ? 'text-foreground font-medium tab-active bg-accent/50'
            : 'text-muted-foreground hover:text-foreground hover:bg-accent/30'
            }`}
        >
          {tab}
        </Button>
      ))}
    </nav>
  );
};
