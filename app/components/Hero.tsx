"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NoiseBackground from './NoiseBackground';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-gradient-to-br from-[#000D1F] to-[#001532] overflow-hidden flex flex-col"
    >
      <NoiseBackground />

      {/* Navigation non-fixe */}
      <nav className="relative pt-6 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center backdrop-blur-md bg-white/5 rounded-2xl px-4 md:px-8 py-4 border border-white/10 shadow-lg">
            <h1 className="text-2xl font-bold text-white">Azuna</h1>
            
            {/* Menu mobile */}
            <div className="md:hidden">
              <button className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Menu desktop */}
            <div className="hidden md:flex items-center gap-12">
              {['Services', 'Avantages', 'Tarification', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-white/90 hover:text-[#4CAF50] transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4CAF50] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <button className="bg-[#4CAF50] text-white px-6 py-3 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-[#4CAF50]/20 transition-all duration-300 transform hover:-translate-y-0.5">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenu Hero */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="container mx-auto px-4 md:px-6 flex-1 flex items-center py-8 md:py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Texte */}
          <div className="text-center md:text-left">
            <span className="bg-[#4CAF50]/10 text-[#4CAF50] text-xs md:text-sm font-medium py-2 px-4 rounded-full mb-4 md:mb-6 inline-block">
              SERVICE DE CONCIERGERIE
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 animate-fade-in">
              Votre partenaire de confiance pour la 
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#3B82F6] text-transparent bg-clip-text"> gestion locative</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Une équipe dédiée pour gérer votre bien immobilier avec excellence. Du ménage à l&apos;accueil des voyageurs, nous prenons soin de tout.
            </p>
            
            {/* Boutons CTA */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <button className="w-full md:w-auto group bg-[#4CAF50] text-white px-6 py-3 rounded-xl text-sm md:text-base font-medium hover:shadow-xl hover:shadow-[#4CAF50]/20 transition-all duration-300 transform hover:-translate-y-0.5">
                Nous contacter
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="w-full md:w-auto flex items-center justify-center gap-2 text-white/80 hover:text-[#4CAF50] transition-colors z-10 py-3 text-sm md:text-base">
                En savoir plus
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-8 md:mt-0 max-w-md mx-auto md:max-w-none">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/femme-souriante.png"
                alt="Interface de gestion"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
                priority
              />
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -right-16 -bottom-16 w-48 md:w-72 h-48 md:h-72 bg-[#4CAF50]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -left-16 -top-16 w-48 md:w-72 h-48 md:h-72 bg-[#3B82F6]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero; 