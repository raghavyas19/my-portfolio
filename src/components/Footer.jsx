import { Github, Linkedin,Twitter,Instagram, Mail, Inspect } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark border-top border-secondary text-light p-2">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="text-center text-md-start mb-3 mb-md-0">
            <p>© {new Date().getFullYear()} Raghav Vyas. All rights reserved.</p>
          </div>
          <div className="d-flex gap-3">
            <a
              href="https://github.com/raghavyas19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/raghavyas19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/raghavyas19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com/raghavyas19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:raghasvyas@gmail.com"
              className="text-light"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}