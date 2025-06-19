import { motion } from 'framer-motion';
import { Code, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Typewriter effect state
  const [displayedCode, setDisplayedCode] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const { t } = useLanguage();
  const fullCode = t('language') === 'de' 
    ? `// Erstellt mit Next.js, TypeScript und Tailwind CSS\nconst EcommerceApp = () => {\n  return (\n    <ShopProvider>\n      <Layout>\n        <ProductCatalog />\n        <CartPreview />\n      </Layout>\n    </ShopProvider>\n  );\n};`
    : `// Building with Next.js, TypeScript, and Tailwind CSS\nconst EcommerceApp = () => {\n  return (\n    <ShopProvider>\n      <Layout>\n        <ProductCatalog />\n        <CartPreview />\n      </Layout>\n    </ShopProvider>\n  );\n};`;


  useEffect(() => {
    // Typewriter effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullCode.length) {
        setDisplayedCode(fullCode.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Blinking cursor effect after typing completes
        const cursorInterval = setInterval(() => {
          setCursorVisible(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    }, 50); // Typing speed (lower = faster)

    return () => clearInterval(typingInterval);
  }, [fullCode]);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+CjxwYXRoIGQ9Ik0yOCAwTDI4IDM0TDAgNTBMNTYgNTBMMjggMzQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjMTExIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+CjxwYXRoIGQ9Ik0yOCAwTDI4IDM0TDAgNTBMNTYgNTBMMjggMzQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
              <Terminal className="mr-2" size={16} />
              <span className="text-sm font-medium">{t('profession')}</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('welcome')} <span className="text-indigo-600 dark:text-indigo-400">Mansour Aria</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8"
          >
             {t('tagline')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              {t('viewWork')}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors"
            >
              {t('contactMe')}
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-4xl w-full"
          >
            <div className="flex items-center mb-4">
              <Code className="text-indigo-600 dark:text-indigo-400 mr-2" />
              <h3 className="font-mono text-sm text-gray-500 dark:text-gray-400">
                {t('latestProject')}
              </h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm relative">
                <code>
                  {displayedCode}
                  <span 
                    className={`inline-block w-2 h-6 bg-green-400 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ verticalAlign: 'text-top' }}
                  />
                </code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;