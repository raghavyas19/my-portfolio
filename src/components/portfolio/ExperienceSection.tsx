
const experiences = [
  {
    title: 'Software Developer Intern at Intecons Software Lab',
    period: 'May 2025 - Jun 2025',
    description: 'Worked extensively with Docker and AWS for scalable deployments. Built cross-platform mobile apps using Flutter and React Native. Developed an AI-powered tool that generates podcasts and creates PDFs from user prompts using the OpenAI API key. Created the Wellnoid application focused on health and wellness, and contributed to VersionSolve, a platform for ai powered coding.',
    tech: ['Docker', 'AWS', 'Flutter', 'React Native', 'OpenAI', 'TypeScript', 'Tailwind']
  },
  {
    title: 'Freelance Web Developer',
    period: 'Jun 2024 - Apr 2025',
    description: 'Worked with multiple clients to design, develop, and deploy custom websites tailored to their business needs. Managed projects end-to-end, from gathering requirements and UI/UX design to implementation and deployment. Built responsive, SEO-friendly sites and provided ongoing support and maintenance. Collaborated closely with clients to ensure satisfaction and deliver high-quality solutions on time.',
    tech: ['React', 'JavaScript', 'TypeScript', 'WordPress', 'Bootstrap', 'Tailwind', 'Figma', 'AWS']
  },
  {
    title: 'Full Stack Developer Intern at Apex Computer Services',
    period: 'Jan 2024 - Jun 2024',
    description: 'Built and deployed a fully functional e-commerce website, taking it live for real users. Worked on both frontend and backend, integrating payment gateways and user authentication. Gained hands-on experience with modern web technologies, including building REST APIs and managing databases. Developed practical skills in deploying applications to production environments and ensuring smooth user experiences.',
    tech: ['JavaScript', 'React', 'Node', 'SQL', 'MongoDB', 'Postman', 'Bootstrap', 'WordPress']
  }
];

export const ExperienceSection = () => {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <div
          key={experience.title}
          className="space-y-3 animate-fade-in hover-slide-right cursor-pointer"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-medium story-link">{experience.title}</h3>
            <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
              {experience.period}
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {experience.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {experience.tech.map((tech) => (
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
