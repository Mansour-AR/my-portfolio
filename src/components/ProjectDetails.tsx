
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

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
  // Additional details for the project page
  details?: {
    en: string[];
    de: string[];
  };
  features?: {
    en: string[];
    de: string[];
  };
  additionalImages?: string[];
}

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
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Laravel', 'OpenAI','Bootstrap','SASS'],
    src: '/itech-hero.png',
    github: 'https://github.com/yourusername/ecommerce-platform',
    live: 'https://www.it-americas.com',
    details: {
      en: [
        'I developed a complete web solution for iTech Americas, an IT services company based in Sacramento, CA. The project included a modern, responsive corporate website, a fully custom-built Laravel CMS, and an AI-powered chatbot designed to enhance user interaction and automate support.',
        'The website serves as a dynamic platform to showcase the company’s services, solutions, and blog content, all managed through a secure admin dashboard. The CMS was developed from scratch using Laravel and MySQL, allowing non-technical staff to manage site content, media, contact inquiries, and SEO settings without external tools or plugins.',
        'A key highlight is the AI chatbot that I built and integrated directly into the site. It connects to the OpenAI API, is trained using custom business data, and provides intelligent, real-time responses to user queries — improving engagement and accessibility. This project demonstrates full-stack development, API integration, custom admin systems, and AI implementation.'
      ],
      de: [
        'Ich habe eine vollständige Weblösung für iTech Americas, ein IT-Dienstleistungsunternehmen mit Sitz in Sacramento, CA, entwickelt. Das Projekt umfasste eine moderne, responsive Unternehmenswebsite, ein vollständig benutzerdefiniertes Laravel-CMS und einen KI-gestützten Chatbot, der die Benutzerinteraktion verbessert und den Support automatisiert.',
        'Die Website dient als dynamische Plattform zur Präsentation der Dienstleistungen, Lösungen und Blog-Inhalte des Unternehmens, die alle über ein sicheres Admin-Dashboard verwaltet werden. Das CMS wurde von Grund auf mit Laravel und MySQL entwickelt und ermöglicht es nicht-technischen Mitarbeitern, Inhalte, Medien, Kontaktanfragen und SEO-Einstellungen ohne externe Tools oder Plugins zu verwalten.',
        'Ein Highlight ist der KI-Chatbot, den ich direkt in die Website integriert habe. Er verbindet sich mit der OpenAI-API, wird mit benutzerdefinierten Geschäftsdaten trainiert und bietet intelligente, Echtzeit-Antworten auf Benutzeranfragen – was die Interaktion und Zugänglichkeit verbessert. Dieses Projekt demonstriert Full-Stack-Entwicklung, API-Integration, benutzerdefinierte Admin-Systeme und KI-Implementierung.'
      ]
    },
    features: {
  en: [
    '🌐 Frontend Website',
    'Fully responsive, modern multi-page layout',
    'Interactive features: animated stats, service hover effects, testimonial sliders',
    'Dynamic blog with CMS-controlled content',
    'Contact & Call-Back forms with validation and form submission handling',
    'Cookie consent and GDPR compliance',
    'Seamless UI for real-time user engagement',

    '🤖 Custom AI Chatbot (OpenAI Integrated)',
    'Custom-developed chat interface embedded into the site',
    'Connected to the OpenAI API for dynamic, contextual responses',
    'Trained using company-specific FAQs, services, and support data',
    'Capable of assisting users with service inquiries, page navigation, and general company questions',
    'Backend sync built in Laravel to manage training data updates',
    'Future-proofed to support richer NLP features and fine-tuning',

    '🛠 CMS Admin Panel (Built with Laravel)',
    'Secure authentication and admin access control',
    'Dynamic management of services, blogs, FAQs, testimonials, team, homepage banners',
    'Contact submissions viewer with filtering',
    'Media upload and content control',
    'SEO settings for meta titles, descriptions, and slugs',
    'Built-in CSRF protection, input validation, and error handling',

    '📈 Results',
    'Enabled in-house team to manage content autonomously via CMS',
    'Improved customer interaction and lead capture through AI chatbot',
    'Boosted engagement and time-on-site through intelligent assistant UX'
  ],
  de: [
    '🌐 Frontend-Website',
    'Vollständig responsives, modernes Multi-Page-Layout',
    'Interaktive Funktionen: animierte Statistiken, Hover-Effekte für Services, Testimonials-Slider',
    'Dynamischer Blog mit CMS-gesteuerten Inhalten',
    'Kontakt- und Rückrufformulare mit Validierung und Datenverarbeitung',
    'Cookie-Zustimmung und DSGVO-Konformität',
    'Nahtlose Benutzeroberfläche für Echtzeit-Interaktion',

    '🤖 Benutzerdefinierter KI-Chatbot (OpenAI-Integration)',
    'Eigenständig entwickeltes Chat-Interface in die Website integriert',
    'Verbindung zur OpenAI-API für dynamische, kontextbezogene Antworten',
    'Trainiert mit firmenspezifischen FAQs, Services und Support-Daten',
    'Fähig, Nutzer bei Serviceanfragen, Navigation und allgemeinen Fragen zu unterstützen',
    'Laravel-Backend zur Verwaltung und Aktualisierung der Trainingsdaten',
    'Zukunftssicher für erweiterte NLP-Funktionen und Feinabstimmung',

    '🛠 CMS-Admin-Panel (mit Laravel entwickelt)',
    'Sichere Authentifizierung und rollenbasierte Zugriffssteuerung',
    'Dynamische Verwaltung von Services, Blogposts, FAQs, Testimonials, Team und Startseitenelementen',
    'Verwaltung von Kontaktanfragen mit Filterfunktionen',
    'Medien-Upload und Inhaltskontrolle',
    'SEO-Einstellungen für Meta-Titel, Beschreibungen und URLs',
    'Integrierter CSRF-Schutz, Eingabevalidierung und Fehlerbehandlung',

    '📈 Ergebnisse',
    'Das interne Team kann Inhalte eigenständig über das CMS verwalten',
    'Verbesserte Kundeninteraktion und Lead-Erfassung durch den KI-Chatbot',
    'Höhere Nutzerbindung und Verweildauer durch intelligente Assistenzfunktionen'
  ]
},

    additionalImages: [
      '/itech-services.png',
      '/itech-contact.png',
      '/itech-blog.png',
    ]
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
    details: {
      en: [
        'This project was developed as a complete solution for IT service providers.',
        'Includes service catalog, contact forms, and client dashboard.',
        'Built with performance and accessibility in mind.'
      ],
      de: [
        'Dieses Projekt wurde als Komplettlösung für IT-Dienstleister entwickelt.',
        'Beinhaltet Servicekatalog, Kontaktformulare und Kunden-Dashboard.',
        'Mit Fokus auf Leistung und Barrierefreiheit entwickelt.'
      ]
    },
    features: {
      en: [
        'Responsive design for all devices',
        'Contact form with email notifications',
        'Service management dashboard',
        'Client testimonial section'
      ],
      de: [
        'Responsives Design für alle Geräte',
        'Kontaktformular mit E-Mail-Benachrichtigungen',
        'Service-Management-Dashboard',
        'Kundenreferenzen-Bereich'
      ]
    },
    additionalImages: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d'
    ]
  },
  // Other projects would follow the same structure
];


