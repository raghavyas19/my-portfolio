import { motion } from "framer-motion";
import { Code, Palette, Server, Zap } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Server size={24} />,
      title: "Backend",
      items: ["Node.js", "Python", "PostgreSQL"],
    },
    {
      icon: <Palette size={24} />,
      title: "Design",
      items: ["Figma", "Adobe XD", "UI/UX"],
    },
    {
      icon: <Zap size={24} />,
      title: "Tools",
      items: ["Git", "Docker", "AWS"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-vh-100 bg-light pt-5 pb-4"
    >
      <div className="container">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-5"
        >
          <h1 className="display-4 fw-bold text-dark mb-3">About Me</h1>
          <p className="fs-4 text-secondary mw-lg-75 mx-auto">
            I'm a passionate developer with 5+ years of experience in creating
            web applications. I love learning new technologies and solving
            complex problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="row row-cols-1 row-cols-md-2 g-5 mb-5"
        >
          <div className="col">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="fs-3 fw-bold text-dark mb-3">Background</h2>
              <p className="text-secondary">
                With a background in Computer Science and years of industry
                experience, I've worked on various projects ranging from small
                business websites to large-scale enterprise applications. I'm
                particularly interested in creating intuitive user interfaces
                and optimizing application performance.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="fs-3 fw-bold text-dark mb-3">Interests</h2>
              <p className="text-secondary">
                Outside of coding, I enjoy contributing to open-source projects,
                writing technical blog posts, and mentoring junior developers.
                I'm also passionate about design systems and accessibility in
                web development.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="fs-2 fw-bold text-dark mb-4 text-center">Skills</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="col"
              >
                <div className="bg-white p-4 rounded shadow">
                  <div className="d-flex align-items-center mb-3 text-primary">
                    {skill.icon}
                    <h3 className="fs-4 fw-bold ms-2">{skill.title}</h3>
                  </div>
                  <ul className="d-flex flex-column gap-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-secondary">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
