import Link from "next/link";
import ComponentCard from "@/app/components/ComponentCard";
import { applicationComponents } from "@/lib/data/components";
import { IconLayoutGrid } from "@tabler/icons-react";

export const metadata = {
  title: "Application Components - Joko UI",
  description: "UI components for building modern web applications with Tailwind CSS",
};

export default function ApplicationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground transition-colors" prefetch={false}>
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Application</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          <IconLayoutGrid stroke={1.5} className="mr-2 inline-block" /> Application Components
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          UI components for building modern web applications. From buttons to
          forms, these components are designed to be functional and beautiful.
        </p>
      </div>

      {/* Components Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {applicationComponents.map((component) => (
          <ComponentCard
            key={component.slug}
            title={component.name}
            count={component.variants.length}
            icon={component.icon}
            href={`/components/application/${component.slug}`}
            description={component.description}
          />
        ))}
      </div>
    </div>
  );
}
