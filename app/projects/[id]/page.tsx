'use client'
import { motion } from 'motion/react'
import { PROJECTS } from '../../data'
import { notFound, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { use, useRef, useState, useEffect } from 'react'

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
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1],
}

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
        if (videoRef.current) {
            videoRef.current.playbackRate = playbackRate
        }
    }, [playbackRate])

    const togglePlay = () => {
        if (!videoRef.current) return
        if (isPlaying) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    const toggleMute = () => {
        if (!videoRef.current) return
        videoRef.current.muted = !isMuted
        setIsMuted(!isMuted)
    }

    const cycleSpeed = () => {
        const speeds = [1, 1.5, 2, 0.5]
        const nextSpeedIndex = (speeds.indexOf(playbackRate) + 1) % speeds.length
        setPlaybackRate(speeds[nextSpeedIndex])
    }

    useEffect(() => {
        let handle: number | undefined;

        const update = () => {
            if (videoRef.current) {
                if (!isDragging && !videoRef.current.paused) {
                    setCurrentTime(videoRef.current.currentTime)
                }

                // Check for duration update if it was missed
                if (duration === 0 && videoRef.current.duration) {
                    setDuration(videoRef.current.duration)
                }

                if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
                    handle = videoRef.current.requestVideoFrameCallback(update)
                } else {
                    handle = requestAnimationFrame(update)
                }
            }
        }

        if ('requestVideoFrameCallback' in HTMLVideoElement.prototype && videoRef.current) {
            handle = videoRef.current.requestVideoFrameCallback(update)
        } else {
            handle = requestAnimationFrame(update)
        }

        return () => {
            if (handle !== undefined) {
                if ('cancelVideoFrameCallback' in HTMLVideoElement.prototype && videoRef.current) {
                    videoRef.current.cancelVideoFrameCallback(handle)
                } else {
                    cancelAnimationFrame(handle)
                }
            }
        }
    }, [isDragging, duration])

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration)
        }
    }

    const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value)
        setCurrentTime(time)
    }

    const handleSeekStart = () => {
        setIsDragging(true)
    }

    const handleSeekEnd = (e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => {
        setIsDragging(false)
        if (videoRef.current) {
            const input = e.currentTarget as HTMLInputElement
            videoRef.current.currentTime = parseFloat(input.value)
        }
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

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
                onLoadedMetadata={handleLoadedMetadata}
            />

            {/* Controls Overlay */}
            <div
                className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
                {/* Progress Slider */}
                <div className="flex items-center gap-3 w-full px-1">
                    <span className="text-xs font-medium text-white/80 w-10 text-right">{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        step="any"
                        value={currentTime}
                        onChange={handleSeekChange}
                        onMouseDown={handleSeekStart}
                        onMouseUp={handleSeekEnd}
                        onTouchStart={handleSeekStart}
                        onTouchEnd={handleSeekEnd}
                        className="flex-1 h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
                    />
                    <span className="text-xs font-medium text-white/80 w-10">{formatTime(duration)}</span>
                </div>

                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={togglePlay}
                            className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-colors"
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </button>

                        <button
                            onClick={toggleMute}
                            className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-colors"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={cycleSpeed}
                            className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm font-medium transition-colors min-w-[3.5rem]"
                            aria-label="Change playback speed"
                        >
                            {playbackRate}x
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ProjectPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
    const params = use(paramsPromise)
    const project = PROJECTS.find((p) => p.id === params.id)
    const router = useRouter()

    if (!project) {
        notFound()
    }

    return (
        <motion.main
            className="space-y-12"
            variants={VARIANTS_CONTAINER}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
                <button
                    onClick={() => router.back()}
                    className="group mb-8 flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 cursor-pointer bg-white dark:bg-black"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 bg-white dark:bg-black" />
                    Back to Home
                </button>

                <h1 className="inline-block text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl bg-white dark:bg-black">
                    {project.name}
                </h1>
            </motion.div>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                className="relative aspect-video w-full overflow-hidden rounded-3xl bg-zinc-100 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-900 dark:ring-zinc-800/50"
            >
                <VideoPlayer src={project.video} />
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                className="space-y-8">
                {project.detailedDescription && project.detailedDescription.length > 0 ? (
                    // Structured layout for projects with detailedDescription
                    <div className="space-y-8">
                        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 inline-block bg-white dark:bg-black">
                            About the Project
                        </h2>

                        <div className="space-y-8 text-zinc-600 dark:text-zinc-400 bg-white dark:bg-black">
                            {project.detailedDescription.map((section, index) => {
                                switch (section.type) {
                                    case 'paragraph':
                                        return (
                                            <div key={index}>
                                                <p className="text-lg leading-relaxed">{section.content}</p>
                                            </div>
                                        );

                                    case 'highlight':
                                        return (
                                            <div key={index} className="space-y-6">
                                                {section.title && (
                                                    <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
                                                        {section.title}
                                                    </h3>
                                                )}
                                                <div className="space-y-6">
                                                    {section.categories?.map((category, categoryIndex) => (
                                                        <div key={categoryIndex} className="space-y-3">
                                                            <h4 className="font-medium text-zinc-800 dark:text-zinc-200">
                                                                {category.title}
                                                            </h4>
                                                            <ul className="space-y-2 pl-6">
                                                                {category.items.map((item, itemIndex) => (
                                                                    <li key={itemIndex} className="text-zinc-600 dark:text-zinc-400">
                                                                        • {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );

                                    case 'technical':
                                        return (
                                            <div key={index} className="space-y-4">
                                                {section.title && (
                                                    <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
                                                        {section.title}
                                                    </h3>
                                                )}
                                                {section.content && <p className="text-zinc-700 dark:text-zinc-300">{section.content}</p>}
                                                {section.items && (
                                                    <ul className="space-y-2 pl-6">
                                                        {section.items.map((item, itemIndex) => (
                                                            <li key={itemIndex} className="text-zinc-600 dark:text-zinc-400">
                                                                • {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        );

                                    case 'use-cases':
                                        return (
                                            <div key={index} className="space-y-4">
                                                {section.title && (
                                                    <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
                                                        {section.title}
                                                    </h3>
                                                )}
                                                <div className="space-y-3">
                                                    {section.categories?.map((category, categoryIndex) => (
                                                        <div key={categoryIndex}>
                                                            <h4 className="font-medium text-zinc-800 dark:text-zinc-200 mb-1">
                                                                {category.title}
                                                            </h4>
                                                            <p className="text-zinc-600 dark:text-zinc-400">
                                                                {category.items.join(', ')}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );

                                    case 'impact':
                                        return (
                                            <div key={index} className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-800">
                                                <p className="text-zinc-600 dark:text-zinc-400">
                                                    {section.content}
                                                </p>
                                            </div>
                                        );

                                    default:
                                        return null;
                                }
                            })}
                        </div>
                    </div>
                ) : (
                    // Default simple layout for projects without detailedDescription
                    <div>
                        <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                            About the Project
                        </h2>
                        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                            {project.description}
                        </p>
                    </div>
                )}

                <div className="pt-6 mt-6">
                    <div className="flex flex-wrap gap-3">
                        {project.github && (
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
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
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                            </Link>
                        )}
                    </div>
                </div>
            </motion.section>
        </motion.main>
    )
}
