"use client";

import { cn } from "@/app/lib/utils";
import { Marquee } from "@/app/components/magicui/marquee";
import Image from "next/image";
import { FC } from "react";
import { motion } from 'framer-motion';

interface Review {
  name: string;
  role: string;
  body: string;
  img: string;
}

const reviews: Review[] = [
  {
    name: "Sophie Martin",
    role: "Propriétaire à Nice",
    body: "Une gestion locative sans stress avec des revenus optimisés. Je recommande vivement !",
    img: "https://avatar.vercel.sh/sophie",
  },
  {
    name: "Pierre Dubois",
    role: "Investisseur à Nice",
    body: "L'automatisation des tâches m'a permis de gagner un temps précieux.",
    img: "https://avatar.vercel.sh/pierre",
  },
  {
    name: "Marie Laurent",
    role: "Propriétaire à Nice",
    body: "Un service client exceptionnel et des résultats au-delà de mes attentes.",
    img: "https://avatar.vercel.sh/marie",
  },
  {
    name: "Thomas Bernard",
    role: "Propriétaire à Nice",
    body: "La meilleure décision que j'ai prise pour la gestion de mes biens.",
    img: "https://avatar.vercel.sh/thomas",
  },
  {
    name: "Claire Dupont",
    role: "Investisseur à Nice",
    body: "Une équipe professionnelle et des outils performants. Je suis ravie !",
    img: "https://avatar.vercel.sh/claire",
  },
  {
    name: "Lucas Moreau",
    role: "Propriétaire à Nice",
    body: "Mes revenus locatifs ont augmenté de 40% depuis que je leur fais confiance.",
    img: "https://avatar.vercel.sh/lucas",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, role, body }: Review) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 md:w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-3 md:gap-4 mb-3 md:mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#4CAF50] to-[#3B82F6] rounded-full overflow-hidden">
          <Image width={48} height={48} alt={name} src={img} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-gray-900 font-medium text-sm md:text-base">{name}</figcaption>
          <p className="text-gray-500 text-xs md:text-sm">{role}</p>
        </div>
      </div>
      <blockquote className="text-gray-600 italic text-sm md:text-base">{body}</blockquote>
    </figure>
  );
};

const Testimonials: FC = () => {
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* En-tête avec animation */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-[#4CAF50]/10 rounded-full text-xs md:text-sm font-medium text-[#4CAF50] mb-4 md:mb-6"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            TÉMOIGNAGES
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Ce que disent
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#3B82F6] text-transparent bg-clip-text"> nos clients</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
            Découvrez les expériences de nos propriétaires partenaires
          </p>
        </motion.div>

        {/* Carrousel de témoignages */}
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem] mb-6 md:mb-12">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:1rem]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          
          {/* Effets de dégradé */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-1/4 bg-gradient-to-r from-[#fafcff] via-[#fafcff]/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-1/4 bg-gradient-to-l from-[#f9fcf9] via-[#f9fcf9]/80 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials; 