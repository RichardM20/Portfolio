

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { personalInfo } from "@/lib/config/personal"
import { containerVariants, itemVariants } from "@/lib/constants/animations"

export function AboutSection() {
  const { t } = useLanguage()

  const aboutItems = [
    {
      icon: User,
      label: t("about.role"),
    },
    {
      icon: Calendar,
      label: `${personalInfo.experience} ${t("about.experience")}`,
    },
    {
      icon: MapPin,
      label: t("about.location"),
    },
  ]

  const descriptions = [t("about.description1"), t("about.description2"), t("about.description3")]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">{t("about.title")}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t("about.subtitle")}</p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-none">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {aboutItems.map(({ icon: Icon, label }, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">{label}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              {descriptions.map((description, index) => (
                <motion.p
                  key={index}
                  className="text-gray-600 dark:text-gray-400 leading-relaxed"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                  viewport={{ once: true }}
                >
                  {description}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
