'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, User, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import type { GlamHelpProfessional, GlamHelpService } from '@/lib/data/glampass-data';
import { useToast } from '@/hooks/use-toast';

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  professional: GlamHelpProfessional;
  service?: GlamHelpService;
}

export function BookingDialog({
  open,
  onOpenChange,
  professional,
  service,
}: BookingDialogProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    complement: '',
    notes: '',
    preferredTime: 'now',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Solicitação enviada!',
      description: `${professional.name} recebeu sua solicitação e responderá em breve.`,
      duration: 5000,
    });

    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-purple-text">
            Solicitar Atendimento
          </DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo para que {professional.name} possa atender você
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Professional Summary */}
          <div className="bg-purple-lighter/10 rounded-lg p-4 border border-purple-lighter/30">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-purple-text text-lg">
                  {professional.name}
                </h4>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{professional.distance}</span>
                  <span className="text-gray-400">•</span>
                  <Clock className="w-3 h-3" />
                  <span>{professional.responseTime}</span>
                </div>
              </div>
              <Badge className="bg-green-500 text-white">Online</Badge>
            </div>

            {service && (
              <div className="flex items-center gap-3 pt-3 border-t border-purple-lighter/30">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <p className="font-medium text-gray-900">{service.name}</p>
                  <p className="text-sm text-gray-600">
                    {service.duration} • {service.estimatedPrice}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-purple-text flex items-center gap-2">
              <User className="w-4 h-4" />
              Seus Dados
            </h3>

            <div className="space-y-3">
              <div>
                <Label htmlFor="name">Nome completo *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                <Input
                  id="phone"
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(11) 98765-4321"
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-purple-text flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Endereço do Atendimento
            </h3>

            <div className="space-y-3">
              <div>
                <Label htmlFor="address">Endereço completo *</Label>
                <Input
                  id="address"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Rua, número, bairro, cidade"
                />
              </div>

              <div>
                <Label htmlFor="complement">Complemento</Label>
                <Input
                  id="complement"
                  value={formData.complement}
                  onChange={(e) => setFormData({ ...formData, complement: e.target.value })}
                  placeholder="Apto, bloco, etc (opcional)"
                />
              </div>
            </div>
          </div>

          {/* Time Preference */}
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-text flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Quando você precisa?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Button
                type="button"
                variant={formData.preferredTime === 'now' ? 'default' : 'outline'}
                onClick={() => setFormData({ ...formData, preferredTime: 'now' })}
                className={
                  formData.preferredTime === 'now'
                    ? 'bg-purple text-white'
                    : 'border-purple-lighter/50'
                }
              >
                Agora (o mais rápido possível)
              </Button>
              <Button
                type="button"
                variant={formData.preferredTime === 'schedule' ? 'default' : 'outline'}
                onClick={() => setFormData({ ...formData, preferredTime: 'schedule' })}
                className={
                  formData.preferredTime === 'schedule'
                    ? 'bg-purple text-white'
                    : 'border-purple-lighter/50'
                }
              >
                Agendar para depois
              </Button>
            </div>

            {formData.preferredTime === 'schedule' && (
              <p className="text-sm text-gray-600 bg-purple-lighter/10 p-3 rounded-lg">
                Após enviar, o profissional entrará em contato para combinar o melhor horário
              </p>
            )}
          </div>

          {/* Additional Notes */}
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-text flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Informações Adicionais
            </h3>

            <div>
              <Label htmlFor="notes">Observações (opcional)</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Alguma preferência ou informação importante? Ex: Preciso de produtos para cabelo ondulado, tenho cachorro em casa, etc."
                rows={3}
              />
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Pagamento:</span> Você combina a forma de pagamento diretamente com o profissional após confirmar o serviço.
            </p>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-purple text-white hover:shadow-purple font-semibold"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
