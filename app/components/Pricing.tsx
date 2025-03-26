"use client";

import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Pricing: FC = () => {
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
        {/* En-tête avec animation */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
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
            TARIFICATION
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Une solution
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#3B82F6] text-transparent bg-clip-text"> sur mesure</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
            Nous adaptons nos services à vos besoins spécifiques
          </p>
        </motion.div>

        {/* Carte unique */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="group relative bg-white rounded-2xl p-6 md:p-12 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
            <div className="relative text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Service de Conciergerie Premium</h3>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                Une solution complète et personnalisée pour la gestion de votre bien immobilier
              </p>

              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12 text-left">
                {['Gestion complète de votre bien', 'Conciergerie personnalisée', 'Service client dédié', 'Optimisation des revenus'].map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center text-gray-700 text-sm md:text-base"
                  >
                    <span className="w-5 h-5 rounded-full mr-3 flex items-center justify-center bg-[#4CAF50]/10 text-[#4CAF50]">✓</span>
                    <span className="group-hover:text-[#4CAF50] transition-colors duration-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Link 
                href="/devis"
                className="inline-block w-full bg-[#4CAF50] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-medium hover:shadow-xl hover:shadow-[#4CAF50]/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Demander un devis
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Effet de halo */}
            <div className="absolute -right-4 -bottom-4 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-r from-[#4CAF50]/10 to-[#3B82F6]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pricing; 