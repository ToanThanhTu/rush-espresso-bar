import { Card, CardContent } from "@/components/shadcn/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel"
import events from "@/lib/events"
import { cn } from "@/lib/utils"
import { CalendarCheck, CircleDollarSign, MapPin, Palette } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

export default function Events() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-12 px-6 py-16 bg-menu"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-semibold uppercase">What's On</h2>

      <Carousel className="flex flex-col gap-4 max-w-screen-lg">
        <CarouselContent>
          {events.map((event, index) => (
            <CarouselItem key={index}>
              <Card className="bg-white">
                <CardContent className={cn("flex items-center justify-center px-4", "md:px-6")}>
                  <div className={cn("flex flex-col gap-8", "lg:flex-row")}>
                    <Image
                      src={event.image}
                      alt={`event ${index + 1} image`}
                      width={500}
                      height={700}
                      className={cn("object-cover rounded-lg w-full", "lg:basis-0 grow")}
                    />

                    <article className={cn("flex flex-col gap-4", "lg:basis-0 grow")}>
                      <h3 className="text-2xl font-medium">{event.name}</h3>

                      <p>{event.description}</p>

                      <div className="flex gap-4">
                        <CalendarCheck />
                        <p>{event.date}</p>
                      </div>

                      <div className="flex gap-4">
                        <MapPin />
                        <p>{event.location}</p>
                      </div>

                      <div className="flex gap-4">
                        <CircleDollarSign />
                        <p>{event.price}</p>
                      </div>

                      <div className="flex gap-4">
                        <Palette />
                        <p>{event.highlight}</p>
                      </div>

                      <div>
                        <p>
                          DM{" "}
                          <Link
                            href={`${event.link}`}
                            className="underline hover:text-muted-foreground"
                          >
                            {event.linkText}
                          </Link>{" "}
                          to join!
                        </p>
                        <p>{event.additionalInfo}</p>
                      </div>

                      <div>
                        <p>{event.notice}</p>
                      </div>
                    </article>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-between">
          <CarouselPrevious className="relative translate-0 left-[calc(50%-40px)] translate-y-4 hover:cursor-pointer" />
          <CarouselNext className="relative translate-0 right-[calc(50%-40px)] translate-y-4 hover:cursor-pointer" />
        </div>
      </Carousel>
    </motion.section>
  )
}
