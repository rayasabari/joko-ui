import Link from "next/link";
import ComponentCard from "./components/ComponentCard";
import { getTotalComponentCount, getAllComponents } from "@/lib/data/components";
import {
  IconWand,
  IconDownload,
  IconSettings,
  IconStar,
  IconFlower
} from '@tabler/icons-react';

export default function Home() {
  const totalComponents = getTotalComponentCount();

  return (
    <div className="relative" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 gradient-mesh" suppressHydrationWarning></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" suppressHydrationWarning></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" suppressHydrationWarning></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-foreground">
                {totalComponents}+ Free Components
              </span>
            </div>

            {/* Heading */}
            <div className="flex items-center gap-1 justify-center mb-6">
              <IconFlower className='size-[55px] sm:size-[64px] md:size-[78px] lg:size-[98px] text-primary animate-spin [animation-duration:5s]' />
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground  leading-tight">
                Joko
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  UI
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-semibold text-foreground max-w-xl mx-auto mb-4 lg:mb-10">
              Free Tailwind Components for  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text font-semibold text-transparent">
                Sat-set
              </span> Developers
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              Copy-paste ready components to build beautiful, responsive websites faster. No installation required — just Tailwind CSS.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-foreground">
                <IconWand stroke={1.5} className="text-green-500 w-5 h-5" />
                <span className="font-medium">No Config</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <IconDownload stroke={1.5} className="text-green-500 w-5 h-5" />
                <span className="font-medium">No Install</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <IconSettings stroke={1.5} className="text-green-500 w-5 h-5" />
                <span className="font-medium">No Setup</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/components/application"
                className="px-8 py-4 gradient-primary text-white font-semibold rounded-xl
                         hover:shadow-xl hover:shadow-primary/25 hover:scale-105 
                         transition-all duration-300"
              >
                Browse Components
              </Link>
              <a
                href="https://github.com/rayasabari/joko-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-button rounded-xl font-semibold
                         inline-flex items-center justify-center gap-2"
              >
                <IconStar stroke={1.5} className="w-5 h-5" />
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Component Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of beautifully designed, production-ready
              Tailwind CSS components.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {getAllComponents().map((category) => (
              <div key={category.slug} className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span> {category.name} Components
                </h3>
                <div className="grid gap-4">
                  {category.components.map((component) => (
                    <ComponentCard
                      key={component.slug}
                      title={component.name}
                      count={component.variants.length}
                      icon={component.icon}
                      href={`/components/${category.slug}/${component.slug}`}
                      description={component.description}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center glass-card p-8">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Browse Components
              </h3>
              <p className="text-muted-foreground">
                Explore our collection and find the perfect component for your
                project.
              </p>
            </div>

            <div className="text-center glass-card p-8">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Copy the Code
              </h3>
              <p className="text-muted-foreground">
                Click the copy button to copy the component code to your
                clipboard.
              </p>
            </div>

            <div className="text-center glass-card p-8">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Paste & Customize
              </h3>
              <p className="text-muted-foreground">
                Paste the code into your project and customize it to match your
                design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
