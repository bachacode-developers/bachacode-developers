import { ReactNode } from "react";

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export default function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="pb-6">
      <h2 className="py-3 text-2xl font-semibold">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
