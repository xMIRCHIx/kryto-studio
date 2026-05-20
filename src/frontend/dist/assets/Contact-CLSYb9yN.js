import { c as createLucideIcon, d as useSubmitAppointment, j as jsxRuntimeExports, a as Layout, B as Button } from "./index-C00UYYw1.js";
import { u as useForm, L as Label, I as Input, T as Textarea } from "./index.esm-BYFPUwmH.js";
import { A as ALL_SERVICE_TYPES, a as SERVICE_ICONS, S as SERVICE_LABELS } from "./serviceLabels-D830frqo.js";
import { m as motion } from "./proxy-CEYRM1V4.js";
import { C as CircleCheck } from "./circle-check-CU9PyZNc.js";
import { C as Clock } from "./clock-C05DR3ZP.js";
import { P as Palette } from "./palette-DLfFilEQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
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
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "studio@kryptostudio.com",
    href: "mailto:studio@kryptostudio.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide",
    href: null
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Fri, 9:00 AM – 7:00 PM",
    href: null
  }
];
const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Palette, label: "Behance", href: "https://behance.net" },
  { icon: Github, label: "GitHub", href: "https://github.com" }
];
function ContactInfoSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-widest uppercase text-primary mb-3", children: "Let's Work Together" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4", children: [
            "Get In ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Touch" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed max-w-md", children: "Ready to transform your vision into reality? Reach out and let's create something extraordinary together." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "flex flex-col gap-4",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.15 },
        children: contactDetails.map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider mb-0.5", children: label }),
            href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href,
                className: "text-foreground font-medium hover:text-primary transition-colors duration-200 truncate block",
                children: value
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium", children: value })
          ] })
        ] }, label))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.3 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider mb-4", children: "Follow Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: socialLinks.map(({ icon: Icon, label, href }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": label,
              "data-ocid": "contact.social_link",
              className: "w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" })
            },
            label
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-48 h-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 w-24 h-1 bg-gradient-to-r from-accent via-primary/40 to-transparent rounded-full" })
    ] })
  ] });
}
function Contact() {
  const submitAppointment = useSubmitAppointment();
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();
  async function onSubmit(values) {
    const dateTime = `${values.preferredDate}T${values.preferredTime}:00`;
    const input = {
      name: values.fullName,
      phone: values.phone,
      email: values.email,
      serviceType: values.serviceType,
      dateTime,
      projectDescription: values.projectDescription
    };
    await submitAppointment.mutateAsync(input);
    reset();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-16 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactInfoSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 40 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.7, delay: 0.1 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4", children: "Book a Session" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground", children: "Schedule a Consultation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm", children: "Fill in the details below and we'll confirm your appointment shortly." })
              ] }),
              submitAppointment.isSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  "data-ocid": "contact.success_state",
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  className: "flex items-start gap-4 p-5 rounded-xl bg-primary/10 border border-primary/30 mb-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-6 h-6 text-primary shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Appointment Requested!" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Your appointment request has been submitted! We'll confirm shortly." })
                    ] })
                  ]
                }
              ),
              submitAppointment.isError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  "data-ocid": "contact.error_state",
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  className: "flex items-start gap-4 p-5 rounded-xl bg-destructive/10 border border-destructive/30 mb-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-6 h-6 text-destructive shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Something went wrong" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: submitAppointment.error instanceof Error ? submitAppointment.error.message : "Please try again or contact us directly." })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "form",
                {
                  onSubmit: handleSubmit(onSubmit),
                  noValidate: true,
                  className: "space-y-5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Label,
                          {
                            htmlFor: "fullName",
                            className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                            children: [
                              "Full Name ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "fullName",
                            type: "text",
                            placeholder: "John Doe",
                            "data-ocid": "contact.full_name_input",
                            className: "bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 placeholder:text-muted-foreground/50",
                            ...register("fullName", {
                              required: "Full name is required"
                            })
                          }
                        ),
                        errors.fullName && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            "data-ocid": "contact.full_name_field_error",
                            className: "text-destructive text-xs mt-1",
                            children: errors.fullName.message
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Label,
                          {
                            htmlFor: "phone",
                            className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                            children: [
                              "Phone Number ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "phone",
                            type: "tel",
                            placeholder: "+1 (555) 000-0000",
                            "data-ocid": "contact.phone_input",
                            className: "bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 placeholder:text-muted-foreground/50",
                            ...register("phone", {
                              required: "Phone number is required",
                              pattern: {
                                value: /^[+\d\s\-().]{7,20}$/,
                                message: "Enter a valid phone number"
                              }
                            })
                          }
                        ),
                        errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            "data-ocid": "contact.phone_field_error",
                            className: "text-destructive text-xs mt-1",
                            children: errors.phone.message
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Label,
                        {
                          htmlFor: "email",
                          className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                          children: [
                            "Email Address ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "email",
                          type: "email",
                          placeholder: "you@example.com",
                          "data-ocid": "contact.email_input",
                          className: "bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 placeholder:text-muted-foreground/50",
                          ...register("email", {
                            required: "Email address is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Enter a valid email address"
                            }
                          })
                        }
                      ),
                      errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          "data-ocid": "contact.email_field_error",
                          className: "text-destructive text-xs mt-1",
                          children: errors.email.message
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Label,
                        {
                          htmlFor: "serviceType",
                          className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                          children: [
                            "Service Type ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "select",
                          {
                            id: "serviceType",
                            "data-ocid": "contact.service_type_select",
                            className: "w-full h-10 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 appearance-none cursor-pointer",
                            defaultValue: "",
                            ...register("serviceType", {
                              required: "Please select a service type"
                            }),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "option",
                                {
                                  value: "",
                                  disabled: true,
                                  className: "text-muted-foreground",
                                  children: "Select a service..."
                                }
                              ),
                              ALL_SERVICE_TYPES.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "option",
                                {
                                  value: String(type),
                                  className: "bg-card text-foreground",
                                  children: [
                                    SERVICE_ICONS[type],
                                    " ",
                                    SERVICE_LABELS[type]
                                  ]
                                },
                                String(type)
                              ))
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            className: "w-4 h-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "path",
                              {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M19 9l-7 7-7-7"
                              }
                            )
                          }
                        ) })
                      ] }),
                      errors.serviceType && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          "data-ocid": "contact.service_type_field_error",
                          className: "text-destructive text-xs mt-1",
                          children: errors.serviceType.message
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Label,
                          {
                            htmlFor: "preferredDate",
                            className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                            children: [
                              "Preferred Date",
                              " ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "preferredDate",
                            type: "date",
                            min: today,
                            "data-ocid": "contact.preferred_date_input",
                            className: "bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 text-foreground [color-scheme:dark]",
                            ...register("preferredDate", {
                              required: "Please select a date"
                            })
                          }
                        ),
                        errors.preferredDate && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            "data-ocid": "contact.preferred_date_field_error",
                            className: "text-destructive text-xs mt-1",
                            children: errors.preferredDate.message
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Label,
                          {
                            htmlFor: "preferredTime",
                            className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                            children: [
                              "Preferred Time",
                              " ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "preferredTime",
                            type: "time",
                            "data-ocid": "contact.preferred_time_input",
                            className: "bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 text-foreground [color-scheme:dark]",
                            ...register("preferredTime", {
                              required: "Please select a time"
                            })
                          }
                        ),
                        errors.preferredTime && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            "data-ocid": "contact.preferred_time_field_error",
                            className: "text-destructive text-xs mt-1",
                            children: errors.preferredTime.message
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Label,
                        {
                          htmlFor: "projectDescription",
                          className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                          children: [
                            "Project Description",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Textarea,
                        {
                          id: "projectDescription",
                          placeholder: "Tell us about your project, goals, and any specific requirements...",
                          rows: 4,
                          "data-ocid": "contact.project_description_textarea",
                          className: "bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 resize-none placeholder:text-muted-foreground/50",
                          ...register("projectDescription", {
                            required: "Project description is required",
                            minLength: {
                              value: 20,
                              message: "Please provide at least 20 characters"
                            }
                          })
                        }
                      ),
                      errors.projectDescription && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          "data-ocid": "contact.project_description_field_error",
                          className: "text-destructive text-xs mt-1",
                          children: errors.projectDescription.message
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "submit",
                        disabled: isSubmitting || submitAppointment.isPending,
                        "data-ocid": "contact.submit_button",
                        className: "w-full h-12 font-semibold text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: isSubmitting || submitAppointment.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" }),
                          "Submitting..."
                        ] }) : "Book Appointment"
                      }
                    )
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-8 text-center", children: [
      { stat: "50+", label: "Projects Delivered" },
      { stat: "24h", label: "Response Time" },
      { stat: "100%", label: "Client Satisfaction" }
    ].map(({ stat, label }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.1 },
        className: "flex flex-col items-center gap-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-bold text-primary", children: stat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: label })
        ]
      },
      label
    )) }) }) })
  ] });
}
export {
  Contact as default
};
