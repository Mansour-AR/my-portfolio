import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

interface NavLink {
  name: {
    en: string;
    de: string;
  };
  path: string;
}

interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

const Header = () => {

  const { t, language } = useLanguage();
  const navLinks: NavLink[] = [
    {
      name: {
        en: 'Home',
        de: 'Startseite'
      },
      path: '/'
    },
    {
      name: {
        en: 'About',
        de: 'Über mich'
      },
      path: '/about'
    },
    {
      name: {
        en: 'Projects',
        de: 'Projekte'
      },
      path: '/projects'
    },
    {
      name: {
        en: 'Contact',
        de: 'Kontakt'
      },
      path: '/contact'
    },
  ];


  const socialLinks: SocialLink[] = [
    { icon: <Github size={20} />, url: 'https://github.com/yourusername' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/yourusername' },
    { icon: <Mail size={20} />, url: 'mailto:your.email@example.com' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            <span className="text-indigo-600 dark:text-indigo-400">M</span>A
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
             {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                {link.name[language as keyof typeof link.name]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;