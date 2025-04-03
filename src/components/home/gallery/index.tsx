import GalleryPhotos from "@/components/home/gallery/Gallery"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

export default function Gallery() {
  return (
    <motion.section
      className={cn("w-full min-h-fit", "lg:my-24")}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <GalleryPhotos />
    </motion.section>
  )
}
