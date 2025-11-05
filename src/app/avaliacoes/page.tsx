import { Star, Quote, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { customerReviews } from '@/lib/data/glampass-data';

export default function AvaliacoesPage() {
  const averageRating = 4.6;
  const totalReviews = 150;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-lighter/10">
      {/* Hero Section */}
      <section className="bg-gradient-purple text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 drop-shadow-lg">
            O que nossos clientes dizem
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md">
            Centenas de pessoas já transformaram sua rotina de beleza com a GlamPass
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-purple-lighter/20 to-white rounded-xl border-2 border-purple-lighter/40 shadow-md">
              <div className="text-5xl font-bold text-gold mb-2 drop-shadow-sm">
                {averageRating}★
              </div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-lighter/20 to-white rounded-xl border-2 border-purple-lighter/40 shadow-md">
              <div className="text-5xl font-bold text-gold mb-2 drop-shadow-sm">
                {totalReviews}+
              </div>
              <div className="text-gray-600">Avaliações</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-lighter/20 to-white rounded-xl border-2 border-purple-lighter/40 shadow-md">
              <div className="text-5xl font-bold text-gold mb-2 drop-shadow-sm">92%</div>
              <div className="text-gray-600">Recomendariam</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Distribution */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-purple-lighter/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-purple-text mb-8 text-center">
            Distribuição de Avaliações
          </h2>

          <div className="bg-white rounded-xl shadow-md p-8 border-2 border-purple-lighter/40">
            <div className="space-y-4">
              {[5, 4, 3, 2, 1].map((stars) => {
                const percentage =
                  stars === 5
                    ? 62
                    : stars === 4
                    ? 30
                    : stars === 3
                    ? 6
                    : stars === 2
                    ? 2
                    : 0;

                return (
                  <div key={stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-24">
                      {[...Array(stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-gold text-gold"
                        />
                      ))}
                    </div>
                    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-purple"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-16 text-right text-sm text-gray-600">
                      {percentage}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-heading font-bold text-purple-text mb-12 text-center">
            Depoimentos de Clientes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-lighter/40 hover:border-purple/50 transition-all hover:shadow-lg"
              >
                <Quote className="w-8 h-8 text-gold mb-4 opacity-80" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-purple-lighter/30">
                  <div>
                    <div className="font-semibold text-purple-text">
                      {review.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      Cliente GlamPass
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {review.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-purple text-white font-semibold rounded-lg hover:shadow-purple hover:scale-105 transition-all">
              Carregar Mais Avaliações
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-purple-text mb-12 text-center">
            Por que nossos clientes nos amam
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-purple-text mb-2">
                Serviço de Qualidade
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Salões parceiros cuidadosamente selecionados para garantir excelência
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-purple-text mb-2">
                Economia Real
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Economize até 40% com nossos planos de assinatura
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-purple-text mb-2">
                Praticidade Total
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Agendamento fácil e flexível em diversos salões
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 drop-shadow-lg">
            Seja nosso próximo cliente satisfeito
          </h2>
          <p className="text-xl text-white/95 max-w-2xl mx-auto mb-8 drop-shadow-md">
            Experimente a GlamPass e descubra por que somos a escolha de centenas de pessoas
          </p>
          <Link
            href="/#planos"
            className="inline-block px-8 py-4 bg-gold text-purple-text font-semibold rounded-lg hover:shadow-gold hover:scale-105 transition-all"
          >
            Começar Agora
          </Link>
        </div>
      </section>
    </div>
  );
}
