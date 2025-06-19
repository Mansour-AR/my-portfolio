import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Testimonial {
  name: string;
  role: {
    en: string;
    de: string;
  };
  content: {
    en: string;
    de: string;
  };
  rating: number;
}

const Testimonials = () => {
  const { t, language } = useLanguage();

  const testimonials: Testimonial[] = [
    {
      name: 'Nesar Asir',
      role: {
        en: 'CEO, iTech Americas LLC',
        de: 'Geschäftsführer, iTech Americas LLC'
      },
      content: {
        en: 'Working with Aria was an absolute pleasure. Their attention to detail and problem-solving skills helped us deliver our project ahead of schedule.',
        de: 'Die Zusammenarbeit mit Aria war äußerst angenehm. Ihr Augenmerk für Details und Problemlösungsfähigkeiten halfen uns, das Projekt vorzeitig abzuschließen.'
      },
      rating: 5
    },

    {
      name: 'Michael Chen',
      role: {
        en: 'CTO, Startup Ventures',
        de: 'CTO, Startup Ventures'
      },
      content: {
        en: 'Aria is one of the most talented developers I have worked with. They took our vague ideas and turned them into a beautiful, functional product.',
        de: 'Aria ist einer der talentiertesten Entwickler, mit denen ich je gearbeitet habe. Er hat unsere vagen Ideen in ein wunderschönes, funktionales Produkt verwandelt.'
  },
      rating: 5
    }
  ];    

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
            {t('testimonialsTitle')} <span className="text-indigo-600 dark:text-indigo-400">{t('testimonials')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('testimonialsDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}
                  />
                ))}
              </div>
              <Quote className="text-gray-300 dark:text-gray-600 mb-4" size={24} />
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {testimonial.content[language as keyof typeof testimonial.content]}
              </p>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {testimonial.role[language as keyof typeof testimonial.role]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;