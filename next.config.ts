import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Utilisation de l'option standalone pour le déploiement
  output: 'standalone',

  // Configuration pour exclure les packages externes du serveur
  serverExternalPackages: [],

  // Paramètres pour ESLint
  eslint: {
    ignoreDuringBuilds: false, // Les erreurs ESLint doivent bloquer la build
  },

  // Paramètres pour TypeScript
  typescript: {
    ignoreBuildErrors: false, // Les erreurs TypeScript doivent bloquer la build
  },

  // Options expérimentales
  experimental: {
    staticGenerationRetryCount: 1, // Nombre de tentatives pour la génération statique
    staticGenerationMaxConcurrency: 8, // Concurrence maximale pour la génération statique
    staticGenerationMinPagesPerWorker: 25, // Pages minimales par worker
  },

  // Configuration des en-têtes HTTP pour améliorer la sécurité
  async headers() {
    return [
      {
        // En-têtes spécifiques pour le fichier Service Worker
        source: '/sw.js',
        headers: [
          { key: 'Content-Type', value: 'application/javascript; charset=utf-8' },
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
        ],
      },
      {
        // En-têtes de sécurité appliqués globalement
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' }, // Évite le MIME sniffing
          { key: 'X-Frame-Options', value: 'DENY' }, // Empêche l'intégration dans des iframes
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }, // Politique de référence stricte
          { key: 'Permissions-Policy', value: 'geolocation=(), camera=(), microphone=()' }, // Restreint les permissions
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' }, // Renforce HTTPS
        ],
      },
    ];
  },

  // Ajout de la configuration des images
  images: {
    domains: ['avatar.vercel.sh'],
  },
};

export default nextConfig;
