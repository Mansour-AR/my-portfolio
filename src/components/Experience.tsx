import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award as AwardIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ExperienceItem {
  role: {
    en: string;
    de: string;
  };
  company: {
    en: string;
    de: string;
  };
  period: string;
  description: {
    en: string;
    de: string;
  };
}

const Experience = () => {
  const { t, language } = useLanguage();

  const experience: ExperienceItem[] = [
    {
      role: {
        en: 'Full Stack Developer',
        de: 'Full-Stack-Entwickler'
      },
      company: {
        en: 'iTech Americas LLC. (Startup)',
        de: 'iTech Americas LLC. (Startup)'
      },
      period: '08/2024 - 04/2025',
      description: {
        en: 'Leading the development of a monolithic IT platform with responsive front-end interfaces and robust backend services using Laravel and RESTful APIs. Integrating AI microservices with Python and managing live server deployment to optimize performance, security, and team collaboration.',
        de: 'Leitung der Entwicklung einer monolithischen IT-Plattform mit responsiven Front-End-Oberflächen und robusten Backend-Diensten unter Verwendung von Laravel und RESTful APIs. Integration von KI-Mikrodiensten mit Python und Verwaltung der Live-Server-Bereitstellung zur Optimierung von Leistung, Sicherheit und Teamzusammenarbeit.'
      },
    },

     {
      role: {
        en: 'Integration and Professional Development ',
        de: 'Integration und berufliche Entwicklung'
      },
      company: {
        en: 'Personal Development',
        de: 'Personal Development'
      },
      period: '05/2022 - 09/2024',
      description: {
        en: 'Took a career break for personal relocation and settling in Germany. Focused on personal integration by completing orientation, integration, and job-related language courses, alongside self-study and earning an IBM Full Stack JavaScript Engineer certification to advance career prospects in the German job market.',
        de: 'Karrierepause für persönliche Umsiedlung und Integration in Deutschland. Fokus auf persönliche Integration durch Abschluss von Orientierungs-, Integrations- und berufsbezogenen Sprachkursen sowie Selbststudium und Erwerb einer Zertifizierung als IBM Full Stack JavaScript Engineer zur Verbesserung der Karrierechancen auf dem deutschen Arbeitsmarkt.'
      },
    },

    {
      role: {
        en: 'Freelance Software Developer',
        de: 'Freiberuflicher Softwareentwickler'
      },
      company: {
        en: 'Automotive Service Center Limited (ASC Ltd)',
        de: 'Automotive Service Center Limited (ASC Ltd)'
      },
      period: '01/2019 -12/2020',
      description: {
        en: 'Developed a PHP-based web solution for automotive management using the Laravel framework, including invoicing and customer administration. Built dynamic, responsive web applications with HTML, CSS, JavaScript, and PHP, optimized MySQL databases, resulting in improved query performance and reliable business operations.',
        de: 'Entwicklung einer PHP-basierten Weblösung für das Automobilmanagement mit dem Laravel-Framework, einschließlich Rechnungsstellung und Kundenverwaltung. Erstellung dynamischer, responsiver Webanwendungen mit HTML, CSS, JavaScript und PHP, Optimierung von MySQL-Datenbanken, was zu verbesserter Abfrageleistung und zuverlässigen Geschäftsabläufen führte.'
      },
    },
    {
      role: {
        en: 'IT Support',
        de: 'IT-Support'
      },
      company: {
        en: 'Hikmat Najeeb Construction Company (HNCC Ltd)',
        de: 'Hikmat Najeeb Construction Company (HNCC Ltd)'
      },
      period: '06/2016 -12/2018',
      description: {
        en: 'Provided technical support to ensure smooth operation of computer systems across all departments. Installed and configured hardware and software to enhance operational efficiency, managed user accounts and access rights to prevent downtime and data loss, and trained staff on IT systems and applications.',
        de: 'Technischer Support zur Gewährleistung des reibungslosen Betriebs von Computersystemen in allen Abteilungen. Installation und Konfiguration von Hardware und Software zur Verbesserung der Betriebseffizienz, Verwaltung von Benutzerkonten und Zugriffsrechten zur Vermeidung von Ausfallzeiten und Datenverlust sowie Schulung des Personals in IT-Systemen und Anwendungen.'
      },
    },
  ];

   const education = [
    {
      degree: {
        en: 'BSc in Software Engineering ',
        de: 'Bachelor in Software Engineering'
      },
      institution: {
        en: 'Rana University',
        de: 'Rana Universität'
      },
      period: '09/2017 - 03/2022',
    },

    {
      degree: {
        en: 'Diploma in Information Technology (DIT) ',
        de: 'Diplom in Informationstechnologie (DIT)'
      },
      institution: {
        en: 'Behzad Institute of Computer Technology',
        de: 'Behzad Institut für Computertechnologie'
      },
      period: '01/2013 - 12/2014',
    },
  ];

  const certifications = [
    {
      title: 'JavaScript Full Stack Software Engineer ',
      issuer: 'IBM',
      year: '2024',
    },
  
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('experienceTitle')} <span className="text-indigo-600 dark:text-indigo-400">{t('experience')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('experienceDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400 mr-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('workExperience')}
              </h3>
            </div>

            <div className="space-y-8">
                  {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-10 before:absolute before:left-0 before:top-2 before:h-full before:w-1 before:bg-indigo-200 dark:before:bg-indigo-900 before:rounded-full"
                >
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {exp.role[language as keyof typeof exp.role]}
                    </h4>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                      <span>{exp.company[language as keyof typeof exp.company]}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description[language as keyof typeof exp.description]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400 mr-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('education')}
              </h3>
            </div>

            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-sm"
                >
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree[language as keyof typeof edu.degree]}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.institution[language as keyof typeof edu.institution]}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{edu.period}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center mb-8">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400 mr-4">
                <AwardIcon size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('certifications')}
              </h3>
            </div>

            <div className="space-y-4">
  {certifications.map((cert, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-start"
    >
      <div className="flex-shrink-0 mt-1 mr-4 text-indigo-600 dark:text-indigo-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
        </svg>
      </div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white">{cert.title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {cert.issuer} • {cert.year}
        </p>
      </div>
    </motion.div>
  ))}
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
