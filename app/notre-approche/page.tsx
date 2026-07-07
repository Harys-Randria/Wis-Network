'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/animated-background';
import { 
  ArrowRight, 
  CheckCircle2, 
  ClipboardCheck,
  PenTool,
  Calendar,
  Wrench,
  ShieldCheck,
  Headphones,
  Package,
  Shield,
  Cloud,
  FileText,
  Clock,
  Euro,
  Sliders,
  ArrowDown,
  Sparkles,
  Layers
} from 'lucide-react';

// ============================================================
// COMPOSANTS DE FOND ANIMÉ
// ============================================================

// ============================================================
// COMPOSANT RÉUTILISABLE : SECTION ANIMÉE
// ============================================================
const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.section
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
// BADGE ÉTAPE
// ============================================================
const StepBadge = ({ step, active = false }: { step: number; active?: boolean }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 200, delay: step * 0.1 }}
    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold shadow-lg ${
      active 
        ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/30 text-white' 
        : 'bg-slate-800 border border-slate-700 text-slate-400'
    }`}
  >
    {step}
  </motion.div>
);

// ============================================================
// PAGE NOTRE APPROCHE
// ============================================================
export default function NotreApproche() {
  const auditBenefits = [
    { icon: ClipboardCheck, text: 'Comprendre vos besoins métiers et contraintes techniques' },
    { icon: FileText, text: 'Évaluer l\'état actuel de votre infrastructure' },
    { icon: ShieldCheck, text: 'Identifier les points critiques et opportunités d\'amélioration' },
    { icon: Sliders, text: 'Dimensionner précisément les ressources nécessaires' },
    { icon: ArrowRight, text: 'Vous proposer un plan d\'action clair et chiffré' },
  ];

  const livrables = [
    'État des lieux complet',
    'Analyse des risques',
    'Recommandations priorisées',
    'Plan d\'action avec chiffrage transparent',
    'Roadmap de déploiement'
  ];

  const domains = [
    { icon: Package, title: 'Déploiement', desc: 'Magasins, entrepôts, usines : étude, câblage, réseau, sécurité, téléphonie, mise en service clé en main.', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Shield, title: 'Sécurité & Optimisation', desc: 'Sécurisation complète, pare-feu, segmentation, protection DDoS, conformité réglementaire.', gradient: 'from-violet-500 to-purple-500' },
    { icon: Headphones, title: 'Support & Infogérance', desc: 'Support 24/7 niveau 3, monitoring continu, maintenance préventive, SLA garantis.', gradient: 'from-emerald-500 to-teal-500' },
    { icon: Cloud, title: 'Cloud & Systèmes', desc: 'Architecture cloud, migrations, virtualisation, infrastructure scalable et résiliente.', gradient: 'from-amber-500 to-orange-500' },
  ];

  const steps = [
    { step: 1, icon: ClipboardCheck, title: 'Audit & Diagnostic', description: 'Compréhension complète de vos besoins et état actuel' },
    { step: 2, icon: PenTool, title: 'Conception', description: 'Proposition d\'une architecture adaptée et optimisée' },
    { step: 3, icon: Calendar, title: 'Planification', description: 'Plan projet détaillé avec jalons et responsabilités' },
    { step: 4, icon: Wrench, title: 'Déploiement', description: 'Mise en œuvre selon le plan, avec suivi rigoureux' },
    { step: 5, icon: ShieldCheck, title: 'Validation', description: 'Tests complets et recette fonctionnelle' },
    { step: 6, icon: Headphones, title: 'Support', description: 'Infogérance continue et optimisation permanente' },
  ];

  const pricingPoints = [
    { icon: FileText, title: 'Audit gratuit', desc: 'Découvrez vos besoins sans aucun engagement' },
    { icon: Layers, title: 'Devis détaillé', desc: 'Chiffrage transparent, ligne par ligne, sans frais cachés' },
    { icon: Euro, title: 'Tarifs compétitifs', desc: 'Meilleur rapport qualité-prix du marché' },
    { icon: Sliders, title: 'Flexibilité', desc: 'Solutions sur-mesure, pas de forfaits standards imposés' },
  ];

  const projects = [
    { title: 'Déploiement Multi-sites Retail', desc: '+50 magasins équipés en 18 mois avec 100% d\'opérationnalité', stat: '+50', label: 'magasins' },
    { title: 'Sécurisation Infrastructure Industrie', desc: 'Migration vers NGFW + micro-segmentation pour site critique IT/OT', stat: '0', label: 'incident' },
    { title: 'Migration Cloud Hybride', desc: 'Migration progressive de 30 serveurs physiques vers AWS avec zéro downtime', stat: '30', label: 'serveurs' },
    { title: 'Infogérance 24/7', desc: '99,8% de disponibilité maintenue sur 15 sites en logistique', stat: '99,8%', label: 'disponibilité' },
  ];

  return (
    <main className="relative bg-slate-950 min-h-screen overflow-x-hidden">
      {/* Fond animé global */}
      <AnimatedBackground fixed />

      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Méthodologie</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Notre{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Approche
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Du Diagnostic à la Réalisation — Chaque projet est unique. Nous adaptons notre intervention à vos besoins réels, après un audit gratuit et complet.
          </motion.p>

          {/* Flèche vers le bas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50"
            >
              <ArrowDown className="w-4 h-4 text-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ÉTAPE 1 : AUDIT GRATUIT */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            whileHover={{ y: -4 }}
            className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-blue-500/30 rounded-2xl p-10 md:p-14 backdrop-blur-sm overflow-hidden"
          >
            {/* Ligne lumineuse en haut */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            
            {/* Orbe décorative */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Audit Gratuit & Sans Engagement
                </h2>
              </div>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Avant toute intervention, nous réalisons un <strong className="text-white">audit gratuit et complet</strong> de votre infrastructure existante ou de votre projet de déploiement. Cet audit nous permet de :
              </p>

              {/* Bénéfices */}
              <div className="space-y-4 mb-10">
                {auditBenefits.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 items-start group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-blue-500/20 transition-colors">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-slate-300">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Livrables */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/80 rounded-xl p-8 mb-10 border border-slate-700/50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <h3 className="font-bold text-white">Durée de l'audit : 2 à 5 jours</h3>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <h3 className="font-bold text-white">Livrable : Rapport d'audit détaillé (20-50 pages)</h3>
                </div>

                <div className="space-y-2 pl-7">
                  {livrables.map((item, idx) => (
                    <div key={idx} className="flex gap-2 items-center text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/contact">
                  <motion.span
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow cursor-pointer"
                  >
                    Demander Mon Audit Gratuit
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
                <p className="text-sm text-slate-500">
                  Sans engagement • Réponse sous 24h • Rapport détaillé offert
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* DOMAINES D'INTERVENTION */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          >
            Ce Que Nous Prenons en{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Charge</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {domains.map((domain, idx) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -6, borderColor: 'rgba(59, 130, 246, 0.4)' }}
                  className="group bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{domain.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{domain.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* PROCESSUS EN 6 ÉTAPES */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          >
            Processus en{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">6 Étapes</span>
          </motion.h2>

          {/* Ligne de connexion desktop */}
          <div className="hidden lg:block absolute left-1/2 top-[58%] -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm"
                >
                  {/* Numéro d'étape */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-5 shadow-lg group-hover:shadow-blue-500/30 transition-all">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>

                  {/* Flèche entre les étapes (mobile : bas, desktop : droite) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-blue-500/30">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* MODÈLE TARIFAIRE */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          >
            Modèle Tarifaire{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Transparent</span>
          </motion.h2>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-10 md:p-14 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="space-y-6">
              {pricingPoints.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 group/price"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover/price:bg-blue-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{point.title}</h3>
                      <p className="text-slate-400">{point.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* PROJETS RÉUSSIS */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          >
            Projets{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Réussis</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6, borderColor: 'rgba(59, 130, 246, 0.4)' }}
                className="group bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-start gap-6">
                  {/* Statistique */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-500/10 border border-blue-500/20 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-blue-400">{project.stat}</span>
                    <span className="text-xs text-blue-400/60">{project.label}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* CTA FINAL */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative bg-gradient-to-br from-blue-600/10 via-slate-900/80 to-blue-600/5 border border-blue-500/20 rounded-3xl p-12 md:p-16 backdrop-blur-sm overflow-hidden text-center"
          >
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-4"
              >
                Prêt à Transformer Votre Infrastructure ?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-400 mb-10"
              >
                Commencez par votre audit gratuit — aucun engagement, aucun frais caché.
              </motion.p>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow cursor-pointer"
                >
                  Demander un Audit Gratuit
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-slate-500">
          <p>© 2025 WIS NETWORKS. Tous droits réservés. Approche transparente, résultats garantis.</p>
        </div>
      </footer>
    </main>
  );
}