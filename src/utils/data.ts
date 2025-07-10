export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  videoUrl?: string;
  githubUrl: string;
  tools: string[];
  category: string;
  slug: string;
  projectStartDate: Date;
  projectStatus: string;
  liveDemoUrl?: string;
  keyFeatures?: string[];
  galleryImages?: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "'PetPal' - Full-Stack Pet Care Management System",
    slug: "petpal-pet-care-system",
    shortDescription: "Secure full-stack web app for comprehensive pet health management.",
    description: 
      "Developed a robust full-stack web application using the App Factory Pattern, focusing on secure user authentication with JWT, password hashing, and email validation. Engineered four interactive health trackers—weight, vaccination, medication, and deworming—enhanced with dynamic data visualization. Built a chronological photo gallery alongside a rich text-enabled medical journal for detailed record-keeping. Successfully addressed complex relational data challenges between pets, owners, and medical records via a normalized SQL database design.",
    imageUrl: "ICarlota-portfolio/images/projects/petpal/home.webp",
    githubUrl: "https://github.com/ICarlota99/Pet-Care-app",
    tools: ["Flask", "SQLAlchemy", "JWT", "JavaScript", "Bootstrap", "Ajax", "SQL"],
    category: "Web",
    projectStartDate: new Date("2024-12-06"),
    projectStatus: "Completed",
    liveDemoUrl: "https://youtu.be/3xJQLtmwenM?feature=shared",
    keyFeatures: [
      "Secure JWT authentication with password hashing and session management",
      "Four health trackers with interactive data visualization",
      "Chronologically sorted photo gallery and rich-text medical journal",
      "Normalized relational SQL database for complex data integrity"
    ],
  },
  {
    id: "2",
    title: "'Heladerías Aloha' - E-Commerce Ice Cream Shop",
    slug: "heladerias-aloha-ecommerce",
    shortDescription: "High-performance marketing site with serverless architecture.",
    description: 
      "Designed and deployed a performant React-based marketing website for a local ice cream business, achieving a Lighthouse score above 90. Integrated WhatsApp API to streamline order submissions, resulting in a 70% reduction in business response time. Implemented a persistent shopping cart leveraging browser localStorage for abandoned cart recovery, enhancing user experience. Delivered a zero-maintenance, serverless solution hosted on Vercel, minimizing backend overhead and operational costs while boosting client orders and improving order management workflows.",
    imageUrl: "ICarlota-portfolio/images/projects/aloha/home.webp",
    githubUrl: "https://github.com/ICarlota99/heladeriasaloha_madryn",
    tools: ["React", "Tailwind CSS", "Vercel", "WhatsApp API"],
    category: "Web",
    projectStartDate: new Date("2024-12-15"),
    projectStatus: "Completed",
    liveDemoUrl: "https://heladeriasaloha-madryn.vercel.app",
    keyFeatures: [
      "Serverless deployment with Vercel for zero-maintenance hosting",
      "WhatsApp API integration for efficient order submission",
      "Persistent cart using localStorage for abandoned cart recovery",
      "Optimized for high Lighthouse performance scores"
    ],
  },
  {
    id: "3",
    title: "Vue.js E-Commerce Prototype (Technical Assessment)",
    slug: "vuejs-ecommerce-prototype",
    shortDescription: "Scalable Vue 3 e-commerce frontend with TypeScript and state management.",
    description: 
      "Architected a modular and scalable Vue 3 e-commerce prototype employing TypeScript and Pinia for state management. Developed over 10 reusable components using the Composition API, enabling maintainable and extensible code structure. Simulated backend REST API with Axios Mock Adapter to support a full frontend development lifecycle. Enhanced user experience with loading skeletons and asynchronous state management, delivering a production-grade interface ready for integration with real APIs.",
    imageUrl: "ICarlota-portfolio/images/projects/vue-ecommerce/home.webp",
    githubUrl: "https://github.com/ICarlota99/Frontend-Vue-Test",
    tools: ["Vue 3", "TypeScript", "Pinia", "Tailwind CSS", "Axios Mock Adapter"],
    category: "Web",
    projectStartDate: new Date("2025-04-15"),
    projectStatus: "Completed",
    liveDemoUrl: "https://icarlota99.github.io/Frontend-Vue-Test",
    keyFeatures: [
      "Reusable components built with Vue 3 Composition API",
      "Mock REST API simulation using Axios Mock Adapter",
      "Loading skeletons for improved perceived performance",
      "Asynchronous state management with Pinia"
    ],
  },
];
