import { motion } from 'framer-motion';
import { Github, GitBranch, GitCommit, GitPullRequest } from 'lucide-react';
import { Star } from "lucide-react";  
import { useLanguage } from '../context/LanguageContext';

interface Repo {
  name: string;
  description: {
    en: string;
    de: string;
  };
  stars: number;
  forks: number;
  language: string;
  updated: {
    en: string;
    de: string;
  };
}



const GitHubShowcase = () => {
  const { t, language } = useLanguage();

  const repos: Repo[] = [
    {
      name: 'ecommerce-platform',
      description: {
        en: 'Full-featured e-commerce platform with React and Node.js',
        de: 'Vollständige E-Commerce-Plattform mit React und Node.js'
      },
      stars: 128,
      forks: 42,
      language: 'TypeScript',
      updated: {
        en: 'Updated 2 days ago',
        de: 'Vor 2 Tagen aktualisiert'
      }
    },
    {
      name: 'portfolio-website',
      description: {
        en: 'Personal portfolio website built with Next.js and Tailwind CSS',
        de: 'Persönliche Portfolio-Website, erstellt mit Next.js und Tailwind CSS',
      },
      stars: 75,
      forks: 20,  
      language: 'PHP 8,1, Laravel 11',
      updated: {
        en: 'Updated 10 days ago',
        de: 'Vor 5 Tagen aktualisiert'
      }
    },

  ];

  const activities = [
  {
    type: 'commit',
    repo: 'ecommerce-platform',
    message: 'Fixed checkout bug',
    time: '2 hours ago',
  },
  {
    type: 'pull-request',
    repo: 'portfolio-website',
    message: 'Added dark mode support',
    time: '1 day ago',
  },
];



  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('githubTitle')} <span className="text-indigo-600 dark:text-indigo-400">{t('github1')}</span> {t('github2')}
          </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('githubDescription')}
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <Github className="mr-2" size={18} />
             {t('visitGithub')}
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {repos.map((repo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Github className="text-gray-700 dark:text-gray-300 mr-2" size={20} />
                <a
                  href={`https://github.com/yourusername/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {repo.name}
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {repo.description[language as keyof typeof repo.description]}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-1"
                    style={{
                      backgroundColor:
                        repo.language === 'TypeScript' ? '#3178c6' : '#3572A5',
                    }}
                  ></div>
                  {repo.language}
                </span>
                <span className="flex items-center">
                  <Star size={14} className="mr-1" />
                  {repo.stars}
                </span>
                <span className="flex items-center">
                  <GitBranch size={14} className="mr-1" />
                  {repo.forks}
                </span>
                <span>{repo.updated[language as keyof typeof repo.updated]}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          {/* <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h3>
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    {activity.type === 'commit' ? (
                      <GitCommit className="text-gray-500 dark:text-gray-400" size={18} />
                    ) : (
                      <GitPullRequest className="text-gray-500 dark:text-gray-400" size={18} />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {activity.repo}
                      </span>{' '}
                      • {activity.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubShowcase;