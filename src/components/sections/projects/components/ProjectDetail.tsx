import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Project } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Calendar, User, X } from "lucide-react";

interface ProjectDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetail({
  project,
  isOpen,
  onClose,
}: ProjectDetailProps) {
  const { language } = useLanguage();

  if (!project) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="bg-white dark:bg-gray-900 shadow-2xl overflow-hidden">
              <div className="relative">
                <motion.button
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </motion.button>

                <motion.div
                  className="relative h-64 md:h-80 overflow-hidden"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={
                      project.image
                        ? project.image.startsWith("data:")
                          ? project.image
                          : `data:image/jpeg;base64,${project.image}`
                        : "/placeholder.svg"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-white/90 dark:bg-gray-800/90 text-sm flex items-center gap-1"
                    >
                      {project.to === "Personal" ? (
                        <User className="h-3 w-3" />
                      ) : (
                        <Building2 className="h-3 w-3" />
                      )}
                      {project.to}
                    </Badge>
                  </motion.div>
                </motion.div>
              </div>
              <div className="max-h-[60vh] overflow-y-auto">
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <CardHeader className="pb-4">
                    <motion.div variants={itemVariants}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {
                              project.description[
                                language as keyof typeof project.description
                              ]
                            }
                          </CardDescription>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-4"
                      variants={itemVariants}
                    >
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(project.date).toLocaleDateString(
                            language === "es" ? "es-ES" : "en-US",
                            {
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {project.details && project.details.length > 0 && (
                      <motion.div variants={itemVariants}>
                        <div className="space-y-3">
                          {project.details.map((detail, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                            >
                              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {detail[language as keyof typeof detail]}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
