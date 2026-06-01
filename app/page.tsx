'use client'

import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import {
  PROJECTS,
  SKILLS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'
import { Mail, ArrowRight } from 'lucide-react'

const ROLES = {
  frontend: 'Frontend Web Developer',
  backend: 'Backend Web Developer',
  fullstack: 'Full-Stack Web Developer',
  mern: 'MERN Stack Web Developer',
  web: 'Web Developer',
} as const

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
          filter: `drop-shadow(0 0 10px ${color ? color + '44' : 'transparent'})`,
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
  const categories = Array.from(new Set(SKILLS.map((s) => s.category)))
  const query = useSearchParams()
  const roleKey = query.get('role') ?? 'web'
  const roleLabel =
    (ROLES as Record<string, string>)[roleKey] ?? ROLES.web

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* ── About ── */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="bg-white dark:bg-black"
      >
        <h3 className="mb-6 text-2xl font-medium inline-block px-2">About</h3>

        {/* Intro headline */}
        <div className="px-2 mb-8">
          <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-snug">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-zinc-500 to-black bg-clip-text text-transparent dark:from-zinc-400 dark:to-white">
              Umer Iqbal
            </span>{' '}
            &mdash; {roleLabel}.
          </p>
        </div>

        {/* Bio paragraphs */}
        <div className="space-y-4 px-2 mb-8">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Final-year Computer Science student at{' '}
            <strong className="text-zinc-800 dark:text-zinc-200">Pak-AIMS</strong>, passionate
            about building things for the web. I focus on clean design, solid performance, and
            solving real problems.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I&apos;ve shipped 4+ production-ready projects using React, Next.js, Node.js, and
            MongoDB &mdash; including a{' '}
            <Link
              href="https://www.linkedin.com/posts/umer-iqbal-313a262b2_webdevelopment-frontenddevelopment-javascript-activity-7324003954202193920-PbDi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEtCJD8BRBsOk8kjSCdY_uCT2X1OCw4S11E"
              target="_blank"
              className="font-medium text-zinc-900 dark:text-zinc-100 underline underline-offset-4 decoration-zinc-400 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 transition-colors duration-200"
            >
              CGPA/GPA Calculator
            </Link>{' '}
            built for my university.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Currently open to{' '}
            <strong className="text-zinc-800 dark:text-zinc-200">internship</strong> and{' '}
            <strong className="text-zinc-800 dark:text-zinc-200">junior developer</strong> roles
            &mdash; remote or on-site in Lahore, Pakistan.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 px-2 mb-8">
          {[
            { value: '4+', label: 'Projects shipped' },
            { value: '2+', label: 'Years building' },
            { value: '10+', label: 'Technologies' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 ring-1 ring-zinc-200/60 dark:ring-zinc-800/60 px-4 py-5 flex flex-col gap-1"
            >
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{value}</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{label}</span>
            </div>
          ))}
        </div>

        {/* Resume button */}
        <div className="px-2">
          <Link
            href="/Umer-Iqbal-CV.pdf"
            download="Umer-Iqbal-CV.pdf"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-lg shadow-zinc-900/20 dark:shadow-zinc-100/10 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent z-10" />
            <svg
              className="h-4 w-4 relative z-20 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="relative z-20">Download Resume</span>
          </Link>
        </div>
      </motion.section>

      {/* ── Projects ── */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="bg-white dark:bg-black"
      >
        <h3 className="mb-5 text-2xl font-medium inline-block px-2">Projects</h3>
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
                <p className="text-base text-zinc-600 dark:text-zinc-400 px-1">
                  {truncateWords(project.description, 10)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* ── Skills ── */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="bg-white dark:bg-black"
      >
        <h3 className="mb-8 text-2xl font-medium inline-block px-2">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 bg-white dark:bg-black inline-block px-1">
                {category}
              </h4>
              <div className="flex flex-col gap-2">
                {SKILLS.filter((s) => s.category === category).map((skill) => (
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

      {/* ── Contact ── */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="pb-0 bg-white dark:bg-black"
      >
        <h3 className="mb-8 text-2xl font-medium inline-block px-2">Contact</h3>

        <div className="relative overflow-hidden rounded-3xl bg-zinc-200/80 dark:bg-zinc-800/80 p-8 md:p-12 ring-1 ring-zinc-300/50 dark:ring-zinc-700/50 backdrop-blur-md transition-all duration-500 hover:ring-zinc-400/50 dark:hover:ring-zinc-600/50 hover:shadow-2xl hover:shadow-zinc-500/20 dark:hover:shadow-zinc-100/10">
          {/* Animated Background Gradients */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-zinc-400/20 blur-3xl dark:bg-zinc-600/20"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-zinc-500/20 blur-3xl dark:bg-zinc-500/20"
          />

          {/* Noise Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="space-y-4 max-w-lg">
              <h4 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Let&apos;s build something{' '}
                <span className="bg-gradient-to-r from-zinc-500 to-black bg-clip-text text-transparent dark:from-zinc-400 dark:to-white">
                  amazing
                </span>{' '}
                together.
              </h4>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I&apos;m currently available for freelance projects and open to full-time
                opportunities. Reach out if you have a project in mind or just want to say hi!
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full md:w-auto items-start md:items-end">
              <Link
                href={`mailto:${EMAIL}`}
                target="_blank"
                className="group relative flex items-center justify-center gap-2 sm:gap-3 rounded-2xl bg-zinc-900 px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-xl shadow-zinc-900/20 dark:shadow-zinc-100/10 overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent z-10" />
                <Mail className="h-4 sm:h-5 w-4 sm:w-5 relative z-20 shrink-0" />
                <span className="relative z-20 truncate">{EMAIL}</span>
                <ArrowRight className="h-3.5 sm:h-4 w-3.5 sm:w-4 relative z-20 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </Link>

              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium text-black hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-zinc-900/20 dark:shadow-zinc-100/10"
                  >
                    {link.label}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}
