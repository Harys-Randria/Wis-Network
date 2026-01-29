'use client';

import React from "react"
import { useState } from 'react';
import { Mail, Phone, Lock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.company.trim()) {
      newErrors.company = 'Veuillez indiquer le nom de votre entreprise';
    }
    if (!formData.name.trim()) {
      newErrors.name = 'Veuillez indiquer votre nom';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez indiquer votre email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Veuillez saisir une adresse email valide';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Veuillez décrire votre besoin';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Vérifier les variables d'environnement
      console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
      console.log('Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
      console.log('Public Key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

      // Import dynamique de emailjs
      const emailjs = (await import('@emailjs/browser')).default;
      
      // Envoi via EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          company: formData.company,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Non renseigné',
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log('Succès EmailJS:', result);

      // Succès !
      setSubmitted(true);
      setFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});

    } catch (error: any) {
      console.error('Erreur EmailJS complète:', error);
      console.error('Message d\'erreur:', error.text || error.message);
      console.error('Status:', error.status);
      setErrors({
        submit: `Erreur lors de l'envoi: ${error.text || error.message || 'Erreur inconnue'}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="pt-16 min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-12 text-center backdrop-blur-sm">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Message envoyé avec succès !
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Merci de nous avoir contactés. Nous vous répondrons sous 24h.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
            >
              Envoyer un autre message
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nous Contacter
          </h1>
          <p className="text-xl text-slate-300">
            Une question ? Un projet ? Contactez-nous, nous vous répondrons sous 24h.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Column */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-2">
                Envoyez-nous un Message
              </h2>
              <p className="text-slate-300 mb-8">
                Remplissez ce formulaire et nous vous répondrons sous 24h. Ou appelez-nous directement pour échanger.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-200 mb-2">
                    Votre entreprise <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.company ? 'border-red-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.company && (
                    <p className="text-red-400 text-sm mt-1">{errors.company}</p>
                  )}
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                    Votre nom <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Prénom et nom"
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@entreprise.com"
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-200 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 6 XX XX XX XX"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.message ? 'border-red-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer le Message'
                  )}
                </button>

                {/* Error Message */}
                {errors.submit && (
                  <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-400 text-sm">
                    {errors.submit}
                  </div>
                )}

                {/* Privacy Notice */}
                <p className="text-xs text-slate-400 flex items-center gap-2">
                  <Lock className="w-3 h-3" />
                  Vos données sont protégées et ne seront jamais partagées. Voir notre{' '}
                  <a href="/politique-confidentialite" className="text-blue-400 hover:text-blue-300 underline">
                    politique de confidentialité
                  </a>
                </p>
              </form>
            </div>

            {/* Contact Info Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">
                  Autres moyens de nous contacter
                </h3>
              </div>

              {/* Phone */}
              <div className="flex gap-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 shadow-lg shadow-blue-500/30">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Téléphone
                  </h3>
                  <p className="text-slate-300 mb-2">
                    Appelez-nous directement :
                  </p>
                  <a href="tel:+33123456789" className="text-blue-400 font-bold text-lg hover:text-blue-300 transition-colors">
                    +33 1 23 45 67 89
                  </a>
                  <p className="text-sm text-slate-400 mt-2">
                    Lundi-Vendredi : 9h-18h
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 shadow-lg shadow-blue-500/30">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Email
                  </h3>
                  <p className="text-slate-300 mb-2">
                    Envoyez-nous un email :
                  </p>
                  <a href="mailto:julia@wis-networks-pro.com" className="text-blue-400 font-bold hover:text-blue-300 break-all transition-colors">
                    julia@wis-networks-pro.com
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-blue-600/20 to-slate-800/20 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-6">
                  Vous cherchez un audit gratuit ?
                </h3>
                <p className="text-slate-300 mb-6">
                  Utilisez le formulaire ci-contre pour demander votre audit. Nous analyserons votre besoin et vous proposerons une solution adaptée.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Audit gratuit & sans engagement</span>
                  </li>
                  <li className="flex gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Réponse sous 24h</span>
                  </li>
                  <li className="flex gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Devis détaillé et sur-mesure</span>
                  </li>
                </ul>
              </div>

              {/* Security/Privacy */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
                <div className="flex gap-4">
                  <Lock className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-2">
                      Vos données sont sécurisées
                    </h3>
                    <p className="text-sm text-slate-300">
                      Toutes vos informations sont chiffrées et ne seront jamais partagées avec des tiers. Nous respectons strictement la RGPD.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Questions Fréquemment Posées
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Combien coûte un audit gratuit ?',
                a: 'L\'audit est totalement gratuit et sans engagement. Nous analysons votre besoin et vous proposons un devis détaillé sous 48h.'
              },
              {
                q: 'Quel est le délai de réponse ?',
                a: 'Nous répondons à tous les messages et appels sous 24h. Pour les demandes urgentes, appelez-nous directement.'
              },
              {
                q: 'Proposez-vous des services multi-sites ?',
                a: 'Oui, c\'est notre spécialité ! Nous gérons les déploiements multi-sites avec standardisation et coordination centralisée.'
              },
              {
                q: 'Quel support proposez-vous après déploiement ?',
                a: 'Nous proposons une infogérance 24/7 avec support niveau 3, maintenance préventive, et SLA adaptés à votre criticité.'
              },
              {
                q: 'Travaillez-vous avec tous les constructeurs ?',
                a: 'Oui, nous sommes partenaires certifiés de Cisco, Fortinet, Ubiquiti, VMware, Microsoft Azure et AWS.'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-4">{item.q}</h3>
                <p className="text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}