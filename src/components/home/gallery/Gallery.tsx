"use client"

import Image from "next/image"
import { useState } from "react"
import { ColumnsPhotoAlbum, RenderImageContext, RenderImageProps } from "react-photo-album"
import Lightbox, { SlideImage } from "yet-another-react-lightbox"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

import "react-photo-album/columns.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import "yet-another-react-lightbox/styles.css"
import galleryPhotos from "@/lib/galleryPhotos"
import { cn } from "@/lib/utils"
import useMediaQuery from "@/lib/hooks"

export default function GalleryPhotos() {
  const [index, setIndex] = useState(-1)
  const isXl = useMediaQuery("xl")
  const isLg = useMediaQuery("lg")

  return (
    <div className={cn("mx-auto min-h-fit w-5/6", "md:w-3/4", "lg:w-6/7", "xl:w-full")}>
      <ColumnsPhotoAlbum
        columns={isXl ? 4 : isLg ? 3 : 2}
        padding={0}
        spacing={4}
        photos={galleryPhotos}
        render={{
          image: (
            { alt, title }: RenderImageProps,
            { height, photo, width }: RenderImageContext
          ) => (
            <figure
              className="relative"
              style={{
                width: "100%",
                aspectRatio: `${width} / ${height}`,
              }}
            >
              <Image
                fill
                alt={alt ?? ""}
                src={photo}
                title={title}
                placeholder={"blurDataURL" in photo ? "blur" : undefined}
                priority
                sizes="(min-width: 768px) 20vw, 50vw"
                className="object-cover hover:opacity-75"
              />
            </figure>
          ),
        }}
        onClick={({ index: photoIndex }) => setIndex(photoIndex)}
      />

      <Lightbox
        slides={galleryPhotos.map(
          ({ src, width, height, alt }) =>
            ({
              src,
              alt,
              height,
              width,
            } as SlideImage)
        )}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  )
}
