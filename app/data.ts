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
    description: 'URL Shortening And Management Application. . .',
    detailedDescription: [
      {
        type: 'paragraph',
        content: 'A modern, full-stack URL shortening and management application built with Next.js 15, MongoDB, and NextAuth. Transform long, cumbersome URLs into sleek, memorable links with custom aliases.'
      },
      {
        type: 'highlight',
        title: '✨ Features',
        categories: [
          {
            title: 'Core Functionality',
            items: [
              'Custom Short URLs: Choose your own "preferred word" aliases for meaningful links',
              'Personal Dashboard: Manage all your converted links in one place',
              'Real-time Editing: Update your original URLs or aliases on the fly',
              'Copy-to-Clipboard: One-click sharing functionality'
            ]
          },
          {
            title: 'User Experience',
            items: [
              'Responsive Design: Beautifully crafted with Tailwind CSS for seamless use on any device',
              'Interactive UI: Uses Lordicons for smooth, premium micro-animations',
              'Profile Management: Customize your public profile with name, username, and Cloudinary-powered avatar uploads'
            ]
          },
          {
            title: 'Security & Authentication',
            items: [
              'Social Authentication: Secure sign-in via Google, GitHub, LinkedIn, and Facebook using NextAuth',
              'Session Management: Secure cookie-based authentication system'
            ]
          }
        ]
      },
      {
        type: 'technical',
        title: '🚀 Tech Stack',
        content: 'Built with modern web technologies for optimal performance and scalability:',
        items: [
          'Framework: Next.js 15 (App Router) with React 19',
          'Styling: Tailwind CSS for utility-first responsive design',
          'Database: MongoDB with Mongoose ODM for data modeling',
          'Authentication: NextAuth.js with multiple OAuth providers',
          'Image Hosting: Cloudinary for secure avatar uploads and transformations',
          'Animations: Lordicon for premium micro-animations',
          'Notifications: React-Toastify for user feedback'
        ]
      },
      {
        type: 'technical',
        title: '🏗️ Architecture',
        content: 'Clean project structure following Next.js best practices:',
        items: [
          'App Router: Next.js 15 App Router for modern routing and layouts',
          'API Routes: Backend API endpoints for URL management and user operations',
          'Dynamic Routing: [preferWord]/ for URL redirection logic',
          'Layouts: Consistent layout structure across all pages',
          'Components: Reusable UI components (Header, Footer, etc.)',
          'Context: React Context API for global state management',
          'Models: Mongoose schemas for database structure',
          'Lib: Helper functions and utilities'
        ]
      },
      {
        type: 'use-cases',
        title: '🎯 Target Users',
        categories: [
          {
            title: 'For Businesses & Marketers',
            items: [
              'Create branded short links for marketing campaigns',
              'Track link performance and user engagement',
              'Share clean, professional URLs on social media'
            ]
          },
          {
            title: 'For Developers & Teams',
            items: [
              'Simplify API documentation links',
              'Share development resources and tools',
              'Create memorable URLs for project deployments'
            ]
          },
          {
            title: 'For Everyday Users',
            items: [
              'Shorten long article and video links',
              'Create personal bookmark collections',
              'Share files and resources with easy-to-remember URLs'
            ]
          }
        ]
      },
      {
        type: 'impact',
        content: 'This project demonstrates expertise in modern full-stack development with Next.js, showcasing production-ready features like authentication, database integration, and responsive design while solving real-world problems of URL management.'
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
    description: 'A Minimilist Social Media Platform Web App. . .',
    detailedDescription: [
      {
        type: 'paragraph',
        content: 'Barely Social is a full-stack social media web application built with the MERN stack (MongoDB, Express, React, Node.js). This platform allows users to connect, share content, and interact with each other through posts, likes, and following systems.'
      },
      {
        type: 'highlight',
        title: '🚀 Key Features',
        categories: [
          {
            title: 'User Authentication & Security',
            items: [
              'Email-based registration and login system',
              'Social login via Google, Facebook, and GitHub using Passport.js',
              'Session-based authentication with secure cookies',
              'Protected routes and API endpoints'
            ]
          },
          {
            title: 'Social Media Functionality',
            items: [
              'Create, edit, and delete posts with text content',
              'Upload images to posts using Cloudinary integration',
              'Like/dislike posts anonymously',
              'Real-time post updates and interactions'
            ]
          },
          {
            title: 'User Connectivity',
            items: [
              'Follow/unfollow other users',
              'Dual feed system: "Following" feed and "Strangers" feed',
              'Profile viewing with user bio and activity',
              'Personalized content based on connections'
            ]
          },
          {
            title: 'Profile Management',
            items: [
              'Update personal information (name, bio, email)',
              'Upload and change profile pictures',
              'View personal post history and activity',
              'Track followers and following count'
            ]
          }
        ]
      },
      {
        type: 'technical',
        title: '🔧 Technical Implementation',
        content: 'This project demonstrates comprehensive full-stack development with modern technologies:',
        items: [
          'Frontend: React.js with functional components and hooks',
          'Backend: Node.js & Express.js RESTful API architecture',
          'Database: MongoDB with Mongoose ODM for data modeling',
          'Authentication: Passport.js for multi-provider OAuth',
          'File Uploads: Cloudinary + Multer for image processing',
          'State Management: React Context API & useState hooks',
          'Styling: Tailwind CSS with responsive design principles',
          'Security: Environment variables, session management, and input validation'
        ]
      },
      {
        type: 'use-cases',
        title: '🎯 Learning Outcomes',
        categories: [
          {
            title: 'Full-Stack Development',
            items: ['Built complete CRUD operations for posts and users', 'Implemented RESTful API endpoints', 'Connected frontend and backend seamlessly']
          },
          {
            title: 'Authentication Systems',
            items: ['Implemented session-based authentication', 'Integrated multiple OAuth providers', 'Managed user sessions and security']
          },
          {
            title: 'Database Design',
            items: ['Designed MongoDB schemas for users and posts', 'Implemented relationships between collections', 'Optimized queries for performance']
          },
          {
            title: 'File Handling',
            items: ['Processed image uploads client and server-side', 'Integrated Cloudinary for cloud storage', 'Optimized images for web delivery']
          }
        ]
      },
      {
        type: 'impact',
        content: 'This project showcases my ability to build complex, full-stack applications with real-world features, emphasizing clean architecture, security best practices, and user-centric design principles.'
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
    description: 'An Anonymous Secret Sharing Platform. . .',
    detailedDescription: [
      {
        type: 'paragraph',
        content: 'Secrets is a production-ready anonymous secret sharing platform built with industry-standard security. The final implementation uses bcrypt password hashing, session-based authentication with Passport.js, and OAuth 2.0 social login (Google & Facebook). This project was developed as a learning exercise, progressively implementing security features from basic to advanced.'
      },
      {
        type: 'highlight',
        title: '🔐 Final Production Implementation',
        categories: [
          {
            title: 'Current Security Features',
            items: [
              'bcrypt password hashing with 10 salt rounds',
              'Session authentication using Passport.js middleware',
              'Google OAuth 2.0 login integration',
              'Facebook OAuth 2.0 login integration',
              'MongoDB with Mongoose for data persistence',
              'Protected routes and secure session management'
            ]
          },
          {
            title: 'What the App Currently Uses',
            items: [
              'NOT using plain text storage (learning phase only)',
              'NOT using MD5 hashing (replaced with bcrypt)',
              'NOT using database-level encryption (replaced with bcrypt)',
              'Using bcrypt + Passport.js + OAuth in production version'
            ]
          }
        ]
      },
      {
        type: 'technical',
        title: '🚀 Core Features',
        content: 'The platform provides a complete anonymous sharing experience with modern security:',
        items: [
          'User registration with securely hashed passwords (bcrypt)',
          'Login with email/password or social accounts',
          'Anonymous secret posting and viewing',
          'Session management with Passport.js',
          'Responsive Bootstrap 5 interface',
          'Social login with Google and Facebook accounts'
        ]
      },
      {
        type: 'technical',
        title: '🛠️ Production Tech Stack',
        content: 'Final implementation uses these technologies:',
        items: [
          'Backend: Node.js + Express.js',
          'Authentication: Passport.js (Local, Google OAuth, Facebook)',
          'Password Security: bcrypt with 10 salt rounds',
          'Database: MongoDB + Mongoose ODM',
          'Templating: EJS for server-side rendering',
          'Frontend: Bootstrap 5 + Custom CSS'
        ]
      },
      {
        type: 'highlight',
        title: '📚 Learning Journey (Not in Production)',
        categories: [
          {
            title: 'Progressive Implementation Steps',
            items: [
              'Step 1: Basic app with plain text storage (replaced)',
              'Step 2: Database encryption with mongoose-encryption (replaced)',
              'Step 3: MD5 hashing (replaced with bcrypt)',
              'Step 4: bcrypt hashing with salt (current implementation)',
              'Step 5: Passport.js session auth (current implementation)',
              'Step 6: OAuth social login (current implementation)'
            ]
          },
          {
            title: 'Learning Purpose',
            items: [
              'Understanding security vulnerabilities',
              'Learning evolution of authentication methods',
              'Comparing different security approaches',
              'Building up to industry standards'
            ]
          }
        ]
      },
      {
        type: 'technical',
        title: '⚡ Current Security Features',
        content: 'The live application implements these security measures:',
        items: [
          'bcrypt password hashing (not reversible)',
          'Secure session cookies with express-session',
          'Passport.js middleware for authentication flow',
          'OAuth 2.0 for third-party authentication',
          'Environment variables for API keys and secrets',
          'Input validation and sanitization'
        ]
      },
      {
        type: 'use-cases',
        title: '💡 Application Uses',
        categories: [
          {
            title: 'For Users',
            items: [
              'Anonymous secret sharing platform',
              'Secure account creation and login',
              'Social login convenience',
              'Confidential message sharing'
            ]
          },
          {
            title: 'For Developers',
            items: [
              'Example of production-ready authentication',
              'Reference for bcrypt + Passport.js implementation',
              'OAuth 2.0 integration example',
              'Secure session management pattern'
            ]
          }
        ]
      },
      {
        type: 'impact',
        content: 'This project demonstrates professional-grade authentication implementation using bcrypt, Passport.js, and OAuth 2.0. While built through progressive learning steps, the final application uses industry-standard security practices suitable for production deployment.'
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
    description: 'A Music Streaming Web App. . .',
    detailedDescription: [
      {
        type: 'paragraph',
        content: 'Melodify is a lightweight, frontend-only music streaming application. Built entirely with HTML, CSS, and vanilla JavaScript, it delivers a smooth, responsive music experience without requiring any backend infrastructure.'
      },
      {
        type: 'highlight',
        title: '🎵 Core Music Features',
        categories: [
          {
            title: 'Music Playback',
            items: [
              'Play, pause, and switch between songs seamlessly',
              'Progress bar with seek functionality',
              'Volume control with mute/unmute options',
              'Repeat and shuffle playback modes'
            ]
          },
          {
            title: 'User Interface',
            items: [
              'Clean, modern design inspired by popular music platforms',
              'Smooth CSS animations and transitions',
              'Dynamic album art and song information display',
              'Intuitive navigation and controls'
            ]
          },
          {
            title: 'Content Management',
            items: [
              'Dynamic song and album loading from JSON files',
              'Organized folder structure for artists and albums',
              'Easy customization of music library',
              'Metadata support for artists and songs'
            ]
          }
        ]
      },
      {
        type: 'technical',
        title: '🛠️ Technical Implementation',
        content: 'Built with a focus on performance and simplicity using pure frontend technologies:',
        items: [
          'HTML5 Audio API for music playback functionality',
          'CSS3 Flexbox and Grid for responsive layouts',
          'Vanilla JavaScript (ES6+) for all interactivity',
          'JSON-based data management for song metadata',
          'Local file system for music storage (no database needed)',
          'Modular code structure for maintainability',
          'Cross-browser compatibility and performance optimization'
        ]
      },
      {
        type: 'highlight',
        title: '📱 Responsive Design',
        categories: [
          {
            title: 'Device Optimization',
            items: [
              'Fully responsive across mobile, tablet, and desktop',
              'Touch-friendly controls for mobile devices',
              'Adaptive layouts based on screen size',
              'Optimized performance on all platforms'
            ]
          },
          {
            title: 'Customization System',
            items: [
              'Easy addition of new songs and artists',
              'Structured folder organization for music files',
              'JSON configuration for artist information',
              'No build process or compilation required'
            ]
          }
        ]
      },
      {
        type: 'use-cases',
        title: '💡 Project Structure & Extensibility',
        categories: [
          {
            title: 'How to Add Your Own Music',
            items: [
              'Create artist folders in the songs directory',
              'Add MP3 files and corresponding info.json files',
              'Update data.json with artist and song information',
              'All changes reflect immediately without rebuilding'
            ]
          },
          {
            title: 'Sample Structure',
            items: [
              'songs/ArtistName/song.mp3',
              'songs/ArtistName/info.json (metadata)',
              'data.json (main catalog file)',
              'Supports unlimited local song additions'
            ]
          }
        ]
      },
      {
        type: 'technical',
        title: '⚡ Performance & Optimization',
        content: 'Designed for optimal performance with minimal dependencies:',
        items: [
          'Zero external dependencies or frameworks',
          'Fast loading with minimal HTTP requests',
          'Efficient audio streaming and buffering',
          'All assets can be hosted on static file servers',
          'No server-side processing required'
        ]
      },
      {
        type: 'impact',
        content: 'This project demonstrates mastery of vanilla JavaScript, modern CSS techniques, and the ability to create fully functional applications without relying on frameworks. It showcases clean code architecture, responsive design principles, and practical solutions for media handling in web applications.'
      }
    ],
    link: '/projects/project4',
    video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1769723927/Melodify-video_n8aqtv.mp4',
    id: 'project4',
    github: 'https://github.com/m-umer-iqbal/P14-Melodify',
    demo: '',
    thumbnail: '/project4.jpeg',
  },
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
  { name: 'Next.js', category: 'Full-Stack Framework', icon: 'devicon-nextjs-plain' },
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
    link: 'https://www.linkedin.com/in/umer-iqbal-313a262b2',
  },
]

export const EMAIL = 'official.umer.iqbal@gmail.com'