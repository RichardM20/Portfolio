

import { useScroll, useTransform } from "framer-motion"

export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 0.6])

  return {
    scrollYProgress,
    scaleX,
    y,
    opacity,
  }
}
