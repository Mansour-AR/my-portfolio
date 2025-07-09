
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
      en: 'Job Tracker App',
      de: 'Job Tracker App'
    },
    description: {
      en: 'A responsive job tracking platform with secure authentication and productivity-focused features',
      de: 'Eine responsive Job Tracking Plattform mit sicheren Authentifizierungsfunktionen und Produktivitätsfokussierten Funktionen'
    },
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'JWT', 'MongoDB', 'Auth0'],
    src: '/Dashboard-1.png',
    github: 'https://github.com/Mansour-AR/job-tracker-app',
    live: 'https://job-tracker-app-ivory.vercel.app/',
    details: {
      en: [
        'The Job Tracker App is a full-stack web application designed to simplify the job search process by helping users organize, track, and analyze their applications in one centralized dashboard. Built with modern web technologies, the platform provides a seamless experience for job seekers to log their applications, monitor progress through different hiring stages, and visualize their success rates with interactive charts. The project was developed in a 30-day sprint, following Agile methodologies with clear milestones, from authentication setup to deployment.',
        'Security and usability were top priorities, ensuring users could manage their job applications with confidence. The app features JWT-based authentication, real-time status updates, and a mobile-responsive UI for accessibility across devices. By integrating a MongoDB database with a Node.js/Express backend and a React frontend, the platform delivers fast, reliable performance while maintaining clean, maintainable code.',
        'This project demonstrates my ability to design and deploy a production-ready full-stack application with a focus on user experience, data security, and scalable architecture. It also highlights my proficiency in API development, state management, and data visualization, making it a strong addition to my portfolio as a well-rounded developer.'
      ],
      de: [
        'Die Job Tracker App ist eine vollständige Webanwendung, die das Job-Suchen vereinfacht, indem Benutzer ihre Bewerbungen organisieren, verfolgen und analysieren können. Die Plattform bietet eine nahtlose Erfahrung für Job-Suchender, indem sie ihre Bewerbungen protokollieren, den Fortschritt durch verschiedene Bewerbungsphasen verfolgen und ihre Erfolgsraten mit interaktiven Diagrammen visualisieren können. Das Projekt wurde in einer 30-Tages-Sprint entwickelt, die Agile-Methoden folgte, von der Authentifizierungssetup bis zur Bereitstellung. Sicherheit und Benutzerfreundlichkeit waren die Hauptanforderungen, damit Benutzer ihre Bewerbungen mit Vertrauen verwalten konnten. Die App verwendet JWT-basierte Authentifizierung, reale Statusaktualisierungen und eine mobile-optimierte Benutzeroberfläche für Barrierefreiheit auf allen Geräten. Durch die Integration einer MongoDB-Datenbank mit einem Node.js/Express-Backend und einem React-Frontend liefert die Plattform schnelle, zuverlässige Leistung bei gleichzeitiger Wartung von sauberem, wartbarem Code.',
        'Die App verwendet JWT-basierte Authentifizierung, reale Statusaktualisierungen und eine mobile-optimierte Benutzeroberfläche für Barrierefreiheit auf allen Geräten. Durch die Integration einer MongoDB-Datenbank mit einem Node.js/Express-Backend und einem React-Frontend liefert die Plattform schnelle, zuverlässige Leistung bei gleichzeitiger Wartung von sauberem, wartbarem Code.',
        'Dieses Projekt zeigt meine Fähigkeit, eine produktionsbereite vollständige Webanwendung mit Fokus auf Benutzerfreundlichkeit, Datensicherheit und skalierbarer Architektur zu entwickeln. Es zeigt auch meine Kompetenz bei der Entwicklung von APIs, der Verwaltung von Zustand und der Datenvisualisierung, was es zu einem starken Beitrag zu meinem Portfolio als guter Entwickler macht.',
      ]
    },
    features: {
      en: [
        '🌐 Frontend Application',
        'Fully responsive dashboard built with React + Tailwind CSS',
        'Interactive data visualizations (Recharts) for application status analytics',
        'Dynamic job list view with pagination, search, and filtering',
        'Form validation for job entries with error handling',
        'Dark mode toggle (Post-MVP) for accessibility',
        'Seamless API integration via Axios for real-time CRUD operations',
    
        '🔐 Authentication & Security',
        'JWT-based auth via Auth0 with protected routes',
        'Role-based access control (Post-MVP for career coaches)',
       
    
        '🤖 Automation & AI Features (Post-MVP)',
        'LinkedIn job link autofill using web scraping to populate job data',
        'Resume parsing (PDF/text extraction to pre-fill job applications)',
        'Automated email notifications for interviews (SendGrid/Nodemailer)',
    
        '🛠 Backend System',
        'RESTful API built with Node.js/Express and MongoDB/Mongoose',
        'Job schema with status tracking (applied/interviewing/offers)',
        'Rate-limited endpoints with CSRF protection',
        'Automated backups via MongoDB Atlas',
    
        '📈 Results & Impact',
        'Reduced job search disorganization with centralized tracking',
        '15% faster application logging via autofill (Post-MVP)',
        '2-second load times via Vercel edge caching',
        'Enabled data-driven decisions through status analytics',
        'Future-ready for AI job-matching capabilities'
      ],
    
      de: [
        '🌐 Frontend-Anwendung',
        'Vollständig responsives Dashboard mit React und Tailwind CSS',
        'Interaktive Datenvisualisierung (Recharts) zur Analyse von Bewerbungsstatus',
        'Dynamische Jobliste mit Paginierung, Suche und Filterfunktion',
        'Formularvalidierung und Fehlerbehandlung bei Job-Einträgen',
        'Dark Mode (Post-MVP) zur besseren Zugänglichkeit',
        'Nahtlose API-Integration über Axios für Echtzeit-CRUD-Operationen',
    
        '🔐 Authentifizierung & Sicherheit',
        'JWT-basierte Authentifizierung über Clerk/Auth0 mit geschützten Routen',
        'Rollenbasierte Zugriffskontrolle (Post-MVP für Karriere-Coaches)',
        'DSGVO-konforme Datenverarbeitung zum Schutz der Privatsphäre',
    
        '🤖 Automatisierung & KI-Funktionen (Post-MVP)',
        'Automatisches Ausfüllen von Jobdaten über LinkedIn-Webscraping',
        'Lebenslauf-Parsing (PDF-/Text-Extraktion zur Vorbefüllung von Bewerbungen)',
        'Automatisierte E-Mail-Benachrichtigungen zu Interviews (SendGrid/Nodemailer)',
    
        '🛠 Backend-System',
        'RESTful API mit Node.js/Express und MongoDB/Mongoose',
        'Jobschema mit Statusverfolgung (beworben/Vorstellungsgespräch/Angebot)',
        'Ratenbegrenzte Endpunkte und CSRF-Schutz',
        'Automatische Backups über MongoDB Atlas',
    
        '📈 Ergebnisse & Wirkung',
        'Reduzierte Unübersichtlichkeit bei der Jobsuche durch zentrales Tracking',
        '15% schnelleres Bewerbungs-Logging dank Autofill (Post-MVP)',
        '2-Sekunden-Ladezeiten durch Vercel Edge Caching',
        'Datengestützte Entscheidungen durch Bewerbungsanalysen',
        'Zukunftssichere Architektur für KI-gestütztes Job-Matching'
      ]
    },
    additionalImages: [
      '/Dashboard-2.png',
      '/LoginForm.png',
      '/RegistrationForm.png',
      '/Job-Cards.png',
      '/JobCreationForm.png'

    ]
  },
   {
    title: {
      en: 'E-Commerce Website & Admin Dashboard (MERN Stack)',
      de: 'E-Commerce Website & Admin Dashboard (MERN Stack)'
    },
    description: {
      en: 'A full-featured e-commerce platform with secure checkout, admin dashboard, and real-time inventory and order management.',
      de: 'Eine voll funktionsfähige E-Commerce-Plattform mit sicherem Checkout, Admin-Dashboard und Echtzeit-Inventar- und Bestellmanagement.'
    },
    tags: ['React.js', 'Redux', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
    src: '/HomePage.png',
    github: 'https://github.com/Mansour-AR/ecommerce_hub',
    live: 'https://ecommerce-hub-beta.vercel.app/',
    details: {
      en: [
        'I developed a full-featured E-Commerce platform with an integrated Admin Dashboard using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform offers users a seamless online shopping experience with features like product browsing, filtering, a shopping cart, wishlist, user profiles, and secure checkout with payment integration via Stripe or Razorpay. The application is fully responsive, ensuring smooth functionality across all devices, and emphasizes secure user authentication using JWT and Bcrypt.',
        'The Admin Dashboard empowers administrators with full control over inventory, orders, and users. It includes real-time analytics, CRUD operations, stock management, and downloadable reports, all within an intuitive UI built for efficiency. The backend follows RESTful API principles and is organized with a clean MVC architecture. The project was completed in approximately six weeks, including planning, UI/UX design, development, testing, and deployment using platforms like Vercel and Render.',
      ],
      de: [
        'Ich habe eine voll funktionsfähige E-Commerce-Plattform mit integriertem Admin-Dashboard unter Verwendung des MERN-Stacks (MongoDB, Express.js, React.js, Node.js) entwickelt. Die Plattform bietet den Benutzern ein nahtloses Online-Shopping-Erlebnis mit Funktionen wie Produktdurchsuchen, Filtern, einem Warenkorb, Wunschliste, Benutzerprofilen und sicherem Checkout mit Zahlungsintegration über Stripe oder Razorpay. Die Anwendung ist vollständig responsiv und gewährleistet eine reibungslose Funktionalität auf allen Geräten und legt Wert auf sichere Benutzerauthentifizierung mit JWT und Bcrypt.',
        'Das Admin-Dashboard ermöglicht Administratoren die vollständige Kontrolle über Inventar, Bestellungen und Benutzer. Es umfasst Echtzeitanalysen, CRUD-Operationen, Bestandsverwaltung und herunterladbare Berichte, alles in einer intuitiven Benutzeroberfläche, die auf Effizienz ausgelegt ist. Das Backend folgt den RESTful API-Prinzipien und ist mit einer sauberen MVC-Architektur organisiert. Das Projekt wurde in etwa sechs Wochen abgeschlossen, einschließlich Planung, UI/UX-Design, Entwicklung, Testen und Bereitstellung über Plattformen wie Vercel und Render.',
      ]
    },
    features: {
  en: [
    '🌐 Frontend Application',
    'Fully responsive storefront and admin dashboard built with React + Tailwind CSS',
    'Product listing with filtering, sorting, and pagination',
    'Interactive analytics dashboard using Recharts for sales and user data',
    'Product detail pages with image gallery and real-time stock info',
    'Seamless API integration via Axios for dynamic content and CRUD operations',
    'User profile management with order history and editable account details',

    '🔐 Authentication & Security',
    'JWT-based authentication with protected user and admin routes',
    'Role-based access control for admin management',
    'XSS/CSRF protection, input validation, and rate limiting',

    '🛠 Backend System',
    'RESTful API built with Node.js/Express and MongoDB/Mongoose',
    'CRUD operations for products, orders, users, and categories',
    'Inventory management with automated stock tracking',
    'File upload for product images and downloadable reports (CSV/PDF)',

    '💳 Payments & Transactions',
    'Secure checkout with Stripe or Razorpay integration',
    'Order confirmation system with real-time updates',
    'Optional email notifications for order status (Post-MVP)',

    '📈 Results & Impact',
    'Centralized product and order management via admin dashboard',
    'Fast page loads and mobile-first design for better UX',
    'Scalable deployment using Vercel (frontend) and Render/AWS (backend)',
    'Foundation for future enhancements like multi-vendor support and mobile apps'
  ],

  de: [
    '🌐 Frontend-Anwendung',
    'Vollständig responsives Shop-Frontend und Admin-Dashboard mit React und Tailwind CSS',
    'Produktauflistung mit Filterung, Sortierung und Paginierung',
    'Interaktives Analyse-Dashboard mit Recharts für Verkaufs- und Nutzerdaten',
    'Produktdetailseiten mit Bildergalerie und Live-Bestand',
    'Nahtlose API-Integration über Axios für dynamische Inhalte und CRUD-Operationen',
    'Benutzerprofilverwaltung mit Bestellhistorie und bearbeitbaren Kontoinformationen',

    '🔐 Authentifizierung & Sicherheit',
    'JWT-basierte Authentifizierung mit geschützten Benutzer- und Admin-Routen',
    'Rollenbasierte Zugriffskontrolle für Admins',
    'XSS-/CSRF-Schutz, Eingabevalidierung und Ratenbegrenzung',

    '🛠 Backend-System',
    'RESTful API mit Node.js/Express und MongoDB/Mongoose',
    'CRUD-Operationen für Produkte, Bestellungen, Benutzer und Kategorien',
    'Bestandsverwaltung mit automatischer Lagerverfolgung',
    'Datei-Upload für Produktbilder und herunterladbare Berichte (CSV/PDF)',

    '💳 Zahlungen & Transaktionen',
    'Sicherer Checkout mit Stripe- oder Razorpay-Integration',
    'Bestellbestätigungssystem mit Echtzeit-Updates',
    'Optionale E-Mail-Benachrichtigungen zum Bestellstatus (Post-MVP)',

    '📈 Ergebnisse & Wirkung',
    'Zentrale Verwaltung von Produkten und Bestellungen über das Admin-Dashboard',
    'Schnelle Ladezeiten und Mobile-First-Design für optimale UX',
    'Skalierbare Bereitstellung über Vercel (Frontend) und Render/AWS (Backend)',
    'Basis für zukünftige Erweiterungen wie Multi-Vendor-Unterstützung und mobile Apps'
  ]
},
    additionalImages: [
      '/CustomerDashboard.png',
      '/CustomerWishlist.png',
      '/LoginPage.png',
      '/RegistrationPage.png',
      '/ShoppingCart.png',

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