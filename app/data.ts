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
  thumbnail: {
    light: string;
    dark: string;
  };
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
  {
    name: 'URL to url Converter',
    description: 'URL Shortening And Management Application',
    detailedDescription: [
      {
        type: 'paragraph',
        content: 'A modern, full-stack URL shortening and management application built with Next.js 15, MongoDB, and NextAuth. Transform long, cumbersome URLs into sleek, memorable links with custom aliases and full analytics.'
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
              'Protected Routes: Role-based access control for user data',
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
          'Icons: Lucide React / SVG for consistent iconography',
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
    demo: 'https://example.com',
    thumbnail: {
      light: '/project1.jpeg',
      dark: '/project1.jpeg'
    },
  },
  {
    name: 'Barely Social',
    description: 'A full-stack social media platform built with the MERN stack featuring user authentication, post creation, and follow functionality.',
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
          'Styling: Custom CSS with responsive design principles',
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
    demo: 'https://example.com',
    thumbnail: {
      light: '/project2.jpeg',
      dark: '/project2.jpeg'
    },
  },
  {
    name: 'Blog Space',
    description: 'A full-featured blogging platform built with Node.js, Express, EJS, and MongoDB, featuring complete CRUD operations and a responsive design.',
    detailedDescription: [
      {
        type: 'paragraph',
        content: 'Blog Space is a complete blogging application that allows users to create, publish, and manage blog posts with an intuitive interface. Built with traditional server-side rendering using EJS templates, it provides a seamless content management experience with full CRUD functionality.'
      },
      {
        type: 'highlight',
        title: '📝 Blog Management Features',
        categories: [
          {
            title: 'Content Operations',
            items: [
              'Create new blog posts with rich text content',
              'Read and view published articles with clean layouts',
              'Update existing posts with in-place editing functionality',
              'Delete posts with confirmation for data integrity'
            ]
          },
          {
            title: 'User Experience',
            items: [
              'In-place editing without page reloads',
              'Clean, organized homepage displaying all posts',
              'SEO-friendly URLs using automatic slug generation',
              'Responsive design for all device sizes'
            ]
          },
          {
            title: 'Content Organization',
            items: [
              'Categorization and tagging system for posts',
              'Search functionality for finding content',
              'Pagination for handling large numbers of posts',
              'Post status management (draft/published)'
            ]
          }
        ]
      },
      {
        type: 'technical',
        title: '🔧 Full-Stack Architecture',
        content: 'Built with a traditional but powerful tech stack focusing on server-side rendering:',
        items: [
          'Backend: Node.js runtime with Express.js framework',
          'Database: MongoDB with Mongoose ODM for data modeling',
          'Template Engine: EJS (Embedded JavaScript) for dynamic views',
          'Styling: Custom CSS with Bootstrap 5 for responsive components',
          'Middleware: Body-parser for request data handling',
          'Utilities: Lodash for efficient data manipulation',
          'File Structure: MVC (Model-View-Controller) pattern implementation'
        ]
      },
      {
        type: 'highlight',
        title: '💾 Database Design',
        categories: [
          {
            title: 'MongoDB Implementation',
            items: [
              'Mongoose schemas for structured data modeling',
              'Indexing for optimized query performance',
              'Data validation and middleware hooks',
              'Relationship management between collections'
            ]
          },
          {
            title: 'Data Management',
            items: [
              'Automatic slug generation for SEO-friendly URLs',
              'Timestamps for creation and update tracking',
              'Text search capabilities',
              'Data aggregation for analytics'
            ]
          }
        ]
      },
      {
        type: 'technical',
        title: '🏗️ Server-Side Rendering Benefits',
        content: 'Utilizing EJS templates provides several advantages:',
        items: [
          'Faster initial page loads with pre-rendered content',
          'SEO optimization with complete HTML on page load',
          'Reduced client-side JavaScript requirements',
          'Better performance on low-powered devices',
          'Server-side data processing and formatting',
          'Consistent rendering across different browsers'
        ]
      },
      {
        type: 'use-cases',
        title: '🎯 Application Scenarios',
        categories: [
          {
            title: 'For Bloggers & Writers',
            items: [
              'Personal blogging platform with full control',
              'Portfolio showcase for creative work',
              'Technical documentation and tutorials',
              'Content management for small publications'
            ]
          },
          {
            title: 'For Developers',
            items: [
              'Learning traditional server-side rendering',
              'Understanding MVC architecture patterns',
              'Database design and optimization practice',
              'Full-stack application deployment experience'
            ]
          },
          {
            title: 'For Organizations',
            items: [
              'Internal knowledge base and documentation',
              'Company blog for updates and announcements',
              'Project documentation and progress tracking',
              'Community engagement platform'
            ]
          }
        ]
      },
      {
        type: 'technical',
        title: '⚡ Performance & Security',
        content: 'Built with attention to both performance and security best practices:',
        items: [
          'Input validation and sanitization for security',
          'Efficient database queries with proper indexing',
          'Optimized asset delivery with compression',
          'Error handling and logging systems',
          'CORS configuration for API security',
          'Environment-based configuration management'
        ]
      },
      {
        type: 'impact',
        content: 'This project demonstrates expertise in traditional full-stack web development, showcasing the ability to build complete, production-ready applications using server-side rendering, proper database design, and clean architecture patterns.'
      }
    ],
    link: '/projects/project3',
    video: 'https://res.cloudinary.com/dkh7dg6fi/video/upload/v1769723312/Blog-Space-video_nbaong.mp4',
    id: 'project3',
    github: 'https://github.com/m-umer-iqbal/P20-MongoDB-Mongoose-Blog-Space',
    demo: 'https://example.com',
    thumbnail: {
      light: '/project3.jpeg',
      dark: '/project3.jpeg'
    },
  },
  {
    name: 'Melodify',
    description: 'A Spotify-inspired music streaming web application built with pure HTML, CSS, and JavaScript, featuring a clean UI and responsive design.',
    detailedDescription: [
      {
        type: 'paragraph',
        content: 'Melodify is a lightweight, frontend-only music streaming application inspired by Spotify. Built entirely with HTML, CSS, and vanilla JavaScript, it delivers a smooth, responsive music experience without requiring any backend infrastructure.'
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
          'Lightweight footprint (~100MB sample limit on GitHub)',
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
    demo: 'https://example.com',
    thumbnail: {
      light: '/project4.jpeg',
      dark: '/project4-dark.jpeg'
    },
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