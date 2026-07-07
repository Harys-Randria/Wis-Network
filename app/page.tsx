'use client';

import React, { useState } from "react";
import Link from 'next/link';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { AnimatedBackground } from '@/components/animated-background';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Network, 
  CheckCircle2, 
  Lock, 
  TrendingUp, 
  Users,
  Globe,
  Server,
  Cloud,
  ChevronRight,
  Star,
  Activity,
  Cpu,
  Wifi,
  Router,
  ClipboardCheck,
  PenTool,
  Wrench,
  Headphones,
  ChevronDown,
  Quote,
  Building2,
  Sparkles,
  ArrowDown
} from 'lucide-react';

// ============================================================
// SECTION ANIMÉE
// ============================================================
const AnimatedSection = ({ children, className = "", delay = 0, id }: { children: React.ReactNode; className?: string; delay?: number; id?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.section>
);

// ============================================================
// DONNÉES
// ============================================================

const services = [
  {
    icon: Shield,
    title: 'Sécuriser',
    description: 'Protégez vos infrastructures critiques avec nos solutions de sécurité réseau de pointe et notre SOC 24/7.',
    features: ['Pare-feu nouvelle génération', 'Détection d\'intrusion', 'VPN site-à-site'],
    gradient: 'from-blue-500 to-cyan-500',
    iconGradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Zap,
    title: 'Optimiser',
    description: 'Augmentez la performance et l\'efficacité de vos réseaux existants grâce à notre expertise.',
    features: ['Audit de performance', 'SD-WAN', 'Load balancing'],
    gradient: 'from-violet-500 to-purple-500',
    iconGradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    icon: Network,
    title: 'Connecter',
    description: 'Déployez des infrastructures fiables, scalables et modernes pour accompagner votre croissance.',
    features: ['Wi-Fi 6/6E', 'Switching cœur de réseau', 'Câblage structuré'],
    gradient: 'from-emerald-500 to-teal-500',
    iconGradient: 'from-emerald-500/20 to-teal-500/20',
  }
];

const stats = [
  { label: '+1000', value: 'Sites déployés', icon: TrendingUp, color: 'text-blue-400' },
  { label: '24/7', value: 'Support NOC', icon: Activity, color: 'text-emerald-400' },
  { label: '99,9%', value: 'Disponibilité', icon: Lock, color: 'text-violet-400' },
  { label: '10', value: 'Experts certifiés', icon: Users, color: 'text-amber-400' }
];

const processSteps = [
  {
    step: 1,
    icon: ClipboardCheck,
    title: 'Audit gratuit',
    description: 'On analyse votre infrastructure existante et vos besoins réels. Rapport détaillé offert sous 5 jours.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    step: 2,
    icon: PenTool,
    title: 'Proposition',
    description: 'Vous recevez un plan d\'action chiffré, avec architecture détaillée et planning de déploiement.',
    color: 'from-violet-500 to-purple-500'
  },
  {
    step: 3,
    icon: Wrench,
    title: 'Déploiement',
    description: 'Nos ingénieurs installent, configurent et testent. Un chef de projet dédié vous accompagne.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    step: 4,
    icon: Headphones,
    title: 'Support 24/7',
    description: 'Supervision continue, maintenance préventive et astreinte niveau 3 pour votre tranquillité.',
    color: 'from-amber-500 to-orange-500'
  }
];

const testimonials = [
  {
    quote: "WIS NETWORKS a déployé notre infrastructure sur 50 magasins en 18 mois. Zéro incident à l'ouverture, un vrai partenaire.",
    author: "Directeur IT",
    company: "Groupe Retail Européen",
    rating: 5
  },
  {
    quote: "Leur expertise en sécurité industrielle nous a permis de segmenter notre réseau IT/OT sans interruption de production.",
    author: "Responsable Infrastructure",
    company: "Industrie Aéronautique",
    rating: 5
  },
  {
    quote: "Support réactif et compétent. Quand on a un problème à 2h du matin, on sait qu'on peut compter sur eux.",
    author: "DSI",
    company: "Logistique & Transport",
    rating: 5
  }
];

const faqItems = [
  {
    question: "Comment se déroule l'audit gratuit ?",
    answer: "Un ingénieur se déplace sur site (ou en visio) pour analyser votre infrastructure existante. L'audit dure 2 à 5 jours selon la complexité. Vous recevez un rapport détaillé avec nos recommandations et un chiffrage transparent, le tout sans engagement."
  },
  {
    question: "Quels types d'entreprises accompagnez-vous ?",
    answer: "Nous intervenons principalement dans le retail, l'industrie et la logistique. Nos clients vont de la PME avec 2-3 sites jusqu'aux grands groupes avec des centaines de points de vente ou d'entrepôts."
  },
  {
    question: "Proposez-vous des contrats de maintenance ?",
    answer: "Oui, nous proposons plusieurs niveaux de SLA : H+4 pour les sites critiques, J+1 pour les sites standards. Tous nos contrats incluent la supervision 24/7, le monitoring proactif et un reporting mensuel."
  },
  {
    question: "Quels équipements utilisez-vous ?",
    answer: "Nous sommes partenaires certifiés Cisco, Fortinet, VMware, AWS et Microsoft Azure. Nous préconisons le meilleur équipement selon votre besoin, sans favoritisme constructeur."
  },
  {
    question: "Intervenez-vous sur toute la France ?",
    answer: "Oui, nous intervenons sur l'ensemble du territoire français, y compris les DOM-TOM. Nous avons des stocks de pièces de rechange stratégiques pour garantir des interventions rapides partout."
  },
  {
    question: "Quel est le délai typique pour un déploiement ?",
    answer: "Tout dépend de la complexité. Un site standard (magasin, entrepôt) peut être opérationnel en 2 à 4 semaines après validation du devis. Pour les projets plus complexes (usines, multi-sites), nous établissons un planning sur-mesure."
  }
];

// ============================================================
// COMPOSANT FAQ
// ============================================================
const FAQItem = ({ question, answer, isOpen, onToggle, delay = 0 }: { question: string; answer: string; isOpen: boolean; onToggle: () => void; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className={`bg-gradient-to-br from-slate-900/50 to-slate-800/50 border rounded-xl overflow-hidden transition-all duration-300 ${
      isOpen ? 'border-blue-500/30 shadow-lg shadow-blue-500/5' : 'border-slate-700/50 hover:border-slate-600/50'
    }`}
  >
    <button
      onClick={onToggle}
      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-700/10 transition-colors"
    >
      <span className="text-white font-medium pr-4">{question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0"
      >
        <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-blue-400' : 'text-slate-500'}`} />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-5 pt-0 border-t border-slate-700/30">
            <p className="text-slate-400 leading-relaxed">{answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// ============================================================
// PAGE D'ACCUEIL
// ============================================================
export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main className="relative bg-slate-950 min-h-screen overflow-x-hidden">
      {/* Fond animé global */}
      <AnimatedBackground fixed />

      {/* Barre de progression du scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Contenu gauche */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-6"
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-400"
                />
                <span className="text-sm text-blue-300">Infrastructures sécurisées 24/7</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Infrastructure
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Réseaux & Sécurité
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl lg:max-w-2xl"
              >
                Expertise complète en déploiement infrastructure, sécurité réseau et infogérance 24/7 pour{' '}
                <span className="text-slate-300 font-medium">retail</span>,{' '}
                <span className="text-slate-300 font-medium">industrie</span> et{' '}
                <span className="text-slate-300 font-medium">logistique</span>.
              </motion.p>

              {/* Preuves sociales rapides */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap items-center gap-6 mb-8 justify-center lg:justify-start text-sm text-slate-500"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Audit gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Réponse sous 24h</span>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/contact">
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow cursor-pointer text-lg"
                  >
                    Demander un audit gratuit
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
                <Link href="/services">
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white rounded-xl font-semibold transition-all cursor-pointer backdrop-blur-sm"
                  >
                    <Server className="w-5 h-5" />
                    Nos services
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            {/* Visuel droit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative flex-shrink-0 hidden lg:block"
            >
              {/* Anneaux */}
              <motion.div
                className="absolute inset-0 w-72 h-72 rounded-full"
                style={{ border: '1px solid rgba(59, 130, 246, 0.15)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-6 w-60 h-60 rounded-full"
                style={{ border: '1px solid rgba(59, 130, 246, 0.1)' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Dashboard mockup */}
              <div className="relative w-72 h-72 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-4 backdrop-blur-sm shadow-2xl">
                {/* Barre de navigation mockup */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/50" />
                </div>
                {/* Graphiques mockup */}
                <div className="space-y-3">
                  <div className="h-2 bg-slate-700 rounded-full w-3/4" />
                  <div className="flex gap-2">
                    <div className="flex-1 h-16 bg-gradient-to-b from-blue-500/20 to-blue-500/5 rounded-lg" />
                    <div className="flex-1 h-16 bg-gradient-to-b from-cyan-500/20 to-cyan-500/5 rounded-lg" />
                    <div className="flex-1 h-16 bg-gradient-to-b from-violet-500/20 to-violet-500/5 rounded-lg" />
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full w-1/2" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 bg-slate-800 rounded-lg border border-slate-700/50" />
                    <div className="h-10 bg-slate-800 rounded-lg border border-slate-700/50" />
                  </div>
                </div>
                {/* Badge de statut */}
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-4 right-4 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400"
                >
                  ● Online
                </motion.div>
              </div>

              {/* Icônes flottantes */}
              {[
                { icon: Shield, position: '-top-4 -right-4', delay: 0 },
                { icon: Wifi, position: '-bottom-4 -left-4', delay: 0.3 },
                { icon: Cpu, position: 'top-1/2 -left-8', delay: 0.6 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${item.position} w-10 h-10 bg-slate-800/90 border border-slate-700/50 rounded-lg flex items-center justify-center backdrop-blur-sm`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + item.delay, duration: 0.3 }}
                >
                  <item.icon className="w-5 h-5 text-blue-400" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Indicateur de scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-500">Découvrir</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ChevronRight className="w-4 h-4 text-slate-500 rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICES 3 PILIERS */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6"
            >
              <Star className="w-4 h-4" />
              Notre méthodologie
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Approche <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Trois Piliers</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Nous transformons vos défis infrastructures en avantages compétitifs durables
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -8 }}
                  className={`group relative bg-gradient-to-br ${service.iconGradient} border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm overflow-hidden`}
                >
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/services">
                      <span className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer group/link">
                        En savoir plus
                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* STATS */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-slate-500">{stat.value}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* COMMENT ÇA MARCHE */}
      {/* ============================================================ */}
      <AnimatedSection id="process" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Processus
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comment ça <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">marche</span> ?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Quatre étapes simples pour transformer votre infrastructure
            </p>
          </div>

          <div className="relative">
            {/* Ligne de connexion */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    whileHover={{ y: -8 }}
                    className="relative group"
                  >
                    <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center backdrop-blur-sm h-full">
                      {/* Numéro */}
                      <div className="relative mx-auto mb-5 w-16 h-16">
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 blur-lg group-hover:opacity-30 transition-opacity`} />
                        <div className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <span className="text-2xl font-bold text-white">{step.step}</span>
                        </div>
                      </div>

                      <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>

                    {/* Flèche entre les étapes */}
                    {idx < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-blue-500/50">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/notre-approche">
              <motion.span
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
              >
                En savoir plus sur notre approche
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* TÉMOIGNAGES */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6"
            >
              <Quote className="w-4 h-4" />
              Témoignages
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ce que nos clients <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">disent</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm relative"
              >
                {/* Guillemets décoratifs */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-500/10" />
                
                {/* Étoiles */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <blockquote className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-700/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">{testimonial.author}</div>
                    <div className="text-slate-500 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* FAQ */}
      {/* ============================================================ */}
      <AnimatedSection id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6"
            >
              <span>💬</span>
              FAQ
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Questions <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">fréquentes</span>
            </h2>
            <p className="text-lg text-slate-400">
              Tout ce que vous devez savoir avant de démarrer
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <FAQItem
                key={idx}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === idx}
                onToggle={() => toggleFAQ(idx)}
                delay={idx * 0.05}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-slate-500 text-sm mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
              >
                Contactez-nous
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* CTA FINAL */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative bg-gradient-to-br from-blue-600/10 via-slate-900/80 to-blue-600/5 border border-blue-500/20 rounded-3xl p-12 md:p-16 backdrop-blur-sm overflow-hidden text-center"
          >
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Globe className="w-16 h-16 text-blue-400 mx-auto" />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Prêt à transformer<br />votre infrastructure ?
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                Commencez par un audit gratuit pour découvrir comment nous pouvons optimiser vos réseaux et renforcer votre sécurité.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow cursor-pointer"
                  >
                    Demander un audit gratuit
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
                <Link href="/contact">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-10 py-5 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white rounded-xl font-semibold transition-all cursor-pointer"
                  >
                    <Cloud className="w-5 h-5" />
                    Nous contacter
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
}