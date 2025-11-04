import { MapPin, Star, Phone, Clock, Navigation } from 'lucide-react';
import Link from 'next/link';
import { partnerSalons } from '@/lib/data/glampass-data';

export const dynamic = 'force-dynamic';

export default function SaloesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple/5">
      {/* Header */}
      <section className="bg-gradient-purple text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Salões Perto de Mim
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Encontre os melhores salões parceiros próximos a você
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple" />
                <input
                  type="text"
                  placeholder="Digite seu endereço ou CEP..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all"
                />
              </div>
              <button className="px-8 py-3 bg-gradient-purple text-white font-semibold rounded-lg hover:shadow-purple transition-all flex items-center gap-2 justify-center">
                <Navigation className="w-5 h-5" />
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Salons Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-purple-dark mb-2">
              {partnerSalons.length} salões encontrados perto de você
            </h2>
            <p className="text-muted-foreground">
              Todos os salões são parceiros verificados com ótimas avaliações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerSalons.map((salon) => (
              <div
                key={salon.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-purple/20"
              >
                {/* Salon Image Placeholder */}
                <div className="h-48 bg-gradient-purple-light relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  {salon.distance && (
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-purple flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {salon.distance}
                    </div>
                  )}
                </div>

                {/* Salon Info */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-purple-dark mb-2">
                    {salon.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(salon.rating)
                              ? 'fill-gold text-gold'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-purple-dark">
                      {salon.rating.toFixed(1)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      (250+ avaliações)
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2 mb-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple" />
                    <span>{salon.address}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 flex-shrink-0 text-purple" />
                    <a
                      href={`tel:${salon.phone.replace(/\D/g, '')}`}
                      className="hover:text-purple transition-colors"
                    >
                      {salon.phone}
                    </a>
                  </div>

                  {/* Available Slots */}
                  <div className="flex items-start gap-2 mb-4 text-sm">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple" />
                    <div>
                      <span className="text-muted-foreground">
                        Disponível:{' '}
                      </span>
                      <span className="text-foreground font-medium">
                        {salon.availableSlots.join(', ')}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/agendamento?salon=${salon.id}`}
                    className="block w-full py-3 bg-gradient-purple text-white font-semibold rounded-lg hover:shadow-purple transition-all text-center"
                  >
                    Agendar Horário
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-heading font-bold text-purple-dark mb-6 text-center">
            Visualizar no Mapa
          </h2>
          <div className="aspect-video bg-gradient-to-br from-purple/10 to-gold/10 rounded-xl flex items-center justify-center border-2 border-purple/20">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-purple mx-auto mb-4" />
              <p className="text-muted-foreground">
                Mapa interativo disponível em breve
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Pronta para começar?
          </h2>
          <p className="text-xl mb-6 text-white/90 max-w-2xl mx-auto">
            Escolha seu plano e comece a aproveitar os melhores salões
          </p>
          <Link
            href="/#planos"
            className="inline-block px-8 py-4 bg-gold text-purple-dark font-semibold rounded-lg hover:shadow-gold transition-all"
          >
            Ver Planos
          </Link>
        </div>
      </section>
    </div>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}
