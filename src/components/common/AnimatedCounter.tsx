

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({ end, duration = 2, suffix = "", className = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 })

  useEffect(() => {
    if (!isIntersecting) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isIntersecting])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={`text-4xl font-bold text-blue-600 ${className}`}
    >
      {count}
      {suffix}
    </motion.span>
  )
}
