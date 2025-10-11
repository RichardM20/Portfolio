import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/contexts/LanguageContext";
import { useProfile } from "@/hooks/useProfile";
import { motion } from "framer-motion";
import { Github, Globe, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const { personalInfo, socialLinks, loading } = useProfile();

  if (!personalInfo && !socialLinks && !loading) {
    return null;
  }

  const socialIcons = [
    {
      href: socialLinks?.linkedin || "#",
      icon: Linkedin,
      color: "hover:text-blue-600",
      label: "LinkedIn",
    },
    {
      href: socialLinks?.github || "#",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-white",
      label: "GitHub",
    },
    {
      href: `mailto:${personalInfo?.email || ""}`,
      icon: Mail,
      color: "hover:text-blue-600",
      label: "Email",
    },
    {
      href: socialLinks?.portfolio || "#",
      icon: Globe,
      color: "hover:text-green-600",
      label: "Portfolio",
    },
  ];

  return (
    <footer className="py-12 border-t bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            © 2024{" "}
            {loading ? (
              <Skeleton className="inline-block h-4 w-32" />
            ) : (
              personalInfo?.name || "richard morales"
            )}
            . {t("footer.rights")}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
            {t("footer.madeWith")} React, TS + Vite
          </p>

          <div className="flex justify-center gap-6">
            {loading ? (
              <>
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-5 w-5 rounded" />
              </>
            ) : (
              socialIcons.map(({ href, icon: Icon, color, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={`text-gray-600 ${color} transition-colors`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
