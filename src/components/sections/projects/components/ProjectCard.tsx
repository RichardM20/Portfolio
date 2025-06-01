import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  language: string;
  onCardClick?: (project: Project) => void;
}

export function ProjectCard({
  project,
  language,
  onCardClick,
}: ProjectCardProps) {
  const { t } = useLanguage();

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(project);
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <Card
        className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
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
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Button size="sm" asChild onClick={handleLinkClick}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source code"
                >
                  <Github className="h-4 w-4 mr-2" />
                  {t("projects.viewCode")}
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                size="sm"
                variant="secondary"
                asChild
                onClick={handleLinkClick}
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live demo"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {t("projects.viewDemo")}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <div className="absolute top-4 right-4">
            <Badge
              variant="secondary"
              className="bg-white/90 dark:bg-gray-800/90 text-xs"
            >
              {project.to}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="group-hover:text-blue-600 transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription>
                {
                  project.description[
                    language as keyof typeof project.description
                  ]
                }
              </CardDescription>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>
              {new Date(project.date).toLocaleDateString(
                language === "es" ? "es-ES" : "en-US",
                {
                  month: "short",
                  year: "numeric",
                }
              )}
            </span>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <motion.div
                key={`${tech}-${techIndex}`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Badge
                  variant="outline"
                  className="hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>

        <div className="absolute bottom-4 right-4 flex gap-2">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View source code"
              onClick={handleLinkClick}
            >
              <Github className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View live demo"
              onClick={handleLinkClick}
            >
              <ExternalLink className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </motion.a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
