import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

export type Service = {
  accent: string;
  color: string;
  icon: IconProp;
  iconColor: string;
  borderColor: string;
  title: string;
  description: string;
  features?: string[];
};

interface ServiceCardProps {
  index: React.Key;
  service: Service;
}

export default function ServiceCard({ index, service }: ServiceCardProps) {
  return (
    <Card
      key={index}
      className="group relative gap-3 rounded bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Decorative corner element */}
      <div
        className={`absolute top-0 right-0 h-20 w-20 ${service.accent} rounded-bl-3xl opacity-50`}
      ></div>

      <CardHeader className="relative z-10 pt-8 pb-6 text-center">
        <div
          className={`h-20 w-20 rounded-2xl border-2 ${service.borderColor} ${service.color} mx-auto mb-6 flex items-center justify-center text-3xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
        >
          <FontAwesomeIcon
            icon={service.icon}
            title={service.title}
            fixedWidth
            className={`text-4xl ${service.iconColor}`}
          />
        </div>
        <CardTitle className="group-hover:text-primary mb-3 text-2xl font-bold text-balance transition-colors">
          <h3>{service.title}</h3>
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>

      {service.features && (
        <CardContent className="px-6 pb-8">
          {/* Feature tags */}
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {service.features.map((feature, featureIndex) => (
              <Badge key={featureIndex} variant="outline">
                {feature}
              </Badge>
            ))}
          </div>

          {/* Call to action */}
          {/* <div className="text-center">
          <Button
            variant="ghost"
            className="rounded-full px-6 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all group-hover:bg-primary/10"
          >
            Learn More →
          </Button>
        </div> */}
        </CardContent>
      )}
    </Card>
  );
}
