import { motion } from 'framer-motion';
import { Award, GraduationCap, Trophy } from 'lucide-react';
import { education, certifications } from '../data/education';

export default function Education() {
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
          className="text-center mb-3"
        >
          <h1 className="fw-bold text-dark my-4">Education & Certifications</h1>
          <p className="fs-5 text-secondary">
            My academic journey and professional certifications.
          </p>
        </motion.div>

        <div className="row row-cols-1 row-cols-lg-2">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="col"
          >
            <div className="d-flex align-items-center my-4">
              <GraduationCap className="text-primary me-3" size={32} />
              <h2 className="fs-2 fw-bold">Education</h2>
            </div>
            <div className="d-flex flex-column gap-4">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-4 shadow rounded  education-card d-flex align-items-center"
                >
                  <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between w-100">
                    <div>
                      <h3 className="fs-5 fw-bold mb-1">{edu.degree}</h3>
                      <p className="text-primary">{edu.school}</p>
                    </div>
                    <div className="mt-2 mt-md-0">
                      <p className="text-black">{edu.duration}</p>
                      <p className="text-black">GPA: {edu.gpa}</p>
                    </div>
                  </div>
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
            <div className="d-flex align-items-center my-4">
              <Award className="text-primary me-3" size={32} />
              <h2 className="fs-2 fw-bold">Certifications</h2>
            </div>
            <div className="d-flex flex-column gap-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-4 rounded shadow education-card d-flex align-items-center"
                >
                  <div className="w-100">
                    <h3 className="fs-5 fw-bold mb-2">{cert.name}</h3>
                    <div className="d-flex flex-column gap-2">
                      <p className="text-primary">{cert.issuer}</p>
                      <p className="text-black">Issued: {cert.date}</p>
                      <p className="text-black">Credential ID: {cert.credentialId}</p>
                    </div>
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