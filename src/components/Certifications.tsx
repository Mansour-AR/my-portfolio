import { motion } from 'framer-motion';
import { Award, BookOpen, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Certification {
  title: {
    en: string;
    de: string;
  };
  issuer: {
    en: string;
    de: string;
  };
  date: string;
  description: {
    en: string;
    de: string;
  };
  badge: string;
  credentialUrl?: string; // Added for verification link
}

const Certifications = () => {
  const { t, language } = useLanguage();
  
  const certifications: Certification[] = [
    {
      title: {
        en: 'Introduction to HTML, CSS, & JavaScript',
        de: 'Einführung in HTML, CSS und JavaScript'
      },
      issuer: {
        en: 'IBM',
        de: 'IBM'
      },
      date: 'June 2024',
      description: {
        en: 'Validates expertise in building modern web applications using HTML, CSS, JavaScript, and developer tools.',
        de: 'Bestätigt die Expertise im Aufbau moderner Webanwendungen mit HTML, CSS, JavaScript und Entwicklerwerkzeugen.'
      },
      badge: '/IBM-Certification-1.png',
      credentialUrl: 'https://coursera.org/verify/79GF2C42SK24 '
    },
    {
      title: {
        en: 'Getting Started with Git and GitHub',
        de: 'Einführung in Git und GitHub'
      },
      issuer: {
        en: 'IBM',
        de: 'IBM'
      },
      date: 'Juli 2024',
      description: {
        en: 'Validates skills in Git and GitHub for distributed version control, team collaboration, and open-source contributions in a DevOps environment.',
        de: 'Bestätigt Fähigkeiten in Git und GitHub für verteilte Versionskontrolle, Teamzusammenarbeit und Open-Source-Beiträge in einer DevOps-Umgebung.'
      },
      badge: '/IBM-Certification-2.png',
      credentialUrl: 'https://coursera.org/verify/VGMZ7GT67UVJ'
    },
    {
      title: {
        en: 'JavaScript Programming Essentials',
        de: 'JavaScript-Programmiergrundlagen'
      },
      issuer: {
        en: 'IBM',
        de: 'IBM'
      },
      date: 'August 2024',
      description: {
        en: 'Validates proficiency in modern JavaScript development using ES6 features, data structures, DOM manipulation, AJAX, asynchronous programming, and interactive UI design.',
        de: 'Bestätigt die Beherrschung der modernen JavaScript-Entwicklung unter Verwendung von ES6-Funktionen, Datenstrukturen, DOM-Manipulation, AJAX, asynchroner Programmierung und interaktivem UI-Design.'
      },
      badge: '/IBM-Certification-3.png',
      credentialUrl: 'https://coursera.org/verify/SQNGXCKQDDB1 '
    },
    {
      title: {
        en: 'Developing Front-End Apps with React',
        de: 'Entwicklung von Front-End-Apps mit React'
      },
      issuer: {
        en: 'IBM',
        de: 'IBM'
      },
      date: 'November 2024',
      description: {
        en: 'Validates ability to build dynamic, interactive web applications using React, JSX, ES6, and key concepts like props, state, hooks, forms, and Redux.',
        de: 'Bestätigt die Fähigkeit, dynamische, interaktive Webanwendungen mit React, JSX, ES6 und Schlüsselkonzepten wie Props, State, Hooks, Formularen und Redux zu erstellen.'
      },
      badge: '/IBM-Certification-4.png',
      credentialUrl: 'https://coursera.org/verify/4EAWAFUAN9DG'
    },
    {
      title: {
        en: 'Developing Back-End Apps with Node.js and Express',
        de: 'Entwicklung von Back-End-Apps mit Node.js und Express'
      },
      issuer: {
        en: 'IBM',
        de: 'IBM'
      },
      date: 'December 2024',
      description: {
        en: 'Validates ability to develop server-side applications using Node.js, manage packages with npm, build back ends with Express, and create RESTful APIs.',
        de: 'Bestätigt die Fähigkeit, serverseitige Anwendungen mit Node.js zu entwickeln, Pakete mit npm zu verwalten, Back-Ends mit Express zu erstellen und RESTful APIs zu entwickeln.'
      },
      badge: '/IBM-Certification-5.png',
      credentialUrl: 'https://coursera.org/verify/PIOZFSB2MMB5 '
    },
    {
      title: {
        en: ' Get Started with Cloud Native, DevOps, Agile, and NoSQL',
        de: 'Einführung in Cloud Native, DevOps, Agile und NoSQL'
      },
      issuer: {
        en: 'IBM',
        de: 'IBM'
      },
      date: 'April 2025',
      description: {
        en: 'Validates understanding of cloud-native concepts, CI/CD, Agile, and DevOps culture, with practical skills in MongoDB, CRUD operations, and Agile tools like Zenhub.',
        de: 'Bestätigt das Verständnis von cloud-nativen Konzepten, CI/CD, Agile und DevOps-Kultur, mit praktischen Fähigkeiten in MongoDB, CRUD-Operationen und Agile-Tools wie Zenhub.'
      },
      badge: '/IBM-Certification-6.png',
      credentialUrl: 'https://coursera.org/verify/NCUZIMQNYFCU '
    },
    // Add more certifications...
  ];

  const handleVerifyClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('certificationsTitle')} <span className="text-indigo-600 dark:text-indigo-400">{t('certifications')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('certificationsDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-center mb-4">
                  <img
                    src={cert.badge}
                    alt={`${cert.title[language as keyof typeof cert.title]} badge`}
                    className="h-40 w-40 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {cert.title[language as keyof typeof cert.title]}
                </h3>
                <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-3">
                  <BookOpen size={16} className="mr-2" />
                  <span className="text-sm">{cert.issuer[language as keyof typeof cert.issuer]}</span>
                </div>
                <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span className="text-sm">{cert.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-center">
                  {cert.description[language as keyof typeof cert.description]}
                </p>
              </div>
              
              <div className="p-4 bg-gray-100 dark:bg-gray-700/50 text-center">
                {cert.credentialUrl ? (
                  <button
                    onClick={() => handleVerifyClick(cert.credentialUrl!)}
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    {t('verifyCertification')}
                  </button>
                ) : (
                  <div className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                    <Award size={16} className="mr-2" />
                    {t('certification')}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;