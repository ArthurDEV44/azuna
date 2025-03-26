"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';

interface ServiceFeature {
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
}

const servicesData: ServiceFeature[] = [
  {
    title: "Gestion des annonces",
    description: "Optimisation multi-plateformes de vos annonces pour une visibilité maximale",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    features: [
      "Photos professionnelles",
      "Description SEO optimisée",
      "Tarification dynamique"
    ]
  },
  {
    title: "Service conciergerie",
    description: "Un accueil personnalisé et des prestations haut de gamme pour vos voyageurs",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Check-in digital",
      "Ménage professionnel",
      "Service de conciergerie 24/7"
    ]
  },
  {
    title: "Maintenance & Support",
    description: "Une équipe dédiée pour l'entretien et la gestion de vos biens",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: [
      "Interventions rapides",
      "Suivi des travaux",
      "Reporting mensuel"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const headerVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const Services: FC = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center py-6 md:py-12">
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
        className="container mx-auto px-4 md:px-6 relative flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* En-tête avec animation */}
        <motion.div 
          className="text-center mb-6 md:mb-12 w-full"
          variants={headerVariants}
        >
          <motion.span 
            className="inline-block px-3 py-1.5 bg-gradient-to-r from-[#4CAF50]/10 to-[#3B82F6]/10 rounded-full text-xs md:text-base font-medium text-[#4CAF50] mb-2 md:mb-6"
          >
            NOS SERVICES
          </motion.span>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-6 px-4">
            Une solution complète pour
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#3B82F6] text-transparent bg-clip-text"> votre bien</span>
          </h2>
          <p className="text-xs md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Maximisez vos revenus locatifs grâce à notre expertise et nos services sur-mesure
          </p>
        </motion.div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-4 md:p-8 rounded-xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-2 md:mb-6 text-[#4CAF50]">
                {service.icon}
              </div>
              <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-1.5 md:mb-4">
                {service.title}
              </h3>
              <p className="text-xs md:text-lg text-gray-600 mb-2 md:mb-6">
                {service.description}
              </p>
              <ul className="space-y-1 md:space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs md:text-base text-gray-700">
                    <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#4CAF50] rounded-full mr-1.5 md:mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services; 