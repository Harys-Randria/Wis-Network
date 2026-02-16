'use client';

import React from "react"
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Network, CheckCircle2, Lock, TrendingUp, Users } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: 'Sécuriser',
      description: 'Protégez vos infrastructures critiques avec nos solutions de sécurité réseau de pointe.'
    },
    {
      icon: Zap,
      title: 'Optimiser',
      description: 'Augmentez la performance et l\'efficacité de vos réseaux existants.'
    },
    {
      icon: Network,
      title: 'Connecter',
      description: 'Déployez des infrastructures fiables, scalables et modernes.'
    }
  ];

  const stats = [
    { label: '+100 Sites', value: 'Déployés', icon: TrendingUp },
    { label: '24/7', value: 'Support', icon: CheckCircle2 },
    { label: '2015', value: 'Depuis', icon: Lock },
    { label: '50+', value: 'Experts', icon: Users }
  ];

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Banner Container */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600/10 to-slate-800/20 border border-slate-700/50 backdrop-blur-sm p-12 md:p-16">
            {/* Banner Background Image - REMPLACEZ '/images/banner.jpg' par votre image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url('/images/banner.jpg')` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Section */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Infrastructure<br />
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Réseaux & Sécurité
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
                  Expertise complète en déploiement infrastructure, sécurité réseau et infogérance 24/7 pour retail, industrie et logistique.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group"
                  >
                    Demander un audit gratuit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/services"
                    className="px-8 py-3 border border-blue-500/50 hover:border-blue-500 text-blue-400 hover:text-blue-300 rounded-lg font-semibold transition-all"
                  >
                    Découvrir nos services
                  </Link>
                </div>
              </div>

              {/* Right Section - Logo fixe - REMPLACEZ '/images/logo.png' par votre logo */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-1 shadow-2xl shadow-blue-500/30">
                  <img
                    src="/favicon.png"
                    alt="Logo entreprise"
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
                <p className="text-center text-slate-400 text-sm mt-3">Logo entreprise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-2xl md:text-3xl font-bold text-white">{stat.label}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notre Approche Trois Piliers
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Nous transformons vos défis infrastructures en avantages compétitifs durables
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-6">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group/link"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-slate-800/20 border border-blue-500/30 rounded-2xl p-12 backdrop-blur-sm text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformez votre infrastructure
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Commencez par un audit gratuit pour découvrir comment nous pouvons optimiser vos réseaux.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all group"
            >
              Demander un audit gratuit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}