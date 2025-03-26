import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const nonce = h.get("x-nonce") ?? undefined;

  return (
    <ClerkProvider nonce={nonce} dynamic>
      <html lang="fr">
        <body className={inter.className}>
            <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
