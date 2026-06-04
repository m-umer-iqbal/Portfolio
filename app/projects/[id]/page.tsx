'use client'

import { motion } from 'motion/react'
import { PROJECTS, ProjectSection, SectionIcon } from '../../data'
import { notFound, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { use, useRef, useState, useEffect } from 'react'

// ── SVG icon map ─────────────────────────────────────────────────────────────
function SectionSvgIcon({ icon, className = 'h-5 w-5' }: { icon: SectionIcon; className?: string }) {
    switch (icon) {
        case 'sparkles':
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                </svg>
            )
        case 'rocket':
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 3.19a14.98 14.98 0 0 0-2.25 10.52l7.84 7.84a14.98 14.98 0 0 0 10.52-2.25A14.98 14.98 0 0 0 22.56 8.2a6 6 0 0 1-6.97 6.17Zm0 0L13.5 12m-7.5 5.25.75.75M7.5 15l-.75.75M12 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            )
        case 'wrench':
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.653-4.655m5.833-4.329c.521-.784.8-1.698.8-2.627a4.5 4.5 0 0 0-4.5-4.5 4.5 4.5 0 0 0-4.5 4.5c0 .929.279 1.843.8 2.627M11.42 15.17 8.924 12.13" />
                </svg>
            )
        case 'building':
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
            )
        case 'target':
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
            )
        case 'lock':
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
            )
        case 'music':
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                </svg>
            )
        case 'stack':
            return (
                <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                </svg>
            )
        default:
            return null
    }
}

