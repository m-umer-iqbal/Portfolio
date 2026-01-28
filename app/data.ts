type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  github?: string
  demo?: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
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
    name: 'Dynamic Task Dashboard',
    description:
      'A comprehensive real-time project management tool with advanced drag-and-drop functionality, team collaboration features, and customizable workflows. This dashboard integrates with multiple productivity tools and provides detailed analytics on team performance, project timelines, and resource allocation. Built with React, Node.js, and WebSocket technology for real-time updates, it supports multiple project views including Kanban boards, Gantt charts, and calendar timelines. The platform includes automated reporting, deadline tracking, and integration with popular tools like Slack, Jira, and Google Workspace.',
    link: '/projects/project1',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4#t=0.1',
    id: 'project1',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'AI Content Generator',
    description:
      'An innovative platform leveraging state-of-the-art machine learning models to generate high-quality blog posts, social media content, marketing copy, and technical documentation. The system uses GPT-based architectures fine-tuned on domain-specific datasets, offering content suggestions, tone adjustment, and SEO optimization features. With a user-friendly interface and advanced customization options, users can generate content in multiple languages, maintain brand voice consistency, and access a library of templates for various content types. The platform includes plagiarism checking, readability scoring, and collaboration tools for content teams.',
    link: '/projects/project2',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4#t=0.1',
    id: 'project2',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Neural Network Visualizer',
    description:
      'An interactive educational tool for visualizing complex neural network architectures, training processes, and data flows in real-time. This application allows users to build custom neural networks through a drag-and-drop interface, visualize activation functions, weight distributions, and gradient flows during training. Supporting multiple network types including CNNs, RNNs, and Transformers, it provides detailed insights into model behavior, feature extraction, and decision-making processes. The tool includes datasets for experimentation, pre-trained model exploration, and export capabilities for research and educational purposes. Perfect for students, researchers, and AI enthusiasts.',
    link: '/projects/project3',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4#t=0.1',
    id: 'project3',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Smart Home Automation',
    description:
      'A comprehensive IoT dashboard for managing smart home devices with automated routines, energy consumption tracking, and predictive maintenance. This system integrates with over 200 IoT devices from various manufacturers, providing a unified interface for lighting, security, climate control, and entertainment systems. Features include voice command integration, geofencing-based automation, energy usage analytics with cost projections, and AI-powered suggestions for optimization. The platform offers remote access, family member permissions, and detailed activity logs with anomaly detection for enhanced security and efficiency.',
    link: '/projects/project4',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4#t=0.1',
    id: 'project4',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Lorem Ipsum Studio',
    title: 'Full-Stack Developer',
    start: '2021',
    end: 'Present',
    link: '/',
    id: 'work1',
  },
  {
    company: 'Tech Solutions Inc.',
    title: 'Frontend Developer',
    start: '2019',
    end: '2021',
    link: '/',
    id: 'work2',
  },
  {
    company: 'Creative Agency',
    title: 'Junior Web Developer',
    start: '2017',
    end: '2019',
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