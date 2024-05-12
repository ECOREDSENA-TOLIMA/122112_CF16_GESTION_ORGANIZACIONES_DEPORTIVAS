export default {
  global: {
    componenteFormativo: 'Normas que regulan el proceso contable',
    descripcionCurso:
      'En este componente se abordará la normativa que regula el proceso contable, los estándares técnicos, aspectos legales, prohibiciones y demás elementos temáticos que aportan a la regulación contable.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
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
        titulo: 'Normas que regulan el proceso contable ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Especificaciones, tipos y clases',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estándares técnicos ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características ',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Aspectos legales ',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Prohibiciones ',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Tablas de retención y valoración documental aplicadas al sistema contable',
            hash: 't_1_6',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_16_122112.zip',
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
      tema: 'Estándares técnicos',
      referencia:
        'Gerencie.com. (2020). Marco jurídico de la contabilidad en Colombia.',
      tipo: 'Página web',
      link:
        'https://www.gerencie.com/marco-juridico-de-la-contabilidad-en-colombia.html',
    },
    {
      tema: 'Estándares técnicos',
      referencia:
        'Colombia potencia de la vida. (s.f). Régimen de Contabilidad Pública en Convergencia con Estándares Internacionales de Información Financiera. ',
      tipo: 'Página web',
      link: 'https://www.contaduria.gov.co/rcp-en-convergencia-con-niif-nicsp',
    },
  ],
  glosario: [
    {
      termino: 'Estándares',
      significado:
        'son especificaciones acerca de cómo debe desarrollarse una tarea o función determinada y están basados en acuerdos entre una o más entidades o determinado grupo de personas.',
    },
    {
      termino: 'Normas',
      significado:
        'principios que se imponen o se adoptan para dirigir la conducta o la correcta realización de una acción o el correcto desarrollo de la actividad.',
    },
    {
      termino: 'Prohibiciones',
      significado:
        'veto o limitación que se tiene para tocar, utilizar o realizar algo.',
    },
    {
      termino: 'Regular',
      significado:
        'presenta similitud o continuidad, en su conjunto, desarrollo, distribución o duración.',
    },
    {
      termino: 'Tablas de retención',
      significado:
        'instrumento archivístico, que se utiliza como herramienta para fortalecer y apoyar las estrategias de gestión documental en las empresas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acuerdo 004 de 2019 [Archivo General de la Nación]. Por el cual se reglamenta el procedimiento para la elaboración, aprobación, evaluación y convalidación, implementación, publicación e inscripción en el Registro Único de Series Documentales – RUSD de las Tablas de Retención Documental – TRD y Tablas de Valoración Documental – TVD. Abril 30 de 2019. ',
      link: 'https://normativa.archivogeneral.gov.co/acuerdo-004-de-2019/',
    },
    {
      referencia:
        'Acuerdo 39 de 2002 [Archivo General de la Nación]. Por el cual se regula el procedimiento para la elaboración y aplicación de las Tablas de Retención Documental en desarrollo del artículo 24 de la Ley 594 de 2000. Octubre 31 de 2002.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6351',
    },
    {
      referencia:
        'Contaduría General de la Nación. (s.f.). Marco normativo para entidades de gobierno. Contaduría General de la Nación.',
      link:
        'https://www.contaduria.gov.co/marco-normativo-para-entidades-de-gobierno',
    },
    {
      referencia:
        'Contaduría General de la Nación. (2024). Resolución 533 de 2015. Recuperado de ',
      link:
        'https://www.contaduria.gov.co/documents/20127/36444/Res_%2B533.pdf/b513cc87-7726-04ab-02e4-8691544220c6?t=1558381851097',
    },
    {
      referencia:
        'Contaduría General de la Nación. (2024). Resolución 663 de 2015. Recuperado de ',
      link:
        'https://www.contaduria.gov.co/documents/20127/36444/Res663-2015.pdf/f4264a94-4304-29f9-7eb5-7089ae4617f7?t=1558381849617',
    },
    {
      referencia:
        'Comunidad Contable. (s.f.). Contaduría General de la Nación. Resolución 414 de 2014. Recuperado de ',
      link:
        'https://www.comunidadcontable.com/BancoMedios/Documentos%20PDF/resoluci%C3%B3n%20414%20de%202014.pdf',
    },
    {
      referencia:
        'Decreto 2420 de 2015.  [Presidente de la República de Colombia]. Por medio del cual se expide el decreto único reglamentario de las normas de contabilidad, de información financiera y de aseguramiento de la información y se dictan otras disposiciones. Diciembre 14 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'Decreto 2649 de 1993. [Presidente de la República de Colombia]. Por el cual se reglamenta la contabilidad en general y se expiden los principios o normas de la contabilidad generalmente aceptados en Colombia. Diciembre 29 de 1993.',
      link:
        'https://normativa.archivogeneral.gov.co/decreto-2649-de-1993/?pdf=734',
    },
    {
      referencia:
        'Decreto 410 de 1971. [Presidente de la República de Colombia]. Por el cual se expide el Código de Comercio. Marzo 27 de 1971.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
    {
      referencia:
        'IFRS Foundation. (s.f.). International Financial Reporting Standard. NIIF - Normas Internacionales de Información Financiera.',
      link: 'https://www.ifrs.org/issued-standards/ifrs-for-smes/',
    },
    {
      referencia:
        'Ley 43 de 1990. Por la cual se adiciona la Ley 145 de 1960, reglamentaria de la profesión de Contador Público y se dictan otras disposiciones. Diciembre 13 de 1990.',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/14007/Ley%2043%20de%201990.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Ley 145 de 1960. Por la cual se reglamenta el ejercicio de la profesión de Contador público. Diciembre 30 de 1960.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=66188',
    },
    {
      referencia:
        'Ministerio de Relaciones Exteriores de Colombia. (2016). Decreto 143 de 2004. Recuperado de ',
      link:
        'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/resolucion_contaduria_0148_2004.htm',
    },
    {
      referencia:
        'Secretaría del Senado. (2024). Congreso de la República. Ley 1314 de 2009. Recuperado de ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1314_2009.html',
    },
    {
      referencia:
        'SUIN-Juriscol. (s.f.). Resolución 037 de 2017. Recuperado de ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30039824',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Tatiana Cristina Vargas Ossa',
          cargo: 'Instructora',
          centro: 'Regional Antioquia - Centro de servicios de salud',
        },
        {
          nombre: 'Camilo Andrés Aramburo Parra',
          cargo: 'Experto Temático',
          centro: 'Regional Antioquia - Centro de servicios de salud',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseño Instruccional',
          centro: 'Regional Bogotá - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesoría Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Corrección de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuación Instruccional',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la Formación Virtual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluación Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseño Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollo Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Laura Giselle Murcia Pardo',
          cargo: 'Animación y Producción Audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluación de Contenidos Inclusivos y Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de Recursos Educativos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de Recursos Educativos Digitales',
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
