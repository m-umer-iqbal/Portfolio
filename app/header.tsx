'use client'
import { TextEffect } from '@/components/ui/text-effect'

export function Header() {
  return (
    <header className="mb-24 flex flex-col items-center text-center">
      <div className="flex flex-col items-center gap-2">
        <p className="text-5xl font-medium text-black dark:text-white bg-white dark:bg-black px-2">
          Umer Iqbal
        </p>
        <div className="flex flex-col items-center">
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-xl text-zinc-600 dark:text-zinc-500 bg-white dark:bg-black px-2"
            delay={0.5}>
            Full-Stack Web Developer
          </TextEffect>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-xl text-zinc-600 dark:text-zinc-500 italic bg-white dark:bg-black px-2"
            delay={1.5}>
            (MERN & Next.js)
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
