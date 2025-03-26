"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const featuresData: Feature[] = [
  {
    title: "Gestion des locations",
    description: "Nous gérons l'intégralité du processus locatif : de la mise en ligne des annonces à l'accueil des voyageurs.",
    icon: (
      <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Service de ménage",
    description: "Une équipe professionnelle assure le nettoyage complet de votre bien entre chaque location.",
    icon: (
      <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 0H5a2 2 0 00-2 2m16 0v14M9 8h1m-1 4h1m-1 4h1" />
      </svg>
    )
  },
  {
    title: "Maintenance",
    description: "Nous coordonnons tous les travaux d'entretien et les réparations nécessaires pour votre bien.",
    icon: (
      <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    title: "Conciergerie 24/7",
    description: "Une équipe disponible jour et nuit pour répondre aux besoins de vos voyageurs pendant leur séjour.",
    icon: (
      <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Features: FC = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center py-8 md:py-12">
      {/* Motif de fond sophistiqué */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            radial-gradient(circle at 100% 100%, rgba(76, 175, 80, 0.05) 0, transparent 50%),
            radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.05) 0, transparent 50%)
          `
        }}></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 md:px-6 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* En-tête avec animation */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-[#4CAF50]/10 rounded-full text-xs md:text-sm font-medium text-[#4CAF50] mb-3 md:mb-4"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            FONCTIONNALITÉS CLÉS
          </motion.span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Une plateforme
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#3B82F6] text-transparent bg-clip-text"> tout-en-un</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
            Découvrez les fonctionnalités qui font de notre solution la référence en matière de gestion locative
          </p>
        </motion.div>

        {/* Grille de fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 md:p-8 rounded-xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Effet de brillance au hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/5 to-[#3B82F6]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Contenu avec animations */}
              <div className="relative flex flex-row gap-4 md:gap-6">
                <div className="flex-shrink-0 text-[#4CAF50] group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#4CAF50] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Effet de halo */}
              <div className="absolute -right-4 -bottom-4 w-20 md:w-24 h-20 md:h-24 bg-gradient-to-r from-[#4CAF50]/10 to-[#3B82F6]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features; 