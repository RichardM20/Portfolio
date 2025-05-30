export const translations = {
  es: {
    hero: {
      greeting: "Desarrollador",
      firstRole: "Flutter",
      secondRole: "FullStack",
      description:
        "Soy un desarrollador de software apasionado de Colombia, especializado en Flutter y con experiencia creciente en desarrollo fullstack. Me motiva crear soluciones innovadoras que generan un impacto real",
      downloadCV: "Descargar CV",
      yearsExp: "Años de Experiencia",
      projectsCompleted: "Proyectos",
      technologies: "Tecnologías",
    },

    skills: {
      title: "Stack de Tecnologías",
      subtitle:
        "Tecnologías y herramientas que domino para crear soluciones completas y escalables",
      showMore: "Ver más",
      showLess: "Ver menos",
      more: "más",
    },

    projects: {
      title: "Proyectos",
      subtitle:
        "Una selección de mis proyectos más recientes que demuestran mis habilidades técnicas",
      viewCode: "Ver Código",
      viewDemo: "Ver Demo",
      showMore: "Ver más proyectos",
      showLess: "Ver menos",
      more: "más",
      showPersonal: "Ver personales",
      showBusiness: "Ver profesionales",
      personalProjects: "Personales",
      businessProjects: "Empresariales",
      errorLoading: "Error al cargar los datos",
      loading:'Cargando'
    },

    about: {
      title: "Sobre Mí",
      subtitle: "Conoce más sobre mi trayectoria y experiencia profesional",
      role: "Desarrollador Flutter - FullStack",
      experience: "años de experiencia",
      location: "Disponible",
      description1:
        "Soy un desarrollador apasionado, especializado en Flutter, cuya experiencia en desarrollo fullstack me permite adaptarme rápidamente a diversos desafíos tecnológicos. Mi enfoque está en crear aplicaciones móviles intuitivas y soluciones web escalables que resuelvan problemas reales con eficiencia y calidad",
      description2:
        "He trabajado en proyectos diversos, desde plataformas de comercio electrónico hasta soluciones de bienestar corporativo y gestión empresarial. Aplico buenas prácticas de desarrollo y me mantengo al día con tecnologías modernas.",
      description3:
        "Cuando no estoy programando, disfruto contribuir a proyectos open source, aprender nuevas tecnologías y compartir conocimientos con la comunidad de desarrolladores.",
    },

    footer: {
      rights: "Todos los derechos reservados",
      madeWith: "Desarrollado con",
      and: "y",
    },
  },

  en: {
    hero: {
      greeting: "Developer",
      firstRole: "Flutter",
      secondRole: "FullStack",
      description:
        "I am a passionate software developer from Colombia, specialized in Flutter and with growing experience in fullstack development. I am motivated to create innovative solutions that generate real impact.",
      downloadCV: "Download CV",
      yearsExp: "Years of Experience",
      projectsCompleted: "Projects",
      technologies: "Technologies",
    },

    skills: {
      title: "Technology Stack",
      subtitle:
        "Technologies and tools I master to create complete and scalable solutions",
      showMore: "Show more",
      showLess: "Show less",
      more: "more",
    },

    projects: {
      title: "Projects",
      subtitle:
        "A selection of my most recent projects that demonstrate my technical skills",
      viewCode: "View Code",
      viewDemo: "View Demo",
      showMore: "Show more projects",
      showLess: "Show less",
      more: "more",
      showPersonal: "Show Personal",
      showBusiness: "Show Business",
      personalProjects: "Personal",
      businessProjects: "Business",
      errorLoading: "Loading data failed",
      loading:'Loading',
    },

    about: {
      title: "About Me",
      subtitle: "Learn more about my career and professional experience",
      role: "Flutter - FullStack Developer",
      experience: "years of experience",
      location: "Available",
      description1:
        "I am a passionate developer specialized in Flutter, whose experience in fullstack development allows me to quickly adapt to various technological challenges. My focus is on creating intuitive mobile applications and scalable web solutions that solve real problems efficiently and with quality.",
      description2:
        "I have worked on diverse projects, from e-commerce platforms to corporate wellness solutions and business management. I apply best development practices and stay up to date with modern technologies.",
      description3:
        "When I'm not coding, I enjoy contributing to open source projects, learning new technologies, and sharing knowledge with the developer community.",
    },

    footer: {
      rights: "All rights reserved",
      madeWith: "Built with",
      and: "and",
    },
  },
};

export type Language = keyof typeof translations;
