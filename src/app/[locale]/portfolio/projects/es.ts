import TailorsheetHome from "@/assets/images/tailorsheet-home.png";
import jaimeMoralesHome from "@/assets/images/jaimemoralesdotes-home.png";
import mesgoHome from "@/assets/images/mesgo-home.png";
import { Project } from "../ProjectShowcase";

const es: Project[] = [
  {
    id: "tailorsheet",
    image: {
      src: TailorsheetHome,
      alt: "Vista previa de la página de inicio de TailorSheet",
    },
    duration: "+1 año",
    teamSize: "2 Miembros",
    category: "Desarrollo de Aplicaciones No-Code",
    title: "Optimización y Rediseño del Sitio Web para TailorSheet",
    subtitle: "TailorSheet",
    description:
      "Ayudamos a TailorSheet a crear nuevas páginas web y mejorar los diseños de las actuales, optimizando su rendimiento de carga para mejorar la experiencia UI/UX de los usuarios.",
    results: [
      {
        value: "78%",
        metric: "Tiempo de Carga de Página",
        description:
          "Mejoramos el tiempo de carga de la página en un 78% configurando caché y plugins de optimización, y reestructurando páginas de Elementor para usar widgets menos intensivos en recursos.",
      },
      {
        value: "+ 200",
        metric: "Páginas creadas/editadas",
        description:
          "Refactorizamos listas completas de páginas para usar correctamente la categorización de WordPress, logrando mejores migas de pan y consistencia en los diseños.",
      },
      {
        value: "+ 5",
        metric: "Widgets personalizados de Elementor",
        description:
          "Desarrollamos un plugin completamente personalizado para gestionar taxonomías y crear widgets personalizados de Elementor reutilizables en todo el sitio web.",
      },
    ],
    technologies: ["WordPress", "Elementor", "PHP", "JavaScript", "CSS"],
    testimonial: {
      author: "Guillermo Saez",
      position: "CEO de TailorSheet",
      text: "Con Bachacode Developers encontré lo que muchos emprendedores buscan y nunca encuentran: La tranquilidad de poder dejar tu negocio en manos de personas que lo cuidan y ayudan a hacerlo crecer con soluciones que rozan la excelencia. Que aportan ideas y que se implican al 100% con cada proyecto.",
    },
    externalLink: "https://tailorsheet.com/",
    visitWebsite: "Ver sitio",
  },
  {
    id: "jaime_morales",
    image: {
      src: jaimeMoralesHome,
      alt: "Vista previa de la página de inicio de Jaime Morales",
    },
    duration: "1 mes",
    teamSize: "2 Miembros",
    category: "Sitio web personal",
    title: "Desarrollo completo de Jaime Morales",
    subtitle: "Jaime Morales",
    description:
      "Creamos, configuramos y diseñamos un sitio web en WordPress totalmente funcional para el Experto en Ciberseguridad Jaime Morales. Desde todos los diseños e imágenes hasta las páginas legales y los textos usados en todo el sitio web, todo fue desarrollado por nosotros.",
    results: [
      {
        value: "300ms",
        metric: "Tiempo de Carga de Página (Escritorio)",
        description:
          "El First Contentful Paint fue optimizado desde el inicio para lograr velocidades óptimas tanto en dispositivos móviles como de escritorio.",
      },
      {
        value: "+ 10",
        metric: "Páginas creadas/editadas",
        description:
          "Se diseñaron y crearon más de 10 páginas únicas para el sitio web, incluyendo el 99% de sus recursos estaticos.",
      },
    ],
    technologies: ["WordPress", "Elementor", "PHP", "CSS"],
    externalLink: "https://jaimemorales.es/",
    visitWebsite: "Ver sitio",
  },
  {
    id: "mesgo",
    image: {
      src: mesgoHome,
      alt: "Vista previa de la página de inicio de Mesgo",
    },
    duration: "2 meses",
    teamSize: "1 Miembro",
    category: "Sitio web corporativo",
    title: "Desarrollo completo del sitio web de Mesgo",
    subtitle: "Mesgo",
    description:
      "Creamos un sitio web en Astro.Js totalmente funcional para Mexican Engineering Supply Group. Este es un sitio web corporativo con el objetivo de construir una marca sólida y confiable para la empresa.",
    results: [
      {
        value: "200ms",
        metric: "Tiempo de Carga de Página (Escritorio)",
        description:
          "El First Contentful Paint fue optimizado desde el inicio para lograr velocidades óptimas tanto en dispositivos móviles como de escritorio.",
      },
      {
        value: "+ 5",
        metric: "Páginas creadas/editadas",
        description:
          "Se diseñaron y crearon más de 5 páginas únicas para el sitio web, incluyendo el 99% de sus recursos.",
      },
    ],
    technologies: ["Astro.Js", "React", "TypeScript", "TailwindCSS"],
  },
];

export default es;
