import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Bike, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem =
  | { to: string; label: string }
  | { label: string; children: { to: string; label: string }[] };

const nav: NavItem[] = [
  { to: "/", label: "Start" },
  { to: "/about", label: "Über uns" },
  {
    label: "Werkstätten",
    children: [
      { to: "/absteige-1020", label: "Die Absteige · 1020" },
      { to: "/radwg-1060", label: "Die RadWG · 1060" },
    ],
  },
  { to: "/termine", label: "Termine" },
  { to: "/support", label: "Unterstützen" },
  { to: "/kontakt", label: "Kontakt" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-base",
        scrolled ? "bg-background/85 backdrop-blur-md shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" aria-label="Lenkerbande Startseite">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-warm text-primary-foreground shadow-warm transition-base group-hover:scale-105">
            <Bike className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            Lenkerbande
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            if ("children" in item) {
              const isActive = item.children.some((c) => location.pathname === c.to);
              return (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-base hover:text-foreground hover:bg-secondary",
                      isActive && "text-foreground bg-secondary"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[14rem] pt-2 opacity-0 transition-base group-hover:visible group-hover:opacity-100">
                    <div className="rounded-2xl border border-border bg-card p-2 shadow-soft">
                      {item.children.map((c) => (
                        <RouterNavLink
                          key={c.to}
                          to={c.to}
                          className={({ isActive }) =>
                            cn(
                              "block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-base hover:bg-secondary hover:text-foreground",
                              isActive && "bg-secondary text-foreground"
                            )
                          }
                        >
                          {c.label}
                        </RouterNavLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <RouterNavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-base hover:text-foreground hover:bg-secondary",
                    isActive && "text-foreground bg-secondary"
                  )
                }
              >
                {item.label}
              </RouterNavLink>
            );
          })}
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-wide flex flex-col py-4">
            {nav.map((item) => {
              if ("children" in item) {
                return (
                  <div key={item.label} className="py-2">
                    <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    {item.children.map((c) => (
                      <RouterNavLink
                        key={c.to}
                        to={c.to}
                        className={({ isActive }) =>
                          cn(
                            "block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-base hover:text-foreground hover:bg-secondary",
                            isActive && "text-foreground bg-secondary"
                          )
                        }
                      >
                        {c.label}
                      </RouterNavLink>
                    ))}
                  </div>
                );
              }
              return (
                <RouterNavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-base hover:text-foreground hover:bg-secondary",
                      isActive && "text-foreground bg-secondary"
                    )
                  }
                >
                  {item.label}
                </RouterNavLink>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
