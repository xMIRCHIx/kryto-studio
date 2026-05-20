import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, Z as Zap, B as Button, L as Link, S as Star } from "./index-C00UYYw1.js";
import { A as ArrowRight, C as CodeXml, L as Layers } from "./layers-CZL9f_Ag.js";
import { V as Video } from "./video-DA7qHrTo.js";
import { P as Palette } from "./palette-DLfFilEQ.js";
import { C as Clock } from "./clock-C05DR3ZP.js";
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
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
const SERVICES = [
  {
    icon: CodeXml,
    title: "Web / App Development",
    desc: "Full-stack web and mobile applications built for performance and scale.",
    color: "text-primary",
    glow: "shadow-[0_0_20px_oklch(0.7_0.25_190/0.2)]"
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Cinematic storytelling — from social reels to full brand films.",
    color: "text-accent",
    glow: "shadow-[0_0_20px_oklch(0.65_0.22_40/0.2)]"
  },
  {
    icon: Palette,
    title: "Graphics Design",
    desc: "Brand identities, marketing visuals, and print assets that stand out.",
    color: "text-primary",
    glow: "shadow-[0_0_20px_oklch(0.7_0.25_190/0.2)]"
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    desc: "User-centered interfaces crafted for delight and conversion.",
    color: "text-accent",
    glow: "shadow-[0_0_20px_oklch(0.65_0.22_40/0.2)]"
  }
];
const VALUES = [
  {
    icon: Star,
    title: "Premium Quality",
    desc: "Every pixel, every frame, every line of code — crafted to the highest standard."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect your deadlines. Transparent timelines, zero surprises."
  },
  {
    icon: Sparkles,
    title: "Creative Excellence",
    desc: "Bold concepts and original thinking that make your brand unforgettable."
  }
];
function useInView(threshold = 0.15) {
  const ref = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}
