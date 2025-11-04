'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Star, CheckCircle } from 'lucide-react';
import { partnerSalons, generateTimeSlots } from '@/lib/data/glampass-data';

export default function AgendamentoPage() {
  const [selectedSalon, setSelectedSalon] = useState(partnerSalons[0].id);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const salon = partnerSalons.find((s) => s.id === selectedSalon);
  const timeSlots = generateTimeSlots(selectedSalon, new Date());

  const services = [
    'Corte de cabelo',
    'Escova',
    'Escova com chapa',
    'Pé e mão',
    'Esmaltação em gel',
    'Design de sobrancelhas',
    'Design com henna',
    'Hidratação capilar',
    'Reconstrução capilar',
    'Depilação',
    'Massagem',
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedService) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    alert(
      `Agendamento confirmado!\n\nSalão: ${salon?.name}\nServiço: ${selectedService}\nData: ${selectedDate}\nHorário: ${selectedTime}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple/5">
      {/* Header */}
      <section className="bg-gradient-purple text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Agendar Horário
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Escolha o salão, serviço e horário ideal para você
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Steps */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Step 1: Select Salon */}
                <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-purple rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-purple-dark">
                      Escolha o Salão
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {partnerSalons.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSalon(s.id)}
                        className={`
                          text-left p-4 rounded-lg border-2 transition-all
                          ${
                            selectedSalon === s.id
                              ? 'border-purple bg-purple/5'
                              : 'border-gray-200 hover:border-purple/50'
                          }
                        `}
                      >
                        <h3 className="font-semibold text-purple-dark mb-1">
                          {s.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-2 text-sm">
                          <Star className="w-4 h-4 fill-gold text-gold" />
                          <span className="font-semibold">{s.rating}</span>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>{s.address}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Select Service */}
                <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-purple rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-purple-dark">
                      Escolha o Serviço
                    </h2>
                  </div>

                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Step 3: Select Date */}
                <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-purple rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-purple-dark">
                      Escolha a Data
                    </h2>
                  </div>

                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-12 pr-4 py-3 border-2 border-purple/20 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all"
                    />
                  </div>
                </div>

                {/* Step 4: Select Time */}
                <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-purple rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-purple-dark">
                      Escolha o Horário
                    </h2>
                  </div>

                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() =>
                          slot.available && setSelectedTime(slot.time)
                        }
                        disabled={!slot.available}
                        className={`
                          py-3 px-4 rounded-lg font-semibold text-sm transition-all
                          ${
                            selectedTime === slot.time
                              ? 'bg-gradient-purple text-white'
                              : slot.available
                              ? 'bg-purple/5 text-purple hover:bg-purple/10'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }
                        `}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple/10 sticky top-24">
                <h3 className="text-xl font-heading font-bold text-purple-dark mb-4">
                  Resumo do Agendamento
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Salão
                    </div>
                    <div className="font-semibold text-foreground">
                      {salon?.name || 'Não selecionado'}
                    </div>
                    {salon && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <Star className="w-3 h-3 fill-gold text-gold" />
                        {salon.rating} • {salon.distance}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Serviço
                    </div>
                    <div className="font-semibold text-foreground">
                      {selectedService || 'Não selecionado'}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Data
                    </div>
                    <div className="font-semibold text-foreground">
                      {selectedDate
                        ? new Date(selectedDate + 'T00:00:00').toLocaleDateString(
                            'pt-BR',
                            {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )
                        : 'Não selecionada'}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Horário
                    </div>
                    <div className="font-semibold text-foreground">
                      {selectedTime || 'Não selecionado'}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  disabled={
                    !selectedDate || !selectedTime || !selectedService
                  }
                  className="w-full py-3 bg-gradient-purple text-white font-semibold rounded-lg hover:shadow-purple transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Confirmar Agendamento
                </button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Você receberá uma confirmação por email e SMS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
