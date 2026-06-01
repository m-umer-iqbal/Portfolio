'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

// Tags considered "text" for the zoom effect
const TEXT_TAGS = new Set(['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'LI', 'BLOCKQUOTE'])

// Selector for interactive elements (hover state, not text zoom)
const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, label, [tabindex]'

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = useState(false)
    const [isText, setIsText] = useState(false)
    const [isClicking, setIsClicking] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    // Raw mouse position — dot follows exactly
    const dotX = useMotionValue(-100)
    const dotY = useMotionValue(-100)

    // Ring lags behind with a spring
    const springConfig = { damping: 28, stiffness: 220, mass: 0.5 }
    const ringX = useSpring(dotX, springConfig)
    const ringY = useSpring(dotY, springConfig)

    useEffect(() => {
        let lastTextEl: HTMLElement | null = null

        const onMove = (e: MouseEvent) => {
            dotX.set(e.clientX)
            dotY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const onLeave = () => setIsVisible(false)
        const onEnter = () => setIsVisible(true)
        const onDown = () => setIsClicking(true)
        const onUp = () => setIsClicking(false)

        const onOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement

            // Interactive check
            const interactive = target.closest(INTERACTIVE_SELECTOR)
            setIsHovering(!!interactive)

            // Text check — only pure text nodes, not inside interactive elements
            const isTextNode =
                !interactive &&
                TEXT_TAGS.has(target.tagName) &&
                target.childNodes.length > 0 &&
                Array.from(target.childNodes).some((n) => n.nodeType === Node.TEXT_NODE)

            setIsText(isTextNode)

            // Apply / remove zoom class
            if (isTextNode) {
                if (lastTextEl && lastTextEl !== target) {
                    lastTextEl.classList.remove('cursor-text-zoom')
                }
                target.classList.add('cursor-text-zoom')
                lastTextEl = target
            } else {
                if (lastTextEl) {
                    lastTextEl.classList.remove('cursor-text-zoom')
                    lastTextEl = null
                }
            }
        }

        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseover', onOver)
        document.addEventListener('mouseenter', onEnter)
        document.addEventListener('mouseleave', onLeave)
        window.addEventListener('mousedown', onDown)
        window.addEventListener('mouseup', onUp)

        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseover', onOver)
            document.removeEventListener('mouseenter', onEnter)
            document.removeEventListener('mouseleave', onLeave)
            window.removeEventListener('mousedown', onDown)
            window.removeEventListener('mouseup', onUp)
            if (lastTextEl) lastTextEl.classList.remove('cursor-text-zoom')
        }
    }, [dotX, dotY, isVisible])

    // Derived ring size
    const ringSize = isText ? 56 : isHovering ? 44 : isClicking ? 20 : 32

    return (
        <>
            {/* Outer ring — spring-lagged */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: ringSize,
                    height: ringSize,
                    opacity: isVisible ? 1 : 0,
                    borderWidth: isText ? 1.5 : 1,
                    borderColor: isText
                        ? 'rgba(113,113,122,0.9)'
                        : 'rgba(161,161,170,0.6)',
                    backgroundColor: isText
                        ? 'rgba(113,113,122,0.07)'
                        : isHovering
                            ? 'rgba(161,161,170,0.12)'
                            : 'transparent',
                    borderStyle: 'solid',
                }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
            >
                {/* Magnifier cross-hair lines — only when on text */}
                {isText && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.15 }}
                    >
                        {/* Horizontal line */}
                        <span className="absolute h-px w-3 bg-zinc-500/60 dark:bg-zinc-400/60" />
                        {/* Vertical line */}
                        <span className="absolute w-px h-3 bg-zinc-500/60 dark:bg-zinc-400/60" />
                    </motion.div>
                )}
            </motion.div>

            {/* Inner dot — exact position */}
            <motion.div
                ref={cursorRef}
                className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-zinc-800 dark:bg-zinc-200"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isText ? 3 : isHovering ? 6 : isClicking ? 10 : 7,
                    height: isText ? 3 : isHovering ? 6 : isClicking ? 10 : 7,
                    opacity: isVisible ? (isHovering || isText ? 0.4 : 1) : 0,
                    scale: isClicking ? 0.8 : 1,
                }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
            />
        </>
    )
}
