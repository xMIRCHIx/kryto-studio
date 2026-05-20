import { MediaType } from "@/backend";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePortfolioByService } from "@/hooks/useBackend";
import {
  ALL_SERVICE_TYPES,
  SERVICE_ICONS,
  SERVICE_LABELS,
} from "@/lib/serviceLabels";
import type { PortfolioItem, ServiceType } from "@/types";
import { ExternalLink, Film, Globe, Palette, Pen, Play } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

const SERVICE_LUCIDE_ICONS: Record<string, React.ReactNode> = {
  webAppDev: <Globe className="w-6 h-6" />,
  videoEditing: <Film className="w-6 h-6" />,
  graphicsDesign: <Palette className="w-6 h-6" />,
  uiUxDesign: <Pen className="w-6 h-6" />,
};

const SERVICE_SECTION_IDS: Record<string, string> = {
  webAppDev: "web-app-dev",
  videoEditing: "video-editing",
  graphicsDesign: "graphics-design",
  uiUxDesign: "ui-ux-design",
};

function getServiceKey(serviceType: ServiceType): string {
  return String(serviceType).replace(/^ServiceType\./, "");
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function PortfolioCardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <Skeleton className="w-full h-48" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-9 w-28 mt-2" />
      </div>
    </div>
  );
}

function VideoCard({ item }: { item: PortfolioItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/60 hover:shadow-[0_0_24px_rgba(0,200,220,0.15)] transition-all duration-300"
    >
      <div className="relative bg-black">
        <video
          src={item.url}
          controls
          className="w-full h-52 object-cover"
          preload="metadata"
          poster={item.thumbnailUrl ?? undefined}
        >
          <track kind="captions" />
        </video>
        <div className="absolute top-3 left-3">
          <Badge className="bg-primary/20 text-primary border border-primary/40 text-xs">
            <Play className="w-3 h-3 mr-1" /> Video
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-foreground text-base leading-snug mb-1 truncate">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function LinkCard({ item }: { item: PortfolioItem }) {
  const thumb = item.thumbnailUrl ?? null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/60 hover:shadow-[0_0_24px_rgba(0,200,220,0.15)] transition-all duration-300"
    >
      <div className="relative h-48 bg-muted overflow-hidden">
        {thumb ? (
          <img
            src={thumb}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Globe className="w-16 h-16 text-muted-foreground/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge className="bg-accent/20 text-accent border border-accent/40 text-xs">
            <Globe className="w-3 h-3 mr-1" /> Web
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-foreground text-base leading-snug mb-1 truncate">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {item.description}
        </p>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <Button
            size="sm"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Visit Site
          </Button>
        </a>
      </div>
    </motion.div>
  );
}

function ServiceSection({
  serviceType,
  index,
}: { serviceType: ServiceType; index: number }) {
  const { data: items, isLoading } = usePortfolioByService(serviceType);
  const key = getServiceKey(serviceType);
  const label = SERVICE_LABELS[serviceType];
  const icon = SERVICE_LUCIDE_ICONS[key];
  const sectionId = SERVICE_SECTION_IDS[key];
  const isOdd = index % 2 === 1;

  return (
    <section
      id={sectionId}
      data-ocid={`portfolio.${key}.section`}
      className={`py-20 px-4 scroll-mt-20 ${isOdd ? "bg-card/40" : "bg-background"}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/15 text-primary border border-primary/30">
            {icon}
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              {label}
            </h2>
            <div className="w-12 h-0.5 bg-primary mt-1 rounded-full" />
          </div>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <PortfolioCardSkeleton key={i} />
            ))}
          </div>
        ) : !items || items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            data-ocid={`portfolio.${key}.empty_state`}
            className="flex flex-col items-center justify-center py-16 rounded-xl border border-dashed border-border text-center"
          >
            <span className="text-5xl mb-3">{SERVICE_ICONS[serviceType]}</span>
            <p className="text-foreground font-display font-semibold text-lg mb-1">
              Coming soon
            </p>
            <p className="text-muted-foreground text-sm">
              Check back for our latest {label.toLowerCase()} work.
            </p>
          </motion.div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid={`portfolio.${key}.list`}
          >
            {items.map((item, i) => (
              <div
                key={String(item.id)}
                data-ocid={`portfolio.${key}.item.${i + 1}`}
              >
                {item.mediaType === MediaType.video ? (
                  <VideoCard item={item} />
                ) : (
                  <LinkCard item={item} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function Portfolio() {
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 px-4 bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(0,200,220,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-5 bg-primary/15 text-primary border border-primary/30 text-xs uppercase tracking-widest px-4 py-1">
              Our Work
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight"
          >
            Our <span className="text-primary">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Explore our work across all disciplines
          </motion.p>
        </div>
      </section>

      {/* Sticky section nav */}
      <div
        ref={navRef}
        data-ocid="portfolio.section_nav"
        className="sticky top-0 z-30 bg-card/95 backdrop-blur border-b border-border shadow-md"
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-1 overflow-x-auto scrollbar-none py-0">
          {ALL_SERVICE_TYPES.map((svcType) => {
            const k = getServiceKey(svcType);
            const sectionId = SERVICE_SECTION_IDS[k];
            return (
              <button
                key={k}
                type="button"
                data-ocid={`portfolio.nav.${k}`}
                onClick={() => scrollToSection(sectionId)}
                className="flex items-center gap-2 px-4 py-3 text-sm font-display font-medium text-muted-foreground whitespace-nowrap hover:text-primary hover:bg-primary/8 rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="text-base">{SERVICE_ICONS[svcType]}</span>
                {SERVICE_LABELS[svcType]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Service sections */}
      {ALL_SERVICE_TYPES.map((svcType, index) => (
        <ServiceSection
          key={String(svcType)}
          serviceType={svcType}
          index={index}
        />
      ))}
    </Layout>
  );
}
