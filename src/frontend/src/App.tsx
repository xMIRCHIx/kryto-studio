import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import type React from "react";
import { Component, Suspense, lazy } from "react";
import type { ReactNode } from "react";

import AdminLayout from "@/components/AdminLayout";
import Layout from "@/components/Layout";

class AppErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; message: string }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, message: "" };
  }
  static getDerivedStateFromError(error: unknown) {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 p-8">
          <div className="text-center max-w-md">
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              Something went wrong
            </h1>
            <p className="text-muted-foreground text-sm mb-6">
              {this.state.message}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function lazyPage(loader: () => Promise<{ default: React.ComponentType }>) {
  const Comp = lazy(loader);
  return function LazyPage() {
    return (
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[60vh] text-muted-foreground">
            Loading...
          </div>
        }
      >
        <Comp />
      </Suspense>
    );
  };
}

const HomePage = lazyPage(() => import("@/pages/Home"));
const ServicesPage = lazyPage(() => import("@/pages/Services"));
const PortfolioPage = lazyPage(() => import("@/pages/Portfolio"));
const ContactPage = lazyPage(() => import("@/pages/Contact"));
const AdminDashboardPage = lazyPage(() => import("@/pages/admin/Dashboard"));
const AdminLoginPage = lazyPage(() => import("@/pages/admin/Login"));
const AdminPortfolioPage = lazyPage(() => import("@/pages/admin/Portfolio"));
const AdminReviewsPage = lazyPage(() => import("@/pages/admin/Reviews"));
const AdminAppointmentsPage = lazyPage(
  () => import("@/pages/admin/Appointments"),
);

const rootRoute = createRootRoute({ component: Outlet });

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/services",
  component: ServicesPage,
});

const portfolioRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/portfolio",
  component: PortfolioPage,
});

const contactRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/contact",
  component: ContactPage,
});

const adminLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "admin-layout",
  path: "/admin",
  component: AdminLayout,
});

const adminLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/login",
  component: AdminLoginPage,
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: "/",
  component: AdminDashboardPage,
});

const adminPortfolioRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: "/portfolio",
  component: AdminPortfolioPage,
});

const adminReviewsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: "/reviews",
  component: AdminReviewsPage,
});

const adminAppointmentsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: "/appointments",
  component: AdminAppointmentsPage,
});

const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([
    homeRoute,
    servicesRoute,
    portfolioRoute,
    contactRoute,
  ]),
  adminLoginRoute,
  adminLayoutRoute.addChildren([
    adminDashboardRoute,
    adminPortfolioRoute,
    adminReviewsRoute,
    adminAppointmentsRoute,
  ]),
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <AppErrorBoundary>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </AppErrorBoundary>
  );
}
