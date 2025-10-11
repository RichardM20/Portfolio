import { Skeleton } from "@/components/ui/skeleton";
import { useProfile } from "@/hooks/useProfile";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

export function ProfileImage() {
  const { personalInfo, loading } = useProfile();

  if (!personalInfo && !loading) {
    return (
      <div className="flex-1 flex justify-center">
        <div className="w-80 h-80 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-500">Imagen no disponible</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="flex-1 flex justify-center"
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1"
          animate={{ rotate: 360 }}
        >
          {loading ? (
            <Skeleton className="w-full h-full rounded-full" />
          ) : (
            <img
              src={personalInfo?.profileImage || "/placeholder.svg"}
              alt={`${personalInfo?.name || "richard morales"} profile`}
              className="rounded-full object-cover w-full h-full"
            />
          )}
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-3 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Code className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