function FadeIn({
  children,
  delay = 0,
  direction = "up"
}) {
  const { ref, inView } = useInView();
  const translateMap = {
    up: "translateY(32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      style: {
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : translateMap[direction],
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`
      },
      children
    }
  );
}
function Home() {
  const [heroVisible, setHeroVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "home.hero_section",
        className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
              style: {
                backgroundImage: "url('/assets/generated/hero-kryto-bg.dim_1600x900.jpg')"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.7 0.25 190 / 0.15) 0%, transparent 70%)",
                animation: "pulse 4s ease-in-out infinite"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.65 0.22 40 / 0.12) 0%, transparent 70%)",
                animation: "pulse 5s ease-in-out infinite 1.5s"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none opacity-10",
              style: {
                backgroundImage: "linear-gradient(oklch(0.7 0.25 190 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.25 190 / 0.4) 1px, transparent 1px)",
                backgroundSize: "80px 80px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto px-4 md:px-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "none" : "translateY(24px)",
                  transition: "opacity 0.8s ease, transform 0.8s ease"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5" }),
                  "Creative Digital Studio"
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "none" : "translateY(32px)",
                  transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Kryto" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(135deg, oklch(0.7 0.25 190) 0%, oklch(0.75 0.22 200) 40%, oklch(0.65 0.22 40) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      },
                      children: "Studio"
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "none" : "translateY(32px)",
                  transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto mb-12 leading-relaxed", children: [
                  "Creative digital solutions for",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "bold brands" }),
                  ". Web, video, graphics & UI/UX — all under one roof."
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                style: {
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "none" : "translateY(32px)",
                  transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      "data-ocid": "home.view_work_button",
                      size: "lg",
                      className: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 h-14 text-base rounded-xl glow-primary transition-smooth",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", children: [
                        "View Our Work",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      "data-ocid": "home.book_session_button",
                      size: "lg",
                      variant: "outline",
                      className: "border-2 border-border hover:border-primary/50 bg-card/40 backdrop-blur-sm text-foreground font-bold px-8 h-14 text-base rounded-xl transition-smooth",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Book a Session" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute bottom-10 left-1/2 -translate-x-1/2",
                style: { animation: "bounce 2s ease-in-out infinite" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-10 rounded-full border-2 border-border flex items-start justify-center pt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-1 h-2.5 bg-primary rounded-full",
                    style: { animation: "pulse 2s ease-in-out infinite" }
                  }
                ) })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.services_section",
        className: "py-24 md:py-32 bg-muted/30",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-sm font-semibold uppercase tracking-widest mb-3", children: "What We Do" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl md:text-5xl text-foreground mb-4", children: "Our Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-lg mx-auto", children: "End-to-end creative services that take your brand from concept to launch." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: SERVICES.map((svc, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/services",
              "data-ocid": `home.service_card.${i + 1}`,
              className: "group block h-full",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `h-full bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 ${svc.glow} hover:shadow-[0_0_40px_oklch(0.7_0.25_190/0.18)]`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-12 h-12 rounded-xl bg-muted flex items-center justify-center ${svc.color} transition-smooth group-hover:scale-110`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(svc.icon, { className: "w-6 h-6" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base mb-1.5", children: svc.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: svc.desc })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `mt-auto flex items-center gap-1 text-xs font-semibold ${svc.color} opacity-0 group-hover:opacity-100 transition-smooth`,
                        children: [
                          "Learn more ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                        ]
                      }
                    )
                  ]
                }
              )
            }
          ) }, svc.title)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.why_section",
        className: "py-24 md:py-32 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-sm font-semibold uppercase tracking-widest mb-3", children: "Why Kryto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-4xl md:text-5xl text-foreground mb-4", children: "Built Different" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-lg mx-auto", children: "We're not just a service provider — we're a creative partner invested in your success." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: VALUES.map((val, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            FadeIn,
            {
              delay: i * 0.12,
              direction: i === 0 ? "left" : i === 2 ? "right" : "up",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `home.value_card.${i + 1}`,
                  className: "relative bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        style: {
                          background: "radial-gradient(ellipse at 50% 0%, oklch(0.7 0.25 190 / 0.08) 0%, transparent 60%)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 transition-smooth group-hover:scale-110 group-hover:border-primary/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(val.icon, { className: "w-8 h-8 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative font-display font-bold text-xl text-foreground mb-3", children: val.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-muted-foreground text-sm leading-relaxed", children: val.desc }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-6 flex items-center gap-1.5", children: [...Array(3)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheck,
                      {
                        className: "w-4 h-4 text-primary"
                      },
                      `home-check-${j}`
                    )) })
                  ]
                }
              )
            },
            val.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.cta_section",
        className: "py-24 md:py-32 bg-muted/20",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative rounded-3xl overflow-hidden px-8 md:px-16 py-16 md:py-20 text-center",
            style: {
              background: "linear-gradient(135deg, oklch(0.16 0.025 260) 0%, oklch(0.18 0.018 260) 40%, oklch(0.16 0.015 240) 100%)",
              border: "1px solid oklch(0.7 0.25 190 / 0.25)",
              boxShadow: "0 0 80px oklch(0.7 0.25 190 / 0.12), inset 0 0 60px oklch(0.7 0.25 190 / 0.04)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.7 0.25 190 / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.65 0.22 40 / 0.08) 0%, transparent 50%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 left-0 right-0 h-px",
                  style: {
                    background: "linear-gradient(90deg, transparent, oklch(0.7 0.25 190 / 0.6), transparent)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-sm font-semibold uppercase tracking-widest mb-4", children: "Let's Build Together" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight", children: [
                  "Ready to bring your",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(135deg, oklch(0.7 0.25 190) 0%, oklch(0.65 0.22 40) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      },
                      children: "vision to life?"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto mb-10", children: "Tell us about your project and let's create something extraordinary together." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      "data-ocid": "home.cta_book_button",
                      size: "lg",
                      className: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-14 text-base rounded-xl glow-primary transition-smooth",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
                        "Book Appointment",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      "data-ocid": "home.cta_portfolio_button",
                      size: "lg",
                      variant: "ghost",
                      className: "text-muted-foreground hover:text-foreground font-semibold px-8 h-14 text-base rounded-xl transition-smooth",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: "See Our Portfolio" })
                    }
                  )
                ] })
              ] })
            ]
          }
        ) }) })
      }
    )
  ] });
}
export {
  Home as default
};
