type ProjectSection = {
  title?: string;
  content?: string;
  type: 'paragraph' | 'list' | 'highlight' | 'use-cases' | 'technical' | 'impact';
  items?: string[];
  categories?: Array<{
    title: string;
    items: string[];
  }>;
};

type Project = {
  name: string;
  description: string;
  detailedDescription?: ProjectSection[]; // Add this for structured content
  link: string;
  video: string;
  id: string;
  github?: string;
  demo?: string;
  thumbnail: string;
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
  icon?: string // icon class name
  color?: string // brand color
  logo?: string // path or url
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  //Project1
  {
    name: 'URL to url Converter',
    description: 'URL Shortening and Management Application . . .',
    detailedDescription: [
      {
        type: 'paragraph',
        content:
          'A full-stack URL shortening application built with Next.js and MongoDB that converts long URLs into clean, customizable links with a user-friendly dashboard.'
      },
      {
        type: 'highlight',
        title: '✨ Key Features',
        categories: [
          {
            title: 'Core Features',
            items: [
              'Custom short URLs with user-defined aliases',
              'Dashboard to manage and edit links',
              'Real-time updates for URLs and aliases',
              'One-click copy-to-clipboard functionality'
            ]
          },
          {
            title: 'User Experience',
            items: [
              'Responsive design using Tailwind CSS',
              'Interactive UI with smooth animations',
              'Profile management with avatar upload (Cloudinary)'
            ]
          },
          {
            title: 'Authentication',
            items: [
              'OAuth login (Google, GitHub, LinkedIn, Facebook)',
              'Secure session-based authentication'
            ]
          }
        ]
      },
      {
        type: 'technical',
        title: '🚀 Tech Stack',
        content: 'Built with modern technologies for performance and scalability:',
        items: [
          'Next.js (App Router), React',
          'Tailwind CSS',
          'MongoDB, Mongoose',
          'NextAuth.js (OAuth)',
          'Cloudinary',
          'React-Toastify'
        ]
      },
      {
        type: 'technical',
        title: '🏗️ Highlights',
        content: 'Key implementation details:',
        items: [
          'Scalable API routes for URL management',
          'Dynamic routing for URL redirection',
          'Reusable component-based architecture',
          'Clean and maintainable code structure'
        ]
      },
      {
        type: 'impact',
        content:
          'Demonstrates full-stack development skills including authentication, database integration, API design, and building scalable, user-friendly applications.'
      }
    ],
    link: '/projects/project1',
    video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1/URL-to-url-converter-video_ws2pex.mp4',
    id: 'project1',
    github: 'https://github.com/m-umer-iqbal/P24-Next-URL-to-url-Converter',
    demo: '',
    thumbnail: '/project1.jpeg',
  },
  //Project2
  {
    name: 'Barely Social',
    description: 'A Minimilist Social Media Web App . . .',
    detailedDescription: [
      {
        type: 'paragraph',
        content:
          'A full-stack social media web application built with the MERN stack, enabling users to create posts, connect with others, and interact through likes and follow systems.'
      },
      {
        type: 'highlight',
        title: '🚀 Key Features',
        categories: [
          {
            title: 'Authentication',
            items: [
              'Email-based authentication with secure sessions',
              'OAuth login (Google, Facebook, GitHub) using Passport.js',
              'Protected routes and API endpoints'
            ]
          },
          {
            title: 'Core Functionality',
            items: [
              'Create, edit, and delete posts',
              'Image uploads using Cloudinary',
              'Like/dislike system with real-time interactions'
            ]
          },
          {
            title: 'User System',
            items: [
              'Follow/unfollow users',
              'Personalized feeds (Following & Discover)',
              'User profiles with activity and bio'
            ]
          },
          {
            title: 'Profile Management',
            items: [
              'Update user info and profile picture',
              'View post history and engagement',
              'Track followers and following'
            ]
          }
        ]
      },
      {
        type: 'technical',
        title: '🔧 Tech Stack',
        content: 'Built with modern full-stack technologies:',
        items: [
          'React.js (Hooks, Context API)',
          'Node.js, Express.js (REST APIs)',
          'MongoDB, Mongoose',
          'Passport.js (OAuth Authentication)',
          'Cloudinary, Multer (Image Uploads)',
          'Tailwind CSS'
        ]
      },
      {
        type: 'technical',
        title: '🏗️ Highlights',
        content: 'Key implementation details:',
        items: [
          'Designed scalable RESTful APIs',
          'Implemented secure session-based authentication',
          'Built CRUD operations for users and posts',
          'Optimized database queries and schema design',
          'Integrated cloud-based image handling'
        ]
      },
      {
        type: 'impact',
        content:
          'Demonstrates strong full-stack development skills, including API design, authentication, database management, and building scalable, user-centric applications.'
      }
    ],
    link: '/projects/project2',
    video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1769720764/Barely-Social-video_ykqzwm.mp4',
    id: 'project2',
    github: 'https://github.com/m-umer-iqbal/P23-React-Barely-Social',
    demo: '',
    thumbnail: '/project2.jpeg',
  },
  //Project3
  {
    name: 'Secrets',
    description: 'An Anonymous Secrets Sharing Platform . . .',
    detailedDescription: [
      {
        type: 'paragraph',
        content:
          'A full-stack web application that allows users to anonymously share secrets, built with modern authentication and industry-standard security practices.'
      },
      {
        type: 'highlight',
        title: '🔐 Key Features',
        categories: [
          {
            title: 'Authentication & Security',
            items: [
              'Password hashing using bcrypt',
              'Session-based authentication with Passport.js',
              'OAuth login (Google, Facebook)',
              'Protected routes and secure session handling'
            ]
          },
          {
            title: 'Core Functionality',
            items: [
              'Anonymous secret posting and viewing',
              'User registration and login system',
              'Responsive UI with Bootstrap',
              'Input validation and secure data handling'
            ]
          }
        ]
      },
      {
        type: 'technical',
        title: '🛠️ Tech Stack',
        content: 'Built with modern backend and authentication technologies:',
        items: [
          'Node.js, Express.js',
          'MongoDB, Mongoose',
          'Passport.js (Local + OAuth)',
          'bcrypt (Password Hashing)',
          'EJS (Server-side rendering)',
          'Bootstrap 5'
        ]
      },
      {
        type: 'technical',
        title: '🏗️ Highlights',
        content: 'Key implementation details:',
        items: [
          'Implemented secure authentication with bcrypt and Passport.js',
          'Integrated OAuth 2.0 for social login',
          'Built session management with secure cookies',
          'Designed MongoDB schemas for user data',
          'Applied security best practices for authentication systems'
        ]
      },
      {
        type: 'impact',
        content:
          'Demonstrates strong understanding of authentication systems, security best practices, and full-stack development with real-world implementation of OAuth and session management.'
      }
    ],
    link: '/projects/project3',
    video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1769815244/Secrets-video_xl2tbp.mp4',
    id: 'project3',
    github: 'https://github.com/m-umer-iqbal/P21-Authentication-and-Security-Secrets',
    demo: '',
    thumbnail: '/project3.jpeg',
  },
  //Project4
  {
    name: 'Melodify',
    description: 'A Music Streaming Web App . . .',
    detailedDescription: [
      {
        type: 'paragraph',
        content:
          'A lightweight frontend music streaming application built with HTML, CSS, and vanilla JavaScript, delivering a smooth and responsive music playback experience without backend dependencies.'
      },
      {
        type: 'highlight',
        title: '🎵 Key Features',
        categories: [
          {
            title: 'Music Player',
            items: [
              'Play, pause, and switch between songs',
              'Progress bar with seek functionality',
              'Volume control with mute/unmute',
              'Shuffle and repeat modes'
            ]
          },
          {
            title: 'User Interface',
            items: [
              'Responsive design for all devices',
              'Dynamic song and album display',
              'Smooth animations and transitions',
              'Clean and intuitive UI'
            ]
          },
          {
            title: 'Content Management',
            items: [
              'Dynamic loading of songs via JSON',
              'Organized file structure for music library',
              'Easy addition of songs and metadata',
              'No backend or database required'
            ]
          }
        ]
      },
      {
        type: 'technical',
        title: '🛠️ Tech Stack',
        content: 'Built using core frontend technologies:',
        items: [
          'HTML5 Audio API',
          'CSS3 (Flexbox, Grid)',
          'JavaScript (ES6+)',
          'JSON (Data Management)'
        ]
      },
      {
        type: 'technical',
        title: '🏗️ Highlights',
        content: 'Key implementation details:',
        items: [
          'Built a complete music player without frameworks',
          'Implemented dynamic DOM manipulation',
          'Designed responsive layouts for all screen sizes',
          'Optimized performance with zero external dependencies',
          'Maintained clean and modular code structure'
        ]
      },
      {
        type: 'impact',
        content:
          'Demonstrates strong fundamentals in JavaScript, DOM manipulation, responsive design, and the ability to build complete applications without relying on frameworks.'
      }
    ],
    link: '/projects/project4',
    video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1769723927/Melodify-video_n8aqtv.mp4',
    id: 'project4',
    github: 'https://github.com/m-umer-iqbal/P14-Melodify',
    demo: '',
    thumbnail: '/project4.jpeg',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Self-Employed',
    title: 'Full-Stack Web Developer',
    start: 'Nov-2023',
    end: 'Present',
    description: "Designed and built scalable full-stack web applications using the MERN stack and Nextjs. Engineered responsive, mobile-first user interfaces with React and Tailwind CSS. Developed robust RESTful APIs using Nodejs and Express for seamless client-server communication. Architected efficient database schemas with MongoDB and Mongoose. Managed version control and collaborative workflows using Git and GitHub.",
    link: '/',
    id: 'work1',
  },
  {
    company: 'Quantum Dimensions',
    title: 'Network Engineering Intern',
    start: 'Mar-2025',
    end: 'May-2025',
    description: "Acquired practical expertise in computer networking fundamentals, including TCP/IP models and routing protocols. Executed comprehensive labs on LAN/WAN configurations, VLANs, and NAT using Cisco Packet Tracer. Assisted in troubleshooting network infrastructure and maintaining documentation. Enhanced backend development knowledge by understanding server-level communications and network architecture.",
    link: '/',
    id: 'work2',
  },
  {
    company: 'GenITeam Solutions',
    title: 'Software Development Intern',
    start: 'Sep-2023',
    end: 'Oct-2023',
    description: "Co-developed a 2D endless runner game in Unity using C#, applying OOP principles for scalable code. Implemented core gameplay mechanics, collision detection, and performance optimizations. Designed responsive UI/UX components for an intuitive player experience. Collaborated in an agile environment, participating in code reviews and iterative development cycles.",
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
  { name: 'TypeScript', category: 'Full-Stack', icon: 'devicon-typescript-plain', color: "#3178C6" },
  { name: 'Git', category: 'Tools', icon: 'devicon-git-plain', color: '#f05032' },
  { name: 'GitHub', category: 'Tools', icon: 'devicon-github-original' },
  { name: 'Postman', category: 'Tools', icon: 'devicon-postman-plain', color: '#ff6c37' },
  { name: 'MongoDB Compass', category: 'Tools', icon: 'fas fa-compass', color: '#47a248' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/m-umer-iqbal',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/umeriqbal1',
  },
]

export const EMAIL = 'official.umer.iqbal@gmail.com'