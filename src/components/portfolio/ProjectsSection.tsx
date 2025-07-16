
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Version Solve',
    description: 'AI powered place for coders to solve advanced algorithm problems.',
    tech: ['React.js',  'Node.js', 'TypeScript','Tailwind CSS', 'MongoDB', 'AWS', 'Docker'],
    github: true,
    live: true,
    link: 'https://versionsolve.xyz'
  },
  {
    title: 'CashnTech LMS',
    description: 'A complex lms system handling banking operations.',
    tech: ['React.js', 'Node.js', 'Javascript', 'Bootstrap'],
    github: false,
    live: true,
    link: 'https://cash-n-tech.vercel.app/homescreen'
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Razorpay'],
    github: true,
    live: true,
    link: 'https://rs-healthcare.vercel.app'
  },

  {
    title: 'All in one AI tool',
    description: 'Built an AI-powered tool that generates a variety of content from prompts—including podcasts, images, and PDFs—using the OpenAI API. Also implemented a PDF chat feature that allows users to interact with and query PDF content directly.',
    tech: ['React', 'OpenAI', 'Flask', 'Tailwind'],
    github: true,
    live: true
  }
];

export const ProjectsSection = () => {
  return (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <div
          key={project.title}
          className="space-y-3 animate-fade-in hover-slide-right cursor-pointer"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium story-link">{project.title}</h3>
            <div className="flex space-x-2">
              {project.github && (
                <Button variant="ghost" size="sm" className="text-xs hover-scale">
                  <Github className="h-3 w-3 mr-1" />
                  GitHub
                </Button>
              )}
              {project.live && (
                project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="text-xs hover-scale">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Live
                    </Button>
                  </a>
                ) : (
                  <Button variant="ghost" size="sm" className="text-xs hover-scale">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Live
                  </Button>
                )
              )}
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
