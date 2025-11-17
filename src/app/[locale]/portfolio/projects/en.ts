import TailorsheetHome from "@/assets/images/tailorsheet-home.png";
import jaimeMoralesHome from "@/assets/images/jaimemoralesdotes-home.png";
import mesgoHome from "@/assets/images/mesgo-home.png";
import { Project } from "../ProjectShowcase";

const en: Project[] = [
  {
    id: "tailorsheet",
    image: {
      src: TailorsheetHome,
      alt: "TailorSheet homepage preview",
    },
    duration: "+1 year",
    teamSize: "2 Members",
    category: "No-Code App Development",
    title: "Website Optimization and Redesign for TailorSheet",
    subtitle: "TailorSheet",
    description:
      "We help TailorSheet to create new web pages and improve current ones designs and optimize their loading performance to enhace their user UI/UX experience.",
    results: [
      {
        value: "78%",
        metric: "Page Load Time",
        description:
          "Improved page load time by a 78% by configurating caching and optimization plugins and reestructiring elementor pages to use less resource intensive widgets",
      },
      {
        value: "+ 200",
        metric: "Created/edited pages",
        description:
          "Refactored whole lists of pages to use correctly WordPress categorization for better breadcrumbs and consistency in designs",
      },
      {
        value: "+ 5",
        metric: "Custom Elementor widgets",
        description:
          "Developed a completely custom plugin used for managing taxonomies and creating custom Elementor widgets reusable through the website",
      },
    ],
    technologies: ["WordPress", "Elementor", "PHP", "JavaScript", "CSS"],
    testimonial: {
      author: "Guillermo Saez",
      position: "CEO of TailorSheet",
      text: "With Bachacode Developers I found what many entrepreneurs are looking for and never find: The peace of mind of being able to leave your business in the hands of people who take care of it and help it grow with solutions that border on excellence. They provide ideas and are 100% involved with each project.",
    },
    externalLink: "https://tailorsheet.com/",
    visitWebsite: "Visit website",
  },
  {
    id: "jaime_morales",
    image: {
      src: jaimeMoralesHome,
      alt: "Jaime Morales homepage preview",
    },
    duration: "1 month",
    teamSize: "2 Members",
    category: "Personal website",
    title: "Complete development of Jaime Morales",
    subtitle: "Jaime Morales",
    description:
      "We created, configured and designed a fully functional WordPress Website for Cybersecurity Expert Jaime Morales, from all the designs and images up to the legal pages and texts used throught the website, everything was developed by us.",
    results: [
      {
        value: "300ms",
        metric: "Page Load Time (Desktop)",
        description:
          "First Contentful Paint was optimized from the beginning to achieve optimal speeds on both mobile and desktop devices",
      },
      {
        value: "+ 10",
        metric: "Created/edited pages",
        description:
          "More than 10 unique pages were designed and created for the website, including 99% of their assets",
      },
    ],
    technologies: ["WordPress", "Elementor", "PHP", "JavaScript", "CSS"],
    externalLink: "https://jaimemorales.es/",
    visitWebsite: "Visit website",
  },
  {
    id: "mesgo",
    image: {
      src: mesgoHome,
      alt: "Mesgo homepage preview",
    },
    duration: "2 months",
    teamSize: "1 Members",
    category: "Corporate website",
    title: "Full development of Mesgo website",
    subtitle: "Mesgo",
    description:
      "We created a fully functional Astro.Js website for Mexican Engineering Supply Group, this is a corporate website with the objective of building a strong and reliable branding for the company.",
    results: [
      {
        value: "200ms",
        metric: "Page Load Time (Desktop)",
        description:
          "First Contentful Paint was optimized from the beginning to achieve optimal speeds on both mobile and desktop devices",
      },
      {
        value: "+ 5",
        metric: "Created/edited pages",
        description:
          "More than 5 unique pages were designed and created for the website, including 99% of their assets",
      },
    ],
    technologies: ["Astro.Js", "React", "TypeScript", "TailwindCSS"],
  },
];

export default en;
