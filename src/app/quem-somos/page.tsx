import { Heart, Target, Eye, Award, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { companyInfo } from '@/lib/data/glampass-data';

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple/5">
      {/* Hero Section */}
      <section className="bg-gradient-purple text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Sobre a GlamPass
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transformando a forma como as pessoas cuidam da sua beleza
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-purple-dark mb-6">
              Nossa História
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            {companyInfo.aboutUs.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple/5 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple/10 text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-purple-dark mb-4">
                Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple/10 text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-purple-dark mb-4">
                Visão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple/10 text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-purple-dark mb-4">
                Valores
              </h3>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                {companyInfo.values.map((value, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-purple-dark mb-12">
            GlamPass em Números
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gold mb-2">1000+</div>
              <div className="text-muted-foreground">Clientes Satisfeitos</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gold mb-2">5+</div>
              <div className="text-muted-foreground">Salões Parceiros</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gold mb-2">5000+</div>
              <div className="text-muted-foreground">Atendimentos Realizados</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gold mb-2">4.8★</div>
              <div className="text-muted-foreground">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple/5 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-purple-dark mb-12">
            Nosso Compromisso
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-purple/10">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Na GlamPass, acreditamos que beleza e bem-estar devem ser acessíveis a todos. Por isso, trabalhamos incansavelmente para:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-dark mb-1">
                      Selecionar os melhores parceiros
                    </h3>
                    <p className="text-muted-foreground">
                      Cada salão passa por um rigoroso processo de avaliação para garantir qualidade excepcional.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-dark mb-1">
                      Oferecer preços justos
                    </h3>
                    <p className="text-muted-foreground">
                      Nossos planos de assinatura proporcionam economia real sem comprometer a qualidade.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-dark mb-1">
                      Facilitar sua experiência
                    </h3>
                    <p className="text-muted-foreground">
                      Nossa plataforma torna simples agendar, gerenciar e aproveitar seus serviços de beleza.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-dark mb-1">
                      Ouvir e melhorar constantemente
                    </h3>
                    <p className="text-muted-foreground">
                      Seu feedback é essencial para evoluirmos e oferecermos sempre o melhor serviço.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Faça parte da nossa história
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Junte-se a milhares de pessoas que já transformaram sua rotina de beleza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#planos"
              className="px-8 py-4 bg-gold text-purple-dark font-semibold rounded-lg hover:shadow-gold transition-all"
            >
              Ver Planos
            </Link>
            <Link
              href="/parceiro"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
            >
              Seja Parceiro
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
