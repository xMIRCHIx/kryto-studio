import { Button } from "@/components/ui/button";
import { useIsAdmin } from "@/hooks/useBackend";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQueryClient } from "@tanstack/react-query";
import {
  Link,
  Outlet,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import {
  CalendarCheck,
  Images,
  LayoutDashboard,
  Loader2,
  LogOut,
  ShieldAlert,
  Star,
  Zap,
} from "lucide-react";

const ADMIN_NAV = [
  {
    label: "Dashboard",
    to: "/admin",
    icon: LayoutDashboard,
    ocid: "admin_nav.dashboard_link",
  },
  {
    label: "Portfolio",
    to: "/admin/portfolio",
    icon: Images,
    ocid: "admin_nav.portfolio_link",
  },
  {
    label: "Reviews",
    to: "/admin/reviews",
    icon: Star,
    ocid: "admin_nav.reviews_link",
  },
  {
    label: "Appointments",
    to: "/admin/appointments",
    icon: CalendarCheck,
    ocid: "admin_nav.appointments_link",
  },
];

export default function AdminLayout() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const { isAuthenticated, isInitializing, clear, login } =
    useInternetIdentity();
  const qc = useQueryClient();
  const navigate = useNavigate();
  const { data: isAdmin, isLoading: adminLoading } = useIsAdmin();

  const handleLogout = () => {
    clear();
    qc.clear();
    navigate({ to: "/admin/login" });
  };

  // Show loading spinner while auth or admin status is being determined
  if (isInitializing || adminLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Not authenticated — show login prompt (never return null)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
        <div data-ocid="admin.access_denied" className="text-center">
          <ShieldAlert className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Admin Access Required
          </h2>
          <p className="text-muted-foreground mb-6">
            Please log in with Internet Identity to continue.
          </p>
          <Button
            type="button"
            onClick={login}
            data-ocid="admin.login_button"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
          >
            Login with Internet Identity
          </Button>
        </div>
      </div>
    );
  }

  // Authenticated but not admin — show access denied (isAdmin may be false OR undefined/null after query)
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
        <div data-ocid="admin.not_admin" className="text-center">
          <ShieldAlert className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Access Denied
          </h2>
          <p className="text-muted-foreground mb-6">
            You do not have admin privileges for this account.
          </p>
          <Button
            type="button"
            onClick={handleLogout}
            variant="outline"
            data-ocid="admin.logout_button"
          >
            Log out
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside
        data-ocid="admin.sidebar"
        className="w-64 bg-card border-r border-border flex flex-col fixed inset-y-0 left-0 z-40"
      >
        {/* Logo */}
        <div className="h-16 flex items-center gap-2 px-6 border-b border-border">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <Zap
              className="w-3.5 h-3.5 text-primary-foreground"
              strokeWidth={2.5}
            />
          </div>
          <span className="font-display font-bold text-base text-foreground">
            Kryto <span className="text-primary">Admin</span>
          </span>
        </div>

        {/* Nav */}
        <nav
          className="flex-1 px-3 py-6 space-y-1"
          aria-label="Admin navigation"
        >
          {ADMIN_NAV.map(({ label, to, icon: Icon, ocid }) => (
            <Link
              key={to}
              to={to}
              data-ocid={ocid}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth ${
                pathname === to
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-3 pb-6 border-t border-border pt-4">
          <Button
            type="button"
            variant="ghost"
            onClick={handleLogout}
            data-ocid="admin.sidebar_logout_button"
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 ml-64 min-h-screen bg-background">
        <Outlet />
      </main>
    </div>
  );
}
