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

export interface GlamHelpService {
  id: string;
  name: string;
  duration: string;
  estimatedPrice: string;
  description: string;
  icon: string;
}

export interface GlamHelpProfessional {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  distance: string;
  distanceValue: number; // for sorting
  profileImage?: string;
  specialties: string[];
  isOnline: boolean;
  responseTime: string;
  completedServices: number;
  bio: string;
  availableServices: string[];
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
    text: 'Uso a GlamPass há 4 meses e não consigo mais viver sem! A facilidade de agendar e a qualidade excepcional dos salões me surpreenderam. Já economizei mais de R$ 500 comparado ao que gastava antes. Simplesmente perfeito!',
    date: 'Janeiro 2024',
  },
  {
    id: '2',
    name: 'Ana Costa',
    rating: 5,
    text: 'Plano incrível! Os salões são maravilhosos e o app funciona perfeitamente. Consigo agendar sempre que preciso e os profissionais são extremamente atenciosos. Recomendo muito o plano Intermediário!',
    date: 'Fevereiro 2024',
  },
  {
    id: '3',
    name: 'Julia Santos',
    rating: 5,
    text: 'Comecei com o plano Essencial e depois migrei para o Intermediário. A diferença no bolso é enorme! Agora vou ao salão toda semana e pago muito menos do que pagava indo uma vez por mês. Mudou minha vida!',
    date: 'Março 2024',
  },
  {
    id: '4',
    name: 'Carla Oliveira',
    rating: 5,
    text: 'Adorei a proposta! Os salões parceiros são todos lindos, bem localizados e o atendimento é excepcional. Sempre consigo agendar facilmente. Vale muito a pena para quem vai ao salão regularmente!',
    date: 'Março 2024',
  },
  {
    id: '5',
    name: 'Patricia Mendes',
    rating: 5,
    text: 'Melhor decisão de 2024! Sempre tive dificuldade em manter os cuidados com cabelo e unhas em dia por causa do custo. Com a GlamPass ficou super acessível e prático. O plano Premium é absolutamente perfeito!',
    date: 'Abril 2024',
  },
  {
    id: '6',
    name: 'Fernanda Lima',
    rating: 5,
    text: 'Plataforma excelente! Testei 3 salões diferentes e todos foram maravilhosos. A variedade de horários é ótima e sempre tem disponibilidade. Super recomendo para todas as minhas amigas!',
    date: 'Abril 2024',
  },
  {
    id: '7',
    name: 'Beatriz Campos',
    rating: 5,
    text: 'Assinei faz 2 meses e já indiquei para várias amigas. A economia é real e os profissionais são super qualificados e carinhosos. Adorei cada experiência, especialmente no salão Bella Vita!',
    date: 'Maio 2024',
  },
  {
    id: '8',
    name: 'Roberta Alves',
    rating: 5,
    text: 'Plano perfeitamente estruturado! Os valores compensam demais e a qualidade é impecável. O suporte é sempre rápido e atencioso. Estou completamente satisfeita e super feliz com o serviço!',
    date: 'Maio 2024',
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

// Glam Help Services - Quick at-home services
export const glamHelpServices: GlamHelpService[] = [
  {
    id: 'escova',
    name: 'Escova',
    duration: '45 min',
    estimatedPrice: 'R$ 80 - 120',
    description: 'Escova profissional no conforto da sua casa',
    icon: '💇‍♀️',
  },
  {
    id: 'esmaltacao',
    name: 'Esmaltação',
    duration: '30 min',
    estimatedPrice: 'R$ 50 - 80',
    description: 'Esmaltação de mãos e/ou pés com produtos de qualidade',
    icon: '💅',
  },
  {
    id: 'maquiagem',
    name: 'Maquiagem',
    duration: '60 min',
    estimatedPrice: 'R$ 120 - 200',
    description: 'Maquiagem profissional para qualquer ocasião',
    icon: '💄',
  },
];

// Glam Help Professionals - Available for immediate booking
export const glamHelpProfessionals: GlamHelpProfessional[] = [
  {
    id: 'prof-1',
    name: 'Camila Santos',
    rating: 4.9,
    reviewCount: 127,
    distance: '0.5 km',
    distanceValue: 0.5,
    profileImage: '/professionals/camila.jpg',
    specialties: ['Escova', 'Maquiagem'],
    isOnline: true,
    responseTime: 'Responde em ~5 min',
    completedServices: 342,
    bio: 'Especialista em escovas e maquiagem para eventos. 8 anos de experiência.',
    availableServices: ['escova', 'maquiagem'],
  },
  {
    id: 'prof-2',
    name: 'Patricia Oliveira',
    rating: 5.0,
    reviewCount: 93,
    distance: '0.8 km',
    distanceValue: 0.8,
    profileImage: '/professionals/patricia.jpg',
    specialties: ['Esmaltação', 'Unha em gel'],
    isOnline: true,
    responseTime: 'Responde em ~3 min',
    completedServices: 289,
    bio: 'Designer de unhas certificada. Especialista em esmaltação e nail art.',
    availableServices: ['esmaltacao'],
  },
  {
    id: 'prof-3',
    name: 'Juliana Costa',
    rating: 4.8,
    reviewCount: 156,
    distance: '1.2 km',
    distanceValue: 1.2,
    profileImage: '/professionals/juliana.jpg',
    specialties: ['Escova', 'Esmaltação', 'Maquiagem'],
    isOnline: true,
    responseTime: 'Responde em ~8 min',
    completedServices: 421,
    bio: 'Profissional completa com experiência em todos os serviços express.',
    availableServices: ['escova', 'esmaltacao', 'maquiagem'],
  },
  {
    id: 'prof-4',
    name: 'Mariana Lima',
    rating: 4.9,
    reviewCount: 84,
    distance: '1.5 km',
    distanceValue: 1.5,
    profileImage: '/professionals/mariana.jpg',
    specialties: ['Maquiagem', 'Maquiagem de noiva'],
    isOnline: true,
    responseTime: 'Responde em ~10 min',
    completedServices: 198,
    bio: 'Maquiadora profissional especializada em eventos e festas.',
    availableServices: ['maquiagem'],
  },
  {
    id: 'prof-5',
    name: 'Fernanda Alves',
    rating: 4.7,
    reviewCount: 112,
    distance: '1.8 km',
    distanceValue: 1.8,
    profileImage: '/professionals/fernanda.jpg',
    specialties: ['Escova', 'Hidratação'],
    isOnline: true,
    responseTime: 'Responde em ~7 min',
    completedServices: 267,
    bio: 'Hair stylist com foco em escovas e tratamentos capilares.',
    availableServices: ['escova'],
  },
  {
    id: 'prof-6',
    name: 'Roberta Silva',
    rating: 5.0,
    reviewCount: 71,
    distance: '2.1 km',
    distanceValue: 2.1,
    profileImage: '/professionals/roberta.jpg',
    specialties: ['Esmaltação', 'Spa das mãos'],
    isOnline: true,
    responseTime: 'Responde em ~6 min',
    completedServices: 189,
    bio: 'Especialista em cuidados com unhas e tratamentos para mãos.',
    availableServices: ['esmaltacao'],
  },
  {
    id: 'prof-7',
    name: 'Beatriz Mendes',
    rating: 4.8,
    reviewCount: 95,
    distance: '2.3 km',
    distanceValue: 2.3,
    profileImage: '/professionals/beatriz.jpg',
    specialties: ['Escova', 'Maquiagem'],
    isOnline: false,
    responseTime: 'Offline',
    completedServices: 234,
    bio: 'Profissional versátil com expertise em cabelo e maquiagem.',
    availableServices: ['escova', 'maquiagem'],
  },
  {
    id: 'prof-8',
    name: 'Carolina Rocha',
    rating: 4.9,
    reviewCount: 103,
    distance: '2.7 km',
    distanceValue: 2.7,
    profileImage: '/professionals/carolina.jpg',
    specialties: ['Maquiagem', 'Automaquiagem'],
    isOnline: true,
    responseTime: 'Responde em ~12 min',
    completedServices: 276,
    bio: 'Maquiadora e instrutora de automaquiagem.',
    availableServices: ['maquiagem'],
  },
];

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
