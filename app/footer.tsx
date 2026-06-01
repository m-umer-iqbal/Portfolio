'use client'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation"

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4 cursor-pointer" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4 cursor-pointer" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

function getYear() {
  return new Date().getFullYear()
}

const roles = {
  "frontend": "Frontend Web Developer",
  "backend": "Backend Web Developer",
  "fullstack": "Full-Stack Web Developer",
  "mern": "MERN Stack Web Developer",
  "web": "Web Developer"
} as const;

export function Footer() {
  const query = useSearchParams();
  const role: string = query.get("role") || "web";
  let value: string = "Web Developer";

  let existedRole: keyof typeof roles;

  for (existedRole in roles) {
    if (existedRole === role) {
      value = roles[existedRole]
      break;
    }
  }

  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <Link href="/" target="_blank">
          <TextLoop className="text-xs text-zinc-500 bg-white dark:bg-black px-1">
            <span>© {getYear()} Umer Iqbal</span>
            <span>{value}</span>
          </TextLoop>
        </Link>
        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
