export default {
  global: {
    componenteFormativo:
      'Verificación del cumplimiento según las estrategias de gobierno, riesgo y cumplimiento',
    descripcionCurso:
      'El logro de objetivos organizacionales es posible en la medida en que se gestionen integralmente los riesgos dentro del cumplimiento de regulaciones nacionales y globales, y también en el marco de las buenas prácticas de gobierno corporativo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Cultura de cumplimiento y gestión de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Gobierno corporativo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Gestión de riesgos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Cumplimiento de la regulación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Gobierno, Riesgo y Cumplimiento en la era digital',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Auditoría de los sistemas de gestión según la ISO 19011',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistema de Gestión de Cumplimiento según la ISO 37301',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_09_228127_DU.zip',
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
  complementario: [
    {
      tema: '1. Cultura de cumplimiento y gestión de riesgos.',
      referencia:
        'SENA. (2020). <em>Aplicabilidad de Caso Práctico en Gobierno, Riesgo y Cumplimiento - GRC - SENA</em> (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yguzJDDvjDA',
    },
    {
      tema: '2. Auditoría de los sistemas de gestión según la ISO 19011',
      referencia:
        'ISO Expertos. (2016). <em>Los 11 secretos para realizar una auditoría que agregue valor</em> (Video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fN5nC7uGNFc',
    },
  ],
  glosario: [
    {
      termino: 'Arquitectura',
      significado:
        'Conjunto de elementos, sus interrelaciones y factores externos que gobiernan su diseño, su comportamiento y su evolución.',
    },
    {
      termino: '<em>BiSL - Business Information Services Library</em>',
      significado:
        'Marco utilizado para la gestión de la información regida por la Fundación <em>ASL BiSL</em> (anteriormente, <em>ASL Foundation</em>).',
    },
    {
      termino: '<em>CIO - Chief Information Officer</em>',
      significado:
        'Director de tecnologías de la información y las comunicaciones, es el ejecutivo que se encarga de que la organización logre el mejor rendimiento posible a través del uso de tecnologías de la información (TI).',
    },
    {
      termino: '<em>CISO - Chief Information Security Officer</em>',
      significado:
        'Rol desempeñado a nivel ejecutivo, corresponde al director de seguridad de la información.',
    },
    {
      termino: 'Cibernética',
      significado:
        'Permite conceptualizar la comunicación como una ciencia de relaciones y mediaciones socio técnicas entre seres humanos y objetos de diferente naturaleza.',
    },
    {
      termino: 'Cohecho',
      significado:
        'Este delito consiste en el soborno a un funcionario público, nacional o extranjero.',
    },
    {
      termino: 'Colusión',
      significado:
        'Es el delito de ponerse de acuerdo para defraudar al Estado.',
    },
    {
      termino: 'Eficacia',
      significado:
        'Grado en el que se realizan las actividades planificadas y se logran los resultados planificados.',
    },
    {
      termino: 'ISO- Organización Internacional de Normalización',
      significado:
        'Federación mundial de organismos nacionales de normalización, que, a través de comités técnicos de ISO, elabora Normas Internacionales.',
    },
    {
      termino: 'Marcos de referencia',
      significado: 'Conjunto de métodos, herramientas y lenguaje común.',
    },
    {
      termino: 'Mandatorio/a',
      significado:
        'Del inglés “<em>mandatory</em>”, y este del lat. tardío “<em>mandatorius</em>”, relativo a un mandato o encargo. Sinónimos: obligatorio, forzoso.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'Capacidad de absorber y adaptarse en un entorno cambiante. (ISO, 2017)',
    },
    {
      termino: 'Riesgos cibernéticos',
      significado:
        'Los ciberriesgos son riesgos que tienen al menos tres características claves: son sistémicos (tienen efecto en cascada), emergentes (surgen como fruto del nivel de acoplamiento e interacción de diversos componentes) y disruptivos (generan efectos inesperados sobre la dinámica del sistema), los cuales están presentes en el entorno ciberfísico, lo que se traduce en una convergencia entre lo físico, lo lógico y lo biológico, como fundamento de la dinámica de la Cuarta Revolución Industrial. (Cano, 2019)',
    },
    {
      termino: 'Gobierno, Riesgo y Cumplimento - GRC',
      significado:
        'OCEG (2022) define a GRC como "la colección integrada de capacidades que permiten a una organización alcanzar objetivos de manera confiable, abordar la incertidumbre y actuar con integridad".',
    },
    {
      termino: 'Transformación Digital',
      significado:
        'Es la adaptación continua de los negocios a las exigencias del entorno cambiante. Es un enfoque centrado en el cliente que utiliza tecnologías digitales para aprovechar los datos e impulsar flujos de trabajo inteligentes. Entre las tecnologías utilizadas actualmente y en el futuro cercano, tenemos la Inteligencia Artificial, la automatización, IoT, nube híbrida, <em>Blockchain</em> y Microservicios.<br>El objetivo de la transformación digital es construir una base técnica y operativa para evolucionar y responder de la mejor manera posible a las expectativas impredecibles y cambiantes de los clientes, las condiciones del mercado y los eventos locales o globales.',
    },
    {
      termino: 'Tráfico de influencias',
      significado:
        'Es el intercambio de un bien por la promesa de interceder en el ámbito judicial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cano, J. (2019). Ciberriesgo. Aprendizaje de un riesgo sistémico, emergente y disruptivo. <em>Revista SISTEMAS. Asociación Colombiana de Ingenieros de Sistemas, (151)</em>, p. 63-73. ',
      link: 'https://doi.org/10.29236/sistemas.n151a5',
    },
    {
      referencia:
        'Cascón, J. (2021). <em>GRC Gobierno Corporativo, Riesgo y Cumplimiento.</em>  ',
      link:
        'https://www.researchgate.net/profile/Javier-Ismodes-2/publication/348280507_GRC_JIC_v70/links/5ff6225e45851553a02626da/GRC-JIC-v70.pdf',
    },
    {
      referencia:
        'Deloitte. (s. f.). <em>¿Qué es el gobierno corporativo? Transparencia y confianza.</em> ',
      link:
        'https://www2.deloitte.com/es/es/pages/governance-risk-and-compliance/articles/que-es-el-gobierno-corporativo.html',
    },
    {
      referencia:
        'Departamento Nacional de Planeación [DNP]. (s. f.). Rutas especializadas para la formulación de los Planes de Desarrollo Territoriales. <em>Buen Gobierno</em>. ',
      link:
        'https://www.funcionpublica.gov.co/documents/418537/28834001/Rutas+Especializadas+Buen+Gobierno.pdf',
    },
    {
      referencia:
        'Fundación Latinoamericana de Auditores Internos [FLAI]. (2020). <em>El Modelo de las Tres Líneas del IIA 2020.</em> ',
      link:
        'https://www.theiia.org/globalassets/documents/resources/the-iias-three-lines-model-an-update-of-the-three-lines-of-defense-july-2020/three-lines-model-updated-spanish.pdf',
    },
    {
      referencia: 'ISACA. (s. f.). COBIT. <em>An ISACA Framework.</em> ',
      link: 'https://www.isaca.org/resources/cobit',
    },
    {
      referencia:
        'ISO Expertos. (2018). <em>Los 11 secretos para realizar una auditoría que agregue valor</em> (Video). YouTube. ',
      link: 'https://www.youtube.com/watch?v=fN5nC7uGNFc',
    },
    {
      referencia: 'OCEG. (s. f.). <em>What Is GRC?</em> ',
      link: 'https://www.oceg.org/about/what-is-grc/',
    },
    {
      referencia:
        'Organización Internacional de Normalización [ISO]. (2017). <em>Security and resilience — Organizational resilience — Principles and attributes</em> (ISO 22316). ',
      link: 'https://www.iso.org/obp/ui#iso:std:iso:22316:ed-1:v1:en',
    },
    {
      referencia:
        'Organización Internacional de Normalización [ISO]. (2018a). <em>Directrices para la auditoría de los sistemas de gestión</em> (ISO 19011). ',
      link: 'https://www.iso.org/obp/ui#iso:std:iso:19011:ed-3:v1:es',
    },
    {
      referencia:
        'Organización Internacional de Normalización [ISO]. (2018b). <em>Gestión del riesgo - Directrices</em> (ISO 31000). ',
      link: 'https://www.iso.org/obp/ui#iso:std:iso:31000:ed-2:v1:es',
    },
    {
      referencia:
        'Organización Internacional de Normalización [ISO]. (2021). <em>Compliance management systems — Requirements with guidance for use</em> (ISO 37301). ',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso:37301:ed-1:v1:es',
    },
    {
      referencia:
        'SENA. (2020). <em>Aplicabilidad de Caso Práctico en Gobierno, Riesgo y Cumplimiento - GRC - SENA</em> (Video). YouTube. ',
      link: 'https://www.youtube.com/watch?v=yguzJDDvjDA',
    },
    {
      referencia:
        'Thaller, E. y Bravo, J. (2021). <em>Beyond Compliance: Aplicación de la Norma ISO 37301 en cualquier organización interesada en el compliance.</em> Paton Professional. ',
      link:
        'https://books.google.com.co/books?id=-dxCEAAAQBAJ&pg=PT60&hl=es&source=gbs_selected_pages&cad=2#v=onepage&q&f=false',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dolly Stella Carrillo Vega',
          cargo: 'Experta Temático',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora Pedagógica y Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Guillermo Zuluaga Saavedra',
          cargo: 'Expero Temático',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñadora Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producctor y Animador Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producctor y Animador Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Producctor y Animador Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
