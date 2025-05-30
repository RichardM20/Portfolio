

import { Button } from "../ui/button"
import { useLanguage } from "../../contexts/LanguageContext"
import { motion } from "framer-motion"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant={language === "es" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("es")}
          className="text-sm font-medium"
          aria-label="Cambiar a español"
        >
          ES
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className="text-sm font-medium"
          aria-label="Switch to English"
        >
          EN
        </Button>
      </motion.div>
    </div>
  )
}
