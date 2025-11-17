import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from "../portfolio/ProjectShowcase";
import Image from "next/image";

function ProjectCarouselItem(project: Readonly<Project>) {
  return (
    <CarouselItem className="group flex md:basis-1/2">
      <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
          width={756}
          height={500}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent to-80% p-4">
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <p className="text-sm text-gray-300">{project.subtitle}</p>
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-blue-400 hover:underline"
            >
              {project.externalLink && project.visitWebsite && (
                <span>{project.visitWebsite}</span>
              )}
            </a>
          )}
        </div>
      </div>
    </CarouselItem>
  );
}

export default function ProjectCarousel({ items }: { items: Project[] }) {
  const opts = {
    align: "start" as const,
    loop: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <Carousel opts={opts} className="w-full max-w-5xl px-12 pb-3">
      <CarouselContent>
        {items.map((item) => (
          <ProjectCarouselItem key={item.id} {...item} />
        ))}
      </CarouselContent>
      <CarouselNext variant="default" className="cursor-pointer" />
      <CarouselPrevious variant="default" className="cursor-pointer" />
    </Carousel>
  );
}
