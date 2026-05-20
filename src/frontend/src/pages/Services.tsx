import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useReviews } from "@/hooks/useBackend";
import { getServiceLabel } from "@/lib/serviceLabels";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clapperboard,
  Code2,
  Layers,
  MessageSquare,
  Palette,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Intersection Observer hook for scroll reveals ────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          // biome-ignore lint/suspicious/noArrayIndexKey: static fixed-length decorative array
          key={`service-star-${i}`}
          className={`w-4 h-4 ${
            i < rating ? "fill-accent text-accent" : "text-muted-foreground/40"
          }`}
          strokeWidth={i < rating ? 0 : 1.5}
        />
      ))}
    </div>
  );
}

// ─── Service data ─────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "web-app-dev",
    icon: Code2,
    title: "Web/App Development",
    description:
      "We build fast, scalable, and beautiful digital products — from marketing sites to full-featured web apps and cross-platform mobile applications.",
    features: [
      "Custom React & Next.js web apps",
      "Cross-platform mobile apps",
      "REST & GraphQL API integration",
      "Performance-first architecture",
      "SEO optimization & accessibility",
    ],
    accentClass: "text-primary",
    glowClass: "glow-primary",
    bgClass: "bg-primary/10",
    badgeClass: "border-primary/30 text-primary",
  },
  {
    id: "video-editing",
    icon: Clapperboard,
    title: "Video Editing",
    description:
      "From social content to cinematic brand films, we cut and colour-grade your footage into compelling stories that capture attention and convert viewers.",
    features: [
      "Cinematic colour grading",
      "Motion graphics & VFX",
      "Short-form social content",
      "Corporate & brand films",
      "Audio mixing & sound design",
    ],
    accentClass: "text-accent",
    glowClass: "",
    bgClass: "bg-accent/10",
    badgeClass: "border-accent/30 text-accent",
  },
  {
    id: "graphics-design",
    icon: Palette,
    title: "Graphics Design",
    description:
      "Bold, on-brand visual identities and print-ready assets that make your business impossible to ignore — from logos to full brand systems.",
    features: [
      "Brand identity & logo design",
      "Social media graphics",
      "Print & packaging design",
      "Infographics & pitch decks",
      "Illustration & icon sets",
    ],
    accentClass: "text-primary",
    glowClass: "glow-primary",
    bgClass: "bg-primary/10",
    badgeClass: "border-primary/30 text-primary",
  },
  {
    id: "ui-ux-design",
    icon: Layers,
    title: "UI/UX Design",
    description:
      "User-centred design that delights and converts. We map out user journeys, build high-fidelity prototypes, and hand off pixel-perfect specs to dev.",
    features: [
      "User research & journey mapping",
      "Wireframes & interactive prototypes",
      "High-fidelity Figma designs",
      "Design systems & component libraries",
      "Usability testing & iteration",
    ],
    accentClass: "text-accent",
    glowClass: "",
    bgClass: "bg-accent/10",
    badgeClass: "border-accent/30 text-accent",
  },
];

