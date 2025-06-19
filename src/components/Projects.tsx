import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useParams, Link } from 'react-router-dom';
interface Project {
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  tags: string[];
  src: string;
  github?: string;
  live?: string;
}

const Projects = () => {
  const { t, language } = useLanguage();

  const projects: Project[] = [

    {
      title: {
        en: 'IT Solution Company Website',
        de: 'IT-Lösungsunternehmen Website'
      },
      description: {
        en: 'A responsive corporate website with custom Laravel CMS and AI-powered chatbot integrated via OpenAI.',
        de: 'Eine responsive Unternehmenswebsite mit benutzerdefiniertem Laravel-CMS und KI-gestütztem Chatbot, integriert über OpenAI.'
      },
      tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Laravel', 'OpenAI'],
      src: '/itech-hero-single.png',
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://www.it-americas.com',
    },

    {
      title: {
        en: 'E-commerce Platform',
        de: 'E-Commerce-Plattform'
      },
      description: {
        en: 'A full-featured e-commerce platform with product catalog, cart, checkout, and admin dashboard.',
        de: 'Eine vollständige E-Commerce-Plattform mit Produktkatalog, Warenkorb, Kasse und Admin-Bereich.'
      },
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a',
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://ecommerce-demo.example.com',
    },

    {
      title: {
        en: 'Task Management App',
        de: 'Aufgabenverwaltungs-App'
      },
      description: {
        en: 'A collaborative task management application with real-time updates, teams, and project tracking.',
        de: 'Eine kollaborative Aufgabenverwaltungsanwendung mit Echtzeit-Updates, Teams und Projektverfolgung.'
      },
      tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      src: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://tasks.example.com',
    },

  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projectsTitle')}  <span className="text-indigo-600 dark:text-indigo-400">{t('projects')} </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('projectsDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {projects.map((project, index) => (
        <Link 
          key={index}
          to={`/projects/${project.title.en.toLowerCase().replace(/\s+/g, '-')}`}
          className="block"
        >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
       >
        <div className="h-52 overflow-hidden">
          <img
            src={project.src}
            alt={project.title[language as keyof typeof project.title]}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title[language as keyof typeof project.title]}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description[language as keyof typeof project.description]}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Github className="mr-2" size={16} />
                <span>Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <ExternalLink className="mr-2" size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  ))}
</div>
      </div>
    </section>
  );
};

export default Projects;