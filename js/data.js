// Contenido de la web en español e inglés.
// Para cambiar textos, edita solo este archivo.
const profile = {
  linkedin: "https://www.linkedin.com/in/jazmin98",
  linkedinLabel: "linkedin.com/in/jazmin98",
  email: "jazminbeatrice98@gmail.com",
  // Fotos de perfil: una para la portada y otra para "Sobre mí"
  // (si no se encuentran, se muestran las iniciales).
  // Las fotos del mosaico "En acción" están en home.gallery de cada idioma.
  photos: {
    home: "./assets/images/perfil.webp",
    about: "./assets/images/sobre-mi.jpg",
  },
};

const cvData = {
  es: {
    nav: [
      "Inicio",
      "Sobre mí",
      "Experiencia",
      "Formación",
      "Habilidades",
      "Contacto",
    ],
    common: {
      skip: "Saltar al contenido",
      footer: "Recursos Humanos · Madrid",
      backToTop: "Volver arriba",
      linkedin: "Conectar en LinkedIn",
      contactMe: "Contactar",
      viewExperience: "Ver experiencia",
      current: "Actualidad",
      achievements: "Logros destacados",
      tools: "Herramientas",
      portrait: "Retrato de Jazmin Quispe",
      menu: "Abrir o cerrar menú",
      pause: "Pausar fotos",
      play: "Reanudar fotos",
      switchLanguage: "Switch to English",
      mainNav: "Principal",
    },
    pages: {
      inicio: {
        title: "Recursos Humanos",
        lead: "Perfil profesional de Jazmin Quispe: Payroll & HR Administration, Talent Acquisition y People & Culture en Madrid.",
      },
      "sobre-mi": {
        eyebrow: "Sobre mí",
        title: "Psicología al servicio de las personas y la organización",
        lead: "Una trayectoria en Recursos Humanos construida en Perú y España, entre la gestión administrativa y el acompañamiento a las personas.",
      },
      experiencia: {
        eyebrow: "Experiencia",
        title: "Trayectoria profesional",
        lead: "Más de dos años en Recursos Humanos: de la selección y la cultura organizacional a la nómina en un entorno multiempresa.",
      },
      formacion: {
        eyebrow: "Formación",
        title: "Aprendizaje continuo",
        lead: "Base en Psicología, especialización en Psicología del Trabajo y formación complementaria en gestión de personas.",
      },
      habilidades: {
        eyebrow: "Habilidades",
        title: "Competencias y herramientas",
        lead: "Conocimiento técnico en administración laboral y nómina, junto con experiencia en gestión del talento.",
      },
      contacto: {
        eyebrow: "Contacto",
        title: "¿Hablamos?",
        lead: "Para oportunidades profesionales, colaboraciones o consultas, escríbeme o conecta conmigo en LinkedIn.",
      },
    },
    home: {
      eyebrow: "Recursos Humanos · Madrid",
      greeting: "Hola, soy",
      rotatorLabel: "Especializada en",
      rotator: [
        "nóminas y Seguridad Social",
        "selección de talento",
        "onboarding y experiencia del empleado",
        "clima y cultura organizacional",
      ],
      summary:
        "Psicóloga y profesional de Recursos Humanos con más de dos años de experiencia en Perú y España. Hoy gestiono nómina y administración laboral en un entorno de más de 30 sociedades y 7.000 empleados.",
      badges: [
        { value: "30+", label: "sociedades · 7.000 empleados" },
        { value: "UCM", label: "Máster en Psicología del Trabajo" },
      ],
      marqueeLabel: "Trayectoria en",
      marquee: [
        "Grupo Auro",
        "Restaurant Brands Europe",
        "Multitop S.A.C.",
        "Inversiones Rubins S.A.C.",
        "Universidad Complutense de Madrid",
        "Insight Club",
      ],
      impactEyebrow: "Impacto",
      impactTitle: "Resultados medibles",
      stats: [
        { value: 2, prefix: "", suffix: "+", label: "años de experiencia en Recursos Humanos", source: "Perú y España" },
        { value: 25, prefix: "−", suffix: "%", label: "en el tiempo de cobertura de vacantes", source: "Multitop S.A.C." },
        { value: 15, prefix: "−", suffix: "%", label: "en la rotación de personal", source: "Inversiones Rubins S.A.C." },
        { value: 25, prefix: "+", suffix: "%", label: "en la satisfacción de colaboradores", source: "Inversiones Rubins · GPTW" },
      ],
      galleryEyebrow: "En acción",
      galleryTitle: "Proyectos y momentos de trabajo",
      galleryLead:
        "De la formación a la cultura organizacional: algunos de los proyectos en los que he participado.",
      gallery: [
        {
          image: "./assets/images/trabajo-1.webp",
          place: "Universidad Complutense de Madrid · 2026",
          title: "Taller de Empleabilidad y Orientación Laboral",
          text: "Sesiones sobre búsqueda de empleo, elaboración de CV y preparación de entrevistas.",
        },
        {
          image: "./assets/images/trabajo-2.jpg",
          place: "Inversiones Rubins S.A.C. · Lima",
          title: "Encuesta Great Place to Work",
          text: "Charlas de sensibilización, explicación de la metodología y seguimiento de su aplicación.",
        },
        {
          image: "./assets/images/trabajo-3.jpg",
          place: "Insight Club · Perú",
          title: "Consultoría de empleabilidad",
          text: "Orientación personalizada para preparar entrevistas y fortalecer perfiles profesionales.",
        },
      ],
      areasEyebrow: "Especialización",
      areasTitle: "Tres áreas, una visión centrada en las personas",
      areas: [
        {
          title: "Payroll & HR Administration",
          text: "Ciclo completo de nómina, Seguridad Social, contratos, finiquitos, IRPF y embargos en un entorno multiempresa.",
          cta: "Ver en Grupo Auro",
          page: "experiencia",
          hash: "auro",
        },
        {
          title: "Talent Acquisition",
          text: "Selección masiva y especializada, criba curricular, entrevistas, onboarding y offboarding.",
          cta: "Ver en Restaurant Brands",
          page: "experiencia",
          hash: "rbe",
        },
        {
          title: "People & Culture",
          text: "Clima laboral, engagement, formación, evaluación del desempeño y despliegue de la encuesta GPTW.",
          cta: "Ver en Inversiones Rubins",
          page: "experiencia",
          hash: "rubins",
        },
      ],
      ctaTitle: "¿Buscas un perfil de Recursos Humanos?",
      ctaText:
        "Psicología, nómina y gestión del talento en un mismo perfil. Conectemos y conversemos sobre cómo puedo aportar a tu equipo.",
    },
    about: {
      paragraphs: [
        "Soy Jazmin Beatriz Quispe Berrocal, licenciada en Psicología y profesional de Recursos Humanos con más de dos años de experiencia en Payroll & HR Administration, Talent Acquisition y People & Culture, desarrollada en Perú y España.",
        "Actualmente me especializo en administración laboral y nóminas en un entorno multiempresa de más de 30 sociedades y 7.000 empleados, donde participo en el ciclo completo de nómina y en la gestión administrativa del personal.",
        "Mi experiencia incluye la implementación de políticas de desarrollo, la evaluación del desempeño y proyectos de clima organizacional, con resultados medibles en retención, satisfacción y eficiencia de selección.",
      ],
      badge: { value: "2+ años", label: "acompañando a personas y equipos" },
      quote: "Detrás de cada nómina, contrato o proceso de selección hay una persona.",
      factsTitle: "En resumen",
      facts: [
        ["Ubicación", "Madrid, España"],
        ["Formación", "Psicología · Máster UCM en curso"],
        ["Experiencia", "Perú y España"],
        ["Idiomas", "Español nativo · Inglés intermedio"],
      ],
    },
    experience: [
      {
        id: "auro",
        role: "Payroll & HR Administration Specialist",
        company: "Grupo Auro",
        location: "Madrid",
        dates: "Jun. 2026 – Actualidad",
        current: true,
        context: "Entorno multiempresa de más de 30 sociedades y 7.000 empleados.",
        tasks: [
          "Participación en el ciclo completo de nómina y gestión administrativa con a3innuva, Sistema RED, TGSS, Contrat@ y SEPE.",
          "Tramitación de altas, bajas y variaciones de datos; elaboración y revisión de contratos, finiquitos e indemnizaciones en coordinación con el área legal.",
          "Gestión de retenciones de IRPF y embargos salariales; seguimiento de incidencias por incapacidad temporal, permisos, excedencias y accidentes de trabajo.",
          "Atención a consultas de empleados y colaboración con equipos internos para resolver incidencias y asegurar la trazabilidad documental.",
        ],
        achievements: [],
        tools: ["a3innuva", "Sistema RED", "TGSS", "Contrat@", "SEPE"],
      },
      {
        id: "rbe",
        role: "Becaria de Recursos Humanos",
        company: "Restaurant Brands Europe",
        location: "Madrid",
        dates: "Mar. – May. 2026",
        current: false,
        context: "Selección masiva para equipos de restauración en entornos de alta rotación.",
        tasks: [
          "Gestión de procesos de selección masiva, incluyendo publicación de ofertas, criba curricular, contacto con candidatos y coordinación de entrevistas con managers.",
          "Seguimiento de candidaturas mediante Bizneo ATS, InfoJobs, Indeed y Job Today, contribuyendo a la cobertura de vacantes en entornos de alta rotación.",
          "Apoyo en la gestión documental de nuevas incorporaciones, tramitación de altas y participación en entrevistas de salida (offboarding).",
        ],
        achievements: [],
        tools: ["Bizneo ATS", "InfoJobs", "Indeed", "Job Today"],
      },
      {
        id: "multitop",
        role: "Analista de Gestión del Talento Humano",
        company: "Multitop S.A.C.",
        location: "Lima",
        dates: "Abr. – Ago. 2025",
        current: false,
        context: "Reclutamiento, selección y onboarding de principio a fin.",
        tasks: [
          "Gestión integral de procesos de reclutamiento y selección, desde la criba curricular y entrevistas hasta la coordinación con las áreas solicitantes.",
          "Organización y seguimiento de programas de onboarding, acompañamiento a nuevas incorporaciones y coordinación de acciones formativas.",
          "Gestión documental y seguimiento de procesos internos del área de Recursos Humanos.",
        ],
        achievements: [
          "Reducción del 25 % en el tiempo de cobertura de vacantes, mediante la optimización de los procesos de selección.",
          "Mejora del proceso de onboarding, facilitando la integración y adaptación de nuevos colaboradores.",
        ],
        tools: [],
      },
      {
        id: "rubins",
        role: "Asistente de Clima, Cultura y Formación",
        company: "Inversiones Rubins S.A.C.",
        location: "Lima",
        dates: "Mar. 2023 – Oct. 2024",
        current: false,
        context:
          "Evolución profesional dentro del área de Recursos Humanos, desde reclutamiento y selección hasta formación, clima y cultura organizacional.",
        tasks: [
          "Coordinación de programas de onboarding y formación para personal operativo y administrativo, en colaboración con responsables de tienda y mandos intermedios.",
          "Desarrollo de iniciativas de clima laboral, engagement y comunicación interna, realizando seguimiento de indicadores de rotación, satisfacción y participación.",
        ],
        achievements: [
          "Implementación de políticas y líneas de carrera para el personal operativo de Footloose, fortaleciendo las oportunidades de desarrollo y promoción interna.",
          "Coordinación del despliegue de la encuesta Great Place to Work (GPTW), incluyendo charlas de sensibilización, explicación de la metodología y seguimiento de su aplicación.",
          "Implementación y seguimiento del proceso de evaluación del desempeño, en coordinación con responsables de las distintas áreas, así como optimización del onboarding.",
          "Contribución a la reducción del 15 % en la rotación de personal y al incremento del 25 % en la satisfacción de colaboradores, mediante iniciativas de cultura, formación y experiencia del empleado.",
        ],
        tools: [],
      },
    ],
    projectsEyebrow: "Proyectos",
    projectsTitle: "Proyectos y emprendimiento",
    projects: [
      {
        role: "Cofundadora",
        name: "Insight Club — Consultoría de Empleabilidad y Recursos Humanos",
        location: "Perú",
        dates: "2024",
        intro:
          "Proyecto de consultoría creado junto a dos profesionales, orientado a mejorar la empleabilidad y acompañar a personas en sus procesos de búsqueda de empleo y desarrollo profesional.",
        tasks: [
          "Asesoramiento en la elaboración y optimización de currículums, aplicando criterios de criba curricular utilizados en procesos de selección.",
          "Preparación de candidatos para entrevistas laborales mediante orientación personalizada y recomendaciones prácticas.",
          "Acompañamiento en estrategias de búsqueda de empleo, fortalecimiento del perfil profesional y presentación de candidaturas.",
        ],
      },
    ],
    educationTitle: "Formación académica",
    education: [
      {
        institution: "Universidad Complutense de Madrid",
        title: "Máster en Psicología del Trabajo, de las Organizaciones y Gestión de Recursos Humanos",
        dates: "2025 – Actualidad",
      },
      {
        institution: "Universidad Femenina del Sagrado Corazón (UNIFÉ)",
        title: "Licenciatura en Psicología",
        dates: "2017 – 2022",
      },
    ],
    coursesTitle: "Formación complementaria",
    topicsTitle: "Contenidos",
    courses: [
      {
        title: "Legislación laboral y planillas",
        institution: "Zegel IPAE",
        description:
          "Formación orientada a comprender la relación entre la normativa laboral y la administración de planillas, con atención a la organización de la información del personal.",
        topics: [
          "Conceptos generales de contratación y obligaciones laborales.",
          "Componentes de la remuneración y organización de datos para planillas.",
          "Registro y revisión de documentación laboral.",
        ],
      },
      {
        title: "Clima y cultura organizacional",
        institution: "Universidad del Pacífico",
        description:
          "Formación centrada en la relación entre la cultura de una organización, el clima laboral y la experiencia de sus colaboradores.",
        topics: [
          "Factores que influyen en la percepción del entorno de trabajo.",
          "Comunicación interna y participación de los equipos.",
          "Encuestas e indicadores como apoyo a iniciativas de mejora.",
        ],
      },
      {
        title: "Seguridad y salud en el trabajo",
        institution: "UNMSM",
        description:
          "Introducción a la prevención de riesgos y a la importancia de promover entornos de trabajo seguros y saludables.",
        topics: [
          "Identificación de peligros y conceptos básicos de evaluación de riesgos.",
          "Medidas preventivas y sensibilización del personal.",
          "Comunicación y documentación en materia de prevención.",
        ],
      },
      {
        title: "Excel profesional",
        institution: "Nivel intermedio",
        description:
          "Formación orientada a organizar, revisar y presentar información mediante hojas de cálculo.",
        topics: [
          "Ordenación, filtros y organización de tablas de datos.",
          "Fórmulas y funciones para el tratamiento de información.",
          "Preparación de resúmenes y gráficos para facilitar la lectura de datos.",
        ],
      },
    ],
    workshopTitle: "Experiencia académica destacada",
    workshop: {
      role: "Formadora · Taller de Empleabilidad y Orientación Laboral",
      institution: "Universidad Complutense de Madrid",
      dates: "2026",
      text: "Impartición de sesiones sobre búsqueda de empleo, elaboración de CV y preparación de entrevistas a estudiantes universitarios.",
    },
    skillGroups: [
      {
        title: "Payroll y administración laboral",
        items: [
          "Nóminas",
          "Seguridad Social",
          "Contratos",
          "Finiquitos e indemnizaciones",
          "IRPF",
          "Embargos salariales",
          "Incapacidad temporal y permisos",
          "Gestión documental",
        ],
      },
      {
        title: "Gestión del talento",
        items: [
          "Selección",
          "Criba curricular",
          "Entrevistas",
          "Onboarding",
          "Offboarding",
          "Formación",
          "Clima y cultura",
          "Evaluación del desempeño",
          "Encuesta GPTW",
        ],
      },
      {
        title: "Herramientas",
        items: [
          "a3innuva",
          "Sistema RED",
          "TGSS",
          "Contrat@",
          "SEPE",
          "Bizneo ATS",
          "InfoJobs",
          "Indeed",
          "Excel intermedio",
        ],
      },
      {
        title: "Competencias transversales",
        items: [
          "Organización y multitarea",
          "Atención al empleado",
          "Coordinación con managers y áreas internas",
          "Trazabilidad documental",
        ],
      },
    ],
    languagesTitle: "Idiomas",
    languages: [
      { code: "ES", name: "Español", level: "Nativo", percent: 100 },
      { code: "EN", name: "Inglés", level: "Intermedio", percent: 60 },
    ],
    contact: {
      linkedinTitle: "LinkedIn",
      emailTitle: "Email",
      locationTitle: "Ubicación",
      location: "Madrid, España",
      note: "Respondo a oportunidades en Recursos Humanos, administración de personal y gestión del talento.",
    },
  },

  en: {
    nav: ["Home", "About", "Experience", "Education", "Skills", "Contact"],
    common: {
      skip: "Skip to content",
      footer: "Human Resources · Madrid",
      backToTop: "Back to top",
      linkedin: "Connect on LinkedIn",
      contactMe: "Get in touch",
      viewExperience: "View experience",
      current: "Present",
      achievements: "Key achievements",
      tools: "Tools",
      portrait: "Portrait of Jazmin Quispe",
      menu: "Toggle navigation",
      pause: "Pause photos",
      play: "Play photos",
      switchLanguage: "Cambiar a español",
      mainNav: "Main",
    },
    pages: {
      inicio: {
        title: "Human Resources",
        lead: "Professional profile of Jazmin Quispe: Payroll & HR Administration, Talent Acquisition and People & Culture in Madrid.",
      },
      "sobre-mi": {
        eyebrow: "About me",
        title: "Psychology in service of people and organizations",
        lead: "A Human Resources career built in Peru and Spain, combining HR administration with supporting people.",
      },
      experiencia: {
        eyebrow: "Experience",
        title: "Professional journey",
        lead: "Over two years in Human Resources: from recruitment and organizational culture to payroll in a multi-company environment.",
      },
      formacion: {
        eyebrow: "Education",
        title: "Continuous learning",
        lead: "A background in Psychology, a specialization in Work Psychology and additional training in people management.",
      },
      habilidades: {
        eyebrow: "Skills",
        title: "Skills and tools",
        lead: "Technical knowledge of HR administration and payroll, together with experience in talent management.",
      },
      contacto: {
        eyebrow: "Contact",
        title: "Let’s talk",
        lead: "For professional opportunities, collaborations or enquiries, email me or connect with me on LinkedIn.",
      },
    },
    home: {
      eyebrow: "Human Resources · Madrid",
      greeting: "Hi, I’m",
      rotatorLabel: "Specialized in",
      rotator: [
        "payroll & Social Security",
        "talent acquisition",
        "onboarding & employee experience",
        "workplace climate & culture",
      ],
      summary:
        "Psychologist and Human Resources professional with over two years of experience in Peru and Spain. I currently manage payroll and HR administration across more than 30 companies and 7,000 employees.",
      badges: [
        { value: "30+", label: "companies · 7,000 employees" },
        { value: "UCM", label: "Master’s in Work Psychology" },
      ],
      marqueeLabel: "Experience at",
      marquee: [
        "Grupo Auro",
        "Restaurant Brands Europe",
        "Multitop S.A.C.",
        "Inversiones Rubins S.A.C.",
        "Universidad Complutense de Madrid",
        "Insight Club",
      ],
      impactEyebrow: "Impact",
      impactTitle: "Measurable results",
      stats: [
        { value: 2, prefix: "", suffix: "+", label: "years of experience in Human Resources", source: "Peru and Spain" },
        { value: 25, prefix: "−", suffix: "%", label: "in time to fill vacancies", source: "Multitop S.A.C." },
        { value: 15, prefix: "−", suffix: "%", label: "in employee turnover", source: "Inversiones Rubins S.A.C." },
        { value: 25, prefix: "+", suffix: "%", label: "in employee satisfaction", source: "Inversiones Rubins · GPTW" },
      ],
      galleryEyebrow: "In action",
      galleryTitle: "Projects and moments at work",
      galleryLead:
        "From training to organizational culture: some of the projects I have been part of.",
      gallery: [
        {
          image: "./assets/images/trabajo-1.webp",
          place: "Universidad Complutense de Madrid · 2026",
          title: "Employability and Career Guidance Workshop",
          text: "Sessions on job searching, CV writing and interview preparation.",
        },
        {
          image: "./assets/images/trabajo-2.jpg",
          place: "Inversiones Rubins S.A.C. · Lima",
          title: "Great Place to Work survey",
          text: "Awareness talks, methodology briefings and follow-up of the survey rollout.",
        },
        {
          image: "./assets/images/trabajo-3.jpg",
          place: "Insight Club · Peru",
          title: "Employability consultancy",
          text: "Personalized guidance to prepare interviews and strengthen professional profiles.",
        },
      ],
      areasEyebrow: "Expertise",
      areasTitle: "Three areas, one people-centred approach",
      areas: [
        {
          title: "Payroll & HR Administration",
          text: "End-to-end payroll, Social Security, contracts, final settlements, income tax and wage garnishments in a multi-company environment.",
          cta: "See at Grupo Auro",
          page: "experiencia",
          hash: "auro",
        },
        {
          title: "Talent Acquisition",
          text: "High-volume and specialized recruitment, CV screening, interviews, onboarding and offboarding.",
          cta: "See at Restaurant Brands",
          page: "experiencia",
          hash: "rbe",
        },
        {
          title: "People & Culture",
          text: "Workplace climate, engagement, training, performance reviews and the GPTW survey rollout.",
          cta: "See at Inversiones Rubins",
          page: "experiencia",
          hash: "rubins",
        },
      ],
      ctaTitle: "Looking for a Human Resources profile?",
      ctaText:
        "Psychology, payroll and talent management in one profile. Let’s connect and talk about how I can contribute to your team.",
    },
    about: {
      paragraphs: [
        "I’m Jazmin Beatriz Quispe Berrocal, a Psychology graduate and Human Resources professional with over two years of experience in Payroll & HR Administration, Talent Acquisition and People & Culture, gained in Peru and Spain.",
        "I currently specialize in HR administration and payroll in a multi-company environment of more than 30 companies and 7,000 employees, taking part in the full payroll cycle and employee administration.",
        "My experience includes implementing development policies, performance reviews and workplace climate projects, with measurable results in retention, satisfaction and recruitment efficiency.",
      ],
      badge: { value: "2+ years", label: "supporting people and teams" },
      quote: "Behind every payslip, contract or hiring process there is a person.",
      factsTitle: "At a glance",
      facts: [
        ["Location", "Madrid, Spain"],
        ["Education", "Psychology · UCM Master’s in progress"],
        ["Experience", "Peru and Spain"],
        ["Languages", "Native Spanish · Intermediate English"],
      ],
    },
    experience: [
      {
        id: "auro",
        role: "Payroll & HR Administration Specialist",
        company: "Grupo Auro",
        location: "Madrid",
        dates: "Jun 2026 – Present",
        current: true,
        context: "Multi-company environment with more than 30 companies and 7,000 employees.",
        tasks: [
          "End-to-end payroll cycle and HR administration using a3innuva, Sistema RED, TGSS, Contrat@ and SEPE.",
          "Processing Social Security registrations, deregistrations and data changes; drafting and reviewing contracts, final settlements and severance payments with the legal team.",
          "Managing income tax (IRPF) withholdings and wage garnishments; tracking sick leave, permits, leaves of absence and workplace accidents.",
          "Handling employee queries and working with internal teams to resolve issues and ensure document traceability.",
        ],
        achievements: [],
        tools: ["a3innuva", "Sistema RED", "TGSS", "Contrat@", "SEPE"],
      },
      {
        id: "rbe",
        role: "Human Resources Intern",
        company: "Restaurant Brands Europe",
        location: "Madrid",
        dates: "Mar – May 2026",
        current: false,
        context: "High-volume recruitment for restaurant teams in high-turnover environments.",
        tasks: [
          "Managed high-volume recruitment processes, including job postings, CV screening, candidate outreach and interview coordination with managers.",
          "Tracked applications through Bizneo ATS, InfoJobs, Indeed and Job Today, helping fill vacancies in high-turnover environments.",
          "Supported new-hire documentation, employee registrations and exit interviews (offboarding).",
        ],
        achievements: [],
        tools: ["Bizneo ATS", "InfoJobs", "Indeed", "Job Today"],
      },
      {
        id: "multitop",
        role: "Talent Management Analyst",
        company: "Multitop S.A.C.",
        location: "Lima",
        dates: "Apr – Aug 2025",
        current: false,
        context: "End-to-end recruitment, selection and onboarding.",
        tasks: [
          "Managed recruitment and selection end to end, from CV screening and interviews to coordination with hiring departments.",
          "Organized and monitored onboarding programmes, supported new employees and coordinated training activities.",
          "Managed documentation and monitored internal HR processes.",
        ],
        achievements: [
          "25% reduction in time to fill vacancies by streamlining selection processes.",
          "Improved the onboarding process, easing the integration and adaptation of new employees.",
        ],
        tools: [],
      },
      {
        id: "rubins",
        role: "Workplace Climate, Culture and Training Assistant",
        company: "Inversiones Rubins S.A.C.",
        location: "Lima",
        dates: "Mar 2023 – Oct 2024",
        current: false,
        context:
          "Career progression within Human Resources, from recruitment and selection to training, workplace climate and organizational culture.",
        tasks: [
          "Coordinated onboarding and training programmes for operational and administrative staff, working with store managers and middle management.",
          "Developed workplace climate, engagement and internal communication initiatives, tracking turnover, satisfaction and participation indicators.",
        ],
        achievements: [
          "Implemented policies and career paths for Footloose operational staff, strengthening development and internal promotion opportunities.",
          "Coordinated the Great Place to Work (GPTW) survey rollout, including awareness talks, methodology briefings and follow-up.",
          "Implemented and monitored the performance review process with managers across departments, and optimized onboarding.",
          "Contributed to a 15% reduction in employee turnover and a 25% increase in employee satisfaction through culture, training and employee experience initiatives.",
        ],
        tools: [],
      },
    ],
    projectsEyebrow: "Projects",
    projectsTitle: "Projects and entrepreneurship",
    projects: [
      {
        role: "Co-founder",
        name: "Insight Club — Employability and HR Consultancy",
        location: "Peru",
        dates: "2024",
        intro:
          "A consultancy project created with two other professionals to improve employability and support people in their job search and professional development.",
        tasks: [
          "Advised on writing and improving CVs, applying the screening criteria used in recruitment processes.",
          "Prepared candidates for job interviews through personalized guidance and practical recommendations.",
          "Supported job search strategies, professional profile building and application submissions.",
        ],
      },
    ],
    educationTitle: "Academic background",
    education: [
      {
        institution: "Universidad Complutense de Madrid",
        title: "Master’s in Work and Organizational Psychology and Human Resources Management",
        dates: "2025 – Present",
      },
      {
        institution: "Universidad Femenina del Sagrado Corazón (UNIFÉ)",
        title: "Degree in Psychology",
        dates: "2017 – 2022",
      },
    ],
    coursesTitle: "Additional training",
    topicsTitle: "Topics",
    courses: [
      {
        title: "Labour law and payroll",
        institution: "Zegel IPAE",
        description:
          "Training on the relationship between labour regulations and payroll administration, with attention to organizing employee information.",
        topics: [
          "General concepts of employment contracts and labour obligations.",
          "Pay components and organization of payroll data.",
          "Recording and reviewing employment documentation.",
        ],
      },
      {
        title: "Organizational climate and culture",
        institution: "Universidad del Pacífico",
        description:
          "Training on the relationship between organizational culture, workplace climate and the employee experience.",
        topics: [
          "Factors shaping perceptions of the working environment.",
          "Internal communication and team participation.",
          "Surveys and indicators to support improvement initiatives.",
        ],
      },
      {
        title: "Occupational health and safety",
        institution: "UNMSM",
        description:
          "An introduction to risk prevention and the importance of promoting safe and healthy workplaces.",
        topics: [
          "Hazard identification and basic risk assessment concepts.",
          "Preventive measures and employee awareness.",
          "Communication and documentation in prevention.",
        ],
      },
      {
        title: "Professional Excel",
        institution: "Intermediate level",
        description:
          "Training focused on organizing, reviewing and presenting information using spreadsheets.",
        topics: [
          "Sorting, filtering and organizing data tables.",
          "Formulas and functions for processing information.",
          "Preparing summaries and charts to make data easier to understand.",
        ],
      },
    ],
    workshopTitle: "Featured academic experience",
    workshop: {
      role: "Trainer · Employability and Career Guidance Workshop",
      institution: "Universidad Complutense de Madrid",
      dates: "2026",
      text: "Delivered sessions to university students on job searching, CV writing and interview preparation.",
    },
    skillGroups: [
      {
        title: "Payroll and HR administration",
        items: [
          "Payroll",
          "Social Security",
          "Contracts",
          "Final settlements and severance",
          "Income tax (IRPF)",
          "Wage garnishments",
          "Sick leave and permits",
          "Document management",
        ],
      },
      {
        title: "Talent management",
        items: [
          "Recruitment",
          "CV screening",
          "Interviews",
          "Onboarding",
          "Offboarding",
          "Training",
          "Climate and culture",
          "Performance reviews",
          "GPTW survey",
        ],
      },
      {
        title: "Tools",
        items: [
          "a3innuva",
          "Sistema RED",
          "TGSS",
          "Contrat@",
          "SEPE",
          "Bizneo ATS",
          "InfoJobs",
          "Indeed",
          "Intermediate Excel",
        ],
      },
      {
        title: "Soft skills",
        items: [
          "Organization and multitasking",
          "Employee support",
          "Coordination with managers and internal teams",
          "Document traceability",
        ],
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { code: "ES", name: "Spanish", level: "Native", percent: 100 },
      { code: "EN", name: "English", level: "Intermediate", percent: 60 },
    ],
    contact: {
      linkedinTitle: "LinkedIn",
      emailTitle: "Email",
      locationTitle: "Location",
      location: "Madrid, Spain",
      note: "Open to conversations about opportunities in Human Resources, HR administration and talent management.",
    },
  },
};
