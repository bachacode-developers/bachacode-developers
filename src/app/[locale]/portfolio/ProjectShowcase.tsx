import { Card } from "@/components/cards/Card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink, Users } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import projects from "./projects";

export type Project = {
  id: React.Key;
  image: {
    src: string | StaticImport;
    alt: string;
  };
  duration: string;
  teamSize: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  results: {
    value: string;
    metric: string;
    description: string;
  }[];
  technologies: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  externalLink?: string;
  visitWebsite?: string;
};

interface ProjectShowcaseProps {
  index: number;
  project: Project;
}

export function ProjectShowcaseList() {
  const locale = useLocale();
  const localizedProjects = projects.get(locale || "en") || [];
  return (
    <div className="flex w-full flex-col space-y-20">
      {localizedProjects.map((project, index) => (
        <ProjectShowcase key={project.id} index={index} project={project} />
      ))}
    </div>
  );
}

export function ProjectShowcase({ index, project }: ProjectShowcaseProps) {
  const t = useTranslations("portfolio.projects");

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Project Image */}
      <div className="relative">
        <div className="group border-accent relative overflow-hidden rounded-3xl border shadow-2xl">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            className="h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute right-6 bottom-6 left-6">
            <div className="flex items-center gap-4 text-sm text-white">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {project.duration}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {project.teamSize}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="bg-primary/20 absolute -top-4 -right-4 h-24 w-24 rounded-full blur-xl" />
        <div className="bg-accent/20 absolute -bottom-4 -left-4 h-32 w-32 rounded-full blur-xl" />
      </div>

      {/* Project Content */}
      <div className={`space-y-8 ${index % 2 === 1 ? "lg:row-start-1" : ""}`}>
        <div>
          <Badge variant="outline" className="mb-4">
            {project.category}
          </Badge>
          <h3 className="text-foreground mb-2 text-3xl font-bold md:text-4xl">
            {project.title}
          </h3>
          <p className="text-primary mb-4 text-lg font-semibold">
            {project.subtitle}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-3 gap-6">
          {project.results.map((result, idx) => (
            <Card
              key={idx}
              className="gap-2 p-4 text-center transition-shadow hover:shadow-lg"
            >
              <div className="text-primary text-2xl font-bold">
                {result.value}
              </div>
              <div className="text-foreground mb-1 text-sm font-semibold">
                {result.metric}
              </div>
              <div className="text-muted-foreground text-xs">
                {result.description}
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-foreground mb-3 text-sm font-semibold">{`${t("technologies_used")}:`}</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <Card className="from-primary/5 to-accent/5 border-primary border-l-4 bg-gradient-to-r p-6">
            <blockquote className="text-foreground mb-4 italic">
              &quot;{project.testimonial.text}&quot;
            </blockquote>
            <div>
              <div className="text-foreground font-semibold">
                {project.testimonial.author}
              </div>
              <div className="text-muted-foreground text-sm">
                {project.testimonial.position}
              </div>
            </div>
          </Card>
        )}

        {/* CTA */}
        <div className="flex gap-4">
          <Button size="lg" className="rounded-md" disabled>
            {t("view_case_study")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="cursor-pointer rounded-md bg-transparent"
            asChild
            disabled={!project.externalLink}
          >
            <a href={project.externalLink} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              {t("view_website")}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
