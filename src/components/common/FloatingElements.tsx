

import { motion } from "framer-motion"
import { Code, Smartphone, Server, Database } from "lucide-react"

const FLOATING_ELEMENTS = [
  { Icon: Code, delay: 0, x: "10%", y: "20%" },
  { Icon: Smartphone, delay: 0.5, x: "80%", y: "10%" },
  { Icon: Server, delay: 1, x: "15%", y: "70%" },
  { Icon: Database, delay: 1.5, x: "85%", y: "80%" },
]

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {FLOATING_ELEMENTS.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-200 dark:text-blue-900 opacity-20"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}
    </div>
  )
}
