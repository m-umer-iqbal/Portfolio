'use client'

import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import Link from 'next/link'
import Image from 'next/image'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  SKILLS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'
import { Mail, ArrowRight } from 'lucide-react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function truncateWords(text: string, wordLimit: number) {
  const words = text.split(/\s+/)
  if (words.length <= wordLimit) return text
  return words.slice(0, wordLimit).join(' ') + '...'
}

function ProjectVideo({ src, thumbnail }: { src: string; thumbnail: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error('Error playing video:', err)
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={thumbnail}
        alt="Project thumbnail"
        fill
        className={`object-cover transition-opacity duration-500 z-20 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        priority
      />
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 h-full w-full object-cover z-10"
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0.1 }} intensity={0.2}>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium text-black transition-all duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-black shadow-sm"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 ml-1"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </Magnetic>
  )
}

function SkillBadge({ name, icon, color }: { name: string; icon?: string; color?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 8 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="group relative flex items-center gap-4 py-3 px-3 rounded-xl transition-colors duration-300 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/40 cursor-default"
    >
      {/* Brand Color Glow Indicator */}
      <div
        className="absolute left-0 h-6 w-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: color || 'currentColor' }}
      />

      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center text-4xl transition-all duration-500 group-hover:scale-110"
        style={{
          color: color || 'currentColor',
          filter: `drop-shadow(0 0 10px ${color ? color + '44' : 'transparent'})`
        }}
      >
        <i className={icon} />
      </div>
      <span className="text-base font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 bg-white dark:bg-black px-1">
        {name}
      </span>
    </motion.div>
  )
}

export default function Personal() {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)))

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-2xl font-medium bg-white dark:bg-black inline-block px-2">About</h3>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <p className="text-zinc-600 dark:text-zinc-400 bg-white dark:bg-black px-1">
              I am a Full-stack Developer specializing in building scalable, high-performance web applications using the MERN stack and Next.js. My work focuses on creating seamless, end-to-end digital solutions that are intuitive, performant, and technically robust.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 bg-white dark:bg-black px-1">
              With a deep understanding of modern frontend frameworks, server-side logic, and database management, I bridge the gap between user-centric design and complex technical architecture. I enjoy transforming ideas into production-ready applications by combining clean code, efficient workflows, and a focus on developer experience.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 bg-white dark:bg-black px-1">
              Whether it’s building dynamic SaaS platforms, complex dashboards, or responsive e-commerce sites, I aim to deliver solutions that are visually engaging, SEO-friendly, and highly scalable across the modern web.
            </p>
          </div>
          <div className="shrink-0 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-1 shadow-2xl ring-1 ring-zinc-200/50 dark:ring-zinc-800/50">
            <Image
              src="/profile-picture.png"
              alt="Profile-Picture"
              width={325}
              height={325}
              className="rounded-2xl object-cover h-80 w-80 mb-0"
              priority
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}>
        <h3 className="mb-5 text-2xl font-medium bg-white dark:bg-black inline-block px-2">Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <Link
              key={project.name}
              href={project.link}
              className="group space-y-2 focus:outline-none"
            >
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectVideo src={project.video} thumbnail={project.thumbnail} />
              </div>
              <div className="px-1">
                <div className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50 bg-white dark:bg-black px-1">
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </div>
                <p className="text-base text-zinc-600 dark:text-zinc-400 bg-white dark:bg-black px-1">
                  {truncateWords(project.description, 10)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}>
        <h3 className="mb-8 text-2xl font-medium bg-white dark:bg-black inline-block px-2">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 bg-white dark:bg-black inline-block px-1">
                {category}
              </h4>
              <div className="flex flex-col gap-2">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}>
        <h3 className="mb-5 text-2xl font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <Link
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={`/experience/${job.id}`}
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="pb-0">
        <h3 className="mb-8 text-2xl font-medium bg-white dark:bg-black inline-block px-2">Contact</h3>

        <div className="relative overflow-hidden rounded-3xl bg-zinc-200/80 dark:bg-zinc-800/80 p-8 md:p-12 ring-1 ring-zinc-300/50 dark:ring-zinc-700/50 backdrop-blur-md transition-all duration-500 hover:ring-zinc-400/50 dark:hover:ring-zinc-600/50 hover:shadow-2xl hover:shadow-zinc-500/20 dark:hover:shadow-zinc-100/10">

          {/* Animated Background Gradients */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-zinc-400/20 blur-3xl dark:bg-zinc-600/20"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-zinc-500/20 blur-3xl dark:bg-zinc-500/20"
          />

          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="space-y-4 max-w-lg">
              <h4 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Let&apos;s build something <span className="bg-gradient-to-r from-zinc-500 to-black bg-clip-text text-transparent dark:from-zinc-400 dark:to-white">amazing</span> together.
              </h4>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I&apos;m currently available for freelance projects and open to full-time opportunities. Reach out if you have a project in mind or just want to say hi!
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full md:w-auto items-start md:items-end">
              <Link
                href={`mailto:${EMAIL}`}
                target="_blank"
                className="group relative flex items-center justify-center gap-3 rounded-2xl bg-zinc-900 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-xl shadow-zinc-900/20 dark:shadow-zinc-100/10 overflow-hidden">
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent z-10" />
                <Mail className="h-5 w-5 relative z-20" />
                <span className="relative z-20">{EMAIL}</span>
                <ArrowRight className="h-4 w-4 relative z-20 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <MagneticSocialLink key={link.label} link={link.link}>
                    {link.label}
                  </MagneticSocialLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}
