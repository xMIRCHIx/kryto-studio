import { Button } from "@/components/ui/button";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { ShieldCheck, Zap } from "lucide-react";

export default function AdminLogin() {
  const { login, isInitializing, isLoggingIn } = useInternetIdentity();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center bg-grid-pattern">
      <div className="bg-card border border-border rounded-2xl p-10 max-w-md w-full text-center shadow-subtle">
        <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-6 glow-primary">
          <ShieldCheck className="w-7 h-7 text-primary" />
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Zap className="w-5 h-5 text-primary" />
          <span className="font-display font-bold text-xl text-foreground">
            Kryto Admin
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-8">
          Sign in with Internet Identity to access the admin panel.
        </p>
        <Button
          onClick={login}
          disabled={isInitializing || isLoggingIn}
          data-ocid="admin_login.login_button"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11"
        >
          {isInitializing
            ? "Loading..."
            : isLoggingIn
              ? "Signing in..."
              : "Login with Internet Identity"}
        </Button>
      </div>
    </div>
  );
}
