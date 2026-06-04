// Icon keys map to SVG components rendered in the project page
export type SectionIcon = 'sparkles' | 'rocket' | 'wrench' | 'building' | 'target' | 'lock' | 'music' | 'stack'

export type ProjectSection = {
  title?: string
  content?: string
  icon?: SectionIcon
  type: 'paragraph' | 'list' | 'highlight' | 'use-cases' | 'technical' | 'impact'
  items?: string[]
  categories?: Array<{
    title: string
    items: string[]
  }>
}

// Per-role description variants for a project
export type ProjectDescriptions = {
  default: ProjectSection[]
  frontend?: ProjectSection[]
  backend?: ProjectSection[]
  fullstack?: ProjectSection[]
  mern?: ProjectSection[]
  web?: ProjectSection[]
}

export type Project = {
  name: string
  description: string
  descriptions: ProjectDescriptions
  link: string
  video: string
  id: string
  github?: string
  demo?: string
  thumbnail: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  description: string
  link: string
  id: string
}

type Skill = {
  name: string
  category: string
  icon?: string
  color?: string
  logo?: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  // ─── Project 1 ──────────────────────────────────────────────────────────────
  {
    name: 'URL to url Converter',
    description: 'URL Shortening and Management Application . . .',
    link: '/projects/project1',
    video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1/URL-to-url-converter-video_ws2pex.mp4',
    id: 'project1',
    github: 'https://github.com/m-umer-iqbal/P24-Next-URL-to-url-Converter',
    demo: '',
    thumbnail: '/project1.jpeg',
    descriptions: {
      default: [
        {
          type: 'paragraph',
          content: 'A full-stack URL shortening application built with Next.js and MongoDB that converts long URLs into clean, customizable links with a user-friendly dashboard.',
        },
        {
          type: 'highlight',
          icon: 'sparkles',
          title: 'Key Features',
          categories: [
            { title: 'Core', items: ['Custom short URLs with user-defined aliases', 'Dashboard to manage and edit links', 'Real-time updates for URLs and aliases', 'One-click copy-to-clipboard'] },
            { title: 'UX', items: ['Responsive design with Tailwind CSS', 'Smooth animations', 'Profile management with avatar upload (Cloudinary)'] },
            { title: 'Auth', items: ['OAuth login (Google, GitHub, LinkedIn, Facebook)', 'Secure session-based authentication'] },
          ],
        },
        {
          type: 'technical',
          icon: 'stack',
          title: 'Tech Stack',
          content: 'Built with modern technologies for performance and scalability:',
          items: ['Next.js (App Router), React', 'Tailwind CSS', 'MongoDB, Mongoose', 'NextAuth.js (OAuth)', 'Cloudinary', 'React-Toastify'],
        },
        {
          type: 'technical',
          icon: 'building',
          title: 'Highlights',
          content: 'Key implementation details:',
          items: ['Scalable API routes for URL management', 'Dynamic routing for URL redirection', 'Reusable component-based architecture', 'Clean and maintainable code structure'],
        },
        {
          type: 'impact',
          content: 'Demonstrates full-stack development skills including authentication, database integration, API design, and building scalable, user-friendly applications.',
        },
      ],
      frontend: [
        {
          type: 'paragraph',
          content: 'A Next.js application with a polished, responsive UI — featuring smooth animations, real-time updates, and a clean dashboard that makes link management effortless.',
        },
        {
          type: 'highlight',
          icon: 'sparkles',
          title: 'UI & Frontend Highlights',
          categories: [
            { title: 'Interface', items: ['Responsive layout with Tailwind CSS', 'Smooth transitions and micro-animations', 'One-click copy-to-clipboard with feedback'] },
            { title: 'UX', items: ['Real-time URL and alias updates', 'Avatar upload with instant preview', 'Clean dashboard with intuitive navigation'] },
          ],
        },
        {
          type: 'technical',
          icon: 'stack',
          title: 'Frontend Stack',
          content: 'Frontend technologies used:',
          items: ['Next.js (App Router)', 'React', 'Tailwind CSS', 'React-Toastify'],
        },
        {
          type: 'impact',
          content: 'Demonstrates strong frontend skills — building production-ready UIs with Next.js, handling real-time state, and delivering a smooth user experience.',
        },
      ],
      backend: [
        {
          type: 'paragraph',
          content: 'A robust backend system powering URL shortening — built with Next.js API routes, MongoDB, and NextAuth.js, with full CRUD operations and OAuth authentication.',
        },
        {
          type: 'highlight',
          icon: 'wrench',
          title: 'Backend Highlights',
          categories: [
            { title: 'API', items: ['RESTful API routes for URL management', 'Dynamic routing for short URL redirection', 'Secure CRUD endpoints for link operations'] },
            { title: 'Auth & Data', items: ['OAuth 2.0 via NextAuth.js (Google, GitHub, LinkedIn, Facebook)', 'Secure session-based authentication', 'MongoDB schema design with Mongoose'] },
          ],
        },
        {
          type: 'technical',
          icon: 'stack',
          title: 'Backend Stack',
          content: 'Backend technologies used:',
          items: ['Next.js API Routes', 'MongoDB, Mongoose', 'NextAuth.js (OAuth)', 'Cloudinary'],
        },
        {
          type: 'impact',
          content: 'Demonstrates backend skills in API design, authentication systems, database management, and building scalable server-side logic.',
        },
      ],
    },
  },
  // ─── Project 2 ──────────────────────────────────────────────────────────────
  {
    name: 'Barely Social',
    description: 'A Minimalist Social Media Web App . . .',
    link: '/projects/project2',
    video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1769720764/Barely-Social-video_ykqzwm.mp4',
    id: 'project2',
    github: 'https://github.com/m-umer-iqbal/P23-React-Barely-Social',
    demo: '',
    thumbnail: '/project2.jpeg',
    descriptions: {
      default: [
        {
          type: 'paragraph',
          content: 'A full-stack social media web application built with the MERN stack, enabling users to create posts, connect with others, and interact through likes and follow systems.',
        },
        {
          type: 'highlight',
          icon: 'sparkles',
          title: 'Key Features',
          categories: [
            { title: 'Auth', items: ['Email-based authentication with secure sessions', 'OAuth login (Google, Facebook, GitHub) via Passport.js', 'Protected routes and API endpoints'] },
            { title: 'Core', items: ['Create, edit, and delete posts', 'Image uploads via Cloudinary', 'Like/dislike system with real-time interactions'] },
            { title: 'Social', items: ['Follow/unfollow users', 'Personalized feeds (Following & Discover)', 'User profiles with activity and bio'] },
          ],
        },
        {
          type: 'technical',
          icon: 'stack',
          title: 'Tech Stack',
          content: 'Built with modern full-stack technologies:',
          items: ['React.js (Hooks, Context API)', 'Node.js, Express.js (REST APIs)', 'MongoDB, Mongoose', 'Passport.js (OAuth)', 'Cloudinary, Multer', 'Tailwind CSS'],
        },
        {
          type: 'technical',
          icon: 'building',
          title: 'Highlights',
          content: 'Key implementation details:',
          items: ['Scalable RESTful API design', 'Secure session-based authentication', 'CRUD for users and posts', 'Optimized DB queries', 'Cloud-based image handling'],
        },
        {
          type: 'impact',
          content: 'Demonstrates strong full-stack skills — API design, authentication, database management, and building scalable social features.',
        },
      ],
      frontend: [
        {
          type: 'paragraph',
          content: 'A React-powered social media frontend — clean, component-driven, and built with Tailwind CSS. Features a real-time feed, profile management, and smooth interactions.',
        },
        {
          type: 'highlight',
          icon: 'sparkles',
          title: 'UI & Frontend Highlights',
          categories: [
            { title: 'Interface', items: ['Component-based React architecture', 'Responsive design with Tailwind CSS', 'Smooth animations and transitions'] },
            { title: 'State & UX', items: ['Context API for global state', 'Real-time feed updates', 'Optimistic UI for likes and follows'] },
          ],
        },
        {
          type: 'technical',
          icon: 'stack',
          title: 'Frontend Stack',
          items: ['React.js (Hooks, Context API)', 'Tailwind CSS', 'Cloudinary (image display)'],
        },
        {
          type: 'impact',
          content: 'Shows React component design, state management with Context API, and building a polished, interactive social UI.',
        },
      ],
      backend: [
        {
          type: 'paragraph',
          content: 'A Node.js/Express REST API powering a social media platform — with secure authentication, image uploads, and full CRUD for users and posts.',
        },
        {
          type: 'highlight',
          icon: 'wrench',
          title: 'Backend Highlights',
          categories: [
            { title: 'API', items: ['RESTful endpoints for users, posts, likes, and follows', 'Protected routes with session authentication', 'Scalable Express.js architecture'] },
            { title: 'Data & Auth', items: ['MongoDB schemas for users and posts', 'Passport.js local + OAuth strategies', 'Multer + Cloudinary for image uploads'] },
          ],
        },
        {
          type: 'technical',
          icon: 'stack',
          title: 'Backend Stack',
          items: ['Node.js, Express.js', 'MongoDB, Mongoose', 'Passport.js (OAuth)', 'Cloudinary, Multer'],
        },
        {
          type: 'impact',
          content: 'Demonstrates REST API design, authentication systems, database schema architecture, and cloud media integration.',
        },
      ],
      mern: [
        {
          type: 'paragraph',
          content: 'A complete MERN stack social media application — MongoDB, Express, React, and Node — with OAuth, image uploads, and a real-time interactive feed.',
        },
        {
          type: 'highlight',
          icon: 'sparkles',
          title: 'MERN Highlights',
          categories: [
            { title: 'Frontend (React)', items: ['Hooks and Context API for state', 'Tailwind CSS responsive UI', 'Component-based architecture'] },
            { title: 'Backend (Node + Express)', items: ['RESTful API with protected routes', 'Passport.js OAuth and local auth', 'Multer + Cloudinary image uploads'] },
            { title: 'Database (MongoDB)', items: ['Mongoose schemas for users and posts', 'Optimized queries for feeds', 'Follow/like relationships'] },
          ],
        },
        {
          type: 'technical',
          icon: 'stack',
          title: 'MERN Stack',
          items: ['MongoDB, Mongoose', 'Express.js', 'React.js (Hooks, Context API)', 'Node.js', 'Passport.js', 'Cloudinary, Multer'],
        },
        {
          type: 'impact',
          content: 'A textbook MERN project — demonstrates the full JavaScript stack from database to UI with real-world social features.',
        },
      ],
    },
  },
  // ─── Project 3 ──────────────────────────────────────────────────────────────
  {
    name: 'Secrets',
    description: 'An Anonymous Secrets Sharing Platform . . .',
    link: '/projects/project3',
    video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1769815244/Secrets-video_xl2tbp.mp4',
    id: 'project3',
    github: 'https://github.com/m-umer-iqbal/P21-Authentication-and-Security-Secrets',
    demo: '',
    thumbnail: '/project3.jpeg',
    descriptions: {
      default: [
        {
          type: 'paragraph',
          content: 'A full-stack web application that allows users to anonymously share secrets, built with modern authentication and industry-standard security practices.',
        },
        {
          type: 'highlight',
          icon: 'lock',
          title: 'Key Features',
          categories: [
            { title: 'Security & Auth', items: ['Password hashing with bcrypt', 'Session-based auth with Passport.js', 'OAuth login (Google, Facebook)', 'Secure cookie management'] },
            { title: 'Core', items: ['Anonymous secret posting and viewing', 'User registration and login', 'Responsive UI with Bootstrap', 'Input validation and secure data handling'] },
          ],
        },
        {
          type: 'technical',
          icon: 'stack',
          title: 'Tech Stack',
          items: ['Node.js, Express.js', 'MongoDB, Mongoose', 'Passport.js (Local + OAuth)', 'bcrypt', 'EJS', 'Bootstrap 5'],
        },
        {
          type: 'impact',
          content: 'Demonstrates authentication systems, security best practices, and full-stack development with real-world OAuth and session management.',
        },
      ],
      backend: [
        {
          type: 'paragraph',
          content: 'A security-focused Node.js/Express application — featuring bcrypt password hashing, Passport.js authentication, OAuth 2.0, and secure session management.',
        },
        {
          type: 'highlight',
          icon: 'lock',
          title: 'Security & Backend Highlights',
          categories: [
            { title: 'Authentication', items: ['bcrypt password hashing', 'Passport.js local strategy', 'OAuth 2.0 (Google, Facebook)', 'Session-based auth with secure cookies'] },
            { title: 'API & Data', items: ['Express.js REST routes', 'MongoDB with Mongoose schemas', 'Input validation and sanitization', 'Protected route middleware'] },
          ],
        },
        {
          type: 'technical',
          icon: 'stack',
          title: 'Backend Stack',
          items: ['Node.js, Express.js', 'MongoDB, Mongoose', 'Passport.js', 'bcrypt', 'EJS (server-side rendering)'],
        },
        {
          type: 'impact',
          content: 'Deep dive into backend security — hashing, OAuth, session handling, and building secure authentication from scratch.',
        },
      ],
      frontend: [
        {
          type: 'paragraph',
          content: 'A server-rendered EJS frontend for an anonymous secrets platform — clean, accessible, and built with Bootstrap 5 for responsiveness across all devices.',
        },
        {
          type: 'highlight',
          icon: 'sparkles',
          title: 'Frontend Highlights',
          categories: [
            { title: 'UI', items: ['Server-side rendering with EJS templates', 'Bootstrap 5 responsive layout', 'Clean, minimal design for anonymous posting'] },
          ],
        },
        {
          type: 'technical',
          icon: 'stack',
          title: 'Frontend Stack',
          items: ['EJS (templating)', 'Bootstrap 5', 'HTML5, CSS3'],
        },
        {
          type: 'impact',
          content: 'Shows server-side rendering, templating, and delivering a functional UI without a client-side framework.',
        },
      ],
    },
  },
  // ─── Project 4 ──────────────────────────────────────────────────────────────
  {
    name: 'Melodify',
    description: 'A Music Streaming Web App . . .',
    link: '/projects/project4',
    video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1769723927/Melodify-video_n8aqtv.mp4',
    id: 'project4',
    github: 'https://github.com/m-umer-iqbal/P14-Melodify',
    demo: '',
    thumbnail: '/project4.jpeg',
    descriptions: {
      default: [
        {
          type: 'paragraph',
          content: 'A lightweight frontend music streaming application built with HTML, CSS, and vanilla JavaScript — delivering smooth playback without any framework or backend.',
        },
        {
          type: 'highlight',
          icon: 'music',
          title: 'Key Features',
          categories: [
            { title: 'Player', items: ['Play, pause, and skip songs', 'Seek bar with progress tracking', 'Volume control and mute/unmute', 'Shuffle and repeat modes'] },
            { title: 'UI', items: ['Responsive design for all devices', 'Dynamic song and album display', 'Smooth animations and transitions'] },
            { title: 'Content', items: ['Dynamic song loading via JSON', 'Easy to add new tracks', 'No backend or database required'] },
          ],
        },
        {
          type: 'technical',
          icon: 'stack',
          title: 'Tech Stack',
          items: ['HTML5 Audio API', 'CSS3 (Flexbox, Grid)', 'JavaScript (ES6+)', 'JSON'],
        },
        {
          type: 'impact',
          content: 'Demonstrates strong JS fundamentals — DOM manipulation, the Audio API, responsive design, and building a complete app without any frameworks.',
        },
      ],
      frontend: [
        {
          type: 'paragraph',
          content: 'A pure frontend music player — built entirely with HTML5, CSS3, and vanilla JavaScript. No frameworks, no dependencies. Just clean, well-structured code and the Web Audio API.',
        },
        {
          type: 'highlight',
          icon: 'music',
          title: 'Frontend Highlights',
          categories: [
            { title: 'JavaScript', items: ['HTML5 Audio API for playback control', 'Dynamic DOM manipulation', 'Event-driven architecture', 'JSON-based song library'] },
            { title: 'CSS & Layout', items: ['CSS3 Flexbox and Grid layouts', 'Responsive design for all screen sizes', 'Smooth CSS transitions and animations'] },
          ],
        },
        {
          type: 'technical',
          icon: 'stack',
          title: 'Frontend Stack',
          items: ['HTML5 Audio API', 'CSS3 (Flexbox, Grid)', 'JavaScript (ES6+)'],
        },
        {
          type: 'impact',
          content: 'Proves strong frontend fundamentals — building interactive, responsive UIs from scratch without relying on libraries or frameworks.',
        },
      ],
    },
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Self-Employed',
    title: 'Full-Stack Web Developer',
    start: 'Nov-2023',
    end: 'Present',
    description: 'Designed and built scalable full-stack web applications using the MERN stack and Next.js. Engineered responsive, mobile-first UIs with React and Tailwind CSS. Developed robust RESTful APIs using Node.js and Express. Architected efficient database schemas with MongoDB and Mongoose. Managed version control with Git and GitHub.',
    link: '/',
    id: 'work1',
  },
  {
    company: 'Quantum Dimensions',
    title: 'Network Engineering Intern',
    start: 'Mar-2025',
    end: 'May-2025',
    description: 'Acquired practical expertise in TCP/IP models and routing protocols. Executed labs on LAN/WAN configurations, VLANs, and NAT using Cisco Packet Tracer. Assisted in troubleshooting network infrastructure. Enhanced backend knowledge by understanding server-level communications.',
    link: '/',
    id: 'work2',
  },
  {
    company: 'GenITeam Solutions',
    title: 'Software Development Intern',
    start: 'Sep-2023',
    end: 'Oct-2023',
    description: 'Co-developed a 2D endless runner game in Unity using C#, applying OOP principles. Implemented core gameplay mechanics, collision detection, and performance optimizations. Designed responsive UI/UX components. Participated in agile code reviews.',
    link: '/',
    id: 'work3',
  },
]

