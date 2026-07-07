'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/animated-background';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Users, 
  Lightbulb, 
  Zap,
  Rocket,
  Store,
  Factory,
  Shield,
  TrendingUp,
  Globe,
  Award,
  Clock,
  Server
} from 'lucide-react';

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
// PAGE À PROPOS
// ============================================================
export default function APropos() {
  const timelineItems = [
    { year: '2015', icon: Rocket, title: 'Création de WIS NETWORKS', desc: 'Une équipe d\'ingénieurs réseaux passionnés se rassemble autour d\'une vision commune.' },
    { year: '2017', icon: Store, title: 'Premiers déploiements multi-sites retail', desc: '+20 magasins pour nos clients pionniers, pose des fondations de notre méthodologie.' },
    { year: '2019', icon: Factory, title: 'Extension vers l\'industrie et la logistique', desc: 'Expertise IT/OT reconnue, déploiement d\'infrastructures critiques.' },
    { year: '2021', icon: Shield, title: 'Lancement de l\'offre infogérance 24/7', desc: 'Support niveau 3 sur environnements critiques, monitoring proactif.' },
    { year: '2023', icon: TrendingUp, title: '+100 sites déployés', desc: 'Expansion de l\'équipe et des compétences (cloud, IoT, automatisation).' },
    { year: '2025', icon: Globe, title: 'Expansion nationale', desc: 'Partenariats stratégiques avec les leaders du marché, couverture France entière.' },
  ];

  const values = [
    { icon: Target, title: 'Excellence Technique', desc: 'Expertise pointue sur les technologies réseau, sécurité et cloud. Veille technologique permanente. Certifications constructeurs (Cisco, Fortinet). Formation continue de nos équipes.', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Users, title: 'Engagement Client', desc: 'Votre réussite est notre priorité absolue. Un chef de projet dédié. Communication transparente. Respect des délais et du budget. Garantie de résultat : sites opérationnels à 100%.', gradient: 'from-violet-500 to-purple-500' },
    { icon: Lightbulb, title: 'Transparence', desc: 'Communication claire et honnête à chaque étape. Devis détaillés ligne par ligne. Pas de frais cachés. Reporting régulier. Accès à notre portail client pour suivre vos tickets.', gradient: 'from-amber-500 to-orange-500' },
    { icon: Zap, title: 'Innovation', desc: 'Adoption des meilleures technologies du marché. Standardisation et automatisation pour réduire les coûts. Approche DevOps et Infrastructure as Code. R&D sur les nouvelles solutions.', gradient: 'from-emerald-500 to-teal-500' },
  ];

  const expertiseStats = [
    { value: '+10', label: 'Ans d\'expérience', sublabel: 'En infrastructure réseau et sécurité', icon: Clock },
    { value: '+100', label: 'Sites déployés', sublabel: 'Retail, industrie, logistique', icon: Server },
    { value: '99,9%', label: 'Disponibilité', sublabel: 'Sur nos sites infogérés', icon: Shield },
    { value: '24/7', label: 'Support NOC', sublabel: 'Sur environnements critiques', icon: Users },
  ];

  const reasons = [
    'Expertise reconnue avec 1000+ sites déployés',
    'Garantie 100% opérationnel à la mise en production',
    'Support 24/7 et SLA adaptés à votre criticité',
    'Audit gratuit sans engagement',
    'Solutions sur-mesure, pas de forfait standard',
    'Devis transparent, aucun frais caché'
  ];

  return (
    <main className="relative bg-slate-950 min-h-screen overflow-x-hidden">
      {/* Fond animé global */}
      <AnimatedBackground fixed />

      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 border border-slate-700/50 rounded-full backdrop-blur-sm mb-8"
          >
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300">Depuis 2015</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            À Propos de{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              WIS NETWORKS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-4"
          >
            Votre partenaire infrastructure réseau et sécurité
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-slate-400"
          >
            Expertise technique <span className="text-slate-600 mx-2">•</span> 
            Accompagnement humain <span className="text-slate-600 mx-2">•</span> 
            Engagement résultats
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MISSION */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          >
            Notre <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mission</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.5)' }}
            className="space-y-6 text-lg text-slate-300 leading-relaxed bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-10 md:p-14 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            
            <p>
              <strong className="text-white">WIS NETWORKS</strong> a pour mission d'accompagner les entreprises dans la transformation et la sécurisation de leurs infrastructures réseau. Nous croyons qu'une infrastructure réseau performante, sécurisée et évolutive est un atout stratégique majeur pour toute entreprise moderne.
            </p>
            <p>
              Notre approche repose sur trois piliers fondamentaux : <strong className="text-white">l'excellence technique</strong> de nos ingénieurs, <strong className="text-white">l'accompagnement humain personnalisé</strong> de nos clients, et <strong className="text-white">l'engagement ferme sur les résultats</strong> avec une garantie de sites 100% opérationnels.
            </p>
            <p>
              Nous ne vendons pas de produits ou de forfaits standards. Nous créons des <strong className="text-white">solutions sur-mesure après un audit gratuit</strong> de vos besoins réels. Cette approche nous permet de dimensionner précisément votre infrastructure et de vous proposer le meilleur rapport qualité-prix du marché.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* TIMELINE */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          >
            Notre <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Histoire</span>
          </motion.h2>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-slate-700/50 to-transparent hidden md:block" />

            <div className="space-y-6">
              {timelineItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    {/* Icône année */}
                    <div className="relative flex-shrink-0 z-10">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-slate-800 border border-slate-700/50 flex items-center justify-center backdrop-blur-sm">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
                      </div>
                    </div>

                    {/* Contenu */}
                    <motion.div
                      whileHover={{ scale: 1.01, borderColor: 'rgba(59, 130, 246, 0.4)' }}
                      className="flex-grow bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-xl p-5 md:p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-sm font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                          {item.year}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-slate-400 text-sm md:text-base">
                        {item.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* VALEURS */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          >
            Nos <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Valeurs</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
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
                  {/* Lueur au hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* EXPERTISE EN CHIFFRES */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          >
            Expertise en{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Chiffres</span>
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {expertiseStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <Icon className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-slate-300 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-500">
                      {stat.sublabel}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* CERTIFICATIONS */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          >
            Certifications &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Partenaires</span>
          </motion.h2>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-10 md:p-14 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="space-y-8">
              {[
                { label: 'Partenaires Officiels', content: 'Cisco, Fortinet, VMware, AWS, Microsoft Azure' },
                { label: 'Certifications Équipes', content: 'CCNA, CCNP, Fortinet NSE, AWS Solutions Architect, CompTIA Security+' },
                { label: 'Conformité', content: 'ISO 27001, RGPD, NF EN 27001, certifications de sécurité' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
                    <p className="text-slate-400">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* ÉQUIPE */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          >
            Notre <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Équipe</span>
          </motion.h2>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-10 md:p-14 backdrop-blur-sm text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Nos équipes sont composées d'ingénieurs réseaux et sécurité hautement qualifiés avec plus de 10 ans d'expérience collective. Nous combinons l'excellence technique avec une approche client centrée sur vos objectifs métiers.
            </p>

            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              {[
                { count: '10', label: 'Experts' },
                { count: '15+', label: 'Ans d\'exp. moyenne' },
                { count: '100%', label: 'Certifiés' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.count}
                  </div>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/* POURQUOI NOUS CHOISIR */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          >
            Pourquoi Choisir{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">WIS NETWORKS</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ x: 4, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                className="flex items-center gap-4 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-slate-300 text-sm md:text-base">{reason}</span>
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
                Prêt à Nous Rencontrer ?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-400 mb-10"
              >
                Contactez-nous pour discuter de votre projet ou demander votre audit gratuit.
              </motion.p>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow cursor-pointer"
                >
                  Nous Contacter
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
          <p>© 2025 WIS NETWORKS. Tous droits réservés. Infrastructure sécurisée par des experts certifiés.</p>
        </div>
      </footer>
    </main>
  );
}