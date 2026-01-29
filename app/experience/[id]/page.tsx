'use client'
import { motion } from 'motion/react'
import { WORK_EXPERIENCE } from '../../data'
import { notFound, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
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

export default function ExperiencePage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
    const params = use(paramsPromise)
    const job = WORK_EXPERIENCE.find((w) => w.id === params.id)
    const router = useRouter()

    if (!job) {
        notFound()
    }

    return (
        <motion.main
            className="space-y-6 pb-12"
            variants={VARIANTS_CONTAINER}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={VARIANTS_SECTION} transition={TRANSITION_SECTION} className="flex flex-col items-start">
                <button
                    onClick={() => router.back()}
                    className="group mb-4 flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 cursor-pointer">
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </button>

                <h1 className="text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl bg-white dark:bg-black inline-block px-2">
                    {job.company}
                </h1>
                <h2 className="mt-2 text-2xl font-light tracking-tight text-zinc-600 dark:text-zinc-400 bg-white dark:bg-black inline-block px-2">
                    {job.title}
                </h2>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400 bg-white dark:bg-black inline-block px-2">
                    {job.start} - {job.end}
                </p>
            </motion.div>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                className="max-w-5xl"
            >
                <div>
                    <h3 className="mb-3 text-xl font-medium text-zinc-900 dark:text-zinc-100 bg-white dark:bg-black inline-block px-2">
                        Role & Responsibilities
                    </h3>
                    <ul className="space-y-2">
                        {job.description.split('.').filter((point) => point.trim().length > 0).map((point, index) => (
                            <li key={index} className="flex items-start">
                                <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                                <span className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 bg-white dark:bg-black px-1">{point.trim()}.</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.section>
        </motion.main>
    )
}
