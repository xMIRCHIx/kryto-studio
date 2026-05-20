import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Code2,
  Layers,
  Palette,
  Sparkles,
  Star,
  Video,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    icon: Code2,
    title: "Web / App Development",
    desc: "Full-stack web and mobile applications built for performance and scale.",
    color: "text-primary",
    glow: "shadow-[0_0_20px_oklch(0.7_0.25_190/0.2)]",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Cinematic storytelling — from social reels to full brand films.",
    color: "text-accent",
    glow: "shadow-[0_0_20px_oklch(0.65_0.22_40/0.2)]",
  },
  {
    icon: Palette,
    title: "Graphics Design",
    desc: "Brand identities, marketing visuals, and print assets that stand out.",
    color: "text-primary",
    glow: "shadow-[0_0_20px_oklch(0.7_0.25_190/0.2)]",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    desc: "User-centered interfaces crafted for delight and conversion.",
    color: "text-accent",
    glow: "shadow-[0_0_20px_oklch(0.65_0.22_40/0.2)]",
  },
];

const VALUES = [
  {
    icon: Star,
    title: "Premium Quality",
    desc: "Every pixel, every frame, every line of code — crafted to the highest standard.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect your deadlines. Transparent timelines, zero surprises.",
  },
  {
    icon: Sparkles,
    title: "Creative Excellence",
    desc: "Bold concepts and original thinking that make your brand unforgettable.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const { ref, inView } = useInView();
  const translateMap = {
    up: "translateY(32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : translateMap[direction],
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        data-ocid="home.hero_section"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-kryto-bg.dim_1600x900.jpg')",
          }}
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />

        {/* Animated glow orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.7 0.25 190 / 0.15) 0%, transparent 70%)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.22 40 / 0.12) 0%, transparent 70%)",
            animation: "pulse 5s ease-in-out infinite 1.5s",
          }}
        />

        {/* Floating grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.7 0.25 190 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.25 190 / 0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "none" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
              <Zap className="w-3.5 h-3.5" />
              Creative Digital Studio
            </div>
          </div>

          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "none" : "translateY(32px)",
              transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
            }}
          >
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6">
              <span className="text-foreground">Kryto</span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.7 0.25 190) 0%, oklch(0.75 0.22 200) 40%, oklch(0.65 0.22 40) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Studio
              </span>
            </h1>
          </div>

          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "none" : "translateY(32px)",
              transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto mb-12 leading-relaxed">
              Creative digital solutions for{" "}
              <span className="text-foreground font-semibold">bold brands</span>
              . Web, video, graphics & UI/UX — all under one roof.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "none" : "translateY(32px)",
              transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
            }}
          >
            <Button
              asChild
              data-ocid="home.view_work_button"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 h-14 text-base rounded-xl glow-primary transition-smooth"
            >
              <Link to="/portfolio">
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              data-ocid="home.book_session_button"
              size="lg"
              variant="outline"
              className="border-2 border-border hover:border-primary/50 bg-card/40 backdrop-blur-sm text-foreground font-bold px-8 h-14 text-base rounded-xl transition-smooth"
            >
              <Link to="/contact">Book a Session</Link>
            </Button>
          </div>

          {/* Scroll hint */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            style={{ animation: "bounce 2s ease-in-out infinite" }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center pt-1.5">
              <div
                className="w-1 h-2.5 bg-primary rounded-full"
                style={{ animation: "pulse 2s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ────────────────────────────────── */}
      <section
        data-ocid="home.services_section"
        className="py-24 md:py-32 bg-muted/30"
      >
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                What We Do
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                End-to-end creative services that take your brand from concept
                to launch.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.1}>
                <Link
                  to="/services"
                  data-ocid={`home.service_card.${i + 1}`}
                  className="group block h-full"
                >
                  <div
                    className={`h-full bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 ${svc.glow} hover:shadow-[0_0_40px_oklch(0.7_0.25_190/0.18)]`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center ${svc.color} transition-smooth group-hover:scale-110`}
                    >
                      <svc.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground text-base mb-1.5">
                        {svc.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                    <div
                      className={`mt-auto flex items-center gap-1 text-xs font-semibold ${svc.color} opacity-0 group-hover:opacity-100 transition-smooth`}
                    >
                      Learn more <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────── */}
      <section
        data-ocid="home.why_section"
        className="py-24 md:py-32 bg-background"
      >
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                Why Kryto
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">
                Built Different
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                We're not just a service provider — we're a creative partner
                invested in your success.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {VALUES.map((val, i) => (
              <FadeIn
                key={val.title}
                delay={i * 0.12}
                direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
              >
                <div
                  data-ocid={`home.value_card.${i + 1}`}
                  className="relative bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Glow accent */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 0%, oklch(0.7 0.25 190 / 0.08) 0%, transparent 60%)",
                    }}
                  />
                  <div className="relative w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 transition-smooth group-hover:scale-110 group-hover:border-primary/50">
                    <val.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="relative font-display font-bold text-xl text-foreground mb-3">
                    {val.title}
                  </h3>
                  <p className="relative text-muted-foreground text-sm leading-relaxed">
                    {val.desc}
                  </p>
                  <div className="relative mt-6 flex items-center gap-1.5">
                    {[...Array(3)].map((_, j) => (
                      <CheckCircle2
                        // biome-ignore lint/suspicious/noArrayIndexKey: static fixed-length decorative array
                        key={`home-check-${j}`}
                        className="w-4 h-4 text-primary"
                      />
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────── */}
      <section
        data-ocid="home.cta_section"
        className="py-24 md:py-32 bg-muted/20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div
              className="relative rounded-3xl overflow-hidden px-8 md:px-16 py-16 md:py-20 text-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.16 0.025 260) 0%, oklch(0.18 0.018 260) 40%, oklch(0.16 0.015 240) 100%)",
                border: "1px solid oklch(0.7 0.25 190 / 0.25)",
                boxShadow:
                  "0 0 80px oklch(0.7 0.25 190 / 0.12), inset 0 0 60px oklch(0.7 0.25 190 / 0.04)",
              }}
            >
              {/* Background decoration */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, oklch(0.7 0.25 190 / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.65 0.22 40 / 0.08) 0%, transparent 50%)",
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.7 0.25 190 / 0.6), transparent)",
                }}
              />

              <div className="relative">
                <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                  Let's Build Together
                </p>
                <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                  Ready to bring your{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.7 0.25 190) 0%, oklch(0.65 0.22 40) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    vision to life?
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                  Tell us about your project and let's create something
                  extraordinary together.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    asChild
                    data-ocid="home.cta_book_button"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-14 text-base rounded-xl glow-primary transition-smooth"
                  >
                    <Link to="/contact">
                      Book Appointment
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    data-ocid="home.cta_portfolio_button"
                    size="lg"
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground font-semibold px-8 h-14 text-base rounded-xl transition-smooth"
                  >
                    <Link to="/portfolio">See Our Portfolio</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
