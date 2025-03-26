"use client";

import { FC } from 'react';
import NoiseBackground from './NoiseBackground';
import { motion } from 'framer-motion';

interface QuickStat {
  value: string;
  label: string;
}

const quickStats: QuickStat[] = [
  { value: "+45%", label: "de revenus en moyenne" },
  { value: "98%", label: "taux d'occupation" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Cta: FC = () => {
  return (
    <section id="cta" className="relative min-h-screen bg-gradient-to-br from-[#000D1F] to-[#001532] overflow-hidden flex items-center py-16 md:py-0">
      <NoiseBackground />

      <motion.div 
        className="container mx-auto px-4 md:px-6 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Contenu textuel */}
          <motion.div 
            className="max-w-2xl"
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
              PASSEZ À L&apos;ACTION
            </motion.span>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Transformez votre bien en 
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#3B82F6] text-transparent bg-clip-text"> source de revenus</span>
            </h2>

            <p className="text-base md:text-xl text-white/70 mb-8 md:mb-12 leading-relaxed">
              Rejoignez les propriétaires qui nous font confiance et découvrez une gestion locative sans stress avec des revenus optimisés.
            </p>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
              {quickStats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="relative group"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#4CAF50] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="w-12 h-1 bg-[#4CAF50] rounded-full mb-3 transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
                  <p className="text-sm md:text-base text-white/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <motion.button 
                className="group bg-[#4CAF50] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-medium hover:shadow-xl hover:shadow-[#4CAF50]/20 transition-all duration-300 transform hover:-translate-y-0.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Estimer mes revenus
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              <motion.button 
                className="group px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-medium border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Prendre rendez-vous
                <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Carte de confiance */}
          <motion.div 
            className="relative"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              {/* En-tête */}
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#4CAF50]/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#4CAF50]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Ils nous font confiance</h3>
                  <p className="text-sm md:text-base text-white/60">Rejoignez notre communauté</p>
                </div>
              </div>

              {/* Témoignage */}
              <blockquote className="text-sm md:text-base text-white/80 italic mb-6">
                &quot;Une équipe professionnelle qui a su maximiser mes revenus locatifs tout en me libérant du temps.&quot;
              </blockquote>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#4CAF50] to-[#3B82F6] rounded-full"></div>
                <div>
                  <p className="text-sm md:text-base text-white font-medium">John Doe</p>
                  <p className="text-xs md:text-sm text-white/60">Propriétaire à Nice</p>
                </div>
              </div>
            </div>

            {/* Effets décoratifs */}
            <div className="absolute -right-10 md:-right-20 -bottom-10 md:-bottom-20 w-72 md:w-96 h-72 md:h-96 bg-[#4CAF50]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -left-10 md:-left-20 -top-10 md:-top-20 w-72 md:w-96 h-72 md:h-96 bg-[#3B82F6]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Cta; 