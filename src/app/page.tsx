import Link from 'next/link';
import { Sparkles, Clock, Shield, Star, ArrowRight } from 'lucide-react';
import { subscriptionPlans, customerReviews } from '@/lib/data/glampass-data';
import { PlanCard } from '@/components/plan-card';

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-purple text-white py-24 px-4 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium">Beleza por assinatura</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-white">
              Sua beleza em dia,
              <br />
              <span className="text-gold">sem surpresas no bolso</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Planos mensais de beleza que conectam você aos melhores salões com economia, praticidade e qualidade garantida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/#planos"
                className="px-8 py-4 bg-gold text-purple-dark font-semibold rounded-lg hover:shadow-gold transition-all duration-200 flex items-center gap-2 min-w-[200px] justify-center"
              >
                Ver Planos
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/saloes"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 min-w-[200px] text-center"
              >
                Salões Parceiros
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">5+</div>
                <div className="text-white/80">Salões Parceiros</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">1000+</div>
                <div className="text-white/80">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">4.8★</div>
                <div className="text-white/80">Avaliação Média</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-purple-dark mb-4">
              Por que escolher a GlamPass?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra as vantagens de fazer parte da nossa comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-purple/5 hover:bg-purple/10 transition-colors">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-purple-dark mb-3">
                Praticidade Total
              </h3>
              <p className="text-muted-foreground">
                Agende seus serviços de forma simples e rápida. Sem complicação, sem burocracia.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-purple/5 hover:bg-purple/10 transition-colors">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-purple-dark mb-3">
                Qualidade Garantida
              </h3>
              <p className="text-muted-foreground">
                Todos os nossos salões parceiros são cuidadosamente selecionados e avaliados.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-purple/5 hover:bg-purple/10 transition-colors">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-purple-dark mb-3">
                Economia Real
              </h3>
              <p className="text-muted-foreground">
                Economize até 40% em serviços de beleza com nossos planos mensais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20 px-4 bg-gradient-to-b from-purple/5 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-purple-dark mb-4">
              Escolha seu plano ideal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Planos mensais flexíveis para todos os estilos e necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {subscriptionPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Todos os planos podem ser cancelados a qualquer momento • Sem taxa de adesão
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-purple-dark mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-muted-foreground">
              Milhares de pessoas já transformaram sua rotina de beleza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {customerReviews.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-white border-2 border-purple/10 rounded-xl p-6 hover:border-purple/30 transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-purple-dark">
                    {review.name}
                  </span>
                  <span className="text-muted-foreground">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/avaliacoes"
              className="inline-flex items-center gap-2 text-purple hover:text-purple-light transition-colors font-semibold"
            >
              Ver todas as avaliações
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Pronta para transformar sua rotina de beleza?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Junte-se a milhares de clientes satisfeitos e descubra a praticidade da GlamPass
          </p>
          <Link
            href="/#planos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-purple-dark font-semibold rounded-lg hover:shadow-gold transition-all duration-200"
          >
            Começar Agora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}