// ─── Section reveal wrapper ───────────────────────────────────────────────────
function RevealSection({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Service Section ──────────────────────────────────────────────────────────
function ServiceSection({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const { ref, visible } = useReveal();
  const isEven = index % 2 === 0;
  const Icon = service.icon;

  return (
    <section
      ref={ref}
      data-ocid={`services.${service.id}.section`}
      className={`py-20 md:py-28 ${
        isEven ? "bg-background" : "bg-card/60"
      } border-b border-border/40 transition-all duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div
          className={`flex flex-col ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-12 lg:gap-20`}
        >
          {/* Icon / Visual side */}
          <div
            className={`flex-shrink-0 transition-all duration-700 delay-100 ${
              visible
                ? "opacity-100 translate-x-0"
                : isEven
                  ? "opacity-0 -translate-x-10"
                  : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className={`relative w-48 h-48 md:w-64 md:h-64 rounded-3xl ${
                service.bgClass
              } border border-border/30 flex items-center justify-center`}
            >
              <Icon
                className={`w-20 h-20 md:w-28 md:h-28 ${service.accentClass} opacity-90`}
                strokeWidth={1.2}
              />
              {/* decorative corner dots */}
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-border/50" />
              <span className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-border/50" />
            </div>
          </div>

          {/* Content side */}
          <div
            className={`flex-1 min-w-0 transition-all duration-700 delay-200 ${
              visible
                ? "opacity-100 translate-x-0"
                : isEven
                  ? "opacity-0 translate-x-10"
                  : "opacity-0 -translate-x-10"
            }`}
          >
            <Badge
              variant="outline"
              className={`mb-4 text-xs uppercase tracking-widest font-semibold ${service.badgeClass}`}
            >
              {service.title}
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              {service.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              {service.description}
            </p>
            <ul className="space-y-3">
              {service.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <CheckCircle2
                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${service.accentClass}`}
                    strokeWidth={2}
                  />
                  <span className="text-foreground/90 text-sm md:text-base">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Review Card ──────────────────────────────────────────────────────────────
import type { Review } from "@/types";

function ReviewCard({ review, delay }: { review: Review; delay: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <Card className="h-full bg-card border-border/50 hover:border-primary/30 transition-smooth">
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-primary text-sm">
                  {review.clientName.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground truncate text-sm">
                  {review.clientName}
                </p>
                <Badge
                  variant="outline"
                  className="text-[10px] uppercase tracking-wider border-border/50 text-muted-foreground mt-0.5"
                >
                  {getServiceLabel(review.serviceType)}
                </Badge>
              </div>
            </div>
            <StarRating rating={Number(review.rating)} />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
            {review.reviewText}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
import type React from "react";

export default function Services() {
  const { data: reviews, isLoading: reviewsLoading } = useReviews();

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        data-ocid="services.hero.section"
        className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-background overflow-hidden"
      >
        {/* Background grid decoration */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow blobs */}
        <div
          aria-hidden
          className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-primary/8 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-accent/8 blur-3xl pointer-events-none"
        />

        <div className="container mx-auto px-4 md:px-8 relative">
          <RevealSection className="text-center max-w-3xl mx-auto">
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 text-primary text-xs uppercase tracking-widest font-semibold"
            >
              What We Do
            </Badge>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6 leading-tight">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
              From pixels to production — we deliver bold digital experiences
              across every creative discipline.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── Service Sections ─────────────────────────────── */}
      {SERVICES.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* ── Reviews ──────────────────────────────────────── */}
      <section
        data-ocid="services.reviews.section"
        className="py-20 md:py-28 bg-background"
      >
        <div className="container mx-auto px-4 md:px-8">
          <RevealSection className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary text-xs uppercase tracking-widest font-semibold"
            >
              Social Proof
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              What Our Clients <span className="text-accent">Say</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Real words from people we've had the privilege to work with.
            </p>
          </RevealSection>

          {/* Loading skeletons */}
          {reviewsLoading && (
            <div
              data-ocid="services.reviews.loading_state"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {Array.from({ length: 3 }).map((_, i) => (
                <Card
                  // biome-ignore lint/suspicious/noArrayIndexKey: static fixed-length decorative array
                  key={i}
                  className="bg-card border-border/50"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-10 h-10 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-3 w-24" />
                        <Skeleton className="h-2.5 w-16" />
                      </div>
                    </div>
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-16 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Empty state */}
          {!reviewsLoading && (!reviews || reviews.length === 0) && (
            <div
              data-ocid="services.reviews.empty_state"
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mb-5">
                <MessageSquare
                  className="w-8 h-8 text-muted-foreground"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                No reviews yet
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Client reviews will appear here. Be the first to work with us!
              </p>
            </div>
          )}

          {/* Review grid */}
          {!reviewsLoading && reviews && reviews.length > 0 && (
            <div
              data-ocid="services.reviews.list"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {reviews.map((review, i) => (
                <ReviewCard
                  key={String(review.id)}
                  review={review}
                  delay={i * 80}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        data-ocid="services.cta.section"
        className="py-20 md:py-28 bg-card/60 border-t border-border/40"
      >
        <div className="container mx-auto px-4 md:px-8">
          <RevealSection className="text-center max-w-2xl mx-auto">
            <div
              aria-hidden
              className="w-16 h-1 rounded-full bg-primary mx-auto mb-8"
            />
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 leading-tight">
              Ready to work <span className="text-primary">with us?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Let's turn your ideas into something extraordinary. Book a free
              consultation and let's get started.
            </p>
            <Button
              asChild
              data-ocid="services.cta.book_appointment_button"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base glow-primary transition-smooth group"
            >
              <Link to="/contact">
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