const ProjectDetails = () => {
  const { t, language } = useLanguage();
  const { id } = useParams<{ id: string }>();
  
  const project = projects.find(p => p.title.en.toLowerCase().replace(/\s+/g, '-') === id);

  // State for image gallery
  const [mainImage, setMainImage] = useState(project?.src || '');
  const allImages = project?.additionalImages 
    ? [project.src, ...project.additionalImages] 
    : [project?.src || ''];

  const handleThumbnailClick = (img: string) => {
    setMainImage(img);
  };

  // Group features by category
  const groupFeatures = (features: string[]) => {
    const grouped: Record<string, string[]> = {};
    let currentCategory = '';
    
    features.forEach(feature => {
      if (feature.match(/^[^\w\s]/)) { // If starts with emoji/symbol
        currentCategory = feature;
        grouped[currentCategory] = [];
      } else if (currentCategory) {
        grouped[currentCategory].push(feature);
      }
    });
    
    return grouped;
  };

  if (!project) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Project not found
          </h2>
          <Link 
            to="/projects" 
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to projects
          </Link>
        </div>
      </section>
    );
  }

  const groupedFeatures = project.features ? 
    groupFeatures(project.features[language as keyof typeof project.features]) : {};

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline mb-6"
          >
            <ArrowLeft className="mr-2" size={16} />
            {t('backToProjects')}
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title[language as keyof typeof project.title]}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {project.description[language as keyof typeof project.description]}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4 mb-12">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github className="mr-2" size={18} />
                <span>View Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <ExternalLink className="mr-2" size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Image and Details Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={mainImage}
                alt={project.title[language as keyof typeof project.title]}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            {project.additionalImages && project.additionalImages.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {allImages.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className={`rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                      img === mainImage ? 'border-indigo-500' : 'border-transparent'
                    }`}
                    onClick={() => handleThumbnailClick(img)}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {project.details && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('projectDetails')}
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  {project.details[language as keyof typeof project.details].map((detail, index) => (
                    <p key={index}>{detail}</p>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Features Section - Now in its own row */}
        {Object.entries(groupedFeatures).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('keyFeatures')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(groupedFeatures).map(([category, features], index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800/30 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="text-xl mr-2">{category.split(' ')[0]}</span>
                    {category.split(' ').slice(1).join(' ')}
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;