export const mainOptions = [
  {
    title: 'VAMOS AL GIMNASIO',
    bgImg: 'go-to-gym.jpg'
  },
  {
    title: 'ENTRENÁ DESDE CASA',
    bgImg: 'train-from-home.jpg'
  },
  {
    title: 'ENTRENAMIENTO PRESENCIAL',
    bgImg: 'face-to-face-training.jpg'
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
    bgImg: 'new-me.jpg',
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
    bgImg: 'booty-up.jpg',
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
    bgImg: 'strong-girl.jpg',
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

export const faceToFaceTraining = {
  title: 'ENTRENAMIENTO PRESENCIAL',
  bgImg: 'strong-girl.jpg',
  dialogContent: {
    subtitle: 'Entrenamiento SEMI PERSONALIZADO.',
    items: [
      'Adaptado a tus objetivos y necesidades',
      'Seguimiento constante. Sentite cómodo y cuidado a la hora de entrenar',
      'Preparate para buscar tu mejor versión',
    ]
  }
}

export const nutritionalPlan = {
  title: 'PLAN DE NUTRICIÓN ONLINE',
  bgImg: 'strong-girl.jpg',
  dialogContent: {
    items: [
      'Acorde a tus objetivos, gustos, preferencias y horarios',
      'Armamos tu plan hecho a medida, acompañando al entrenamiento',
      'Consultas de seguimiento para realizar los ajustes necesarios',
    ]
  }
}