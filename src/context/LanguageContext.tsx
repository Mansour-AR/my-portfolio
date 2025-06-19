// src/context/LanguageContext.tsx
import { verify } from 'crypto';
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'de';

interface Translations {
  [key: string]: {
    en: string;
    de: string;
  };
}

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Translations = {
  welcome: {
    en: "Hi, I'm",
    de: "Hallo, ich bin"
  },
  profession: {
    en: "Full Stack Developer",
    de: "Full-Stack-Entwickler"
  },
  tagline: {
    en: "I build exceptional digital experiences with modern web technologies",
    de: "Ich erstelle außergewöhnliche digitale Erlebnisse mit modernen Webtechnologien"
  },
  viewWork: {
    en: "View My Work",
    de: "Meine Projekte"
  },
  contactMe: {
    en: "Contact Me",
    de: "Kontakt"
  },
  latestProject: {
    en: "Latest Project: E-commerce Platform",
    de: "Letztes Projekt: E-Commerce-Plattform"
  },
 
  // About section
  aboutTitle1: {
    en: "About",
    de: "Über"
  },
  aboutTitle2: {
    en: "Me",
    de: "Mich"
  },
  aboutText1: {
    en: "I am a Full Stack Web Developer with over 5 years of experience in designing and developing scalable, high-performance web applications. With a Bachelor’s degree in Software Engineering from Rana University, Kabul, I have a strong foundation in computer science and software development principles.",
    de: "Ich bin ein Full-Stack-Webentwickler mit über 5 Jahren Erfahrung in der Gestaltung und Entwicklung skalierbarer, leistungsstarker Webanwendungen. Mit einem Bachelor-Abschluss in Software Engineering von der Rana University in Kabul verfüge ich über ein solides Fundament in Informatik und den Prinzipien der Softwareentwicklung."
  },
  aboutText2: {
    en: "My technical expertise spans both front-end and back-end development, specializing in PHP, Laravel, React, Node.js, MySQL, and SQL Server. I am also an IBM Certified JavaScript Full Stack Software Engineer, ensuring my skills align with modern industry standards.",
    de: "Meine technische Expertise umfasst sowohl Frontend- als auch Backend-Entwicklung, mit Spezialisierung auf PHP, Laravel, React, Node.js, MySQL und SQL Server. Zudem bin ich ein von IBM zertifizierter JavaScript Full Stack Software Engineer, was garantiert, dass meine Fähigkeiten den aktuellen Branchenstandards entsprechen."
  },
  aboutText3: {
    en: "Passionate about problem-solving, innovation, and continuous learning, I stay updated with the latest web development trends and best practices. I thrive in collaborative environments and am always open to new opportunities, challenges, and professional connections",
    de: "Mit großer Leidenschaft für Problemlösungen, Innovation und kontinuierliches Lernen halte ich mich stets über die neuesten Trends und Best Practices in der Webentwicklung auf dem Laufenden. Ich blühe in kollaborativen Umgebungen auf und bin immer offen für neue Chancen, Herausforderungen und berufliche Kontakte."
  },
  contactMe1: {
    en: "Contact Me",
    de: "Kontakt"
  },
  downloadCV: {
    en: "Download CV",
    de: "Lebenslauf herunterladen"
  },
   language: {
    en: "en",
    de: "de"
  },

  // Skills translations
  skillsTitle: {
    en: "My",
    de: "Meine"
  },
  skills: {
    en: "Skills",
    de: "Fähigkeiten"
  },
  skillsDescription: {
    en: "Here are the technologies and tools I work with on a daily basis.",
    de: "Technologien und Werkzeuge, mit denen ich täglich arbeite."
  },

   // Projects translations
  projectsTitle: {
    en: "My",
    de: "Meine"
  },
  projects: {
    en: "Projects",
    de: "Projekte"
  },
  projectsDescription: {
    en: "Here are some of my recent projects. Each one was built to solve a specific problem.",
    de: "Hier sind einige meiner aktuellen Projekte. Jedes davon wurde entwickelt, um ein konkretes Problem zu lösen."
  },
  code: {
    en: "Code",
    de: "Code"
  },
  liveDemo: {
    en: "Live Demo",
    de: "Live Demo"
  },

   // Experience translations
  experienceTitle: {
    en: "My",
    de: "Meine"
  },
  experience: {
    en: "Experience",
    de: "Erfahrung"
  },
  experienceDescription: {
    en: "My professional journey, education, and certifications that have shaped my career.",
    de: "Mein beruflicher Werdegang, Ausbildung und Zertifizierungen."
  },
  workExperience: {
    en: "Work Experience",
    de: "Berufserfahrung"
  },
  education: {
    en: "Education",
    de: "Ausbildung"
  },
  certifications: {
    en: "Certifications",
    de: "Zertifizierungen"
  },


  // Testimonials
  testimonialsTitle: {
    en: "Client",
    de: "Kunden"
  },
  testimonials: {
    en: "Testimonials",
    de: "Referenzen"
  },
  testimonialsDescription: {
    en: "Here's what people I've worked with have to say about my work.",
    de: "Das sagen Kunden und Kollegen über meine Arbeit."
  },

  // GitHub
  githubTitle: {
    en: "My",
    de: "Meine"
  },
  github1: {
    en: "GitHub",
    de: "GitHub"
  },
  github2: {
    en: "Activity",
    de: "Aktivität"
  },
  githubDescription: {
    en: "Here are some of my open-source projects and contributions.",
    de: "Meine Open-Source-Projekte und Beiträge."
  },
  visitGithub: {
    en: "Visit my GitHub profile",
    de: "GitHub-Profil besuchen"
  },

  // Certifications
  certificationsTitle: {
    en: "My",
    de: "Meine"
  },
  certifications1: {
    en: "Certifications",
    de: "Zertifizierungen"
  },
  certificationsDescription: {
    en: "Certifications that validate my expertise and commitment to continuous learning.",
    de: "Zertifizierungen, die meine Expertise und mein Engagement für kontinuierliches Lernen bestätigen."
  },
  verifyCertification: {
    en: "Verify Certification", 
    de: "Zertifizierung überprüfen"
  },



  // Contact
  contactTitle: {
    en: "Get In",
    de: "Kontakt"
  },
  contact: {
    en: "Touch",
    de: "aufnehmen"
  },
  contactDescription: {
    en: "Have a project in mind or want to discuss potential opportunities?",
    de: "Haben Sie ein Projekt oder möchten Sie Möglichkeiten besprechen?"
  },
  email: {
    en: "Email",
    de: "E-Mail"
  },
  sendMessage: {
    en: "Send a message",
    de: "Nachricht senden"
  },
  phone: {
    en: "Phone",
    de: "Telefon"
 },
  callMe: {
    en: "Call me",
    de: "Rufen Sie mich an"
 },
  location: {
        en: "Location",
        de: "Standort"
    },    
  yourName: {
    en: "Your Name",
    de: "Ihr Name"
  },
  nameRequired: {
    en: "Name is required",
    de: "Name ist erforderlich"
  },
    emailAddress: {
        en: "Email Address",
        de: "E-Mail-Adresse"
    },
    emailRequired: {
        en: "Email is required",
        de: "E-Mail ist erforderlich"
    },
    invalidEmail: {
        en: "Invalid email address",
        de: "Ungültige E-Mail-Adresse"
    }, 
    subject: {
            en: "Subject",
            de: "Betreff"
        },
    subjectRequired: {
        en: "Subject is required",
        de: "Betreff ist erforderlich"
    },
    message: {
        en: "Message",
        de: "Nachricht"
    },
    messageRequired: {
        en: "Message is required",
        de: "Nachricht ist erforderlich"
    },
    formSubmittedSuccess: {
        en: "Message sent successfully!", 
        de: "Nachricht erfolgreich gesendet!"
    },
    formSubmittedError: {
    en: "Failed to send message. Please try again..",
    de: "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut."
    },
    sending: {
        en: "Sending...",
        de: "Wird gesendet.."
    },  


  // Footer
  footerDescription: {
    en: "A passionate full-stack developer creating modern web applications.",
    de: "Ein leidenschaftlicher Full-Stack-Entwickler, der moderne Webanwendungen erstellt."
  },
  quickLinks: {
    en: "Quick Links",
    de: "Schnellzugriff"
  },
  contactInfo: {
    en: "Contact Info",
    de: "Kontaktinformationen"
  },
  allRightsReserved: {
    en: "All rights reserved.",
    de: "Alle Rechte vorbehalten."
  },
  backToProjects: {
    en: "Back to Projects",     
    de: "Zurück zu den Projekten"
  },
  projectDetails : {
    en: "Project Details",
    de: "Projektdetails"
  },
  keyFeatures: {
    en: "Key Features",
    de: "Hauptmerkmale"
  },  

  // Add more translations as needed
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en');
  };

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};




