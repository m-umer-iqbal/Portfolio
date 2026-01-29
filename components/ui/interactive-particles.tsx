'use client'
import React, { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

interface Particle {
    x: number
    y: number
    size: number
    vx: number
    vy: number
    baseX: number
    baseY: number
    density: number
    z: number // Depth for 3D effect
}

export function InteractiveParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { theme } = useTheme()
    const mouse = useRef({ x: 0, y: 0, radius: 150 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let particles: Particle[] = []
        let animationFrameId: number

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            init()
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX
            mouse.current.y = e.clientY
        }

        const init = () => {
            particles = []
            // Increased density: from /8000 to /3000 for nearly 3x more particles
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 3000)

            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * canvas.width
                const y = Math.random() * canvas.height
                const z = Math.random() * 2 + 0.5 // Depth factor
                particles.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    size: Math.random() * 2.5 * z, // Increased size for better visibility
                    vx: (Math.random() - 0.5) * 0.4 * z,
                    vy: (Math.random() - 0.5) * 0.4 * z,
                    density: (Math.random() * 30) + 1,
                    z
                })
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const dotColor = theme === 'dark' ? 'rgba(255, 255, 255, ' : 'rgba(0, 0, 0, '

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i]

                // Move freely
                p.x += p.vx
                p.y += p.vy

                // Wrap around edges
                if (p.x < 0) p.x = canvas.width
                if (p.x > canvas.width) p.x = 0
                if (p.y < 0) p.y = canvas.height
                if (p.y > canvas.height) p.y = 0

                // Push away from mouse
                const dx = mouse.current.x - p.x
                const dy = mouse.current.y - p.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                const forceDirectionX = dx / distance
                const forceDirectionY = dy / distance
                const maxDistance = mouse.current.radius
                const force = (maxDistance - distance) / maxDistance

                if (distance < maxDistance) {
                    p.x -= forceDirectionX * force * 5
                    p.y -= forceDirectionY * force * 5
                }

                // Draw
                ctx.fillStyle = `${dotColor}${0.1 + (p.z / 4)})`
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()

                // Connecting lines for 3D web effect if close
                for (let j = i; j < particles.length; j++) {
                    const p2 = particles[j]
                    const dx2 = p.x - p2.x
                    const dy2 = p.y - p2.y
                    const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

                    if (dist2 < 100) {
                        ctx.strokeStyle = `${dotColor}${(1 - dist2 / 100) * 0.05 * p.z})`
                        ctx.lineWidth = 0.5
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('mousemove', handleMouseMove)
        handleResize()
        animate()

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [theme])

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 h-full w-full opacity-50 transition-opacity duration-1000 dark:opacity-40"
        />
    )
}
