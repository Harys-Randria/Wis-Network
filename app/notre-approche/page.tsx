import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function NotreApproche() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Notre Approche
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Du Diagnostic à la Réalisation - Chaque projet est unique. Nous adaptons notre intervention à vos besoins réels, après un audit gratuit et complet.
          </p>
        </div>
      </section>

      {/* Free Audit Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-12 border border-blue-500/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              🎁 Étape 1: Audit Gratuit & Sans Engagement
            </h2>
            
            <p className="text-lg text-slate-300 mb-8">
              Avant toute intervention, nous réalisons un <strong>audit gratuit et complet</strong> de votre infrastructure existante ou de votre projet de déploiement. Cet audit nous permet de :
            </p>

            <div className="space-y-4 mb-12">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Comprendre vos besoins métiers et contraintes techniques</span>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Évaluer l'état actuel de votre infrastructure</span>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Identifier les points critiques et opportunités d'amélioration</span>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Dimensionner précisément les ressources nécessaires</span>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Vous proposer un plan d'action clair et chiffré</span>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-8 mb-12 border border-slate-700/50">
              <h3 className="font-bold text-white mb-4">Durée de l'audit : 2 à 5 jours selon la complexité de votre environnement</h3>
              
              <h3 className="font-bold text-white mb-4">Livrable : Rapport d'audit détaillé (20-50 pages) avec :</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />État des lieux complet</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />Analyse des risques</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />Recommandations priorisées</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />Plan d'action avec chiffrage transparent</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />Roadmap de déploiement</li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all group"
            >
              Demander Mon Audit Gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-sm text-slate-400 mt-8">
              Sans engagement • Réponse sous 24h • Rapport détaillé offert
            </p>
          </div>
        </div>
      </section>

      {/* Our Intervention Domains */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Ce Que Nous Prenons en Charge
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-3xl">📦</span> Déploiement
              </h3>
              <p className="text-slate-300">
                Magasins, entrepôts, usines : étude, câblage, réseau, sécurité, téléphonie, mise en service clé en main.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-3xl">🛡️</span> Sécurité & Optimisation
              </h3>
              <p className="text-slate-300">
                Sécurisation complète, pare-feu, segmentation, protection DDoS, conformité réglementaire.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-3xl">🎧</span> Support & Infogérance
              </h3>
              <p className="text-slate-300">
                Support 24/7 niveau 3, monitoring continu, maintenance préventive, SLA garantis.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-3xl">☁️</span> Cloud & Systèmes
              </h3>
              <p className="text-slate-300">
                Architecture cloud, migrations, virtualisation, infrastructure scalable et résiliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Notre Processus en 6 Étapes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Audit & Diagnostic',
                description: 'Compréhension complète de vos besoins et état actuel'
              },
              {
                step: 2,
                title: 'Conception',
                description: 'Proposition d\'une architecture adaptée et optimisée'
              },
              {
                step: 3,
                title: 'Planification',
                description: 'Plan projet détaillé avec jalons et responsabilités'
              },
              {
                step: 4,
                title: 'Déploiement',
                description: 'Mise en œuvre selon le plan, avec suivi rigoureux'
              },
              {
                step: 5,
                title: 'Validation',
                description: 'Tests complets et recette fonctionnelle'
              },
              {
                step: 6,
                title: 'Support',
                description: 'Infogérance continue et optimisation permanente'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Modèle Tarifaire Transparent
          </h2>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Audit gratuit</h3>
                  <p className="text-slate-300">Découvrez vos besoins sans aucun engagement</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Devis détaillé</h3>
                  <p className="text-slate-300">Chiffrage transparent, ligne par ligne, sans frais cachés</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Tarifs compétitifs</h3>
                  <p className="text-slate-300">Meilleur rapport qualité-prix du marché</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Flexibilité</h3>
                  <p className="text-slate-300">Solutions sur-mesure, pas de forfaits standards imposés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Projects */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Exemples de Projets Réussis
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Déploiement Multi-sites Retail',
                description: '+50 magasins équipés en 18 mois avec 100% d\'opérationnalité'
              },
              {
                title: 'Sécurisation Infrastructure Industrie',
                description: 'Migration vers NGFW + micro-segmentation pour site critique IT/OT'
              },
              {
                title: 'Migration Cloud Hybride',
                description: 'Migration progressive de 30 serveurs physiques vers AWS avec zéro downtime'
              },
              {
                title: 'Infogérance 24/7',
                description: '99,8% de disponibilité maintenue sur 15 sites en logistique'
              }
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Transformer Votre Infrastructure ?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Commencez par votre audit gratuit - aucun engagement, aucun frais caché.
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
