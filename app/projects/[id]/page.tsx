'use client'
import { motion } from 'motion/react'
import { PROJECTS } from '../../data'
import { notFound, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { use } from 'react'

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

export default function ProjectPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
    const params = use(paramsPromise)
    const project = PROJECTS.find((p) => p.id === params.id)
    const router = useRouter()

    if (!project) {
        notFound()
    }

    return (
        <motion.main
            className="space-y-12 pb-24"
            variants={VARIANTS_CONTAINER}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
                <button
                    onClick={() => router.back()}
                    className="group mb-8 flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </button>

                <h1 className="text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                    {project.name}
                </h1>
            </motion.div>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                className="relative aspect-video w-full overflow-hidden rounded-3xl bg-zinc-100 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-900 dark:ring-zinc-800/50"
            >
                <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                />
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                className="max-w-2xl"
            >
                <div>
                    <h2 className="mb-4 text-xl font-medium text-zinc-900 dark:text-zinc-100">
                        About the Project
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-50 transition-all hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                        >
                            <Github className="h-4 w-4" />
                            Github
                        </Link>
                    )}
                    {project.demo && (
                        <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 transition-all hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-700 dark:hover:bg-zinc-700"
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
