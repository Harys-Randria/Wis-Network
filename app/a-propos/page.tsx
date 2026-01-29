import Link from 'next/link';
import { ArrowRight, CheckCircle2, Target, Users, Lightbulb, Zap } from 'lucide-react';

export default function APropos() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            À Propos de WIS NETWORKS
          </h1>
          <p className="text-2xl text-slate-300 mb-4">
            Votre partenaire infrastructure réseau et sécurité depuis 2015
          </p>
          <p className="text-xl text-slate-400">
            Expertise technique • Accompagnement humain • Engagement résultats
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Notre Mission
          </h2>

          <div className="space-y-6 text-lg text-slate-300 leading-relaxed bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-12">
            <p>
              <strong>WIS NETWORKS</strong> a pour mission d'accompagner les entreprises dans la transformation et la sécurisation de leurs infrastructures réseau. Nous croyons qu'une infrastructure réseau performante, sécurisée et évolutive est un atout stratégique majeur pour toute entreprise moderne, qu'elle soit en croissance ou en transformation digitale.
            </p>
            <p>
              Notre approche repose sur trois piliers fondamentaux : <strong>l'excellence technique</strong> de nos ingénieurs, <strong>l'accompagnement humain personnalisé</strong> de nos clients, et <strong>l'engagement ferme sur les résultats</strong> avec une garantie de sites 100% opérationnels.
            </p>
            <p>
              Nous ne vendons pas de produits ou de forfaits standards. Nous créons des <strong>solutions sur-mesure après un audit gratuit</strong> de vos besoins réels. Cette approche nous permet de dimensionner précisément votre infrastructure et de vous proposer le meilleur rapport qualité-prix du marché.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Notre Histoire
          </h2>

          <div className="space-y-8">
            {[
              { year: '2015', icon: '🚀', title: 'Création de WIS NETWORKS', desc: 'Une équipe d\'ingénieurs réseaux passionnés' },
              { year: '2017', icon: '🏪', title: 'Premiers déploiements multi-sites retail', desc: '+20 magasins pour nos clients pionniers' },
              { year: '2019', icon: '🏭', title: 'Extension vers l\'industrie et la logistique', desc: 'Expertise IT/OT reconnue' },
              { year: '2021', icon: '🛡️', title: 'Lancement de l\'offre infogérance 24/7', desc: 'Support niveau 3 sur environnements critiques' },
              { year: '2023', icon: '📈', title: '+100 sites déployés', desc: 'Expansion de l\'équipe et des compétences (cloud, IoT)' },
              { year: '2025', icon: '🌍', title: 'Expansion nationale', desc: 'Partenariats stratégiques avec les leaders du marché' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="text-center flex-shrink-0">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="font-bold text-blue-400 text-lg">{item.year}</div>
                </div>
                <div className="flex-grow bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Nos Valeurs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Excellence Technique</h3>
              </div>
              <p className="text-slate-300">
                Expertise pointue sur les technologies réseau, sécurité et cloud. Veille technologique permanente. Certifications constructeurs (Cisco, Fortinet). Formation continue de nos équipes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Engagement Client</h3>
              </div>
              <p className="text-slate-300">
                Votre réussite est notre priorité absolue. Un chef de projet dédié. Communication transparente. Respect des délais et du budget. Garantie de résultat : sites opérationnels à 100%.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Transparence</h3>
              </div>
              <p className="text-slate-300">
                Communication claire et honnête à chaque étape. Devis détaillés ligne par ligne. Pas de frais cachés. Reporting régulier. Accès à notre portail client pour suivre vos tickets.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Innovation</h3>
              </div>
              <p className="text-slate-300">
                Adoption des meilleures technologies du marché. Standardisation et automatisation pour réduire les coûts. Approche DevOps et Infrastructure as Code. R&D sur les nouvelles solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Notre Expertise en Chiffres
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all">
              <div className="text-5xl font-bold text-blue-400 mb-4">+10</div>
              <p className="text-slate-300 text-lg">Ans d'expérience en infrastructure réseau et sécurité</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all">
              <div className="text-5xl font-bold text-blue-400 mb-4">+100</div>
              <p className="text-slate-300 text-lg">Sites déployés pour nos clients (retail, industrie, logistique)</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all">
              <div className="text-5xl font-bold text-blue-400 mb-4">99,9%</div>
              <p className="text-slate-300 text-lg">De disponibilité moyenne sur nos sites infogérés</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all">
              <div className="text-5xl font-bold text-blue-400 mb-4">24/7</div>
              <p className="text-slate-300 text-lg">Support niveau 3 sur environnements critiques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Certifications & Partenaires
          </h2>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Partenaires Officiels</h3>
                  <p className="text-slate-300">Cisco, Fortinet, VMware, AWS, Microsoft Azure</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Certifications Équipes</h3>
                  <p className="text-slate-300">CCNA, CCNP, Fortinet NSE, AWS Solutions Architect, CompTIA Security+</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Conformité</h3>
                  <p className="text-slate-300">ISO 27001, RGPD, NF EN 27001, certifications de sécurité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Notre Équipe
          </h2>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-12">
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Nos équipes sont composées d'ingénieurs réseaux et sécurité hautement qualifiés avec plus de 10 ans d'expérience collective. Nous combinons l'excellence technique avec une approche client centrée sur vos objectifs métiers.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { count: '50+', label: 'Experts' },
                { count: '15+', label: 'Ans avg. exp.' },
                { count: '100%', label: 'Certifiés' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.count}</div>
                  <p className="text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Pourquoi Choisir WIS NETWORKS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Expertise reconnue avec 100+ sites déployés',
              'Garantie 100% opérationnel à la mise en production',
              'Support 24/7 et SLA adaptés à votre criticité',
              'Audit gratuit sans engagement',
              'Solutions sur-mesure, pas de forfait standard',
              'Devis transparent, aucun frais caché'
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-300 text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Nous Rencontrer ?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Contactez-nous pour discuter de votre projet ou demander votre audit gratuit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all group"
          >
            Nous Contacter
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
