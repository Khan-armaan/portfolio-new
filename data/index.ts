export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on WebSockets",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "BlogSphere a Blogging website",
    des: "full-stack blogging platform with a serverless backend powered by Hono Cloudflare Workers anda responsive frontend",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg","/hono.svg","/prisma.svg","/postgresql.svg"],
    link: "https://blog-sphere-ecru.vercel.app/signup",
  },
  {
    id: 2,
    title: "Mystry Message a Messagigng web App",
    des: "Dive into the World of Anonymous Feedback",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg","/mongo.svg",],
    link: "https://mystrey-magic-app.vercel.app/",
  },
  {
    id: 3,
    title: "Wallet web App",
    des: "A simple wallet web app with a responsive design and a NextJS Backend",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg","/prisma.svg","/postgresql.svg"],
    link: "https://github.com/Khan-armaan/wallet-demo",
  },
  {
    id: 4,
    title: "Portfolio website",
    des: "A portfolio website with NextJS and TailwindCSS",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "",
  },
];

export const testimonials = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: "/re.svg" },
      { name: "Next.js", icon: "/next.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "TailwindCSS", icon: "/tail.svg" },
      { name: "HTML 5", icon: "/html5.svg" },
      { name: "CSS 3", icon: "/css-3.svg" },
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "/nodejs-original-wordmark.svg" },
      { name: "Hono", icon: "/hono.svg" },
      { name: "Prisma", icon: "/prisma.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "Next.js", icon: "/next.svg" },
    ]
  },
  {
    category: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: "/postgresql.svg" },
      { name: "MongoDB", icon: "/mongo.svg" }
    ]
  },
  {
    category: "Tools & Platforms",
    technologies: [
      { name: "Docker", icon: "/dock.svg" },
      { name: "Vim", icon: "/vim.svg" },
      { name: "Turborepo", icon: "/turborepo-icon.svg" },
      { name: "Git", icon: "/git.svg" },
      { name: "Postman", icon: "/postman-icon.svg" },
      { name: "Bash", icon: "/bash.svg" },
      { name: "Github", icon: "/github.svg" },
      { name: "Git", icon: "/git.svg" },
      { name: "Docker", icon: "/dockerName.svg" }
      
    ]
  },

];



export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    desc: "Assisted in the development of a web-based platform and a mobile app using React.js and React Native, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/github1.jpg",
    link: "https://github.com/Khan-armaan"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: ""
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/armaan-khan1/"
  },
];
