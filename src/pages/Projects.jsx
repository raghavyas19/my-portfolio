import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="d-flex flex-column h-100 bg-primary-subtle pt-4 pb-4"
    >
      <div className="container">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-5"
        >
          <h1 className="fw-bold text-dark my-4" style={{ fontSize: "2.5rem" }}>Projects</h1>
          <p className="fs-5 text-secondary">
            Here are some of the projects I've worked on recently.
          </p>
        </motion.div>
        <div className='container'>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="col"
              >
                <div className="bg-white rounded shadow h-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-100"
                  />
                  <div className="p-4">
                    <h3 className="fs-4 fw-bold text-dark mb-2">
                      {project.title}
                    </h3>
                    <p className="text-secondary mb-3">{project.description}</p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-subtle text-primary rounded-pill fs-6"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center text-secondary"
                      >
                        <Github size={16} className="me-1" />
                        Code
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center text-secondary"
                        >
                          <ExternalLink size={16} className="me-1" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}