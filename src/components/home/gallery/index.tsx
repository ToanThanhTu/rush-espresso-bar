import GalleryPhotos from "@/components/home/gallery/Gallery";
import { cn } from "@/lib/utils";

export default function Gallery() {
  return (
    <section className={cn("w-full min-h-fit", "lg:my-24")}>
      <GalleryPhotos />
    </section>
  )
}