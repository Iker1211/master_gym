export const blogPosts = [
  {
    id: 1,
    slug: 'sobrecarga-progresiva-guia-definitiva',
    title: 'Sobrecarga Progresiva: La regla inquebrantable para ganar masa muscular',
    excerpt: 'Descubre cómo registrar tus cargas, controlar el RIR y aplicar micro-progresiones reales para no estancarte jamás en tus levantamientos principales.',
    date: '2026-08-25',
    formattedDate: '25 AGO 2026',
    category: 'Hipertrofia & Fuerza',
    readTime: '6 min de lectura',
    author: {
      name: 'Equipo Técnico Master Gym',
      role: 'Entrenadores Certificados'
    },
    image: '/assets/peso_libre.jpg',
    tags: ['Hipertrofia', 'Biomecánica', 'Fuerza']
  },
  {
    id: 2,
    slug: 'hidratacion-entrenamiento-clima-manta',
    title: 'Hidratación y Electrolitos: Rendir al 100% bajo el clima de Manta',
    excerpt: 'El clima costero de Manta demanda una estrategia precisa de sodio y fluidos intra-entreno. Evita la fatiga prematura y los calambres en tus sesiones pesadas.',
    date: '2026-08-18',
    formattedDate: '18 AGO 2026',
    category: 'Nutrición & Salud',
    readTime: '4 min de lectura',
    author: {
      name: 'Área de Nutrición Deportiva',
      role: 'Master Gym Manta'
    },
    image: '/assets/asesoria_fitness.jpg',
    tags: ['Nutrición', 'Manta', 'Rendimiento']
  },
  {
    id: 3,
    slug: 'maquinas-leverage-vs-peso-libre',
    title: 'Maquinaria Leverage vs. Mancuernas: Cómo optimizar el perfil de resistencia',
    excerpt: 'Por qué nuestras máquinas de palanca y selectorizadas te permiten aislar grupos musculares con máxima tensión en el estiramiento y cero estrés articular innecesario.',
    date: '2026-08-10',
    formattedDate: '10 AGO 2026',
    category: 'Biomecánica',
    readTime: '5 min de lectura',
    author: {
      name: 'Equipo Técnico Master Gym',
      role: 'Especialistas en Fuerza'
    },
    image: '/assets/maquinaria_leverage.jpg',
    tags: ['Equipamiento', 'Leverage', 'Tensión Mecánica']
  },
  {
    id: 4,
    slug: 'como-estructurar-rutina-push-pull-legs',
    title: 'Estructuración de Rutina Push-Pull-Legs para atletas intermedios y avanzados',
    excerpt: 'Un desglose práctico para distribuir volumen semanal por grupo muscular aprovechando nuestras dos sedes (ULEAM y La Proaño) con total flexibilidad.',
    date: '2026-07-28',
    formattedDate: '28 JUL 2026',
    category: 'Rutinas & Programación',
    readTime: '7 min de lectura',
    author: {
      name: 'Head Coach Master Gym',
      role: 'Preparación Física'
    },
    image: '/assets/zona_olimpica.jpg',
    tags: ['PPL', 'Programación', 'Volumen']
  },
  {
    id: 5,
    slug: 'sueno-recuperacion-crecimiento-muscular',
    title: 'Recuperación Neural y Sueño: Lo que pasa fuera del gimnasio determina tus resultados',
    excerpt: 'El descanso no es negociable si buscas recomposición corporal. Estrategias de higiene de sueño y descompresión del sistema nervioso central.',
    date: '2026-07-15',
    formattedDate: '15 JUL 2026',
    category: 'Recuperación',
    readTime: '5 min de lectura',
    author: {
      name: 'Staff Médico & Fitness',
      role: 'Master Gym'
    },
    image: '/assets/sede_uleam.jpg',
    tags: ['Sueño', 'Recuperación', 'SNC']
  }
];

export const getSortedPosts = () => {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
};