export const SKILLS: Skill[] = [
  { name: 'HTML5', category: 'Frontend', icon: 'devicon-html5-plain', color: '#e34f26' },
  { name: 'CSS3', category: 'Frontend', icon: 'devicon-css3-plain', color: '#1572b6' },
  { name: 'JavaScript', category: 'Frontend', icon: 'devicon-javascript-plain', color: '#f7df1e' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'devicon-tailwindcss-original', color: '#38b2ac' },
  { name: 'React.js', category: 'Frontend', icon: 'devicon-react-original', color: '#61dafb' },
  { name: 'Node.js', category: 'Backend', icon: 'devicon-nodejs-plain', color: '#339933' },
  { name: 'Express.js', category: 'Backend', icon: 'devicon-express-original' },
  { name: 'REST APIs', category: 'Backend', icon: 'fas fa-project-diagram', color: '#0052cc' },
  { name: 'MongoDB', category: 'Database', icon: 'devicon-mongodb-plain', color: '#47a248' },
  { name: 'Mongoose', category: 'Database', icon: 'fas fa-database', color: '#880000' },
  { name: 'Next.js', category: 'Full-Stack', icon: 'devicon-nextjs-plain' },
  { name: 'TypeScript', category: 'Full-Stack', icon: 'devicon-typescript-plain', color: '#3178C6' },
  { name: 'Git', category: 'Tools', icon: 'devicon-git-plain', color: '#f05032' },
  { name: 'GitHub', category: 'Tools', icon: 'devicon-github-original' },
  { name: 'Postman', category: 'Tools', icon: 'devicon-postman-plain', color: '#ff6c37' },
  { name: 'MongoDB Compass', category: 'Tools', icon: 'fas fa-compass', color: '#47a248' },
  { name: 'Vercel', category: 'Tools', icon: 'devicon-vercel-original' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Github', link: 'https://github.com/m-umer-iqbal' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/umeriqbal1' },
]

export const EMAIL = 'official.umer.iqbal@gmail.com'
