// New project: src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
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
          <h1 className="display-4 fw-bold text-dark mb-3">Get in Touch</h1>
          <p className="fs-4 text-secondary">
            I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="mw-xl-75 mx-auto">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="col"
            >
              <div className="bg-white p-4 rounded shadow">
                <h2 className="fs-3 fw-bold text-dark mb-4">
                  Contact Information
                </h2>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <Mail className="text-primary me-3" size={24} />
                    <div>
                      <p className="fs-6 text-secondary">Email</p>
                      <a
                        href="mailto:your.email@example.com"
                        className="text-dark contact-link"
                      >
                        your.email@example.com
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <Phone className="text-primary me-3" size={24} />
                    <div>
                      <p className="fs-6 text-secondary">Phone</p>
                      <p className="text-dark">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <MapPin className="text-primary me-3" size={24} />
                    <div>
                      <p className="fs-6 text-secondary">Location</p>
                      <p className="text-dark">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="col"
            >
              <div className="bg-white p-4 rounded shadow">
                <h2 className="fs-3 fw-bold text-dark mb-4">
                  Connect with Me
                </h2>
                <div className="d-flex flex-column gap-3">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center p-3 border rounded connect-card"
                  >
                    <Github className="text-dark me-3" size={24} />
                    <div>
                      <p className="text-dark fw-medium">GitHub</p>
                      <p className="text-secondary">Check out my code</p>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center p-3 border rounded connect-card"
                  >
                    <Linkedin className="text-dark me-3" size={24} />
                    <div>
                      <p className="text-dark fw-medium">LinkedIn</p>
                      <p className="text-secondary">Let's connect professionally</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}