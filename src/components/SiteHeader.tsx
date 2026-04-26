import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Bike } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Start" },
  { to: "/about", label: "Über uns" },
  { to: "/absteige-1020", label: "Werkstätten" },
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
          {nav.map((item) => (
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
          ))}
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
            {nav.map((item) => (
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
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
