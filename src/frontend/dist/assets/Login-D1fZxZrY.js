import { c as createLucideIcon, h as useInternetIdentity, j as jsxRuntimeExports, Z as Zap, B as Button } from "./index-C00UYYw1.js";
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode);
function AdminLogin() {
  const { login, isInitializing, isLoggingIn } = useInternetIdentity();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center bg-grid-pattern", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-10 max-w-md w-full text-center shadow-subtle", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-6 glow-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-7 h-7 text-primary" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-xl text-foreground", children: "Kryto Admin" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-8", children: "Sign in with Internet Identity to access the admin panel." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        onClick: login,
        disabled: isInitializing || isLoggingIn,
        "data-ocid": "admin_login.login_button",
        className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11",
        children: isInitializing ? "Loading..." : isLoggingIn ? "Signing in..." : "Login with Internet Identity"
      }
    )
  ] }) });
}
export {
  AdminLogin as default
};
