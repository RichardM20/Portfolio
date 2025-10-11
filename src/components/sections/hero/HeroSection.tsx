import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { TypingText } from "@/components/common/TypingText";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/contexts/LanguageContext";
import { useProfile } from "@/hooks/useProfile";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { containerVariants, itemVariants } from "@/lib/constants/animations";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircleIcon } from "lucide-react";
import { ProfileImage } from "./components/ProfileHero";

export function HeroSection() {
  const { t, language } = useLanguage();
  const { y } = useScrollProgress();
  const { personalInfo, socialLinks, stats, loading, error } = useProfile();

  if (error) {
    return (
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400 mb-4">
              error al cargar datos
            </p>
            <Button onClick={() => window.location.reload()}>reintentar</Button>
          </div>
        </div>
      </section>
    );
  }

  const cvUrl =
    language === "en" ? personalInfo?.cvEnUrl || "" : personalInfo?.cvUrl || "";

  const socialButtons = [
    {
      href: socialLinks?.linkedin || "#",
      icon: Linkedin,
      label: "LinkedIn",
      className: "bg-blue-600 hover:bg-blue-700",
    },
    {
      href: socialLinks?.github || "#",
      icon: Github,
      label: "GitHub",
      variant: "outline" as const,
    },
    {
      href: socialLinks?.whatsapp || "#",
      icon: MessageCircleIcon,
      label: "WhatsApp",
      className: "bg-green-600 hover:bg-green-700",
    },
  ];

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
              {loading ? (
                <Skeleton className="h-8 w-48 mx-auto lg:mx-0" />
              ) : (
                personalInfo?.name || "richard morales"
              )}
            </motion.h3>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {loading ? (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ) : (
                t("hero.description").replace(
                  "años",
                  `${personalInfo?.experience || 4} ${
                    t("hero.description").includes("years") ? "years" : "años"
                  }`
                )
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
              {loading ? (
                <>
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto" />
                </>
              ) : (
                <>
                  <AnimatedCounter end={stats?.experience || 4} />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {t("hero.yearsExp")}
                  </p>
                </>
              )}
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              {loading ? (
                <>
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto" />
                </>
              ) : (
                <>
                  <AnimatedCounter end={stats?.projects || 5} suffix="+" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {t("hero.projectsCompleted")}
                  </p>
                </>
              )}
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              {loading ? (
                <>
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto" />
                </>
              ) : (
                <>
                  <AnimatedCounter end={stats?.technologies || 5} suffix="+" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {t("hero.technologies")}
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {loading ? (
              <>
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-28" />
              </>
            ) : (
              socialButtons.map(
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
              )
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {loading ? (
              <Skeleton className="h-12 w-40" />
            ) : (
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={handleDownloadCV}
              >
                {t("hero.downloadCV")}
              </Button>
            )}
          </motion.div>
        </motion.div>

        <ProfileImage />
      </motion.div>
    </section>
  );
}
