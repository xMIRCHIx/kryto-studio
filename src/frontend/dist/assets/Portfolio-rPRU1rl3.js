import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as Layout, b as usePortfolioByService, M as MediaType, B as Button } from "./index-C00UYYw1.js";
import { B as Badge } from "./badge-vAGPBMn-.js";
import { S as Skeleton } from "./skeleton-BjIHPZPf.js";
import { A as ALL_SERVICE_TYPES, S as SERVICE_LABELS, a as SERVICE_ICONS } from "./serviceLabels-D830frqo.js";
import { m as motion } from "./proxy-CEYRM1V4.js";
import { P as Pen } from "./pen-7M1Uv6pO.js";
import { P as Palette } from "./palette-DLfFilEQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  ["path", { d: "M3 7.5h4", key: "zfgn84" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 16.5h4", key: "1230mu" }],
  ["path", { d: "M17 3v18", key: "in4fa5" }],
  ["path", { d: "M17 7.5h4", key: "myr1c1" }],
  ["path", { d: "M17 16.5h4", key: "go4c1d" }]
];
const Film = createLucideIcon("film", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("play", __iconNode);
const SERVICE_LUCIDE_ICONS = {
  webAppDev: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-6 h-6" }),
  videoEditing: /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-6 h-6" }),
  graphicsDesign: /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "w-6 h-6" }),
  uiUxDesign: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-6 h-6" })
};
const SERVICE_SECTION_IDS = {
  webAppDev: "web-app-dev",
  videoEditing: "video-editing",
  graphicsDesign: "graphics-design",
  uiUxDesign: "ui-ux-design"
};
function getServiceKey(serviceType) {
  return String(serviceType).replace(/^ServiceType\./, "");
}
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
function PortfolioCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full h-48" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-3/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-28 mt-2" })
    ] })
  ] });
}
function VideoCard({ item }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/60 hover:shadow-[0_0_24px_rgba(0,200,220,0.15)] transition-all duration-300",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-black", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "video",
            {
              src: item.url,
              controls: true,
              className: "w-full h-52 object-cover",
              preload: "metadata",
              poster: item.thumbnailUrl ?? void 0,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("track", { kind: "captions" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/20 text-primary border border-primary/40 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-3 h-3 mr-1" }),
            " Video"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-base leading-snug mb-1 truncate", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm line-clamp-2", children: item.description })
        ] })
      ]
    }
  );
}
function LinkCard({ item }) {
  const thumb = item.thumbnailUrl ?? null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/60 hover:shadow-[0_0_24px_rgba(0,200,220,0.15)] transition-all duration-300",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 bg-muted overflow-hidden", children: [
          thumb ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: thumb,
              alt: item.title,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-16 h-16 text-muted-foreground/30" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent/20 text-accent border border-accent/40 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3 mr-1" }),
            " Web"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-base leading-snug mb-1 truncate", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm line-clamp-2 mb-3", children: item.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.url, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "border-primary/50 text-primary hover:bg-primary/10 hover:border-primary gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" }),
                " Visit Site"
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
function ServiceSection({
  serviceType,
  index
}) {
  const { data: items, isLoading } = usePortfolioByService(serviceType);
  const key = getServiceKey(serviceType);
  const label = SERVICE_LABELS[serviceType];
  const icon = SERVICE_LUCIDE_ICONS[key];
  const sectionId = SERVICE_SECTION_IDS[key];
  const isOdd = index % 2 === 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: sectionId,
      "data-ocid": `portfolio.${key}.section`,
      className: `py-20 px-4 scroll-mt-20 ${isOdd ? "bg-card/40" : "bg-background"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            className: "flex items-center gap-3 mb-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center justify-center w-10 h-10 rounded-lg bg-primary/15 text-primary border border-primary/30", children: icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-0.5 bg-primary mt-1 rounded-full" })
              ] })
            ]
          }
        ),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioCardSkeleton, {}, i)) }) : !items || items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            "data-ocid": `portfolio.${key}.empty_state`,
            className: "flex flex-col items-center justify-center py-16 rounded-xl border border-dashed border-border text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl mb-3", children: SERVICE_ICONS[serviceType] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-display font-semibold text-lg mb-1", children: "Coming soon" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
                "Check back for our latest ",
                label.toLowerCase(),
                " work."
              ] })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
            "data-ocid": `portfolio.${key}.list`,
            children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-ocid": `portfolio.${key}.item.${i + 1}`,
                children: item.mediaType === MediaType.video ? /* @__PURE__ */ jsxRuntimeExports.jsx(VideoCard, { item }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LinkCard, { item })
              },
              String(item.id)
            ))
          }
        )
      ] })
    }
  );
}
function Portfolio() {
  const navRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-4 bg-card border-b border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(0,200,220,0.08)_0%,transparent_70%)] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto text-center relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-5 bg-primary/15 text-primary border border-primary/30 text-xs uppercase tracking-widest px-4 py-1", children: "Our Work" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.1 },
            className: "font-display text-5xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight",
            children: [
              "Our ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Portfolio" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.2 },
            className: "text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto",
            children: "Explore our work across all disciplines"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: navRef,
        "data-ocid": "portfolio.section_nav",
        className: "sticky top-0 z-30 bg-card/95 backdrop-blur border-b border-border shadow-md",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 flex items-center gap-1 overflow-x-auto scrollbar-none py-0", children: ALL_SERVICE_TYPES.map((svcType) => {
          const k = getServiceKey(svcType);
          const sectionId = SERVICE_SECTION_IDS[k];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `portfolio.nav.${k}`,
              onClick: () => scrollToSection(sectionId),
              className: "flex items-center gap-2 px-4 py-3 text-sm font-display font-medium text-muted-foreground whitespace-nowrap hover:text-primary hover:bg-primary/8 rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: SERVICE_ICONS[svcType] }),
                SERVICE_LABELS[svcType]
              ]
            },
            k
          );
        }) })
      }
    ),
    ALL_SERVICE_TYPES.map((svcType, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ServiceSection,
      {
        serviceType: svcType,
        index
      },
      String(svcType)
    ))
  ] });
}
export {
  Portfolio as default
};
