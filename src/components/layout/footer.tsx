import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { companyInfo } from '@/lib/data/glampass-data';

export function Footer() {
  return (
    <footer className="bg-gradient-purple text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 text-gold">
              GlamPass
            </h3>
            <p className="text-white/80 mb-4 text-sm">
              Beleza por assinatura. Conectando você aos melhores salões com economia e praticidade.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-gold transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#planos" className="text-white/80 hover:text-gold transition-colors">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="/saloes" className="text-white/80 hover:text-gold transition-colors">
                  Salões Parceiros
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" className="text-white/80 hover:text-gold transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/parceiro" className="text-white/80 hover:text-gold transition-colors">
                  Seja Parceiro
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/agendamento" className="text-white/80 hover:text-gold transition-colors">
                  Agendamento Online
                </Link>
              </li>
              <li>
                <Link href="/avaliacoes" className="text-white/80 hover:text-gold transition-colors">
                  Avaliações
                </Link>
              </li>
              <li>
                <Link href="/#planos" className="text-white/80 hover:text-gold transition-colors">
                  Planos de Assinatura
                </Link>
              </li>
              <li>
                <Link href="/saloes" className="text-white/80 hover:text-gold transition-colors">
                  Encontrar Salões
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                <div>
                  <div className="text-white/80">SAC</div>
                  <a
                    href={`tel:${companyInfo.sac.replace(/\s/g, '')}`}
                    className="text-white hover:text-gold transition-colors"
                  >
                    {companyInfo.sac}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-white/80">{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p>
            &copy; {new Date().getFullYear()} GlamPass. Todos os direitos reservados.
          </p>
          <div className="mt-2 space-x-4">
            <Link href="/privacidade" className="hover:text-gold transition-colors">
              Política de Privacidade
            </Link>
            <span>•</span>
            <Link href="/termos" className="hover:text-gold transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
