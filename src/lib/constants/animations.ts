import type { AnimationConfig } from "../types"

export const ANIMATION_DURATIONS = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
} as const

export const ANIMATION_DELAYS = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.4,
} as const

export const STAGGER_CHILDREN = 0.1

export const fadeInUp: AnimationConfig = {
  duration: ANIMATION_DURATIONS.normal,
  delay: ANIMATION_DELAYS.none,
}

export const slideInLeft: AnimationConfig = {
  duration: ANIMATION_DURATIONS.slow,
  delay: ANIMATION_DELAYS.short,
}

export const scaleIn: AnimationConfig = {
  duration: ANIMATION_DURATIONS.normal,
  delay: ANIMATION_DELAYS.medium,
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_CHILDREN,
    },
  },
}

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
    },
  },
}
