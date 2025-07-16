
import { TechIcon } from '@/components/portfolio/TechIcon';

const frontendTools = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'TailwindCSS', icon: '🌊' },
  { name: 'Bootstrap', icon: '🅱️' },
  { name: 'React Native', icon: '📱' },
  { name: 'Flutter', icon: '💙' }
];

const backendTools = [
  { name: 'Vercel', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'Flask', icon: '🍶' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'Redis', icon: '🟥' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Nginx', icon: '🚦' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Render', icon: '🟦' }
];

export const ToolsSection = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Frontend</h3>
        <div className="grid grid-cols-4 gap-4">
          {frontendTools.map((tool, index) => (
            <TechIcon
              key={tool.name}
              name={tool.name}
              icon={tool.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-medium">Backend and Infrastructure</h3>
        <div className="grid grid-cols-4 gap-4">
          {backendTools.map((tool, index) => (
            <TechIcon
              key={tool.name}
              name={tool.name}
              icon={tool.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
