import { motion } from "framer-motion";
import { Code, Palette, Server, Zap } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "Frontend",
      items: ["React", "JavaScript", "CSS"],
    },
    {
      icon: <Server size={24} />,
      title: "Backend",
      items: ["Node", "Python", "Express"],
    },
    {
      icon: <Palette size={24} />,
      title: "Design",
      items: ["Figma", "Bootstrap", "UI/UX"],
    },
    {
      icon: <Zap size={24} />,
      title: "Technologies",
      items: ["Git/Github", "AWS/Azure","Postman"],
    },
  ];

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
          <h1 className="display-4 fw-bold text-dark my-4" style={{ fontSize: "2.5rem" }}>About Me</h1>
          <p className="fs-5 text-secondary mx-auto">
            A tech enthusiast and experienced web developer with 1+ years of expertise in building efficient, scalable applications. I thrive on continuous learning and solving real-world challenges through technology
          </p>
        </motion.div>

        <div className="container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="row row-cols-1 row-cols-md-2 g-5 mb-5"
          >
            <div className="col">
              <div className="d-flex flex-column bg-white p-4 rounded shadow h-100">
                <h3 className="fw-bold text-dark mb-3 text-center">Background</h3>
                <p className="text-secondary">
                  With a Computer Science background and having 1+ year experience, I specialize in full-stack development, machine learning, and cloud computing. I’m passionate about building scalable applications, optimizing performance, and integrating AI-driven solutions.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="d-flex flex-column bg-white p-4 rounded shadow h-100">
                <h3 className="fw-bold text-dark mb-3 text-center">Interests</h3>
                <p className="text-secondary">
                  Beyond coding, I enjoy solving real-life coding challenges on competitive programming platforms and exploring AI-driven solutions. I’m passionate about optimizing web performance, cloud computing, and accessibility in web development.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="fw-bold text-dark mb-4 text-center">Skills</h3>
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
      </div>
    </motion.div>
  );
}
