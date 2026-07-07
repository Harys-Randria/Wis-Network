'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedBackground } from '@/components/animated-background';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Zap, 
  Headphones, 
  Network, 
  Cloud,
  ClipboardCheck,
  Users,
  Wrench,
  ShieldCheck,
  Monitor,
  BarChart3,
  Truck,
  FileText,
  Calendar,
  Target,
  Server,
  HardDrive,
  TrendingUp,
  ChevronDown,
  Sparkles,
  ArrowDown
} from 'lucide-react';

// ============================================================
// COMPOSANTS DE FOND ANIMÉ
// ============================================================

// ============================================================
// COMPOSANT : ACCORDÉON ANIMÉ
// ============================================================
const AccordionCard = ({ 
  id, 
  icon: Icon, 
  title, 
  items, 
  isExpanded, 
  onToggle,
  delay = 0
}: { 
  id: string; 
  icon: React.ElementType; 
  title: string; 
  items: string[]; 
  isExpanded: boolean; 
  onToggle: (id: string) => void;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-xl border transition-all duration-300 overflow-hidden ${
      isExpanded ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' : 'border-slate-700/50 hover:border-slate-600/50'
    }`}
  >
    <button
      onClick={() => onToggle(id)}
      className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-700/10 transition-colors text-left"
    >
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
          isExpanded ? 'bg-blue-600 shadow-lg shadow-blue-500/30' : 'bg-slate-800 border border-slate-700'
        }`}>
          <Icon className={`w-5 h-5 ${isExpanded ? 'text-white' : 'text-blue-400'}`} />
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <motion.div
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-slate-400"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </button>

    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 pt-2 border-t border-slate-700/50 bg-slate-900/30">
            <ul className="space-y-3">
              {items.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex gap-3 text-slate-300 group/item"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-blue-500/20 transition-colors">
                    <CheckCircle2 className="w-3 h-3 text-blue-400" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// ============================================================
// COMPOSANT : BLOC SERVICE AVEC ICÔNE
// ============================================================
const ServiceBlock = ({ icon: Icon, title, items, delay = 0 }: { icon: React.ElementType; title: string; items: string[]; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.4)' }}
    className="group bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-3 ml-16">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-slate-400 text-sm group/item">
            <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// ============================================================
// PAGE SERVICES
// ============================================================
export default function Services() {
  const [activeSection, setActiveSection] = useState('deploiement');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const sections = [
    { id: 'deploiement', label: 'Déploiement', icon: Network, gradient: 'from-blue-500 to-cyan-500' },
    { id: 'securite', label: 'Sécurité', icon: Shield, gradient: 'from-violet-500 to-purple-500' },
    { id: 'support', label: 'Support', icon: Headphones, gradient: 'from-emerald-500 to-teal-500' },
    { id: 'gestion-projet', label: 'Gestion Projet', icon: Target, gradient: 'from-amber-500 to-orange-500' },
    { id: 'cloud-systemes', label: 'Cloud & Systèmes', icon: Cloud, gradient: 'from-rose-500 to-pink-500' },
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Nos{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl mx-auto"
          >
            Expertise complète en infrastructure réseau, sécurité et infogérance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-block bg-gradient-to-r from-blue-600/10 to-slate-800/20 border border-blue-500/20 rounded-xl px-8 py-4 backdrop-blur-sm"
          >
            <p className="text-slate-300">
              Chaque prestation commence par un <strong className="text-white">audit gratuit</strong> pour dimensionner précisément vos besoins.
            </p>
          </motion.div>

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
      {/* NAVIGATION STICKY */}
      {/* ============================================================ */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="sticky top-0 z-40 bg-slate-950/90 border-b border-slate-800/50 backdrop-blur-xl shadow-lg shadow-black/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto md:justify-center gap-2 px-4 py-4 scrollbar-hide">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <motion.button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    const element = document.getElementById(section.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-4 py-2.5 font-medium text-sm whitespace-nowrap rounded-xl transition-all flex items-center gap-2 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className={`absolute inset-0 bg-gradient-to-r ${section.gradient} rounded-xl shadow-lg`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {section.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* ============================================================ */}
      {/* DÉPLOIEMENT */}
      {/* ============================================================ */}
      <section id="deploiement" className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Déploiement d'Infrastructure{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">de A à Z</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 mb-12 max-w-3xl"
          >
            Nous prenons en charge l'ouverture de vos magasins, entrepôts et usines de A à Z :{' '}
            <strong className="text-slate-200">étude, câblage, réseau, sécurité, WiFi, téléphonie, intégration et mise en production</strong>.
            Un seul interlocuteur, un site 100% opérationnel à l'ouverture.
          </motion.p>

          <div className="space-y-4 mb-10">
            {[
              { id: 'd1', icon: ClipboardCheck, title: 'Étude & Conception', items: [
                'Analyse des besoins (réseau, WiFi, sécurité, téléphonie, IoT)',
                'Étude de couverture WiFi (heatmap, site survey)',
                'Plan d\'adressage IP & segmentation (VLAN, IoT, invités, production)',
                'Architecture LAN/WAN (fibre, cuivre, redondance, interconnexion)',
                'Conception de la baie réseau et plan de câblage',
              ]},
              { id: 'd2', icon: Users, title: 'Coordination & Gestion de Projet', items: [
                'Gestion complète du projet (planning, fournisseurs, pilotage)',
                'Coordination des équipes travaux / électriciens / opérateurs télécom',
                'Suivi des livraisons matériel et supervision des intégrateurs',
                'Mise en place de procédures d\'ouverture (pré-check, validation)',
              ]},
              { id: 'd3', icon: Wrench, title: 'Installation & Intégration', items: [
                'Installation et configuration des switches, routeurs, firewalls',
                'Mise en place des liens opérateurs (fibre, 4G/5G backup)',
                'Déploiement WiFi (AP, contrôleur, portail captif)',
                'Segmentation réseau complète (VLAN, règles firewall, QoS)',
              ]},
              { id: 'd4', icon: ShieldCheck, title: 'Mise en Service & Validation', items: [
                'Tests réseau complets (débit, redondance, WiFi, VLAN)',
                'Validation des flux métiers (caisses, PDA, RFID, imprimantes)',
                'Recette avec l\'équipe du client',
                'Documentation complète du site',
              ]},
              { id: 'd5', icon: FileText, title: 'Garantie Opérationnelle', items: [
                'Site 100% opérationnel à l\'ouverture',
                'Validation complète avant mise en production',
                'Documentation remise au client',
                'Formation des équipes sur site',
              ]},
            ].map((card, idx) => (
              <AccordionCard
                key={card.id}
                id={card.id}
                icon={card.icon}
                title={card.title}
                items={card.items}
                isExpanded={expandedCards[card.id] || false}
                onToggle={toggleCard}
                delay={idx * 0.08}
              />
            ))}
          </div>

          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow cursor-pointer"
            >
              Discuter de mon projet
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SÉCURITÉ */}
      {/* ============================================================ */}
      <section id="securite" className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Sécurisation &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Optimisation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 mb-12 max-w-3xl"
          >
            Protégez vos données et optimisez les performances de votre réseau avec des solutions de sécurité avancées.
          </motion.p>

          <div className="space-y-6 mb-10">
            <ServiceBlock
              icon={Shield}
              title="Architectures de Sécurité Complètes"
              items={[
                'Déploiement de pare-feu nouvelle génération (NGFW)',
                'Politiques de protection avancées pour tous vos sites',
                'Segmentation réseau complète (VLAN, micro-segmentation)',
                'Protection DDoS et filtrage applicatif',
              ]}
              delay={0.1}
            />
            <ServiceBlock
              icon={Zap}
              title="Standardisation & Automatisation"
              items={[
                'Templates de configuration standardisés multi-sites',
                'Déploiement automatisé via scripts et outils d\'orchestration',
                'Réduction drastique des erreurs humaines',
                'Cohérence de sécurité sur l\'ensemble du parc',
              ]}
              delay={0.2}
            />
          </div>

          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow cursor-pointer"
            >
              Demander un Audit de Sécurité
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SUPPORT */}
      {/* ============================================================ */}
      <section id="support" className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Support Expert &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Infogérance 24/7</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 mb-12 max-w-3xl"
          >
            Supervision continue, maintenance préventive et support de niveau 3 pour garantir la continuité de vos opérations.
          </motion.p>

          <div className="space-y-6 mb-10">
            <ServiceBlock icon={Target} title="Support Niveau 3" items={[
              'Expertise technique avancée sur tous constructeurs',
              'Résolution d\'incidents complexes et critiques',
              'Intervention sur environnements IT/OT industriels',
              'Analyse post-incident et recommandations',
            ]} delay={0.1} />
            <ServiceBlock icon={Monitor} title="Infogérance Complète" items={[
              'Supervision 24/7 de votre infrastructure',
              'Monitoring proactif des équipements et services',
              'Alertes automatiques et intervention rapide',
              'Maintenance préventive planifiée',
            ]} delay={0.2} />
            <ServiceBlock icon={BarChart3} title="SLA Adaptés à Vos Besoins" items={[
              'SLA H+4 : Intervention sous 4 heures (sites critiques)',
              'SLA Jour+1 : Intervention le lendemain (sites standards)',
              'Reporting mensuel détaillé',
              'Garantie de disponibilité (jusqu\'à 99,9%)',
            ]} delay={0.3} />
            <ServiceBlock icon={Truck} title="Interventions sur Site" items={[
              'Techniciens certifiés et expérimentés',
              'Stock de pièces de rechange stratégiques',
              'Intervention rapide en cas de panne critique',
              'Astreinte technique 24/7 disponible',
            ]} delay={0.4} />
          </div>

          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow cursor-pointer"
            >
              Découvrir nos Formules
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* GESTION DE PROJET */}
      {/* ============================================================ */}
      <section id="gestion-projet" className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Gestion de Projet &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Coordination</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 mb-12 max-w-3xl"
          >
            Pilotage complet de vos projets d'infrastructure, de la conception à la mise en service.
          </motion.p>

          <div className="space-y-6 mb-10">
            <ServiceBlock icon={ClipboardCheck} title="Pilotage Complet" items={[
              'Chef de projet dédié, unique point de contact',
              'Planning détaillé avec jalons et livrables',
              'Suivi rigoureux de l\'avancement',
              'Gestion des risques et anticipation des blocages',
            ]} delay={0.1} />
            <ServiceBlock icon={Users} title="Coordination Multi-Partenaires" items={[
              'Opérateurs télécoms (fibre, liens opérateurs)',
              'Prestataires vidéosurveillance et alarme',
              'Électriciens et câbleurs réseau',
              'Constructeurs réseau (Cisco, Fortinet, etc.)',
            ]} delay={0.2} />
            <ServiceBlock icon={Target} title="Accompagnement Stratégique" items={[
              'Conseil sur choix technologiques',
              'Accompagnement sur appels d\'offres',
              'Veille technologique et recommandations',
              'Roadmap pluriannuelle',
            ]} delay={0.3} />
          </div>

          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow cursor-pointer"
            >
              Parlons de Votre Projet
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CLOUD & SYSTÈMES */}
      {/* ============================================================ */}
      <section id="cloud-systemes" className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Cloud & Architecture{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Systèmes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 mb-12 max-w-3xl"
          >
            Conception, migration et optimisation de vos infrastructures cloud et systèmes pour des solutions évolutives.
          </motion.p>

          <div className="space-y-6 mb-10">
            <ServiceBlock icon={Cloud} title="Architecture Cloud" items={[
              'Conception d\'architectures cloud (AWS, Azure, Google Cloud)',
              'Migration progressive ou complète vers le cloud',
              'Cloud hybride (on-premise + cloud public)',
              'Sécurisation des environnements cloud',
            ]} delay={0.1} />
            <ServiceBlock icon={Server} title="Infrastructure Système" items={[
              'Déploiement de serveurs physiques et virtuels',
              'Virtualisation (VMware, Hyper-V, Proxmox)',
              'Stockage SAN/NAS et solutions de sauvegarde',
              'Haute disponibilité et clustering',
            ]} delay={0.2} />
            <ServiceBlock icon={TrendingUp} title="Évolutivité & Performance" items={[
              'Infrastructure scalable selon votre croissance',
              'Dimensionnement adapté à vos besoins',
              'Flexibilité et agilité pour s\'adapter rapidement',
              'Monitoring des performances et optimisation continue',
            ]} delay={0.3} />
          </div>

          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow cursor-pointer"
            >
              Discuter de Mon Architecture
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA FINAL */}
      {/* ============================================================ */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
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
                Besoin d'un Accompagnement Personnalisé ?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-400 mb-10"
              >
                Demandez votre audit gratuit et recevez un devis sur-mesure adapté à vos besoins.
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
      </section>
    </main>
  );
}