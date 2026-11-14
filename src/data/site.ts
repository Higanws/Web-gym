export const site = {
  name: 'UNO%',
  legalName: 'UNO% Fitness',
  tagline: 'Un gimnasio de barrio con entrenamiento de calidad, coaches cerca y una comunidad que te acompaña.',
  description:
    'UNO% es un espacio de entrenamiento en San Cristóbal, pensado para progresar con técnica, constancia y acompañamiento. Pasco 649, CABA.',
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
} as const

export const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#gym', label: 'El gym' },
  { href: '#entrenamientos', label: 'Entrenamientos' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#planes', label: 'Planes' },
  { href: '#galeria', label: 'Galería' },
  { href: '#ubicacion', label: 'Ubicación' },
] as const

export const whatsappHref = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

export const images = {
  logo: '/images/logo-header.webp',
  logoFull: '/images/logo-uno.webp',
  hero: '/images/clase.webp',
  athlete: '/images/boxeo.webp',
  gym: '/images/sala.webp',
  machines: '/images/mancuernas.webp',
  coach: '/images/coaching.webp',
  boxing: '/images/boxeo.webp',
  squat: '/images/fuerza.webp',
  core: '/images/abs.webp',
  ropes: '/images/funcional.webp',
  turf: '/images/cesped.webp',
  floor: '/images/piso.webp',
  racks: '/images/racks.webp',
  pulleys: '/images/poleas.webp',
} as const

export const pillars = [
  { id: '01', title: 'Musculación', copy: 'Fuerza, progresión y acompañamiento en sala.' },
  { id: '02', title: 'Clases', copy: 'Funcional, boxeo, HIIT, Strong UNO% y full body.' },
  { id: '03', title: 'Coaching', copy: 'Entrenadores presentes y un plan que se ajusta a vos.' },
] as const

export const programs = [
  {
    title: 'Musculación',
    copy: 'Fuerza, progresión y acompañamiento en sala.',
    image: images.pulleys,
  },
  {
    title: 'Funcional',
    copy: 'Fuerza, coordinación y capacidad física.',
    image: images.ropes,
  },
  {
    title: 'Boxeo',
    copy: 'Técnica, coordinación y trabajo cardiovascular.',
    image: images.boxing,
  },
  {
    title: 'Cardio HIIT',
    copy: 'Bloques intensos y eficientes.',
    image: images.hero,
  },
  {
    title: 'Strong UNO%',
    copy: 'Entrenamiento de fuerza en formato guiado.',
    image: images.squat,
  },
  {
    title: 'Full Body + Abs',
    copy: 'Trabajo integral y zona media.',
    image: images.core,
  },
] as const

export const week = [
  { day: 'Lun', classes: ['12:30 Strong UNO%', '13:00 ABS', '18:00 Funcional'] },
  { day: 'Mar', classes: ['08:00 HIIT', '09:30 Funcional', '13:00 ABS', '17:30 Boxeo', '18:30 Boxeo'] },
  { day: 'Mié', classes: ['09:00 Boxeo', '13:00 Full Body', '18:00 Strong'] },
  { day: 'Jue', classes: ['08:00 HIIT', '09:30 Funcional', '13:00 ABS', '18:00 Boxeo', '19:00 Boxeo'] },
  { day: 'Vie', classes: ['13:00 Strong UNO%', '18:00 Funcional'] },
  { day: 'Sáb', classes: ['13:00 HIIT', '17:00 Full Body', '18:00 ABS'] },
] as const

export const services = [
  {
    title: 'Personalizado',
    kicker: 'Presencial',
    copy: 'Plan individual, evaluación, técnica y seguimiento.',
  },
  {
    title: 'Entrenamiento',
    kicker: 'Online',
    copy: 'Rutinas diseñadas según tus objetivos y recursos.',
  },
  {
    title: 'Plan de alimentación',
    kicker: 'Nutrición',
    copy: 'Orientación profesional y seguimiento nutricional.',
  },
  {
    title: 'Coaching',
    kicker: 'A medida',
    copy: 'Acompañamiento y ajustes según tu evolución.',
  },
] as const

export const challenges = [
  {
    title: 'Reto inicial',
    days: '21 días',
    copy: 'Un primer impulso para crear hábitos y recuperar constancia.',
    image: images.hero,
  },
  {
    title: 'Reto evolución',
    days: '60 días',
    copy: 'Un proceso más completo con objetivos, seguimiento y comunidad.',
    image: images.gym,
  },
] as const

export const plans = [
  {
    name: 'Pase diario',
    price: '$11.500',
    note: 'Acceso por el día',
    featured: false,
    perks: ['Entrá y entrená hoy', 'Piso de musculación', 'Sin permanencia'],
  },
  {
    name: 'Mensual',
    price: '$55.000',
    note: 'Piso + clases ilimitadas*',
    featured: true,
    perks: [
      'Piso + clases ilimitadas*',
      'Seguimiento de coaches',
      'Comunidad UNO%',
    ],
  },
  {
    name: 'Trimestral',
    price: '$148.000',
    note: 'Compromiso y continuidad',
    featured: false,
    perks: ['Todo el plan mensual', 'Mejor valor mensual', 'Constancia de 90 días'],
  },
] as const

export const extraPlans = [
  { name: 'Semestral', price: '$290.000', note: 'Mejor planificación' },
  { name: 'Anual', price: '$560.000', note: 'La opción de largo plazo' },
] as const
