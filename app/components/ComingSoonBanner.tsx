'use client';

import { MailIcon, TriangleAlert } from 'lucide-react';
import Image from 'next/image';
import { useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function radialBlobPath(lobes = 12, r1 = 60, r2 = 45, cx = 60, cy = 60) {
  const steps = lobes * 2;
  const pts = Array.from({ length: steps }, (_, i) => {
    const angle = (i / steps) * 2 * Math.PI;
    const r = i % 2 === 0 ? r1 : r2;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  });
  
  // Construction d'un chemin avec des arcs pour des formes très arrondies
  let path = `M ${pts[0][0]},${pts[0][1]}`;
  
  // Utiliser des arcs pour créer des transitions très douces entre les points
  for (let i = 0; i < pts.length; i++) {
    const current = pts[i];
    const next = pts[(i + 1) % pts.length];
    
    // Distance entre les points pour déterminer la taille de l'arc
    const distance = Math.sqrt(
      Math.pow(next[0] - current[0], 2) + 
      Math.pow(next[1] - current[1], 2)
    );
    
    // Rayon de l'arc (plus grand pour des courbes plus douces)
    const arcRadius = distance * 0.75;
    
    // Ajouter un arc entre chaque point
    path += ` A ${arcRadius},${arcRadius} 0 0 1 ${next[0]},${next[1]}`;
  }
  
  path += " Z";
  return path;
}

export default function ComingSoonBanner({ lobes = 12 }) {
  
    // Mémoïsation pour éviter des recalculs inutiles côté client
  const blobPath = useMemo(() => radialBlobPath(lobes), [lobes]);
  
  return (
    <section className="relative isolate w-full py-24 sm:py-32 mb-20">
      <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between md:gap-0">
        {/* Colonne gauche */}
        <div className="relative w-full flex flex-col">
          {/* Partie principale gauche */}
          <div className="w-[115%] md:ml-auto md:mr-0 rounded-3xl md:rounded-br-none bg-[#d5f15c] p-20 text-slate-900">
            <h2 className="text-3xl font-normal leading-snug">
              Notre site
              <br />
              est en construction
            </h2>

            <h3 className="mt-8 font-bold">Mais notre service est déjà lancé !</h3>
            <p className="w-3/4 mt-4 text-sm leading-relaxed">
              Azuna est déjà à votre service pour la gestion complète de vos biens
              immobiliers. Bien que notre site soit en cours de développement, notre
              équipe est pleinement opérationnelle. Vous souhaitez déléguer la gestion de
              votre logement ?
            </p>
          </div>

          {/* Logo azuna */}
          <div className="bg-[#fffbf4] pt-10 w-full max-w-2xl flex justify-center items-center md:mr-0">
            <Image 
              src="/logo-azuna.png" 
              alt="Logo Azuna" 
              width={180} 
              height={50} 
              className="w-2/3 md:w-1/2 object-contain"
            />
          </div>
        </div>

        {/* Partie droite */}
        <div className="relative z-10 w-full md:max-w-none md:ml-0 md:mt-64 rounded-3xl md:rounded-tl-none bg-[#d5f15c] p-16 pt-24 text-slate-900">
          <p className="ml-16 text-2xl font-normal leading-snug">
            Contactez-nous dès maintenant,
            <br />
            nous nous occupons de tout.
          </p>

          <form className="mx-16 mt-8 space-y-4">
            <label className="sr-only" htmlFor="email">
              Adresse e-mail
            </label>

            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="Votre adresse e-mail"
                required
                className="bg-[#f6fdca] rounded-full">
              </Input>
              <MailIcon
                aria-hidden
                className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-lime-700/70"
              />
            </div>

            <Button
              type="submit"
              className="bg-[#001430] hover:bg-slate-800 transition-all duration-300 rounded-full w-full"
            >
              Envoyer
            </Button>
          </form>
        </div>
      </div>

      {/* Cercle blanc pour l'angle extérieur */}
      <div className="absolute md:block hidden w-16 h-16 bg-[#fffbf4] rounded-full lg:right-[52.2%] lg:top-[62.2%] md:right-[52.6%] md:top-[63.7%] z-10"></div>

      {/* Carré de la couleur des panneaux */}
      <div className="absolute md:block hidden w-8 h-8 bg-[#d5f15c] lg:right-[52.2%] lg:top-[62%] md:right-[52.7%] md:top-[63.7%] z-0"></div>

      {/* Badge ⚠️ */}
      <div className="absolute left-[55%] top-96 -translate-x-1/2 -translate-y-1/2 z-10">
            <svg
                viewBox="0 0 120 120"
                className="w-[100px] h-[100px]"
                aria-label="Avertissement"
            >
                <rect width="100" height="100" fill="none" />
                <path d={blobPath} fill="#FFFFFF" />
            </svg>
            <TriangleAlert className="w-10 h-10 rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-900" />
        </div>
    </section>
  );
}
