import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function ForbiddenPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#001B3A]">403 - Page non trouvée</h1>
        <p className="mt-4 text-lg text-gray-700">
          La page que vous cherchez n&apos;existe pas.
        </p>
        <Button variant="default" asChild className="mt-6 bg-[#001B3A] hover:bg-slate-800 transition-all duration-300">
          <Link href="/" prefetch={false} scroll={false}>
            Retour à l&apos;accueil
          </Link>
        </Button>
      </div>
    </div>
  );
}
