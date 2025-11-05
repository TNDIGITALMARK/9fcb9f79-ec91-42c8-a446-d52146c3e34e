'use client';

import { useState, useMemo } from 'react';
import { MapPin, Star, Clock, CheckCircle, Sparkles, Filter, Search } from 'lucide-react';
import { glamHelpServices, glamHelpProfessionals, type GlamHelpProfessional, type GlamHelpService } from '@/lib/data/glampass-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BookingDialog } from '@/components/glam-help/booking-dialog';

export default function GlamHelpPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  // Filter professionals based on selected service and online status
  const filteredProfessionals = useMemo(() => {
    let filtered = glamHelpProfessionals;

    // Filter by selected service
    if (selectedService) {
      filtered = filtered.filter(prof =>
        prof.availableServices.includes(selectedService)
      );
    }

    // Filter by online status
    if (showOnlineOnly) {
      filtered = filtered.filter(prof => prof.isOnline);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(prof =>
        prof.name.toLowerCase().includes(query) ||
        prof.specialties.some(spec => spec.toLowerCase().includes(query))
      );
    }

    // Sort by distance (closest first)
    return filtered.sort((a, b) => a.distanceValue - b.distanceValue);
  }, [selectedService, showOnlineOnly, searchQuery]);

  const selectedServiceData = selectedService
    ? glamHelpServices.find(s => s.id === selectedService)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-lighter/10 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-purple text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium">Profissional na hora</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Glam Help
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Precisa de um profissional agora? Chame especialistas online próximos de você para serviços rápidos em casa.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {glamHelpServices.map((service) => (
                <Button
                  key={service.id}
                  onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
                  variant={selectedService === service.id ? "default" : "outline"}
                  size="lg"
                  className={
                    selectedService === service.id
                      ? "bg-gold text-purple-text hover:bg-gold/90 font-semibold"
                      : "bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 font-semibold"
                  }
                >
                  <span className="mr-2 text-xl">{service.icon}</span>
                  {service.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Info Banner */}
      {selectedServiceData && (
        <div className="bg-white border-b-2 border-purple-lighter/30 py-6 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-purple-lighter/10 rounded-xl p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <span className="text-5xl">{selectedServiceData.icon}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-purple-text mb-2">
                    {selectedServiceData.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{selectedServiceData.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple" />
                      <span className="font-medium">{selectedServiceData.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-purple">
                        {selectedServiceData.estimatedPrice}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => setSelectedService(null)}
                  variant="ghost"
                  size="sm"
                  className="text-purple hover:text-purple-medium"
                >
                  Limpar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar por nome ou especialidade..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button
              onClick={() => setShowOnlineOnly(!showOnlineOnly)}
              variant={showOnlineOnly ? "default" : "outline"}
              className={showOnlineOnly ? "bg-purple text-white" : ""}
            >
              <Filter className="w-4 h-4 mr-2" />
              {showOnlineOnly ? "Apenas Online" : "Todos"}
            </Button>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              <span className="font-semibold text-purple-text">
                {filteredProfessionals.length}
              </span>{' '}
              {filteredProfessionals.length === 1 ? 'profissional encontrado' : 'profissionais encontrados'}
              {selectedService && ' para o serviço selecionado'}
            </p>
          </div>

          {/* Professionals Grid */}
          {filteredProfessionals.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                Nenhum profissional encontrado com os filtros selecionados.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfessionals.map((professional) => (
                <ProfessionalCard
                  key={professional.id}
                  professional={professional}
                  selectedService={selectedServiceData}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-purple-text mb-4">
              Como funciona?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Profissional em casa em 3 passos simples
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-heading font-bold text-purple-text mb-2">
                  Escolha o Serviço
                </h3>
                <p className="text-gray-600">
                  Selecione entre escova, esmaltação ou maquiagem
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-heading font-bold text-purple-text mb-2">
                  Escolha o Profissional
                </h3>
                <p className="text-gray-600">
                  Veja profissionais online perto de você e faça sua escolha
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-heading font-bold text-purple-text mb-2">
                  Solicite o Atendimento
                </h3>
                <p className="text-gray-600">
                  Confirme e aguarde o profissional chegar na sua casa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProfessionalCard({
  professional,
  selectedService
}: {
  professional: GlamHelpProfessional;
  selectedService: GlamHelpService | null;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [showBookingDialog, setShowBookingDialog] = useState(false);

  return (
    <>
      <BookingDialog
        open={showBookingDialog}
        onOpenChange={setShowBookingDialog}
        professional={professional}
        service={selectedService || undefined}
      />
    <Card className="hover:shadow-lg transition-all duration-200 border-2 border-purple-lighter/30 hover:border-purple/40">
      <CardContent className="p-6">
        {/* Online Status Badge */}
        {professional.isOnline && (
          <Badge className="mb-4 bg-green-500 hover:bg-green-600 text-white">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
            Online
          </Badge>
        )}

        {/* Professional Info */}
        <div className="mb-4">
          <h3 className="text-xl font-heading font-bold text-purple-text mb-2">
            {professional.name}
          </h3>

          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span className="font-semibold text-gray-900">{professional.rating}</span>
            </div>
            <span className="text-gray-500 text-sm">
              ({professional.reviewCount} avaliações)
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <MapPin className="w-4 h-4 text-purple" />
            <span>{professional.distance}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Clock className="w-4 h-4 text-purple" />
            <span>{professional.responseTime}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <CheckCircle className="w-4 h-4 text-purple" />
            <span>{professional.completedServices} serviços realizados</span>
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {professional.specialties.map((specialty) => (
              <Badge
                key={specialty}
                variant="secondary"
                className="bg-purple-lighter/20 text-purple-text hover:bg-purple-lighter/30"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        {/* Bio (collapsible) */}
        {showDetails && (
          <div className="mb-4 p-3 bg-purple-lighter/10 rounded-lg">
            <p className="text-sm text-gray-700">{professional.bio}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => setShowDetails(!showDetails)}
            variant="ghost"
            size="sm"
            className="text-purple hover:text-purple-medium"
          >
            {showDetails ? 'Ver menos' : 'Ver mais'}
          </Button>

          <Button
            disabled={!professional.isOnline}
            onClick={() => setShowBookingDialog(true)}
            className="w-full bg-gradient-purple text-white hover:shadow-purple font-semibold"
          >
            {professional.isOnline ? 'Solicitar Atendimento' : 'Indisponível'}
          </Button>
        </div>
      </CardContent>
    </Card>
    </>
  );
}
