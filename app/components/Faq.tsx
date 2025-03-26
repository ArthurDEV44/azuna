"use client";

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/app/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Quels services de conciergerie proposez-vous ?",
    answer: "Nous proposons une gamme complète de services : accueil des voyageurs, ménage professionnel, maintenance, gestion du linge, coordination des interventions techniques, et assistance 24/7 pour vos locataires."
  },
  {
    question: "Comment se déroule la prise en charge de mon bien ?",
    answer: "Nous commençons par une visite détaillée de votre bien, établissons ensemble vos besoins spécifiques, et mettons en place un planning personnalisé. Notre équipe prend ensuite en charge l'intégralité de la gestion quotidienne."
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: "Nous intervenons principalement sur Nice et ses alentours, garantissant ainsi une réactivité optimale pour tous nos clients."
  },
  {
    question: "Comment assurez-vous la qualité de vos services ?",
    answer: "Notre équipe de professionnels est rigoureusement sélectionnée et formée. Nous effectuons des contrôles qualité réguliers et vous fournissons des rapports détaillés après chaque intervention."
  },
  {
    question: "Comment sont gérées les urgences ?",
    answer: "Notre service d'assistance est disponible 24h/24 et 7j/7. En cas d'urgence, une équipe dédiée intervient rapidement pour résoudre tout problème."
  }
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

const FaqItem: FC<FaqItem & { isOpen: boolean; onClick: () => void }> = ({
  question,
  answer,
  isOpen,
  onClick
}) => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="border-b border-gray-200 last:border-none"
    >
      <button
        className="w-full py-4 md:py-6 text-left flex justify-between items-center focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-base md:text-lg font-medium text-gray-900 group-hover:text-[#4CAF50] transition-colors duration-300">{question}</span>
        <span className={cn(
          "ml-4 md:ml-6 flex-shrink-0 text-[#4CAF50] transition-transform duration-300",
          isOpen ? "transform rotate-180" : ""
        )}>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 mb-4 md:mb-6" : "max-h-0"
      )}>
        <p className="text-gray-600 text-sm md:text-base">{answer}</p>
      </div>
    </motion.div>
  );
};

const Faq: FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

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
            FAQ
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Questions
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#3B82F6] text-transparent bg-clip-text"> fréquentes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
            Tout ce que vous devez savoir sur notre service de gestion locative
          </p>
        </motion.div>

        {/* Liste FAQ */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              {...item}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Faq; 