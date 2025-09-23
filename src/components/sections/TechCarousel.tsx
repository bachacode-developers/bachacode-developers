"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Autoscroll from "embla-carousel-auto-scroll";

export interface TechCarouselItem {
  icon: IconProp;
  title: string;
  className?: string;
}

function TechCarouselItem({
  icon,
  title,
  className = "group-hover:text-primary",
}: Readonly<TechCarouselItem>) {
  return (
    <CarouselItem className="group flex basis-1/2 flex-col items-center sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
      <FontAwesomeIcon
        fixedWidth
        className={`text-muted-foreground py-1.5 text-8xl transition-all duration-300 group-hover:scale-105 ${className}`}
        icon={icon}
      />
      <span className="group-hover:text-foreground text-muted-foreground transition-all duration-300 group-hover:scale-105">
        {title}
      </span>
    </CarouselItem>
  );
}

export default function TechCarousel({
  directionAS = "forward",
  directionOpt = "ltr",
  items,
  shuffle = false,
}: Readonly<{
  directionAS?: "forward" | "backward";
  directionOpt?: "ltr" | "rtl";
  items: TechCarouselItem[];
  shuffle?: boolean;
}>) {
  const [shuffledItems, setShuffledItems] = useState(items);

  useEffect(() => {
    if (shuffle) {
      setShuffledItems(
        [...items]
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value),
      );
    }
  }, [items, shuffle]);
  return (
    <Carousel
      className="w-full pb-3"
      opts={{
        align: "center",
        loop: true,
        watchDrag: false,
        direction: directionOpt,
      }}
      plugins={[
        Autoscroll({
          startDelay: 0,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          speed: 1.2,
          direction: directionAS,
        }),
      ]}
    >
      <CarouselContent>
        {shuffledItems.map((item, index) => (
          <TechCarouselItem
            key={index}
            icon={item.icon}
            title={item.title}
            className={item.className}
          />
        ))}
      </CarouselContent>
    </Carousel>
  );
}
