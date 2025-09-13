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
    title: "Frontend Developer",
    subtitle: "TechSolutions",
    description:
      "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
    date: "Nov 2023 ",
  },
  {
    id: 2,
    title: "Creador de Experiencias Digitales",
    subtitle: "PixelCrafters",
    description:
      "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
    date: "May 2021",
  },
  {
    id: 3,
    title: "Especialista en Desarrollo Frontend",
    subtitle: "CodeForge Solutions",
    description:
      "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
    date: "Ago 2019",
  },
  {
    id: 4,
    title: "Prácticas Grado",
    subtitle: "WebWizards Inc.",
    description:
      "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
    date: "Mar 2018",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 2,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 3,
    text: "Proyectos realizados",
    lineRight: true,
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
