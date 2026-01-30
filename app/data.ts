type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  github?: string
  demo?: string
  thumbnail: {
    light: string
    dark: string
  }
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
    description:
      'A comprehensive real-time project management tool with advanced drag-and-drop functionality, team collaboration features, and customizable workflows. This dashboard integrates with multiple productivity tools and provides detailed analytics on team performance, project timelines, and resource allocation. Built with React, Node.js, and WebSocket technology for real-time updates, it supports multiple project views including Kanban boards, Gantt charts, and calendar timelines. The platform includes automated reporting, deadline tracking, and integration with popular tools like Slack, Jira, and Google Workspace.',
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
    description:
      'An innovative platform leveraging state-of-the-art machine learning models to generate high-quality blog posts, social media content, marketing copy, and technical documentation. The system uses GPT-based architectures fine-tuned on domain-specific datasets, offering content suggestions, tone adjustment, and SEO optimization features. With a user-friendly interface and advanced customization options, users can generate content in multiple languages, maintain brand voice consistency, and access a library of templates for various content types. The platform includes plagiarism checking, readability scoring, and collaboration tools for content teams.',
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
    description:
      'An interactive educational tool for visualizing complex neural network architectures, training processes, and data flows in real-time. This application allows users to build custom neural networks through a drag-and-drop interface, visualize activation functions, weight distributions, and gradient flows during training. Supporting multiple network types including CNNs, RNNs, and Transformers, it provides detailed insights into model behavior, feature extraction, and decision-making processes. The tool includes datasets for experimentation, pre-trained model exploration, and export capabilities for research and educational purposes. Perfect for students, researchers, and AI enthusiasts.',
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
    description:
      'A comprehensive IoT dashboard for managing smart home devices with automated routines, energy consumption tracking, and predictive maintenance. This system integrates with over 200 IoT devices from various manufacturers, providing a unified interface for lighting, security, climate control, and entertainment systems. Features include voice command integration, geofencing-based automation, energy usage analytics with cost projections, and AI-powered suggestions for optimization. The platform offers remote access, family member permissions, and detailed activity logs with anomaly detection for enhanced security and efficiency.',
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