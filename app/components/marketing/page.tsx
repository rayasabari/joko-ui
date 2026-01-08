import Link from "next/link";
import ComponentCard from "@/app/components/ComponentCard";
import { marketingComponents } from "@/lib/data/components";
import { IconChartLine } from "@tabler/icons-react";

export const metadata = {
  title: "Marketing Components - Joko UI",
  description: "Marketing and landing page components with Tailwind CSS",
};

export default function MarketingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground transition-colors" prefetch={false}>
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Marketing</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          <IconChartLine stroke={1.5} className="mr-2 inline-block" /> Marketing Components
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Components for marketing websites and landing pages. Hero sections,
          CTAs, footers, and more to help you convert visitors.
        </p>
      </div>

      {/* Components Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {marketingComponents.map((component) => (
          <ComponentCard
            key={component.slug}
            title={component.name}
            count={component.variants.length}
            icon={component.icon}
            href={`/components/marketing/${component.slug}`}
            description={component.description}
          />
        ))}
      </div>
    </div>
  );
}
