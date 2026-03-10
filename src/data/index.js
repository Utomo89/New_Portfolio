export const personalInfo = {
  name: "Prasetyo Tri Utomo",
  role: "front-end Developer",
  tagline: "Crafting products people love to use.",
  description:
    "I build responsive, high-performance interfaces that turn ideas into seamless user experiences. Focused on React, Next.js, and scalable frontend systems.",
  email: "prasetyotriutomo63@email.com",
  linkedin: "https://www.linkedin.com/in/prasetyo-tri-utomo-b9a619382/",
  github: "https://github.com/Utomo89",
  cv: "https://drive.google.com/file/d/1XwLIK7fEsuYze0-RlXtsXMA7KbzcnADV/view?usp=drive_link",
  availableForWork: true,
};

export const stats = [
  { number: "5+", label: "Projects shipped" },
  { number: "1", label: "Years building" },
  { number: "2", label: "Tech stacks" },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    highlight: true,
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "PHP", "Laravel"],
    highlight: true,
  },
  {
    category: "Tooling",
    items: ["Git", "Docker", "Vercel", "GitHub Actions"],
    highlight: false,
  },
];

// Kategori yang tersedia: "Frontend" | "AI"
export const projectCategories = ["All", "Frontend", "AI", "FullStack"];

export const projects = [
  {
    number: "01",
    name: "Potato Disease leaf (Academic Project)",
    category: "AI",
    description: "Developed a CNN model using TensorFlow & Keras to detect potato leaf diseases, including data preprocessing and augmentation. The model successfully achieved over 90% accuracy on the test data.",
    stack: ["Next.js", "Tailwind CSS", "Python", "TensorFlow", "Keras"],
    image: "https://res.cloudinary.com/dnjak65ws/image/upload/v1772429723/Tanaman_Kentang_ti9esx.png",
    images: [
    "https://res.cloudinary.com/dnjak65ws/image/upload/v1772594896/Frame_7_rrdnac.png",
  ],
    link: "https://potatota.vercel.app/",
    github: "#",
  },
  {
    number: "02",
    name: "Waste Bank Management System (Freelance)",
    category: "FullStack",
    description: "Built a web-based waste management system using Laravel 12 and Laravel Breeze, featuring role-based authentication, batch management, automated transaction calculations, and a real-time statistics dashboard to streamline operational efficiency.",
    stack: ["Laravel 12", "TailwindCSS", "PHP", "SQLite"],
    image: "https://res.cloudinary.com/dnjak65ws/image/upload/v1771988801/sampah_jgdggf.png",
    images: [                  
    "https://res.cloudinary.com/dnjak65ws/image/upload/v1772594896/Frame_4_h6vfqm.png",
    "https://res.cloudinary.com/dnjak65ws/image/upload/v1772594896/Frame_5_fskvug.png",
    "https://res.cloudinary.com/dnjak65ws/image/upload/v1772594895/Frame_6_wk5t0s.png",
  ],
    link: null,
    github: "#",
  },
  {
    number: "03",
    name: "UD.Al-karomah Landing Page (Freelance)",
    category: "Frontend",
    description: "Engineered a responsive landing page frontend seamlessly integrated with a Laravel 12-powered admin dashboard, enabling UMKM owners to independently manage and update content without technical intervention.",
    stack: ["HTML", "CSS", "Javascript"],
    image: "https://res.cloudinary.com/dnjak65ws/image/upload/v1772432325/UD.Al-karomah_vxw4qa.png",
    images: [                 
    "https://res.cloudinary.com/dnjak65ws/image/upload/v1772594896/Frame_8_cnvfcl.png",
    "https://res.cloudinary.com/dnjak65ws/image/upload/v1772594896/Frame_9_d252r2.png",
  ],
    link: "https://ud-al-karomah.my.id/",
    github: "#",
  },
  {
    number: "04",
    name: "UD.Al-Pandawalima Landing Page (Freelance)",
    category: "Frontend",
    description: "Engineered a responsive landing page frontend seamlessly integrated with a Laravel 12-powered admin dashboard, enabling UMKM owners to independently manage and update content without technical intervention.",
    stack: ["HTML", "CSS", "Javascript"],
    image: "https://res.cloudinary.com/dnjak65ws/image/upload/v1773048471/UD.Pandawalima_v4abak.png",
    images: [                 
    "https://res.cloudinary.com/dnjak65ws/image/upload/v1773049867/pandawa1_wkkpyu.png",
    "https://res.cloudinary.com/dnjak65ws/image/upload/v1773049867/pandawa2_vkymd3.png",
  ],
    link: "https://ud-pandawa-lima.my.id/",
    github: "#",
  },
  {
    number: "05",
    name: "Innovative Home Training Registration Information System (Intern : Remake only frontend)",
    category: "Frontend",
    description: "Built a React for a frontend. This a web application for managing training participant data, featuring training registration and search for users, alongside an admin module for managing training programs, participants, and enrollment reports.",
    stack: ["React.js", "TailwindCSS"],
    image: "https://res.cloudinary.com/dnjak65ws/image/upload/v1773048470/Komdigi_qrwysk.png",
    images: [                 
    "https://res.cloudinary.com/dnjak65ws/image/upload/v1773049867/komdigi_1_gogi4k.png",
    "https://res.cloudinary.com/dnjak65ws/image/upload/v1773049867/komdigi_2_iqotjp.png",
  ],
    link: "https://pendaftaran-remake.netlify.app/",
    github: "#",
  },
];

export const experiences = [
  {
    period: "2025",
    role: "Full-stack Developer",
    company: "",
    type: "Freelance",
    description:
      "Developed a web-based waste management system using Laravel 12 and Laravel Breeze as a Fullstack Developer, implementing structured data workflows, role-based authentication, transaction management, automated calculations, and dashboard reporting to improve operational efficiency.",
  },
  {
    period: "2025",
    role: "Frontend Developer",
    company: "",
    type: "Freelance",
    description:
      "Developed responsive landing page interfaces integrated with a Laravel 12-based admin dashboard, enabling UMKM owners to independently manage and update website content through a user-friendly content management system.",
  },
  {
    period: "2024",
    role: "Web Development Intern",
    company: "BPSDMP Kominfo Surabaya",
    type: "Internship",
    description:
      "Developed a web-based training registration system using PHP (Laravel) and SQLite, serving as the Frontend Developer responsible for designing and implementing responsive, user-friendly interfaces. Contributed to improving the registration process efficiency by up to 80% through streamlined UI workflows and optimized user experience.",
  },
];