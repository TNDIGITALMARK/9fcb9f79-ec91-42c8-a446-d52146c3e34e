'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { companyInfo } from '@/lib/data/glampass-data';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/#planos', label: 'Planos' },
    { href: '/saloes', label: 'Salões Perto de Mim' },
    { href: '/glam-help', label: 'Glam Help' },
    { href: '/agendamento', label: 'Agendamento' },
    { href: '/avaliacoes', label: 'Avaliações' },
    { href: '/quem-somos', label: 'Quem Somos' },
    { href: '/parceiro', label: 'Seja Parceiro' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-purple shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-3xl font-heading font-bold text-white">
                GlamPass
              </span>
              <span className="text-xs text-gold font-medium tracking-wider">
                BELEZA POR ASSINATURA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-white hover:text-gold transition-colors duration-200 font-semibold text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* SAC Phone Number */}
          <div className="hidden md:flex items-center space-x-2 text-white">
            <Phone className="w-4 h-4 text-gold" />
            <div className="flex flex-col">
              <span className="text-xs text-gold">SAC</span>
              <a
                href={`tel:${companyInfo.sac.replace(/\s/g, '')}`}
                className="text-sm font-semibold hover:text-gold transition-colors"
              >
                {companyInfo.sac}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-gold transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-3 border-t border-white/20 mt-2">
                <div className="flex items-center space-x-2 text-white">
                  <Phone className="w-4 h-4 text-gold" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gold">SAC</span>
                    <a
                      href={`tel:${companyInfo.sac.replace(/\s/g, '')}`}
                      className="text-sm font-semibold"
                    >
                      {companyInfo.sac}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
