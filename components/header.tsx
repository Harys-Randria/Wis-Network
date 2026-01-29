'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Lock } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { label: 'Déploiement d\'Infrastructure', href: '/services#deploiement' },
    { label: 'Sécurité & Optimisation', href: '/services#securite' },
    { label: 'Support & Infogérance', href: '/services#support' },
    { label: 'Gestion de Projet', href: '/services#gestion-projet' },
    { label: 'Cloud & Systèmes', href: '/services#cloud-systemes' },
  ];

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'Notre Approche', href: '/notre-approche' },
    { label: 'À propos', href: '/a-propos' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl ${
      scrolled 
        ? 'bg-slate-950/80 border-b border-slate-800 shadow-lg' 
        : 'bg-slate-950/60 border-b border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl flex-shrink-0 group">
          <Image
          src="/logo.svg"
          alt="Logo WIS Networks"
          width={200}
          height={100}
          className="rounded-lg"
            />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-sm flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Desktop Dropdown */}
              {item.hasDropdown && (
                <div className="absolute left-0 mt-0 w-56 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl shadow-blue-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 backdrop-blur-xl">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-blue-400 transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <Link
          href="/contact"
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all"
        >
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-blue-400"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-slate-800 shadow-lg backdrop-blur-xl">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-blue-400 rounded-lg font-medium text-sm flex items-center justify-between transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="ml-4 space-y-1 mt-1">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-slate-400 hover:text-blue-400 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-blue-400 rounded-lg font-medium text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-blue-500/30 text-center mt-4 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
