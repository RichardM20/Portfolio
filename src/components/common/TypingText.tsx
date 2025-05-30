import { useTypingAnimation } from "../../hooks/useTypingAnimation"

interface TypingTextProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
  className?: string
}

export function TypingText({ texts, speed, deleteSpeed, pauseTime, className = "" }: TypingTextProps) {
  const displayText = useTypingAnimation({ texts, speed, deleteSpeed, pauseTime })

  return (
    <span className={`bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
