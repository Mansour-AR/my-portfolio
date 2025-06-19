import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Phone, MapPin } from "lucide-react";   
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

const Footer = () => {
   const { t, language } = useLanguage();

  const links: NavLink[] = [
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

  const contactInfo = [
    {
      icon: <Mail size={16} className="mr-2 mt-1 flex-shrink-0" />,
      text: 'mansour-aria@gmx.de'
    },
    {
      icon: <Phone size={16} className="mr-2 mt-1 flex-shrink-0" />,
      text: '+49 17620702286'
    },
    {
      icon: <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />,
      text: {
        en: 'Großbeeren, Brandenburg, Germany',
        de: 'Großbeeren, Brandenburg, Deutschland'
      }
    }
  ];

  const socialLinks: SocialLink[] = [
    { icon: <Github size={20} />, url: 'https://github.com/yourusername' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/yourusername' },
    { icon: <Mail size={20} />, url: 'mailto:your.email@example.com' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-indigo-600 dark:text-indigo-400">Dev</span>Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2">
               {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.name[language as keyof typeof link.name]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('contactInfo')}
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <Mail className="mr-2 mt-1 flex-shrink-0" size={16} />
                mansour-aria@gmx.de
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 mt-1 flex-shrink-0" size={16} />
                +49 17620702286
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={16} />
                {typeof contactInfo[2].text === 'string' ? contactInfo[2].text : contactInfo[2].text[language]}
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm"
        >
          <p>© {new Date().getFullYear()} {t('allRightsReserved')}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;