import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/config/personal"
import { Card, CardContent } from "@/components/ui/card"

interface SkillCardProps {
  skill: (typeof skills)[0]
  icon: React.ComponentType<{ className?: string }>
}

export function SkillCard({ skill, icon: Icon }: SkillCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <CardContent className="p-6 text-center ">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
          <Icon className="h-12 w-12 mx-auto mb-4 text-blue-600 group-hover:text-purple-600 transition-colors" />
        </motion.div>
        <h3 className="font-semibold mb-2">{skill.name}</h3>
        <Badge variant="outline" className="text-xs">
          {skill.category.name}
        </Badge>
      </CardContent>
    </Card>
  )
}