// ── Section renderer ──────────────────────────────────────────────────────────
function renderSection(section: ProjectSection, index: number) {
    switch (section.type) {
        case 'paragraph':
            return (
                <p key={index} className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {section.content}
                </p>
            )

        case 'highlight':
        case 'use-cases':
            return (
                <div key={index} className="space-y-5">
                    {section.title && (
                        <div className="flex items-center gap-2.5">
                            {section.icon && (
                                <span className="text-zinc-500 dark:text-zinc-400">
                                    <SectionSvgIcon icon={section.icon} />
                                </span>
                            )}
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{section.title}</h3>
                        </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {section.categories?.map((category, ci) => (
                            <div key={ci} className="rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 ring-1 ring-zinc-200/60 dark:ring-zinc-800/60 p-4 space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                                    {category.title}
                                </h4>
                                <ul className="space-y-2">
                                    {category.items.map((item, ii) => (
                                        <li key={ii} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                                            <svg className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400 dark:text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )

        case 'technical':
            return (
                <div key={index} className="space-y-4">
                    {section.title && (
                        <div className="flex items-center gap-2.5">
                            {section.icon && (
                                <span className="text-zinc-500 dark:text-zinc-400">
                                    <SectionSvgIcon icon={section.icon} />
                                </span>
                            )}
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{section.title}</h3>
                        </div>
                    )}
                    {section.content && (
                        <p className="text-sm text-zinc-500 dark:text-zinc-500">{section.content}</p>
                    )}
                    {section.items && (
                        <div className="flex flex-wrap gap-2">
                            {section.items.map((item, ii) => (
                                <span
                                    key={ii}
                                    className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 ring-1 ring-zinc-200/60 dark:ring-zinc-700/60"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )

        case 'impact':
            return (
                <div key={index} className="flex gap-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 ring-1 ring-zinc-200/60 dark:ring-zinc-800/60 p-4">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400 dark:text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{section.content}</p>
                </div>
            )

        default:
            return null
    }
}

// ── Variants ─────────────────────────────────────────────────────────────────
const VARIANTS_CONTAINER = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}
const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}
const TRANSITION_SECTION = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }

// ── Video player ──────────────────────────────────────────────────────────────
function VideoPlayer({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const [playbackRate, setPlaybackRate] = useState(1)
    const [isHovered, setIsHovered] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = playbackRate
    }, [playbackRate])

    const togglePlay = () => {
        if (!videoRef.current) return
        isPlaying ? videoRef.current.pause() : videoRef.current.play()
        setIsPlaying(!isPlaying)
    }
    const toggleMute = () => {
        if (!videoRef.current) return
        videoRef.current.muted = !isMuted
        setIsMuted(!isMuted)
    }
    const cycleSpeed = () => {
        const speeds = [1, 1.5, 2, 0.5]
        setPlaybackRate(speeds[(speeds.indexOf(playbackRate) + 1) % speeds.length])
    }

    useEffect(() => {
        let handle: number | undefined
        const update = () => {
            if (videoRef.current) {
                if (!isDragging && !videoRef.current.paused) setCurrentTime(videoRef.current.currentTime)
                if (duration === 0 && videoRef.current.duration) setDuration(videoRef.current.duration)
                handle = requestAnimationFrame(update)
            }
        }
        handle = requestAnimationFrame(update)
        return () => { if (handle !== undefined) cancelAnimationFrame(handle) }
    }, [isDragging, duration])

    const formatTime = (t: number) => `${Math.floor(t / 60)}:${Math.floor(t % 60).toString().padStart(2, '0')}`

    return (
        <div
            className="relative h-full w-full overflow-hidden rounded-3xl group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <video
                ref={videoRef}
                src={src}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="h-full w-full object-cover"
                onClick={togglePlay}
                onLoadedMetadata={() => { if (videoRef.current) setDuration(videoRef.current.duration) }}
            />
            <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-3 w-full px-1">
                    <span className="text-xs font-medium text-white/80 w-10 text-right">{formatTime(currentTime)}</span>
                    <input
                        type="range" min="0" max={duration || 0} step="any" value={currentTime}
                        onChange={(e) => setCurrentTime(parseFloat(e.target.value))}
                        onMouseDown={() => setIsDragging(true)}
                        onMouseUp={(e) => { setIsDragging(false); if (videoRef.current) videoRef.current.currentTime = parseFloat(e.currentTarget.value) }}
                        className="flex-1 h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                    />
                    <span className="text-xs font-medium text-white/80 w-10">{formatTime(duration)}</span>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                        <button onClick={togglePlay} className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-colors" aria-label={isPlaying ? 'Pause' : 'Play'}>
                            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </button>
                        <button onClick={toggleMute} className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-colors" aria-label={isMuted ? 'Unmute' : 'Mute'}>
                            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </button>
                    </div>
                    <button onClick={cycleSpeed} className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm font-medium transition-colors min-w-[3.5rem]">
                        {playbackRate}x
                    </button>
                </div>
            </div>
        </div>
    )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ProjectPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
    const params = use(paramsPromise)
    const router = useRouter()
    const searchParams = useSearchParams()
    const roleKey = searchParams.get('role') ?? 'default'

    const project = PROJECTS.find((p) => p.id === params.id)
    if (!project) notFound()

    // Pick role-specific description, fall back to default
    const descKey = roleKey as keyof typeof project.descriptions
    const sections = project.descriptions[descKey] ?? project.descriptions.default

    const currentIndex = PROJECTS.findIndex((p) => p.id === params.id)
    const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length]

    // Preserve role param when navigating
    const roleQuery = roleKey !== 'default' ? `?role=${roleKey}` : ''

    return (
        <motion.main
            className="space-y-12 bg-white dark:bg-black"
            variants={VARIANTS_CONTAINER}
            initial="hidden"
            animate="visible"
        >
            {/* ── Header ── */}
            <motion.div variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
                <div className="mb-8 flex items-center justify-between w-full">
                    <button
                        onClick={() => router.push(`/${roleQuery}`)}
                        className="group flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 cursor-pointer"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </button>
                    <button
                        onClick={() => router.push(`/projects/${nextProject.id}${roleQuery}`)}
                        className="group flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 cursor-pointer"
                    >
                        Next Project
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:translate-x-1 rotate-180" />
                    </button>
                </div>
                <h1 className="inline-block text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl bg-white dark:bg-black">
                    {project.name}
                </h1>
            </motion.div>

            {/* ── Video ── */}
            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                className="relative aspect-video w-full overflow-hidden rounded-3xl bg-zinc-100 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-900 dark:ring-zinc-800/50"
            >
                <VideoPlayer src={project.video} />
            </motion.section>

            {/* ── Description ── */}
            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                className="space-y-8"
            >
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                    About the Project
                </h2>
                <div className="space-y-8">
                    {sections.map((section, i) => renderSection(section, i))}
                </div>

                {/* ── Links ── */}
                <div className="pt-6 mt-6 flex flex-wrap gap-3">
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
                        >
                            <Github className="h-4 w-4" />
                            Source Code
                        </Link>
                    )}
                    {project.demo && (
                        <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                        >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                        </Link>
                    )}
                </div>
            </motion.section>
        </motion.main>
    )
}
