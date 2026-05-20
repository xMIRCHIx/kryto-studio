import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { Menu, X, Zap } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export default function Layout({ children }: { children?: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname change should close menu
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header
        data-ocid="nav.header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md border-b border-border shadow-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            data-ocid="nav.logo_link"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center glow-primary transition-smooth group-hover:scale-110">
              <Zap
                className="w-4 h-4 text-primary-foreground"
                strokeWidth={2.5}
              />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-foreground">
              Kryto <span className="text-primary">Studio</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  pathname === link.to
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              data-ocid="nav.book_now_button"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 glow-primary transition-smooth"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            data-ocid="nav.mobile_menu_toggle"
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div
            data-ocid="nav.mobile_menu"
            className="md:hidden bg-card/98 backdrop-blur-md border-t border-border px-4 py-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                  pathname === link.to
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              data-ocid="nav.mobile_book_now_button"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 bg-background">
        {children ?? <Outlet />}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Zap
                    className="w-4 h-4 text-primary-foreground"
                    strokeWidth={2.5}
                  />
                </div>
                <span className="font-display font-bold text-lg text-foreground">
                  Kryto <span className="text-primary">Studio</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                We craft bold digital experiences — web development, video
                editing, graphics design, and UI/UX design.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-display font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">
                Pages
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-2">
                {[
                  "Web/App Development",
                  "Video Editing",
                  "Graphics Design",
                  "UI/UX Design",
                ].map((svc) => (
                  <li key={svc}>
                    <span className="text-sm text-muted-foreground">{svc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Kryto Studio. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-smooth"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
