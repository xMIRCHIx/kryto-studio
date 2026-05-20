import { c as createLucideIcon, u as useReviews, j as jsxRuntimeExports, B as Button, L as Link, r as reactExports, S as Star } from "./index-C00UYYw1.js";
import { B as Badge } from "./badge-vAGPBMn-.js";
import { C as Card, a as CardContent } from "./card-qfeHq268.js";
import { S as Skeleton } from "./skeleton-BjIHPZPf.js";
import { g as getServiceLabel } from "./serviceLabels-D830frqo.js";
import { C as CodeXml, L as Layers, A as ArrowRight } from "./layers-CZL9f_Ag.js";
import { P as Palette } from "./palette-DLfFilEQ.js";
import { M as MessageSquare } from "./message-square-DjpwxFkJ.js";
import { C as CircleCheck } from "./circle-check-CU9PyZNc.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z", key: "1tn4o7" }
  ],
  ["path", { d: "m6.2 5.3 3.1 3.9", key: "iuk76l" }],
  ["path", { d: "m12.4 3.4 3.1 4", key: "6hsd6n" }],
  ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", key: "ltgou9" }]
];
const Clapperboard = createLucideIcon("clapperboard", __iconNode);
function useReveal() {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}
function StarRating({ rating }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex items-center gap-0.5",
      "aria-label": `${rating} out of 5 stars`,
      children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Star,
        {
          className: `w-4 h-4 ${i < rating ? "fill-accent text-accent" : "text-muted-foreground/40"}`,
          strokeWidth: i < rating ? 0 : 1.5
        },
        `service-star-${i}`
      ))
    }
  );
}
const SERVICES = [
  {
    id: "web-app-dev",
    icon: CodeXml,
    title: "Web/App Development",
    description: "We build fast, scalable, and beautiful digital products — from marketing sites to full-featured web apps and cross-platform mobile applications.",
    features: [
      "Custom React & Next.js web apps",
      "Cross-platform mobile apps",
      "REST & GraphQL API integration",
      "Performance-first architecture",
      "SEO optimization & accessibility"
    ],
    accentClass: "text-primary",
    glowClass: "glow-primary",
    bgClass: "bg-primary/10",
    badgeClass: "border-primary/30 text-primary"
  },
  {
    id: "video-editing",
    icon: Clapperboard,
    title: "Video Editing",
    description: "From social content to cinematic brand films, we cut and colour-grade your footage into compelling stories that capture attention and convert viewers.",
    features: [
      "Cinematic colour grading",
      "Motion graphics & VFX",
      "Short-form social content",
      "Corporate & brand films",
      "Audio mixing & sound design"
    ],
    accentClass: "text-accent",
    glowClass: "",
    bgClass: "bg-accent/10",
    badgeClass: "border-accent/30 text-accent"
  },
  {
    id: "graphics-design",
    icon: Palette,
    title: "Graphics Design",
    description: "Bold, on-brand visual identities and print-ready assets that make your business impossible to ignore — from logos to full brand systems.",
    features: [
      "Brand identity & logo design",
      "Social media graphics",
      "Print & packaging design",
      "Infographics & pitch decks",
      "Illustration & icon sets"
    ],
    accentClass: "text-primary",
    glowClass: "glow-primary",
    bgClass: "bg-primary/10",
    badgeClass: "border-primary/30 text-primary"
  },
  {
    id: "ui-ux-design",
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centred design that delights and converts. We map out user journeys, build high-fidelity prototypes, and hand off pixel-perfect specs to dev.",
    features: [
      "User research & journey mapping",
      "Wireframes & interactive prototypes",
      "High-fidelity Figma designs",
      "Design systems & component libraries",
      "Usability testing & iteration"
    ],
    accentClass: "text-accent",
    glowClass: "",
    bgClass: "bg-accent/10",
    badgeClass: "border-accent/30 text-accent"
  }
];
function RevealSection({
  children,
  className = "",
  delay = 0
}) {
  const { ref, visible } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      style: { transitionDelay: `${delay}ms` },
      className: `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`,
      children
    }
  );
}
function ServiceSection({
  service,
  index
}) {
  const { ref, visible } = useReveal();
  const isEven = index % 2 === 0;
  const Icon = service.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref,
      "data-ocid": `services.${service.id}.section`,
      className: `py-20 md:py-28 ${isEven ? "bg-background" : "bg-card/60"} border-b border-border/40 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `flex-shrink-0 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : isEven ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `relative w-48 h-48 md:w-64 md:h-64 rounded-3xl ${service.bgClass} border border-border/30 flex items-center justify-center`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Icon,
                        {
                          className: `w-20 h-20 md:w-28 md:h-28 ${service.accentClass} opacity-90`,
                          strokeWidth: 1.2
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 w-2 h-2 rounded-full bg-border/50" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-3 left-3 w-2 h-2 rounded-full bg-border/50" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex-1 min-w-0 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : isEven ? "opacity-0 translate-x-10" : "opacity-0 -translate-x-10"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: `mb-4 text-xs uppercase tracking-widest font-semibold ${service.badgeClass}`,
                      children: service.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight", children: service.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl", children: service.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: service.features.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheck,
                      {
                        className: `w-5 h-5 mt-0.5 flex-shrink-0 ${service.accentClass}`,
                        strokeWidth: 2
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 text-sm md:text-base", children: feat })
                  ] }, feat)) })
                ]
              }
            )
          ]
        }
      ) })
    }
  );
}
function ReviewCard({ review, delay }) {
  const { ref, visible } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      style: { transitionDelay: `${delay}ms` },
      className: `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full bg-card border-border/50 hover:border-primary/30 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-primary text-sm", children: review.clientName.charAt(0).toUpperCase() }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground truncate text-sm", children: review.clientName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-[10px] uppercase tracking-wider border-border/50 text-muted-foreground mt-0.5",
                  children: getServiceLabel(review.serviceType)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: Number(review.rating) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed line-clamp-4", children: review.reviewText })
      ] }) })
    }
  );
}
function Services() {
  const { data: reviews, isLoading: reviewsLoading } = useReviews();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "services.hero.section",
        className: "relative pt-24 pb-20 md:pt-32 md:pb-28 bg-background overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": true,
              className: "absolute inset-0 opacity-[0.04]",
              style: {
                backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
                backgroundSize: "60px 60px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": true,
              className: "absolute top-10 left-1/4 w-72 h-72 rounded-full bg-primary/8 blur-3xl pointer-events-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": true,
              className: "absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-accent/8 blur-3xl pointer-events-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-8 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealSection, { className: "text-center max-w-3xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "mb-6 border-primary/30 text-primary text-xs uppercase tracking-widest font-semibold",
                children: "What We Do"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-5xl md:text-7xl text-foreground mb-6 leading-tight", children: [
              "Our ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Services" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto", children: "From pixels to production — we deliver bold digital experiences across every creative discipline." })
          ] }) })
        ]
      }
    ),
    SERVICES.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceSection, { service, index }, service.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "services.reviews.section",
        className: "py-20 md:py-28 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealSection, { className: "text-center mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "mb-4 border-primary/30 text-primary text-xs uppercase tracking-widest font-semibold",
                children: "Social Proof"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl md:text-5xl text-foreground mb-4", children: [
              "What Our Clients ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Say" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-md mx-auto", children: "Real words from people we've had the privilege to work with." })
          ] }),
          reviewsLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "services.reviews.loading_state",
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
              children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Card,
                {
                  className: "bg-card border-border/50",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-10 h-10 rounded-full" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-24" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-2.5 w-16" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-20" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full" })
                  ] })
                },
                i
              ))
            }
          ),
          !reviewsLoading && (!reviews || reviews.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "services.reviews.empty_state",
              className: "flex flex-col items-center justify-center py-20 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MessageSquare,
                  {
                    className: "w-8 h-8 text-muted-foreground",
                    strokeWidth: 1.5
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground mb-2", children: "No reviews yet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs", children: "Client reviews will appear here. Be the first to work with us!" })
              ]
            }
          ),
          !reviewsLoading && reviews && reviews.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "services.reviews.list",
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
              children: reviews.map((review, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                ReviewCard,
                {
                  review,
                  delay: i * 80
                },
                String(review.id)
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "services.cta.section",
        className: "py-20 md:py-28 bg-card/60 border-t border-border/40",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealSection, { className: "text-center max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": true,
              className: "w-16 h-1 rounded-full bg-primary mx-auto mb-8"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl md:text-5xl text-foreground mb-5 leading-tight", children: [
            "Ready to work ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "with us?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-10 leading-relaxed", children: "Let's turn your ideas into something extraordinary. Book a free consultation and let's get started." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              "data-ocid": "services.cta.book_appointment_button",
              size: "lg",
              className: "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base glow-primary transition-smooth group",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
                "Book Appointment",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" })
              ] })
            }
          )
        ] }) })
      }
    )
  ] });
}
export {
  Services as default
};
