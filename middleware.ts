import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

interface SessionClaims {
  metadata?: {
    permission?: string[];
    roles?: string[];
  };
}

// Définition des routes publiques et protégées
// const isProtectedRoute = createRouteMatcher(['/api(.*)', '/trpc(.*)', '/', '/components(.*)']);
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/403(.*)', '/', '/api(.*)', '/trpc(.*)', '/components(.*)']);

export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims, userId, redirectToSignIn } = await auth();

  // Vérifier si la route est publique
  if (isPublicRoute(req)) {
    return applyCsp(req);
  }

  // Rediriger les utilisateurs non connectés vers /sign-in
  if (!userId) {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  // Vérifier les rôles et permissions
  const claims = sessionClaims as SessionClaims;
  const permissions = Array.isArray(claims.metadata?.permission) ? claims.metadata.permission : [];
  const roles = Array.isArray(claims.metadata?.roles) ? claims.metadata.roles : [];
  const isAdmin = roles.includes('admin');
  const hasPermission =
    permissions.includes('org:sys_memberships:manage') ||
    permissions.includes('org:sys_domains_manage');

  // Si la route est protégée et que l'utilisateur n'a pas les droits nécessaires
  // if (isProtectedRoute(req) && !isAdmin && !hasPermission) {
  //   const response = NextResponse.redirect(new URL('/403', req.url));
  //   return applyCsp(req, response);
  // }

  // Si tout va bien, appliquer CSP et continuer
  return applyCsp(req);
});

// Configuration des routes gérées par le middleware
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};

// Application des headers CSP
function applyCsp(request: Request, response?: NextResponse) {
  const nonce = generateNonce();

  const cspHeader = ` 
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https: http: 'unsafe-eval';
    connect-src 'self' https://*.clerk.accounts.dev wss://ws-us3.pusher.com https://clerk.apeazy.fr;
    img-src 'self' https://img.clerk.com https://accounts.apeazy.fr https://avatar.vercel.sh data: blob:;
    worker-src 'self' blob:;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    frame-src 'self' https://challenges.cloudflare.com;
    form-action 'self';
  `;

  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const res = response ?? NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  res.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);
  return res;
}

// Génération d'un nonce compatible
function generateNonce() {
  return [...Array(16)]
    .map(() => Math.random().toString(36)[2])
    .join('');
}