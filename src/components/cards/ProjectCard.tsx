import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  buttonUrl: string;
  buttonText?: string;
  inverted?: boolean;
  altColor?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  buttonUrl,
  buttonText,
  inverted = false,
  altColor = false,
}: ProjectCardProps) {
  const t = useTranslations("common.project_card");
  return (
    <div className={`w-full ${altColor ? "bg-secondary" : "bg-primary"}`}>
      <div
        className={`relative container mx-auto flex ${
          inverted ? "flex-row-reverse" : "flex-row"
        } items-center justify-around px-6`}
      >
        <div className="relative h-full w-full md:w-1/2">
          <Image
            src={image}
            alt="Project Image"
            placeholder="blur"
            className="object-cover blur-xs md:blur-none"
          />
          <div className="absolute inset-0 bg-black opacity-75 md:hidden"></div>
        </div>
        <div
          className={`absolute flex w-3/4 flex-col items-center justify-center space-y-3 px-6 text-center md:relative md:w-1/2`}
        >
          <h3
            className={`text-2xl font-bold ${altColor ? "text-white md:text-black" : "text-white"}`}
          >
            {title}
          </h3>
          <p
            className={`${altColor ? "text-white md:text-black" : "text-white"}`}
          >
            {description}
          </p>

          <a
            href={buttonUrl}
            target="_blank"
            className={`w-fit rounded-lg border-2 px-6 py-3 text-base font-semibold uppercase ${
              altColor
                ? "border-white text-white md:border-black md:text-black"
                : "border-white text-white"
            }`}
          >
            {buttonText ?? t("button")}
          </a>
        </div>
      </div>
    </div>
  );
}
