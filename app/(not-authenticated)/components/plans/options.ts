export const mainOptions = [
  {
    title: 'VAMOS AL GIMNASIO',
    bgImg: 'background.jpeg'
  },
  {
    title: 'ENTRENÁ DESDE CASA',
    bgImg: 'background.jpeg'
  },
  {
    title: 'ENTRENAMIENTO PRESENCIAL',
    bgImg: 'background.jpeg'
  }
]


export type Plan = {
  title: string;
  bgImg: string;
  dialogContent: {
    subtitle: string;
    items: string[]
  }
}

export const secondaryOptions: Plan[] = [
  {
    title: 'NEW ME',
    bgImg: 'background.jpeg',
    dialogContent: {
      subtitle: 'Si estás comenzando a entrenar, este plan es ideal para vos.',
      items: [
        '4 rutinas fullbody de 45\'/1h',
        'Guía de nutrición',
        'Construí músculo y perdé grasa',
        'Nivel inicial/intermedio',
        'Seguimiento online. Vía Whatsapp',
        'Ganá motivación, constancia y seguridad'
      ]
    }
  },
  {
    title: 'BOOTY UP',
    bgImg: 'background.jpeg',
    dialogContent: {
      subtitle: 'Modelá tu figura, levantá y redondeá tus glúteos.',
      items: [
        'Ganancia de masa muscular con énfasis en glúteos y piernas',
        'Entrenamientos de hipertrofia por grupo muscular',
        'Guía de alimentación con tips claves',
        'Ganá confianza y disciplina',
        'Nivel intermedio/avanzado',
        'Seguimiento online. Vía Whatsapp'
      ]
    }
  },
  {
    title: 'STRONG GIRL',
    bgImg: 'background.jpeg',
    dialogContent: {
      subtitle: 'Si buscás una transformación de cuerpo completo, este es tu plan ideal para volverte más fuerte.',
      items: [
        '6 rutinas (habrá días de fuerza y de hiit)',
        'Guía de nutrición para acompañar el entrenamiento',
        'Seguimiento online. Vía Whatsapp',
        'Nivel intermedio/avanzado',
        'Tomate tus entrenamientos, alimentación y descanso como una prioridad'
      ]
    }
  }
]