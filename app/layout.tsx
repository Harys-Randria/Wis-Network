import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'WIS NETWORKS - Infrastructure Réseau & Sécurité',
  description: 'Expert en déploiement infrastructure, sécurité réseau et infogérance 24/7 pour retail, industrie et logistique.',
  generator: 'v0.app',
  openGraph: {
    title: 'WIS NETWORKS - Infrastructure Réseau & Sécurité',
    description: 'Expert en déploiement infrastructure, sécurité réseau et infogérance 24/7',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
