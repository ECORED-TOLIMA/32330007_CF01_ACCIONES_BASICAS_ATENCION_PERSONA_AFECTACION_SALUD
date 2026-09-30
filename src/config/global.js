export default {
  global: {
    Name: 'Fundamentos de la escena y control de riesgos',
    Description:
      'El componente formativo aborda las bases para reconocer la escena de un incidente y controlar los riesgos que la rodean. Desarrolla la normatividad que respalda al primer respondiente, la clasificación de escenas, incidentes y peligros, la prevención y el autocuidado, las medidas de seguridad, señalización y balizaje, la bioseguridad y la activación del sistema de emergencias médicas.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad básica del primer respondiente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Responsabilidad civil',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Omisión de socorro, abandono, impericia y negligencia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Consentimiento informado',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Cadena de custodia',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Escena, incidente y riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Escena y sus tipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Incidente',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Evaluación de la escena',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tipos de riesgos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Reducción del riesgo',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Prevención y autocuidado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Autocuidado y estilos de vida saludable',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Prevención de enfermedades',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Prevención de lesiones en el hogar, la vía pública y el trabajo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguridad y aseguramiento de la escena',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Normas de seguridad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Factores básicos para asegurar la escena',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Elementos de protección y señalización',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Balizaje',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Bioseguridad y sistema de emergencias médicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Principios y elementos de protección personal',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Técnicas de bioseguridad',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Riesgo biológico y mecanismos de transmisión',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Sistema de emergencias médicas',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Botiquín de primeros auxilios',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Balizaje',
      significado:
        'Técnica de seguridad que delimita, señaliza y protege a distancia una zona de riesgo mediante dispositivos perceptibles, en especial en vías y espacios abiertos.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de principios, medidas y prácticas orientadas a prevenir, controlar y reducir la exposición a agentes biológicos que puedan afectar la salud.',
    },
    {
      termino: 'Cadena de custodia',
      significado:
        'Conjunto de procedimientos que aseguran la identidad, la integridad, la conservación y la trazabilidad de los elementos materiales probatorios en un evento con implicaciones legales.',
    },
    {
      termino: 'Cadena de transmisión',
      significado:
        'Proceso por el cual un agente infeccioso pasa de una fuente de infección a una persona susceptible a través de un mecanismo de transmisión.',
    },
    {
      termino: 'Consentimiento implícito',
      significado:
        'Presunción de que una persona inconsciente o en riesgo vital aceptaría la atención necesaria para preservar su vida, lo que autoriza la intervención inmediata.',
    },
    {
      termino: 'Impericia',
      significado:
        'Falta de los conocimientos, habilidades o destrezas necesarios para realizar una acción de manera adecuada.',
    },
    {
      termino: 'Negligencia',
      significado:
        'Falta de cuidado, atención o diligencia en la ejecución de una acción, aun cuando se cuenta con el conocimiento necesario.',
    },
    {
      termino: 'Omisión de socorro',
      significado:
        'Conducta tipificada en el Código Penal colombiano que consiste en no prestar ayuda a una persona en grave peligro, pudiendo hacerlo sin riesgo propio.',
    },
    {
      termino: 'Riesgo biológico',
      significado:
        'Probabilidad de exposición a microorganismos patógenos presentes en sangre, secreciones u otros fluidos corporales, capaces de generar enfermedades infecciosas.',
    },
    {
      termino: 'Universalidad',
      significado:
        'Principio de bioseguridad según el cual toda persona se considera potencialmente portadora de agentes infecciosos, sin importar su apariencia o su diagnóstico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1887). Ley 57 de 1887, por la cual se adopta el Código Civil. Diario Oficial n.º 7019.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1981). Ley 23 de 1981, por la cual se dictan normas en materia de ética médica. Diario Oficial n.º 35711.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2000). Ley 599 de 2000, por la cual se expide el Código Penal. Diario Oficial n.º 44097.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2002). Ley 769 de 2002, por la cual se expide el Código Nacional de Tránsito Terrestre. Diario Oficial n.º 44932.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2004). Ley 906 de 2004, por la cual se expide el Código de Procedimiento Penal. Diario Oficial n.º 45658.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1523 de 2012, por la cual se adopta la política nacional de gestión del riesgo de desastres y se establece el Sistema Nacional de Gestión del Riesgo de Desastres. Diario Oficial n.º 48411.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Resolución 926 de 2017, por la cual se reglamenta el desarrollo y operación del Sistema de Emergencias Médicas. Ministerio de Salud y Protección Social.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2015). Decreto 1072 de 2015, por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Ministerio del Trabajo.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laura Briguitte Perea Possos',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
