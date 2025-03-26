"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  icon: JSX.Element;
}

const statsData: StatItem[] = [
  {
    value: "97%",
    label: "Taux de satisfaction",
    sublabel: "Des propriétaires satisfaits",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    )
  },
  {
    value: "+2500",
    label: "Réservations",
    sublabel: "Gérées chaque année",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    value: "24/7",
    label: "Support client",
    sublabel: "À votre service",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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

const Stats: FC = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center py-16 md:py-0">
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
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-[#4CAF50]/10 text-[#4CAF50] text-xs md:text-sm font-medium rounded-full mb-4 md:mb-6"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            NOS CHIFFRES
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Des résultats
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#3B82F6] text-transparent bg-clip-text"> qui parlent</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
            Découvrez l&apos;impact de notre expertise sur la performance de nos clients
          </p>
        </motion.div>

        {/* Grille de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-white p-4 md:p-6 rounded-xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/5 to-[#3B82F6]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="mb-3 md:mb-4 text-[#4CAF50]">
                  {stat.icon}
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-[#4CAF50] transition-colors duration-300">
                    {stat.value}
                  </h3>
                  <div className="w-10 h-0.5 bg-[#4CAF50] rounded-full mb-2 md:mb-3 transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
                  <p className="text-gray-900 font-semibold text-sm md:text-base mb-1">{stat.label}</p>
                  <p className="text-gray-500 text-xs md:text-sm">{stat.sublabel}</p>
                </div>
              </div>

              <div className="absolute -right-4 -bottom-4 w-20 md:w-24 h-20 md:h-24 bg-gradient-to-r from-[#4CAF50]/10 to-[#3B82F6]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats; 