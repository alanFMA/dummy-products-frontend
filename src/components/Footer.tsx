import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 text-sm text-center text-gray-600 py-4">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} DummyProducts. Desenvolvido por Alan Monteiro.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/alanFMA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
          aria-label="GitHub de Alan Felipe"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/alanfmonteiro"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
          aria-label="LinkedIn de Alan "
        >
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
