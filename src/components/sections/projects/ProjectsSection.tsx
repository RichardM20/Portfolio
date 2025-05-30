import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  User,
  AlertCircle,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import { containerVariants, itemVariants } from "@/lib/constants/animations";
import { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectDetail } from "./components/ProjectDetail";
import type { Project } from "@/lib/types";

export function ProjectsSection() {
  const { t, language } = useLanguage();
  const { error, getAllProjects, isLoading, projectsData } = useFetch();
  const [showPersonal, setShowPersonal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    getAllProjects();
  }, []);

  const handleRetry = () => {
    getAllProjects();
  };

  const handleCardClick = (project: Project) => {
    if (!project.details) return;
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  const sortedProjects = [...projectsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const businessProjects = sortedProjects.filter(
    (project) => project.to !== "Personal"
  );
  const personalProjects = sortedProjects.filter(
    (project) => project.to === "Personal"
  );

  const featuredBusinessProjects = businessProjects.filter(
    (project) => project.featured
  );
  const featuredPersonalProjects = personalProjects.filter(
    (project) => project.featured
  );

  const currentProjects = showPersonal
    ? featuredPersonalProjects
    : featuredBusinessProjects;
  const hasPersonalProjects = featuredPersonalProjects.length > 0;

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">{t("projects.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {error && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg p-4 flex items-center max-w-2xl mx-auto">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
              <span className="flex-1 text-red-800 dark:text-red-200">
                {t("projects.errorLoading") ||
                  "Error al cargar los proyectos. Por favor, inténtalo de nuevo."}
              </span>
              <Button
                onClick={handleRetry}
                size="sm"
                variant="outline"
                className="ml-4 h-8"
              >
                <RefreshCw className="h-3 w-3 mr-1" />
                {t("projects.retry") || "Reintentar"}
              </Button>
            </div>
          </motion.div>
        )}

        {!isLoading && !error && hasPersonalProjects && (
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => setShowPersonal(!showPersonal)}
              variant="outline"
              size="lg"
              className="group hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300"
            >
              {showPersonal ? (
                <>
                  <Building2 className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  {t("projects.showBusiness")}
                </>
              ) : (
                <>
                  <User className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  {t("projects.showPersonal")}
                </>
              )}
            </Button>
          </motion.div>
        )}

        {!isLoading && !error && (
          <motion.div
            className="text-center mb-8"
            key={showPersonal ? "personal-title" : "business-title"}
            initial={{ opacity: 0, x: showPersonal ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center justify-center gap-2">
              {showPersonal ? (
                <>
                  <User className="h-6 w-6" />
                  {t("projects.personalProjects")}
                </>
              ) : (
                <>
                  <Building2 className="h-6 w-6" />
                  {t("projects.businessProjects")}
                </>
              )}
            </h3>
          </motion.div>
        )}

        {isLoading && (
          <motion.div
            className="flex flex-col items-center justify-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {t("projects.loading") || "Cargando proyectos..."}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12 w-full max-w-6xl">
              {Array.from({ length: 4 }).map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  className="animate-pulse"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                    <CardHeader>
                      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="h-6 w-14 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {!isLoading && !error && (
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            key={showPersonal ? "personal-grid" : "business-grid"}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                custom={index}
              >
                <ProjectCard
                  project={project}
                  language={language}
                  onCardClick={handleCardClick}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {!isLoading && !error && currentProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col items-center gap-4">
              {showPersonal ? (
                <User className="h-12 w-12 text-gray-400" />
              ) : (
                <Building2 className="h-12 w-12 text-gray-400" />
              )}
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {showPersonal
                  ? t("projects.noPersonalProjects")
                  : t("projects.noBusinessProjects")}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetail
        project={selectedProject}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </section>
  );
}