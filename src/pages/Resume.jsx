import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-light d-flex flex-column h-100 bg-primary-subtle pt-4 pb-4 align-items-center text-center"
    >
      <div className="m-5">
        <motion.h2
          className="mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Download My Resume
        </motion.h2>
        <motion.a
          href="resume.pdf"
          download="Raghav_Resume.pdf"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="btn btn-primary"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            Download
          </motion.button>
        </motion.a>
      </div>
    </motion.div>
  );
}
