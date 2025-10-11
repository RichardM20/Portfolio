import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { skills } from "@/lib/config/personal";
import { containerVariants } from "@/lib/constants/animations";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Code,
  Database,
  Server,
  Smartphone,
} from "lucide-react";
import { useMemo, useState } from "react";
import { SkillCard } from "./components/SkillCard";

const SKILL_ICONS = {
  mobile: Smartphone,
  frontend: Code,
  backend: Server,
  database: Database,
  language: Code,
  tools: Code,
} as const;

const INITIAL_SKILLS_COUNT = 8;

export function SkillsSection() {
  const { t } = useLanguage();
  const [showAllSkills, setShowAllSkills] = useState(false);

  const displayedSkills = useMemo(
    () => (showAllSkills ? skills : skills.slice(0, INITIAL_SKILLS_COUNT)),
    [showAllSkills]
  );

  const hasMoreSkills = useMemo(() => skills.length > INITIAL_SKILLS_COUNT, []);

  return (
    <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">{t("skills.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={showAllSkills ? "all-skills" : "initial-skills"}
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill) => {
              const IconComponent =
                SKILL_ICONS[skill.category.id as keyof typeof SKILL_ICONS] ||
                Code;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                    layout: { duration: 0.3, ease: "easeInOut" },
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -1, 1, 0],
                    transition: { duration: 0.2 },
                  }}
                >
                  <SkillCard skill={skill} icon={IconComponent} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {hasMoreSkills && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAllSkills(!showAllSkills)}
                className="group border rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300"
              >
                {showAllSkills ? (
                  <>
                    <ChevronUp />
                    {t("skills.showLess")}
                  </>
                ) : (
                  <>
                    <ChevronDown />
                    {t("skills.showMore")} (
                    {skills.length - INITIAL_SKILLS_COUNT} {t("skills.more")})
                  </>
                )}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
