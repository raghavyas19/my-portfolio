// New project: src/pages/Education.jsx
import { motion } from 'framer-motion';
import { Award, GraduationCap, Trophy } from 'lucide-react';
import { education, certifications } from '../data/education';

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-vh-100 bg-dark pt-5 pb-4"
    >
      <div className="container">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-5"
        >
          <h1 className="display-4 fw-bold text-white mb-3">Education & Certifications</h1>
          <p className="fs-4 text-light">
            My academic journey and professional certifications.
          </p>
        </motion.div>

        <div className="row row-cols-1 row-cols-lg-2 g-4 mb-5">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="col"
          >
            <div className="d-flex align-items-center mb-4">
              <GraduationCap className="text-primary me-3" size={32} />
              <h2 className="fs-2 fw-bold text-white">Education</h2>
            </div>
            <div className="d-flex flex-column gap-4">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-secondary p-4 rounded border border-dark education-card"
                >
                  <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between mb-3">
                    <div>
                      <h3 className="fs-4 fw-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-primary">{edu.school}</p>
                    </div>
                    <div className="mt-2 mt-md-0">
                      <p className="text-light">{edu.duration}</p>
                      <p className="text-light">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  <ul className="d-flex flex-column gap-2">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="text-light d-flex align-items-start">
                        <Trophy className="text-primary me-2 h-5 w-5 mt-1 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="col"
          >
            <div className="d-flex align-items-center mb-4">
              <Award className="text-primary me-3" size={32} />
              <h2 className="fs-2 fw-bold text-white">Certifications</h2>
            </div>
            <div className="d-flex flex-column gap-3">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-secondary p-4 rounded border border-dark education-card"
                >
                  <h3 className="fs-4 fw-bold text-white mb-2">{cert.name}</h3>
                  <div className="d-flex flex-column gap-2">
                    <p className="text-primary">{cert.issuer}</p>
                    <p className="text-light">Issued: {cert.date}</p>
                    <p className="text-light">Credential ID: {cert.credentialId}</p>
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