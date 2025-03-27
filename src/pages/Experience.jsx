import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

export default function Experience() {
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
          <h1 className="fw-bold text-dark my-4">Experience</h1>
          <p className="fs-5 text-secondary">
            My professional journey and work experience.
          </p>
        </motion.div>

        <div className="mw-lg-75 mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 * index }}
              className="mb-4 bg-white p-4 rounded shadow"
            >
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between mb-3">
                <div>
                  <h3 className="fs-4 fw-bold text-dark">
                    {experience.position}
                  </h3>
                  <p className="fs-5 text-primary">{experience.company}</p>
                </div>
                <p className="text-secondary mt-2 mt-md-0">{experience.duration}</p>
              </div>
              <ul className="list-group list-group-flush">
                {experience.description.map((item, i) => (
                  <li key={i} className="list-group-item text-secondary">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}