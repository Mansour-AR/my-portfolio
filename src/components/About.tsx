import { motion } from 'framer-motion';
import { User, BookOpen, Briefcase, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface StatItem {
  value: string;
   label: {
    en: string;
    de: string;
  };
  icon: React.ReactNode;
}

const About = () => {
  const { t } = useLanguage();
   const stats: StatItem[] = [
    { 
      value: '5+', 
      label: {
        en: 'Years Experience',
        de: 'Jahre Erfahrung'
      }, 
      icon: <Briefcase size={20} /> 
    },
    { 
      value: '50+', 
      label: {
        en: 'Projects Completed',
        de: 'Projekte abgeschlossen'
      }, 
      icon: <BookOpen size={20} /> 
    },
    { 
      value: '10+', 
      label: {
        en: 'Happy Clients',
        de: 'Zufriedene Kunden'
      }, 
      icon: <User size={20} /> 
    },
    { 
      value: '3', 
      label: {
        en: 'Awards Won',
        de: 'Auszeichnungen'
      }, 
      icon: <Award size={20} /> 
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/3 mb-10 md:mb-0 md:pr-10"
          >
            <div className="relative">
            <div className="w-80 h-96 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-indigo-500/20 shadow-lg">
                <img
                  src="/my-foto.jpg"
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-5 -right-1 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold">Alex Developer</span>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t('aboutTitle1')} <span className="text-indigo-600 dark:text-indigo-400">{t('aboutTitle2')}</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('aboutText1')}
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {t('aboutText2')}
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {t('aboutText3')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
               {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow text-center"
                >
                  <div className="flex justify-center text-indigo-600 dark:text-indigo-400 mb-2">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label[t('language') as keyof typeof stat.label]}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
              >
                {t('contactMe')}
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors"
              >
                {t('downloadCV')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;