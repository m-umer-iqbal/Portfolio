'use client'

import { TextEffect } from '@/components/ui/text-effect';
import { useSearchParams } from "next/navigation";

const roles = {
  "frontend": "Frontend Web Developer",
  "backend": "Backend Web Developer",
  "fullstack": "Full-Stack Web Developer",
  "mern": "MERN Stack Web Developer",
  "web": "Web Developer"
} as const;

export function Header() {
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
    <header className="mb-24 flex flex-col items-center text-center bg-white dark:bg-black">
      <div className="flex flex-col items-center gap-2">
        <p className="text-5xl font-medium text-black dark:text-white px-2">
          Umer Iqbal
        </p>
        <div className="flex flex-col items-center">
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-xl text-zinc-600 dark:text-zinc-500 px-2"
            delay={0.5}>
            {value}
          </TextEffect>
        </div>
      </div>
    </header>
  )
}