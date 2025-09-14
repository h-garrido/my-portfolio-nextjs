import {
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Github,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/hernan-jorge-garrido",
  },
  {
    id: 2,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/h-garrido",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Titulación - Ingeniería en Informática",
    subtitle: "Instituto Profesional Duoc UC",
    description:
      "Proceso de titulación en Ingeniería en Informática con mención en Ciencias de Datos, especializándose en construcción de modelos, pipelines, machine learning, MLOps y generación de reportes para la toma de decisiones.",
    date: "Dic 2025",
  },
  {
    id: 2,
    title: "Proyecto de Título",
    subtitle: "Sistema ETL para Empresa de Construcción Axis",
    description:
      "Actualmente desarrollando un sistema de software para la extracción, transformación y carga de datos de producción, generando insights valiosos para la toma de decisiones empresariales mediante análisis de datos y visualizaciones interactivas.",
    date: "Ago 2025",
  },
  {
    id: 3,
    title: "Practicante Desarrollo Web Fullstack",
    subtitle: "Cooperativa Regional Eléctrica Llanquihue Ltda",
    description:
      "Migración, rediseño y refactorización de la página web principal y sucursal virtual. Aplicación de procesos de modernización utilizando PHP, HTML, CSS, JavaScript y PostgreSQL, mejorando la experiencia tanto para clientes como administradores.",
    date: "Ago 2025",
  },
  {
    id: 4,
    title: "Azure Data Fundamentals (DP-900)",
    subtitle: "Microsoft Azure Certification",
    description:
      "Certificación que valida competencias fundamentales en conceptos de datos, servicios de datos relacionales y no relacionales en Microsoft Azure, y análisis de cargas de trabajo de datos en la nube.",
    date: "Ago 2025",
  },
  {
    id: 5,
    title: "Python Essentials 1",
    subtitle: "Cisco Networking Academy",
    description:
      "Certificación que valida conocimientos fundamentales en programación Python, incluyendo sintaxis, estructuras de datos, programación orientada a objetos y mejores prácticas de desarrollo.",
    date: "Abr 2025",
  },
  {
    id: 6,
    title: "Azure AI Fundamentals (AI-900)",
    subtitle: "Microsoft Azure Certification",
    description:
      "Certificación que valida conocimientos fundamentales en inteligencia artificial y machine learning, incluyendo servicios de IA cognitivos, machine learning y computer vision en Azure.",
    date: "Oct 2024",
  },
  {
    id: 7,
    title: "Ingeniería en Informática - Ciencias de Datos",
    subtitle: "Instituto Profesional Duoc UC",
    description:
      "Formación especializada en construcción de modelos de datos, pipelines, estadísticas, machine learning, MLOps, versionado, monitoreo, retraining y generación de reportes para la toma de decisiones empresariales.",
    date: "2022-2025",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 3,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 5,
    text: "Proyectos desarrollados",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 3,
    text: "Certificaciones obtenidas",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 10,
    text: "Tecnologías dominadas",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "ML WeatherAus",
    image: "/proyecto1.png",
    urlGithub: "https://github.com/h-garrido/weather-aus",
    urlDemo: "#!",
    technologies: ["Python", "SciKit-Learn", "Pandas", "Jupyter", "Kedro", "NumPy"],
  },
  {
    id: 2,
    title: "ML Monopoly",
    image: "/proyecto2.png",
    urlGithub: "https://github.com/h-garrido/Proyecto-Monopoly-Dormammu",
    urlDemo: "#!",
    technologies: ["Python", "SciKit-Learn", "Pandas", "NumPy", "Jupyter", "Streamlit"],
  },
  {
    id: 3,
    title: "WEB Prox. Película MCU",
    image: "/proyecto3.png",
    urlGithub: "https://github.com/h-garrido/proyecto-php",
    urlDemo: "#!",
    technologies: ["PHP", "HTML", "PicoCSS", "API"],
  },
  {
    id: 4,
    title: "Próximo Proyecto...",
    image: "/proximamente.png",
    urlGithub: "#!",
    urlDemo: "#!",
    technologies: [],
  },
];
