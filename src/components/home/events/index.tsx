import { Card, CardContent } from "@/components/shadcn/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel"
import events from "@/lib/events"
import { CalendarCheck, CircleDollarSign, MapPin, Palette } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Events() {
  return (
    <section className="flex flex-col items-center justify-center gap-12 px-2">
      <h2 className="text-3xl font-semibold uppercase">What's On</h2>

      <Carousel>
        <CarouselContent>
          {events.map((event, index) => (
            <CarouselItem key={index}>
              <Card className="">
                <CardContent className="flex aspect-square items-center justify-center px-4">
                  <div className={"flex flex-col gap-8"}>
                    <Image
                      src={"https://placehold.co/500x700"}
                      alt={`event 1`}
                      width={500}
                      height={700}
                      className="object-cover rounded-lg"
                    />

                    <article className="flex flex-col gap-4">
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
