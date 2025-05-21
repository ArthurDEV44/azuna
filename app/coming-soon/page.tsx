import Image from "next/image";
import Link from "next/link";
import ComingSoonBanner from "@/app/components/ComingSoonBanner";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Fonction pour générer le chemin du blob souriant
function blobPath(lobes = 12, r1 = 60, r2 = 45, cx = 60, cy = 60) {
  const steps = lobes * 2;
  const pts = Array.from({ length: steps }, (_, i) => {
    const angle = (i / steps) * 2 * Math.PI;
    const r = i % 2 === 0 ? r1 : r2;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  });
  
  let path = `M ${pts[0][0]},${pts[0][1]}`;
  
  for (let i = 0; i < pts.length; i++) {
    const current = pts[i];
    const next = pts[(i + 1) % pts.length];
    
    const distance = Math.sqrt(
      Math.pow(next[0] - current[0], 2) + 
      Math.pow(next[1] - current[1], 2)
    );
    
    const arcRadius = distance * 0.75;
    
    path += ` A ${arcRadius},${arcRadius} 0 0 1 ${next[0]},${next[1]}`;
  }
  
  path += " Z";
  return path;
}

// Composant pour le blob souriant
function SmileyBlob({ color = "#ffb28c", className = "", ...props }) {
  const path = blobPath(10);
  
  return (
    <div className={`absolute ${className}`} {...props}>
      <svg viewBox="0 0 120 120" width="150" height="150" className="transform rotate-[25deg]">
        <path d={path} fill={color} />
        <path d="M40,70 Q60,90 80,70" fill="none" stroke="#001B3A" strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="45" cy="50" rx="4" ry="8" fill="#001B3A" />
        <ellipse cx="75" cy="50" rx="4" ry="8" fill="#001B3A" />
      </svg>
    </div>
  );
}

