'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Calendar, Briefcase, Lock, Users } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Notre Approche', href: '/notre-approche' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { label: 'Conditions d\'utilisation', href: '/conditions-utilisation' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/walid-benbella/', label: 'LinkedIn' },
    { icon: Calendar, href: 'https://calendly.com/pro-walid-benbella/30min', label: 'Calendly' },
    { icon: Briefcase, href: 'https://www.malt.fr/profile/walidbenbella', label: 'Malt' },
    { icon: Users, href: 'https://collective.work/votre-profil', label: 'Collective' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.svg"
                alt="Logo WIS Networks"
                width={200}
                height={100}
                className="rounded-lg"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Expert en déploiement infrastructure, sécurité réseau et infogérance 24/7 pour retail, industrie et logistique.
            </p>
            <div className="space-y-2 mt-6">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:julia@wis-networks-pro.com" className="hover:text-blue-400 transition-colors">
                  julia@wis-networks-pro.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+33123456789" className="hover:text-blue-400 transition-colors">
                  +33 (0)1 23 45 67 89
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  123 Avenue des Champs<br/>
                  75000 Paris, France
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#deploiement" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Déploiement Infrastructure</Link></li>
              <li><Link href="/services#securite" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Sécurité & Optimisation</Link></li>
              <li><Link href="/services#support" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Support & Infogérance</Link></li>
              <li><Link href="/services#gestion-projet" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Gestion de Projet</Link></li>
              <li><Link href="/services#cloud-systemes" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Cloud & Systèmes</Link></li>
            </ul>
          </div>

          {/* Social & Professional Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Connectez-vous</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors text-sm group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} WIS NETWORKS. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-500 hover:text-slate-400 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}