import { e as usePortfolioItems, u as useReviews, f as useAppointments, A as AppointmentStatus, I as Images, S as Star, C as CalendarCheck, j as jsxRuntimeExports } from "./index-C00UYYw1.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-qfeHq268.js";
import { S as Skeleton } from "./skeleton-BjIHPZPf.js";
import { C as Clock } from "./clock-C05DR3ZP.js";
function AdminDashboard() {
  const { data: portfolio, isLoading: pLoading } = usePortfolioItems();
  const { data: reviews, isLoading: rLoading } = useReviews();
  const { data: appointments, isLoading: aLoading } = useAppointments();
  const pendingCount = (appointments == null ? void 0 : appointments.filter((a) => a.status === AppointmentStatus.pending).length) ?? 0;
  const stats = [
    {
      label: "Portfolio Items",
      value: (portfolio == null ? void 0 : portfolio.length) ?? 0,
      icon: Images,
      loading: pLoading,
      ocid: "dashboard.portfolio_stat"
    },
    {
      label: "Client Reviews",
      value: (reviews == null ? void 0 : reviews.length) ?? 0,
      icon: Star,
      loading: rLoading,
      ocid: "dashboard.reviews_stat"
    },
    {
      label: "Total Bookings",
      value: (appointments == null ? void 0 : appointments.length) ?? 0,
      icon: CalendarCheck,
      loading: aLoading,
      ocid: "dashboard.bookings_stat"
    },
    {
      label: "Pending",
      value: pendingCount,
      icon: Clock,
      loading: aLoading,
      ocid: "dashboard.pending_stat"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground", children: "Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Overview of Kryto Studio" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: stats.map(({ label, value, icon: Icon, loading, ocid }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": ocid, className: "bg-card border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-16" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-display font-bold text-foreground", children: value }) })
    ] }, label)) })
  ] });
}
export {
  AdminDashboard as default
};
