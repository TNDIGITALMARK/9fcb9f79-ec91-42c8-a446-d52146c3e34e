'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CreditCard, Barcode, Smartphone, Lock, CheckCircle } from 'lucide-react';
import { subscriptionPlans } from '@/lib/data/glampass-data';

function PaymentPageContent() {
  const searchParams = useSearchParams();
  const planId = searchParams.get('plan') || 'intermediario';

  const selectedPlan = subscriptionPlans.find((p) => p.id === planId);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit' | 'debit' | 'boleto'>('pix');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Pagamento processado com sucesso!\n\nPlano: ${selectedPlan?.name}\nValor: R$ ${selectedPlan?.price.toFixed(2)}\nMétodo: ${paymentMethod === 'pix' ? 'PIX' : paymentMethod === 'credit' ? 'Cartão de Crédito' : paymentMethod === 'debit' ? 'Cartão de Débito' : 'Boleto'}\n\nBem-vinda à GlamPass!`
    );
  };

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Plano não encontrado</h1>
          <a href="/#planos" className="text-purple hover:text-purple-light">
            Voltar para os planos
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple/5">
      {/* Header */}
      <section className="bg-gradient-purple text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Finalizar Assinatura
          </h1>
          <p className="text-xl text-white/90">
            Complete seu cadastro e escolha a forma de pagamento
          </p>
        </div>
      </section>

      {/* Payment Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Options and Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple/10">
                  <h2 className="text-2xl font-heading font-bold text-purple-dark mb-6">
                    Dados Pessoais
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                        placeholder="Maria Silva"
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
                        className="w-full px-4 py-3 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                        placeholder="maria@email.com"
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
                        className="w-full px-4 py-3 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                        placeholder="(11) 98765-4321"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        CPF *
                      </label>
                      <input
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                        placeholder="000.000.000-00"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple/10">
                  <h2 className="text-2xl font-heading font-bold text-purple-dark mb-6">
                    Forma de Pagamento
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`
                        p-4 rounded-lg border-2 transition-all
                        ${
                          paymentMethod === 'pix'
                            ? 'border-purple bg-purple/5'
                            : 'border-gray-200 hover:border-purple/50'
                        }
                      `}
                    >
                      <Smartphone className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === 'pix' ? 'text-purple' : 'text-gray-400'}`} />
                      <div className={`text-sm font-semibold ${paymentMethod === 'pix' ? 'text-purple' : 'text-gray-600'}`}>
                        PIX
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('credit')}
                      className={`
                        p-4 rounded-lg border-2 transition-all
                        ${
                          paymentMethod === 'credit'
                            ? 'border-purple bg-purple/5'
                            : 'border-gray-200 hover:border-purple/50'
                        }
                      `}
                    >
                      <CreditCard className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === 'credit' ? 'text-purple' : 'text-gray-400'}`} />
                      <div className={`text-sm font-semibold ${paymentMethod === 'credit' ? 'text-purple' : 'text-gray-600'}`}>
                        Crédito
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('debit')}
                      className={`
                        p-4 rounded-lg border-2 transition-all
                        ${
                          paymentMethod === 'debit'
                            ? 'border-purple bg-purple/5'
                            : 'border-gray-200 hover:border-purple/50'
                        }
                      `}
                    >
                      <CreditCard className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === 'debit' ? 'text-purple' : 'text-gray-400'}`} />
                      <div className={`text-sm font-semibold ${paymentMethod === 'debit' ? 'text-purple' : 'text-gray-600'}`}>
                        Débito
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('boleto')}
                      className={`
                        p-4 rounded-lg border-2 transition-all
                        ${
                          paymentMethod === 'boleto'
                            ? 'border-purple bg-purple/5'
                            : 'border-gray-200 hover:border-purple/50'
                        }
                      `}
                    >
                      <Barcode className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === 'boleto' ? 'text-purple' : 'text-gray-400'}`} />
                      <div className={`text-sm font-semibold ${paymentMethod === 'boleto' ? 'text-purple' : 'text-gray-600'}`}>
                        Boleto
                      </div>
                    </button>
                  </div>

                  {/* PIX Instructions */}
                  {paymentMethod === 'pix' && (
                    <div className="bg-purple/5 rounded-lg p-6 border-2 border-purple/20">
                      <h3 className="font-semibold text-purple-dark mb-3 flex items-center gap-2">
                        <Smartphone className="w-5 h-5" />
                        Pagamento via PIX
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Após confirmar, você receberá um QR Code para realizar o pagamento instantaneamente.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Pagamento instantâneo e seguro</li>
                        <li>• Confirmação imediata</li>
                        <li>• Disponível 24/7</li>
                      </ul>
                    </div>
                  )}

                  {/* Card Payment Form */}
                  {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Número do Cartão *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Nome no Cartão *
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                          placeholder="MARIA SILVA"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Validade *
                          </label>
                          <input
                            type="text"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                            placeholder="MM/AA"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cardCvv"
                            value={formData.cardCvv}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10"
                            placeholder="000"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Boleto Instructions */}
                  {paymentMethod === 'boleto' && (
                    <div className="bg-purple/5 rounded-lg p-6 border-2 border-purple/20">
                      <h3 className="font-semibold text-purple-dark mb-3 flex items-center gap-2">
                        <Barcode className="w-5 h-5" />
                        Pagamento via Boleto
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Após confirmar, você receberá o boleto por email para pagamento em até 3 dias úteis.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Prazo de pagamento: 3 dias úteis</li>
                        <li>• Confirmação em até 48 horas após o pagamento</li>
                        <li>• Envio por email e disponível para download</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-purple text-white font-semibold rounded-lg hover:shadow-purple transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <Lock className="w-5 h-5" />
                  Confirmar Pagamento
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  Pagamento 100% seguro e criptografado
                </p>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple/10 sticky top-24">
                <h3 className="text-xl font-heading font-bold text-purple-dark mb-6">
                  Resumo do Pedido
                </h3>

                <div className="mb-6 pb-6 border-b border-purple/10">
                  <div className="font-semibold text-purple-dark mb-2">
                    Plano {selectedPlan.name}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {selectedPlan.description}
                  </p>

                  <ul className="space-y-2">
                    {selectedPlan.features.slice(0, 4).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-purple flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {selectedPlan.features.length > 4 && (
                      <li className="text-sm text-purple">
                        +{selectedPlan.features.length - 4} outros serviços
                      </li>
                    )}
                  </ul>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">
                      R$ {selectedPlan.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Desconto</span>
                    <span className="font-semibold text-green-600">R$ 0,00</span>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-purple/20 mb-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-lg font-semibold text-purple-dark">
                      Total
                    </span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gold">
                        R$ {selectedPlan.price.toFixed(2)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        por mês
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple/5 to-gold/5 rounded-lg p-4 border border-purple/20">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-muted-foreground">
                      <strong className="text-purple-dark">
                        Pagamento Seguro
                      </strong>
                      <br />
                      Seus dados estão protegidos com criptografia SSL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-center">Carregando...</div></div>}>
      <PaymentPageContent />
    </Suspense>
  );
}
