'use client';

import { useState } from 'react';
import { Store, TrendingUp, Users, Shield, DollarSign, CheckCircle } from 'lucide-react';

export default function ParceiroPage() {
  const [formData, setFormData] = useState({
    salonName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    cep: '',
    cortePreco: '',
    escovaPreco: '',
    peEmaoPreco: '',
    designPreco: '',
    hidratacaoPreco: '',
    depilacaoPreco: '',
  });

  const [generatedPlans, setGeneratedPlans] = useState<any[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculatePlans = () => {
    const corte = parseFloat(formData.cortePreco) || 0;
    const escova = parseFloat(formData.escovaPreco) || 0;
    const peEmao = parseFloat(formData.peEmaoPreco) || 0;
    const design = parseFloat(formData.designPreco) || 0;
    const hidratacao = parseFloat(formData.hidratacaoPreco) || 0;
    const depilacao = parseFloat(formData.depilacaoPreco) || 0;

    // Calculate plan values with 30% discount
    const essencialValue = (corte + escova * 2 + peEmao + design) * 0.7;
    const intermediarioValue =
      (corte + escova * 2 + peEmao * 2 + design + hidratacao * 2 + depilacao * 2) * 0.7;
    const premiumValue =
      (corte +
        escova * 3 +
        peEmao * 2 +
        design +
        hidratacao +
        depilacao * 6) *
      0.7;

    setGeneratedPlans([
      {
        name: 'Essencial',
        price: essencialValue.toFixed(2),
        services: ['1x Corte', '2x Escovas', '1x Pé e mão', '1x Design simples'],
      },
      {
        name: 'Intermediário',
        price: intermediarioValue.toFixed(2),
        services: [
          '1x Corte com escova',
          '2x Escovas',
          '2x Pé e mão',
          '1x Design',
          '2x Hidratação',
          '2x Depilação',
        ],
      },
      {
        name: 'Premium',
        price: premiumValue.toFixed(2),
        services: [
          '1x Corte com escova',
          '3x Escovas',
          '2x Pé e mão',
          '1x Design',
          '1x Hidratação',
          '6x Depilação',
        ],
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculatePlans();
    alert(
      'Formulário enviado! Nossa equipe entrará em contato em até 48 horas para finalizar sua parceria.'
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple/5">
      {/* Hero Section */}
      <section className="bg-gradient-purple text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <Store className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium">Seja Parceiro GlamPass</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Cresça seu negócio com a GlamPass
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Conecte-se a milhares de clientes, garanta receita recorrente e transforme seu salão com nossa plataforma
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center text-purple-dark mb-12">
            Por que ser um salão parceiro?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-purple-dark mb-2">
                Receita Recorrente
              </h3>
              <p className="text-muted-foreground">
                Garanta fluxo de caixa previsível com clientes mensais
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-purple-dark mb-2">
                Novos Clientes
              </h3>
              <p className="text-muted-foreground">
                Acesso a milhares de clientes buscando serviços
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-purple-dark mb-2">
                Sem Riscos
              </h3>
              <p className="text-muted-foreground">
                Sem taxas de adesão, pague apenas pelo sucesso
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-purple-dark mb-2">
                Faturamento Extra
              </h3>
              <p className="text-muted-foreground">
                Aumente seu faturamento em até 40%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple/10">
            <h2 className="text-3xl font-heading font-bold text-purple-dark mb-2 text-center">
              Cadastre seu Salão
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Preencha os dados abaixo e descubra seus planos personalizados
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Salon Information */}
              <div>
                <h3 className="text-xl font-semibold text-purple-dark mb-4">
                  Informações do Salão
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nome do Salão *
                    </label>
                    <input
                      type="text"
                      name="salonName"
                      value={formData.salonName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nome do Proprietário *
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Endereço Completo *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Cidade *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Estado *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                    />
                  </div>
                </div>
              </div>

              {/* Service Pricing */}
              <div>
                <h3 className="text-xl font-semibold text-purple-dark mb-4">
                  Preços dos Serviços
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Informe seus preços regulares. Calcularemos automaticamente os planos de assinatura com 30% de desconto.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Corte (R$) *
                    </label>
                    <input
                      type="number"
                      name="cortePreco"
                      value={formData.cortePreco}
                      onChange={handleInputChange}
                      required
                      step="0.01"
                      min="0"
                      className="w-full px-4 py-2 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Escova (R$) *
                    </label>
                    <input
                      type="number"
                      name="escovaPreco"
                      value={formData.escovaPreco}
                      onChange={handleInputChange}
                      required
                      step="0.01"
                      min="0"
                      className="w-full px-4 py-2 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Pé e Mão (R$) *
                    </label>
                    <input
                      type="number"
                      name="peEmaoPreco"
                      value={formData.peEmaoPreco}
                      onChange={handleInputChange}
                      required
                      step="0.01"
                      min="0"
                      className="w-full px-4 py-2 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Design de Sobrancelhas (R$) *
                    </label>
                    <input
                      type="number"
                      name="designPreco"
                      value={formData.designPreco}
                      onChange={handleInputChange}
                      required
                      step="0.01"
                      min="0"
                      className="w-full px-4 py-2 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Hidratação (R$) *
                    </label>
                    <input
                      type="number"
                      name="hidratacaoPreco"
                      value={formData.hidratacaoPreco}
                      onChange={handleInputChange}
                      required
                      step="0.01"
                      min="0"
                      className="w-full px-4 py-2 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Depilação (R$) *
                    </label>
                    <input
                      type="number"
                      name="depilacaoPreco"
                      value={formData.depilacaoPreco}
                      onChange={handleInputChange}
                      required
                      step="0.01"
                      min="0"
                      className="w-full px-4 py-2 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-purple text-white font-semibold rounded-lg hover:shadow-purple transition-all flex items-center justify-center gap-2 text-lg"
              >
                <CheckCircle className="w-5 h-5" />
                Gerar Planos e Enviar Cadastro
              </button>
            </form>

            {/* Generated Plans */}
            {generatedPlans.length > 0 && (
              <div className="mt-12 pt-8 border-t-2 border-purple/10">
                <h3 className="text-2xl font-heading font-bold text-purple-dark mb-6 text-center">
                  Seus Planos Personalizados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {generatedPlans.map((plan, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-purple/5 to-gold/5 rounded-xl p-6 border-2 border-purple/20"
                    >
                      <h4 className="text-xl font-heading font-bold text-purple-dark mb-2">
                        {plan.name}
                      </h4>
                      <div className="text-3xl font-bold text-gold mb-4">
                        R$ {plan.price}
                        <span className="text-sm text-muted-foreground">/mês</span>
                      </div>
                      <ul className="space-y-2">
                        {plan.services.map((service: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-purple flex-shrink-0" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6">
                  * Planos calculados com 30% de desconto sobre seus preços regulares
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
