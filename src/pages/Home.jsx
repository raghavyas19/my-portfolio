import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="d-flex flex-column h-100 align-items-center justify-content-center bg-primary-subtle" >
      <div className="container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="display-3 fw-bold text-dark mb-4"
        >
          Hi, I'm <span className="text-primary">Raghav Vyas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="fs-3 text-secondary mb-4"
        >
          Full Stack Developer | Machine Learning Enthusiast | Cloud & Web Solutions Architect
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="fs-5 text-secondary mb-5 mw-md-50 mx-auto"
        >
          I create beautiful, responsive web applications with a focus on user experience
          and clean code. Let's build something amazing together!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="d-flex justify-content-center gap-3"
        >
          <Link
            to="/projects"
            className="btn btn-primary d-flex align-items-center px-4 py-2"
          >
            View My Work
            <ArrowRight className="ms-2" size={20} />
          </Link>
          <Link
            to="/contact"
            className="btn btn-outline-primary d-flex align-items-center px-4 py-2"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}