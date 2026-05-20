import { c as createLucideIcon, f as useAppointments, j as jsxRuntimeExports, A as AppointmentStatus, r as reactExports, v as useUpdateAppointmentStatus, B as Button, n as ue } from "./index-C00UYYw1.js";
import { B as Badge } from "./badge-vAGPBMn-.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, C as ChevronUp, n as ChevronDown } from "./select-BJMPHTlp.js";
import { S as Skeleton } from "./skeleton-BjIHPZPf.js";
import { g as getServiceLabel } from "./serviceLabels-D830frqo.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m17 22 5-5", key: "1k6ppv" }],
  ["path", { d: "m17 17 5 5", key: "p7ous7" }]
];
const CalendarX2 = createLucideIcon("calendar-x-2", __iconNode);
const STATUS_LABELS = {
  [AppointmentStatus.pending]: "Pending",
  [AppointmentStatus.confirmed]: "Confirmed",
  [AppointmentStatus.cancelled]: "Cancelled"
};
const STATUS_STYLES = {
  [AppointmentStatus.pending]: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  [AppointmentStatus.confirmed]: "bg-primary/15 text-primary border-primary/30",
  [AppointmentStatus.cancelled]: "bg-destructive/15 text-destructive border-destructive/30"
};
function AppointmentRow({ appt, index }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const updateStatus = useUpdateAppointmentStatus();
  const handleStatusChange = async (status) => {
    try {
      const newStatus = status;
      await updateStatus.mutateAsync({ id: appt.id, status: newStatus });
      ue.success("Status updated");
    } catch {
      ue.error("Failed to update status");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "tr",
      {
        "data-ocid": `appointments.item.${index}`,
        className: "border-b border-border hover:bg-muted/20 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: appt.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: appt.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-sm text-muted-foreground", children: appt.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: getServiceLabel(appt.serviceType) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-sm text-muted-foreground", children: appt.dateTime }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: `text-xs font-medium ${STATUS_STYLES[appt.status]}`,
              children: STATUS_LABELS[appt.status]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: appt.status,
              onValueChange: handleStatusChange,
              disabled: updateStatus.isPending,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-7 text-xs w-32",
                    "data-ocid": `appointments.status_select.${index}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: AppointmentStatus.pending, children: "Pending" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: AppointmentStatus.confirmed, children: "Confirmed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: AppointmentStatus.cancelled, children: "Cancelled" })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "icon",
              variant: "ghost",
              onClick: () => setExpanded((v) => !v),
              "data-ocid": `appointments.expand_button.${index}`,
              className: "w-8 h-8 text-muted-foreground hover:text-foreground",
              "aria-label": expanded ? "Collapse details" : "Expand details",
              children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
            }
          ) })
        ]
      }
    ),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border bg-muted/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/20 border border-border p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5", children: "Project Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: appt.projectDescription || "No description provided." })
    ] }) }) })
  ] });
}
function AdminAppointments() {
  const { data: appointments = [], isLoading } = useAppointments();
  const sorted = [...appointments].sort(
    (a, b) => Number(b.createdAt) - Number(a.createdAt)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Appointments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: "Manage client booking requests" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: [
        AppointmentStatus.pending,
        AppointmentStatus.confirmed,
        AppointmentStatus.cancelled
      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-1.5 text-xs text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `inline-block w-2 h-2 rounded-full ${s === AppointmentStatus.pending ? "bg-yellow-400" : s === AppointmentStatus.confirmed ? "bg-primary" : "bg-destructive"}`
              }
            ),
            STATUS_LABELS[s],
            ":",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: appointments.filter((a) => a.status === s).length })
          ]
        },
        s
      )) })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Skeleton,
      {
        className: "h-14 w-full rounded-lg"
      },
      `appt-skeleton-${i * 11 + 5}`
    )) }) : sorted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "appointments.empty_state",
        className: "flex flex-col items-center justify-center py-20 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarX2, { className: "w-12 h-12 text-muted-foreground mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No appointments yet." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Bookings from clients will appear here." })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/30 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Client" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Date / Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Change" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-medium text-muted-foreground", children: "Details" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: sorted.map((appt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        AppointmentRow,
        {
          appt,
          index: idx + 1
        },
        String(appt.id)
      )) })
    ] }) })
  ] });
}
export {
  AdminAppointments as default
};
