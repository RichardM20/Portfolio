import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { personalInfo, socialButtons, stats } from "@/lib/config/personal";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { TypingText } from "@/components/common/TypingText";
import { containerVariants, itemVariants } from "@/lib/constants/animations";
import { ProfileImage } from "./components/ProfileHero";

export function HeroSection() {
  const { t, language } = useLanguage();
  const { y } = useScrollProgress();

  const cvUrl = language === "en" ? personalInfo.cvEnUrl : personalInfo.cvUrl;

  const handleDownloadCV = async () => {
    try {
      const response = await fetch(cvUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Richard_Morales_CV_${
        language === "en" ? "EN" : "ES"
      }.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading CV:", error);

      window.open(cvUrl, "_blank");
    }
  };
  return (
    <section className="container mx-auto px-4 py-20 relative overflow-hidden">
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-12"
        style={{ y }}
      >
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6" variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold mb-4">
                {language === "es" && `${t("hero.greeting")} `}
                <TypingText
                  texts={[t("hero.firstRole"), t("hero.secondRole")]}
                  className="inline-block min-h-[2.5rem] will-change-transform"
                />

                {language !== "es" && ` ${t("hero.greeting")}`}
              </h2>
            </motion.div>

            <motion.h3
              className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {personalInfo.name}
            </motion.h3>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t("hero.description").replace(
                "años",
                `${personalInfo.experience} ${
                  t("hero.description").includes("years") ? "years" : "años"
                }`
              )}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-8 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center" variants={itemVariants}>
              <AnimatedCounter end={stats.experience} />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {t("hero.yearsExp")}
              </p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <AnimatedCounter end={stats.projects} suffix="+" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {t("hero.projectsCompleted")}
              </p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <AnimatedCounter end={stats.technologies} suffix="+" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {t("hero.technologies")}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {socialButtons.map(
              ({ href, icon: Icon, label, className, variant }) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className={className} variant={variant}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {label}
                    </a>
                  </Button>
                </motion.div>
              )
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={handleDownloadCV}
            >
              {t("hero.downloadCV")}
            </Button>
          </motion.div>
        </motion.div>

        <ProfileImage />
      </motion.div>
    </section>
  );
}
