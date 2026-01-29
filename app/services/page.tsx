'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, Zap, Headphones, Network, Cloud } from 'lucide-react';

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
    { id: 'deploiement', label: 'Déploiement', icon: Network },
    { id: 'securite', label: 'Sécurité', icon: Shield },
    { id: 'support', label: 'Support', icon: Headphones },
    { id: 'gestion-projet', label: 'Gestion Projet', icon: Zap },
    { id: 'cloud-systemes', label: 'Cloud & Systèmes', icon: Cloud },
  ];

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Expertise complète en infrastructure réseau, sécurité et infogérance
          </p>
          <div className="inline-block bg-gradient-to-r from-blue-600/20 to-slate-800/20 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-lg text-slate-200">
              Chaque prestation commence par un audit gratuit pour dimensionner précisément vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <section className="sticky top-16 bg-slate-950/80 border-b border-slate-700 shadow-lg z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto md:justify-center gap-2 md:gap-4 px-4 md:px-8 py-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    const element = document.getElementById(section.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 font-medium text-sm whitespace-nowrap rounded-lg transition-all flex items-center gap-2 ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                      : 'text-slate-300 hover:bg-slate-800 border border-slate-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Déploiement Section */}
      <section id="deploiement" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Déploiement d'Infrastructure de A à Z
          </h2>
          <p className="text-lg text-slate-300 mb-12">
            Nous prenons en charge l'ouverture de vos magasins, entrepôts et usines de A à Z : <strong>étude, câblage, réseau, sécurité, WiFi, téléphonie, intégration et mise en production</strong>. Un seul interlocuteur, un site 100% opérationnel à l'ouverture.
          </p>

          <div className="space-y-4 mb-12">
            {[
              {
                id: 'd1',
                icon: '📋',
                title: 'Étude & Conception',
                items: [
                  'Analyse des besoins (réseau, WiFi, sécurité, téléphonie, IoT)',
                  'Étude de couverture WiFi (heatmap, site survey)',
                  'Plan d\'adressage IP & segmentation (VLAN, IoT, invités, production)',
                  'Architecture LAN/WAN (fibre, cuivre, redondance, interconnexion)',
                  'Conception de la baie réseau et plan de câblage',
                ]
              },
              {
                id: 'd2',
                icon: '🤝',
                title: 'Coordination & Gestion de Projet',
                items: [
                  'Gestion complète du projet (planning, fournisseurs, pilotage)',
                  'Coordination des équipes travaux / électriciens / opérateurs télécom',
                  'Suivi des livraisons matériel et supervision des intégrateurs',
                  'Mise en place de procédures d\'ouverture (pré-check, validation)',
                ]
              },
              {
                id: 'd3',
                icon: '🔧',
                title: 'Installation & Intégration',
                items: [
                  'Installation et configuration des switches, routeurs, firewalls',
                  'Mise en place des liens opérateurs (fibre, 4G/5G backup)',
                  'Déploiement WiFi (AP, contrôleur, portail captif)',
                  'Segmentation réseau complète (VLAN, règles firewall, QoS)',
                ]
              },
              {
                id: 'd4',
                icon: '✅',
                title: 'Mise en Service & Validation',
                items: [
                  'Tests réseau complets (débit, redondance, WiFi, VLAN)',
                  'Validation des flux métiers (caisses, PDA, RFID, imprimantes)',
                  'Recette avec l\'équipe du client',
                  'Documentation complète du site',
                ]
              },
              {
                id: 'd5',
                icon: '🛡️',
                title: 'Garantie Opérationnelle',
                items: [
                  'Site 100% opérationnel à l\'ouverture',
                  'Validation complète avant mise en production',
                  'Documentation remise au client',
                  'Formation des équipes sur site',
                ]
              }
            ].map((card) => (
              <div key={card.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all">
                <button
                  onClick={() => toggleCard(card.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/20 transition-colors text-left"
                >
                  <h3 className="text-lg font-bold text-white flex items-center gap-3">
                    <span className="text-2xl">{card.icon}</span>
                    {card.title}
                  </h3>
                  <span className={`text-slate-400 transition-transform ${expandedCards[card.id] ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedCards[card.id] && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-700/50 bg-slate-900/30">
                    <ul className="space-y-3">
                      {card.items.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all group"
          >
            Discuter de mon projet
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Sécurité Section */}
      <section id="securite" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sécurisation & Optimisation d'Infrastructure
          </h2>
          <p className="text-lg text-slate-300 mb-12">
            Protégez vos données et optimisez les performances de votre réseau avec des solutions de sécurité avancées.
          </p>

          <div className="space-y-8 mb-12">
            {[
              {
                title: 'Architectures de Sécurité Complètes',
                icon: Shield,
                items: [
                  'Déploiement de pare-feu nouvelle génération (NGFW)',
                  'Politiques de protection avancées pour tous vos sites',
                  'Segmentation réseau complète (VLAN, micro-segmentation)',
                  'Protection DDoS et filtrage applicatif',
                ]
              },
              {
                title: 'Standardisation & Automatisation',
                icon: Zap,
                items: [
                  'Templates de configuration standardisés multi-sites',
                  'Déploiement automatisé via scripts et outils d\'orchestration',
                  'Réduction drastique des erreurs humaines',
                  'Cohérence de sécurité sur l\'ensemble du parc',
                ]
              }
            ].map((block, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <block.icon className="w-6 h-6 text-white" />
                  </div>
                  {block.title}
                </h3>
                <ul className="space-y-3 ml-12">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all group"
          >
            Demander un Audit de Sécurité
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Support Expert & Infogérance 24/7
          </h2>
          <p className="text-lg text-slate-300 mb-12">
            Supervision continue, maintenance préventive et support de niveau 3 pour garantir la continuité de vos opérations.
          </p>

          <div className="space-y-8 mb-12">
            {[
              {
                icon: '🎯',
                title: 'Support Niveau 3',
                items: [
                  'Expertise technique avancée sur tous constructeurs',
                  'Résolution d\'incidents complexes et critiques',
                  'Intervention sur environnements IT/OT industriels',
                  'Analyse post-incident et recommandations',
                ]
              },
              {
                icon: '🖥️',
                title: 'Infogérance Complète',
                items: [
                  'Supervision 24/7 de votre infrastructure',
                  'Monitoring proactif des équipements et services',
                  'Alertes automatiques et intervention rapide',
                  'Maintenance préventive planifiée',
                ]
              },
              {
                icon: '📊',
                title: 'SLA Adaptés à Vos Besoins',
                items: [
                  'SLA H+4 : Intervention sous 4 heures (sites critiques)',
                  'SLA Jour+1 : Intervention le lendemain (sites standards)',
                  'Reporting mensuel détaillé',
                  'Garantie de disponibilité (jusqu\'à 99,9%)',
                ]
              },
              {
                icon: '🚗',
                title: 'Interventions sur Site',
                items: [
                  'Techniciens certifiés et expérimentés',
                  'Stock de pièces de rechange stratégiques',
                  'Intervention rapide en cas de panne critique',
                  'Astreinte technique 24/7 disponible',
                ]
              }
            ].map((block, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-3xl">{block.icon}</span>
                  {block.title}
                </h3>
                <ul className="space-y-3 ml-11">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all group"
          >
            Découvrir nos Formules
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Gestion Projet Section */}
      <section id="gestion-projet" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Gestion de Projet & Coordination
          </h2>
          <p className="text-lg text-slate-300 mb-12">
            Pilotage complet de vos projets d'infrastructure, de la conception à la mise en service.
          </p>

          <div className="space-y-8 mb-12">
            {[
              {
                icon: '📋',
                title: 'Pilotage Complet',
                items: [
                  'Chef de projet dédié, unique point de contact',
                  'Planning détaillé avec jalons et livrables',
                  'Suivi rigoureux de l\'avancement',
                  'Gestion des risques et anticipation des blocages',
                ]
              },
              {
                icon: '🤝',
                title: 'Coordination Multi-Partenaires',
                items: [
                  'Opérateurs télécoms (fibre, liens opérateurs)',
                  'Prestataires vidéosurveillance et alarme',
                  'Électriciens et câbleurs réseau',
                  'Constructeurs réseau (Cisco, Fortinet, etc.)',
                ]
              },
              {
                icon: '🎯',
                title: 'Accompagnement Stratégique',
                items: [
                  'Conseil sur choix technologiques',
                  'Accompagnement sur appels d\'offres',
                  'Veille technologique et recommandations',
                  'Roadmap pluriannuelle',
                ]
              }
            ].map((block, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-3xl">{block.icon}</span>
                  {block.title}
                </h3>
                <ul className="space-y-3 ml-11">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all group"
          >
            Parlons de Votre Projet
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Cloud & Systèmes Section */}
      <section id="cloud-systemes" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Cloud & Architecture Systèmes
          </h2>
          <p className="text-lg text-slate-300 mb-12">
            Conception, migration et optimisation de vos infrastructures cloud et systèmes pour des solutions évolutives.
          </p>

          <div className="space-y-8 mb-12">
            {[
              {
                icon: '☁️',
                title: 'Architecture Cloud',
                items: [
                  'Conception d\'architectures cloud (AWS, Azure, Google Cloud)',
                  'Migration progressive ou complète vers le cloud',
                  'Cloud hybride (on-premise + cloud public)',
                  'Sécurisation des environnements cloud',
                ]
              },
              {
                icon: '🖥️',
                title: 'Infrastructure Système',
                items: [
                  'Déploiement de serveurs physiques et virtuels',
                  'Virtualisation (VMware, Hyper-V, Proxmox)',
                  'Stockage SAN/NAS et solutions de sauvegarde',
                  'Haute disponibilité et clustering',
                ]
              },
              {
                icon: '📈',
                title: 'Évolutivité & Performance',
                items: [
                  'Infrastructure scalable selon votre croissance',
                  'Dimensionnement adapté à vos besoins',
                  'Flexibilité et agilité pour s\'adapter rapidement',
                  'Monitoring des performances et optimisation continue',
                ]
              }
            ].map((block, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-3xl">{block.icon}</span>
                  {block.title}
                </h3>
                <ul className="space-y-3 ml-11">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all group"
          >
            Discuter de Mon Architecture
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-slate-800/20 border-y border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Besoin d'un Accompagnement Personnalisé ?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Demandez votre audit gratuit et recevez un devis sur-mesure adapté à vos besoins.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all group"
          >
            Demander un Audit Gratuit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