// Composant pour le blob souriant
function SmileyBlob2({ color = "#ffb28c", className = "", ...props }) {
  const path = blobPath(10);
  
  return (
    <div className={`absolute ${className}`} {...props}>
      <svg viewBox="0 0 120 120" width="70" height="70" className="transform -rotate-[25deg]">
        <path d={path} fill={color} />
        <path d="M40,70 Q60,90 80,70" fill="none" stroke="#001B3A" strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="45" cy="50" rx="4" ry="8" fill="#001B3A" />
        <ellipse cx="75" cy="50" rx="4" ry="8" fill="#001B3A" />
      </svg>
    </div>
  );
}

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-[#fffbf4] overflow-x-hidden flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Image src="/logo-azuna.png" alt="Logo" width={100} height={100} />
        <div className="flex gap-4">
          <div className="bg-[#001B3A] text-white py-2 px-6 rounded-full text-sm font-medium flex items-center">
            06 78 32 34 46
          </div>
          <Button variant="outline" asChild className="bg-[#8ed6ff] text-[#001B3A] py-2 px-6 rounded-full text-sm font-medium border border-[#BEE6FF] hover:bg-[#E3F4FF] transition-all duration-300">
            <Link href="mailto:contact@azuna.pro" prefetch={false} scroll={false}>
              contact@azuna.pro
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content avec position relative pour superposer les éléments */}
      <main className="container mx-auto px-4 relative flex flex-col">
        {/* Image en arrière-plan qui couvre une partie à droite et passe sous les services */}
        <div className="absolute top-20 right-0 bottom-[400px] w-[48%] z-0 mr-4">
          <Image 
            src="/working-teams.png" 
            alt="Working teams" 
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        
        {/* Bloc titre principal centré avec z-index supérieur */}
        <section className="w-full flex flex-col items-center justify-center mt-8 mb-20 relative z-10">
          {/* Bloc Titre Composé */}
          <div className="relative w-fit md:min-w-[580px]">
            <div className="flex flex-col">
              <span className="bg-[#F7F2EA] px-8 py-5 rounded-2xl rounded-br-none text-7xl md:text-8xl font-medium text-[#001B3A] leading-tight w-fit">
                Nous <span className="italic">nous</span>
              </span>
              <div className="-mt-3 ml-56 text-7xl md:text-8xl font-medium text-[#001B3A] leading-tight rounded-2xl">
                <span className="bg-[#F7F2EA] rounded-2xl px-8 py-2.5 font-medium relative">
                  occupons 
                </span>
                <span className="bg-[#d5f15c] rounded-2xl px-8 py-2.5 font-extrabold relative">
                  de tout !
                  <SmileyBlob className="-top-24 -right-24" />
                </span>
              </div>
            </div>
            
            {/* Cercle blanc pour l'angle extérieur supérieur gauche */}
            <div className="absolute block w-12 h-12 bg-[#fffbf4] rounded-full lg:left-[14.7%] lg:top-[62%] z-10"></div>
            
            {/* Carré de la couleur du panneau supérieur gauche */}
            <div className="absolute block w-6 h-6 bg-[#F7F2EA] lg:left-[16.8%] lg:top-[62%] z-0"></div>
            
            {/* Cercle blanc pour l'angle extérieur inférieur droit */}
            <div className="absolute block w-12 h-12 bg-[#fffbf4] rounded-full lg:right-[49.5%] lg:bottom-[52.5%] z-10"></div>
            
            {/* Carré de la couleur du panneau inférieur droit */}
            <div className="absolute block w-6 h-6 bg-[#F7F2EA] lg:right-[51.5%] lg:bottom-[51.5%] z-0"></div>
          </div>
        </section>
          
        {/* Smiley flottant entre titre et description */}
        <div className="absolute top-60 left-28 z-10">
          <SmileyBlob2 color="#8ed6ff" className="static" />
        </div>
          
        {/* Bloc description à gauche de l'image */}
        <section className="w-full max-w-md mt-8 mb-16 ml-44 relative z-10">
          <h2 className="font-semibold text-xl md:text-2xl text-[#001B3A] mb-2">
            La conciergerie spécialisée dans la gestion de biens immobiliers
          </h2>
          <p className="text-base text-[#18263A] mb-4 leading-relaxed">
            Nous prenons en charge votre logement avec soin et professionnalisme. De l&apos;entretien du logement à l&apos;accueil des voyageurs, en passant par la gestion de leurs besoins durant le séjour jusqu&apos;à la restitution du bien après leur départ, nous simplifions chaque étape.
          </p>
        </section>

        {/* Services ruban alignés à gauche comme sur la capture */}
        <section className="relative ml-44">
          {/* Première ligne */}
          <div className="flex flex-wrap gap-2 mb-2 justify-start">
            <div className="bg-[#8ed6ff] text-black py-2 px-6 rounded-full text-sm font-medium shadow-sm">MISE EN LOCATION</div>
            <div className="bg-[#d5f15c] text-black py-2 px-6 rounded-full text-sm font-medium shadow-sm flex items-center">CONCIERGERIE BNB</div>
            <div className="flex items-center font-bold bg-[#ffb28c] rounded-full px-1.5"><ArrowUpRight /></div>
          </div>
          
          {/* Deuxième ligne */}
          <div className="flex flex-wrap gap-2 mb-2 justify-start">
            <div className="bg-[#001430] text-white py-2 px-6 rounded-full text-sm font-medium shadow-sm">GESTION DU BIEN</div>
            <div className="bg-[#8ed6ff] text-black py-2 px-6 rounded-full text-sm font-medium shadow-sm">MAINTENANCE</div>
            <div className="bg-[#001430] text-white py-2 px-6 rounded-full text-sm font-medium shadow-sm">MÉNAGE</div>
          </div>
          
          {/* Troisième ligne */}
          <div className="flex flex-wrap gap-2 mb-2 justify-start">
            <div className="bg-white border-2 border-[#001B3A] text-[#001B3A] py-2 pr-0 px-6 rounded-full text-sm font-medium shadow-sm">CHECK IN <span className="bg-[#706de7] text-white py-2.5 px-6 rounded-full text-sm font-medium shadow-sm">OUT</span></div>
            <div className="bg-[#ffb28c] text-black py-2 px-6 rounded-full text-sm font-medium shadow-sm flex items-center">
              PRISE EN CHARGE DES VOYAGEURS
            </div>
            <div className="flex items-center font-bold bg-[#a6a4ff] text-white rounded-full px-2"><ArrowRight /></div>
          </div>
          
          {/* Quatrième ligne */}
          <div className="flex flex-wrap gap-2 mb-2 justify-start">
            <div className="bg-[#001430] text-white py-2 px-6 rounded-full text-sm font-medium shadow-sm">ACCOMPAGNEMENT</div>
            <div className="bg-[#d5f15c] text-black py-2 px-6 rounded-full text-sm font-medium shadow-sm">SERVICE DE PRESSING</div>
            <div className="bg-white border border-[#001B3A] text-[#001B3A] py-2 px-6 rounded-full text-sm font-medium shadow-sm">CONFIANCE</div>
          </div>

          {/* Cinquième ligne */}
          <div className="flex flex-wrap gap-2 justify-start">
            <div className="bg-[#8ed6ff] text-black py-2 px-6 rounded-full text-sm font-medium shadow-sm">GESTION DES DÉCHETS</div>
          </div>
        </section>

        {/* ComingSoonBanner avec z-index 20 pour être au-dessus de l'image */}
        <div className="relative z-20 w-full">
          <ComingSoonBanner />
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-[#7D8CA6] pb-8 flex justify-evenly gap-6">
          <Link href="#" className="hover:underline">Politique de confidentialité</Link>
          <span>© 2025 Tous droits réservés</span>
          <Link href="#" className="hover:underline">Conditions d&apos;utilisation</Link>
        </footer>
      </main>
    </div>
  );
}
