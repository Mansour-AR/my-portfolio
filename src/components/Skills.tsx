import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Smartphone, Palette } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SkillCategory {
  category: {
    en: string;
    de: string;
  };
  icon: React.ReactNode;
  items: {
    name: {
      en: string;
      de: string;
    };
    level: number;
  }[];
}
interface SkillItem {
  name: string;
  level: number;
}

const Skills = () => {
  const { t, language } = useLanguage();

   const skills: SkillCategory[] = [
    {
      category: {
        en: 'Frontend',
        de: 'Frontend'
      },
      icon: <Palette size={20} />,
      items: [
        { name: { en: 'HTML5', de: 'HTML5' }, level: 95 },
        { name: { en: 'CSS3', de: 'CSS3' }, level: 90 },
        { name: { en: 'JavaScript', de: 'JavaScript' }, level: 90 },
        { name: { en: 'React.js', de: 'React.js' }, level: 90 },
        { name: { en: 'TypeScript', de: 'TypeScript' }, level: 80 },
        { name: { en: 'Tailwind CSS', de: 'Tailwind CSS' }, level: 85 },
        { name: { en: 'Bootstrap', de: 'Bootstrap' }, level: 90 },
      ],
    },
    {
      category: {
        en: 'Backend',
        de: 'Backend'
      },
      icon: <Cpu size={20} />,
      items: [
        { name: { en: 'PHP', de: 'PHP' }, level: 95 },
        { name: { en: 'Laravel', de: 'Laravel' }, level: 90 },
        { name: { en: 'Node.js', de: 'Node.js' }, level: 90 },
        { name: { en: 'Express', de: 'Express' }, level: 85 },
        { name: { en: 'REST APIs', de: 'REST APIs' }, level: 85 },
      ],
    },
    // {
    //   category: {
    //     en: 'Mobile App',
    //     de: 'Mobile App'
    //   },
    //   icon: <Smartphone size={20} />,
    //   items: [
    //     { name: { en: 'React Native', de: 'React Native' }, level: 85 },
    //     { name: { en: 'Flutter', de: 'Flutter' }, level: 80 },
    //   ],
    // },
    {
      category: {
        en: 'Database',
        de: 'Datenbank'
      },
      icon: <Database size={20} />,
      items: [
        { name: { en: 'MySQL', de: 'MySQL' }, level: 90 },
        { name: { en: 'SQL Server', de: 'SQL Server' }, level: 85 },
        { name: { en: 'PostgreSQL', de: 'PostgreSQL' }, level: 80 },
        { name: { en: 'MongoDB', de: 'MongoDB' }, level: 90 },
        { name: { en: 'Firebase', de: 'Firebase' }, level: 80 },

      ],
    },
    {
      category: {
        en: 'DevOps & Tools',
        de: 'DevOps & Tools'
      },
      icon: <Code2 size={20} />,
      items: [
        { name: { en: 'Git', de: 'Git' }, level: 90 },
        { name: { en: 'GitHub', de: 'GitHub' }, level: 90 },
        { name: { en: 'Docker', de: 'Docker' }, level: 90 },
        { name: { en: 'CI/CD', de: 'CI/CD' }, level: 80 },
      ],
    },
    // Add other categories similarly...
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
             {t('skillsTitle')} <span className="text-indigo-600 dark:text-indigo-400">{t('skills')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('skillsDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400 mr-4">
                  {skillCategory.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skillCategory.category[language as keyof typeof skillCategory.category]}
                </h3>
              </div>

              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name[language as keyof typeof skill.name]}
                      </span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                     <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2.5 rounded-full bg-indigo-600"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;