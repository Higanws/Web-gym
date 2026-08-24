export const site = {
  name: 'uno%',
  legalName: 'Uno% Fitness',
  tagline: 'Donde el fitness se convierte en tu estilo de vida',
  description:
    'Gimnasio de una sola sede en San Cristóbal, CABA. Entrenamiento de fuerza, funcional y coaching personalizado en Pasco 649.',
  url: 'https://unoporciento.com.ar',
  phone: '+54 11 3781-8940',
  phoneHref: 'tel:+541137818940',
  whatsapp: '5491137818940',
  email: 'hola@unoporciento.com.ar',
  mapsUrl: 'https://maps.app.goo.gl/bEoXZfbrEdXEJ4Ra7',
  mapsEmbed:
    'https://www.google.com/maps?q=Uno%25+Fitness,+Pasco+649,+San+Crist%C3%B3bal,+CABA&hl=es-419&z=16&output=embed',
  address: {
    street: 'Pasco 649',
    neighborhood: 'San Cristóbal',
    city: 'Ciudad Autónoma de Buenos Aires',
    postalCode: 'C1219',
    country: 'Argentina',
  },
  geo: {
    latitude: -34.6228,
    longitude: -58.4009,
  },
  hours: [
    { days: 'Lunes a viernes', time: '7:00 – 22:00' },
    { days: 'Sábados', time: '9:00 – 18:00' },
    { days: 'Domingos', time: '10:00 – 14:00' },
  ],
  hoursShort: 'Lun–Vie 7–22h · Sáb 9–18h · Dom 10–14h',
} as const

export const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#gym', label: 'El gym' },
  { href: '#entrenamientos', label: 'Entrenamientos' },
  { href: '#planes', label: 'Planes' },
  { href: '#galeria', label: 'Galería' },
  { href: '#ubicacion', label: 'Ubicación' },
] as const

export const whatsappHref = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

export const images = {
  hero: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=80',
  athlete:
    'https://images.unsplash.com/photo-1599058945522-28d584b6f14b?auto=format&fit=crop&w=1400&q=80',
  gym: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80',
  machines:
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=80',
  coach:
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
  boxing:
    'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=80',
  squat:
    'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&w=1200&q=80',
  core: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
  ropes:
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
} as const
