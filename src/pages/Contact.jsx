import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
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
          <h1 className="fw-bold text-dark my-4">Get in Touch</h1>
          <p className="fs-5 text-secondary">
            I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>
        <div className='container'>
          <div className="mw-xl-75 mx-auto">
            <div className="row row-cols-1 row-cols-md-2">
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
                  <div className="d-flex flex-column gap-4 p-3 bg-light rounded shadow-sm">
                    <div className="d-flex align-items-center gap-3">
                      <Mail className="text-primary" size={28} />
                      <div>
                        <p className="fs-6 fw-semibold text-secondary mb-1">Email</p>
                        <a href="mailto:your.email@example.com" className="text-dark fw-medium text-decoration-none">
                          raghasvyas@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <Phone className="text-primary" size={28} />
                      <div>
                        <p className="fs-6 fw-semibold text-secondary mb-1">Phone</p>
                        <p className="text-dark fw-medium">+91 7300183411</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <MapPin className="text-primary" size={28} />
                      <div>
                        <p className="fs-6 fw-semibold text-secondary mb-1">Location</p>
                        <p className="text-dark fw-medium">Jaipur, India</p>
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
                      href="https://github.com/raghavyas19"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-3 p-4 border rounded shadow-sm connect-card text-decoration-none bg-white"
                      style={{ transition: "all 0.2s ease-in-out" }}
                    >
                      <Github className="text-dark" size={28} />
                      <div>
                        <p className="text-dark fw-semibold mb-1">GitHub</p>
                        <p className="text-secondary">Check out my code</p>
                      </div>
                    </a>

                    <a
                      href="https://linkedin.com/in/raghavyas19"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-3 p-4 border rounded shadow-sm connect-card text-decoration-none bg-white"
                      style={{ transition: "all 0.2s ease-in-out" }}
                    >
                      <Linkedin className="text-dark" size={28} />
                      <div>
                        <p className="text-dark fw-semibold mb-1">LinkedIn</p>
                        <p className="text-secondary">Let's connect professionally</p>
                      </div>
                    </a>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}