// GlamPass Mock Data
// All subscription plans, salon data, reviews, and customer information

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  isPremium?: boolean;
  isPopular?: boolean;
}

export interface Salon {
  id: string;
  name: string;
  rating: number;
  address: string;
  phone: string;
  availableSlots: string[];
  image?: string;
  distance?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
  salonId: string;
}

// Subscription Plans - Cheia de Charme
export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'essencial',
    name: 'Essencial',
    price: 134.99,
    description: 'Perfeito para manter sua beleza básica em dia',
    features: [
      '1x Corte de cabelo',
      '2x Escovas',
      '1x Pé e mão',
      '1x Design simples de sobrancelhas',
    ],
    isPopular: false,
  },
  {
    id: 'intermediario',
    name: 'Intermediário',
    price: 273.99,
    description: 'O equilíbrio perfeito entre cuidados e economia',
    features: [
      '1x Corte com escova',
      '2x Escovas com chapa',
      '2x Pé e mão',
      '1x Design com henna',
      '2x Hidratação capilar',
      '2x Depilação de axila',
    ],
    isPopular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 517.99,
    description: 'Experiência completa de beleza e bem-estar',
    features: [
      '1x Corte com escova',
      '3x Escovas com chapa',
      '2x Pé e mão',
      '1x Esmaltação em gel',
      '1x Design com henna',
      '1x Reconstrução capilar',
      '2x Depilação de virilha',
      '4x Depilação de axila',
      '1x Massagem relaxante',
    ],
    isPremium: true,
  },
];

// Partner Salons
export const partnerSalons: Salon[] = [
  {
    id: 'cheia-de-charme',
    name: 'Cheia de Charme',
    rating: 4.8,
    address: 'Rua das Flores, 123 - Centro',
    phone: '(11) 98765-4321',
    availableSlots: ['Manhã', 'Tarde'],
    distance: '0.8 km',
  },
  {
    id: 'bella-vita',
    name: 'Bella Vita Salon',
    rating: 4.9,
    address: 'Av. Paulista, 456 - Bela Vista',
    phone: '(11) 87654-3210',
    availableSlots: ['Manhã', 'Tarde', 'Noite'],
    distance: '1.2 km',
  },
  {
    id: 'glamour-studio',
    name: 'Glamour Studio',
    rating: 4.7,
    address: 'Rua Augusta, 789 - Consolação',
    phone: '(11) 76543-2109',
    availableSlots: ['Tarde', 'Noite', 'Fins de semana'],
    distance: '2.1 km',
  },
  {
    id: 'beleza-pura',
    name: 'Beleza Pura',
    rating: 4.9,
    address: 'Rua da Consolação, 321 - Higienópolis',
    phone: '(11) 95432-1098',
    availableSlots: ['Manhã', 'Tarde'],
    distance: '1.5 km',
  },
  {
    id: 'estilo-chic',
    name: 'Estilo Chic',
    rating: 4.8,
    address: 'Av. Rebouças, 654 - Pinheiros',
    phone: '(11) 94321-0987',
    availableSlots: ['Manhã', 'Tarde', 'Noite'],
    distance: '3.2 km',
  },
];

// Customer Reviews
export const customerReviews: Review[] = [
  {
    id: '1',
    name: 'Maria Silva',
    rating: 5,
    text: 'Serviço excelente! A economia é incrível e os salões parceiros são de primeira qualidade. Recomendo muito o plano Premium.',
    date: 'Janeiro 2024',
  },
  {
    id: '2',
    name: 'Ana Costa',
    rating: 5,
    text: 'Praticidade total! Não preciso mais me preocupar com agendamentos complicados. Os salões são ótimos e sempre têm horários disponíveis.',
    date: 'Fevereiro 2024',
  },
  {
    id: '3',
    name: 'Julia Santos',
    rating: 5,
    text: 'Melhor investimento em beleza que já fiz! O plano Intermediário é perfeito para minhas necessidades. Adorei a GlamPass!',
    date: 'Março 2024',
  },
  {
    id: '4',
    name: 'Carla Oliveira',
    rating: 5,
    text: 'Maravilhoso! Os salões são de excelente qualidade e o atendimento é impecável. Vale muito a pena assinar!',
    date: 'Março 2024',
  },
  {
    id: '5',
    name: 'Patricia Mendes',
    rating: 5,
    text: 'A GlamPass transformou minha rotina de beleza. Agora consigo me cuidar regularmente sem pesar no bolso. Perfeito!',
    date: 'Abril 2024',
  },
];

// Available time slots for booking
export const generateTimeSlots = (salonId: string, date: Date): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const times = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00'
  ];

  times.forEach(time => {
    // Randomly set some slots as unavailable for realism
    const available = Math.random() > 0.3;
    slots.push({ time, available, salonId });
  });

  return slots;
};

// Company information
export const companyInfo = {
  name: 'GlamPass',
  sac: '0800 123 4567',
  email: 'contato@glampass.com.br',
  address: 'Av. Paulista, 1000 - São Paulo, SP',
  aboutUs: `A GlamPass nasceu da paixão por democratizar o acesso a serviços de beleza de qualidade.

Nossa missão é conectar clientes que valorizam cuidados pessoais regulares com os melhores salões parceiros, oferecendo planos de assinatura que cabem no seu bolso e se adaptam ao seu estilo de vida.

Acreditamos que todo mundo merece se sentir bonito e confiante, sem precisar se preocupar com custos surpresa ou dificuldades de agendamento. Por isso, criamos uma plataforma que une conveniência, economia e qualidade.

Hoje, contamos com uma rede crescente de salões parceiros cuidadosamente selecionados, todos comprometidos em oferecer experiências excepcionais aos nossos assinantes.

Junte-se a milhares de clientes satisfeitos e descubra uma nova forma de cuidar da sua beleza!`,

  mission: 'Democratizar o acesso a serviços de beleza de qualidade através de planos de assinatura acessíveis e convenientes.',

  vision: 'Ser a principal plataforma de assinatura de serviços de beleza do Brasil, presente em todas as cidades e conectando milhões de pessoas aos melhores profissionais.',

  values: [
    'Qualidade em primeiro lugar',
    'Transparência e confiança',
    'Acessibilidade para todos',
    'Inovação constante',
    'Compromisso com nossos parceiros',
  ],
};
