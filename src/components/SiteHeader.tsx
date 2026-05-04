import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Bike, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

type NavItem =
  | { to: string; labelKey: string }
  | { labelKey: string; children: { to: string; labelKey: string }[] };

const nav: NavItem[] = [
  { to: "/", labelKey: "nav.start" },
  { to: "/about", labelKey: "nav.about" },
  {
    labelKey: "nav.workshops",
    children: [
      { to: "/absteige-1020", labelKey: "nav.absteige" },
      { to: "/radwg-1060", labelKey: "nav.radwg" },
    ],
  },
  { to: "/termine", labelKey: "nav.dates" },
  { to: "/support", labelKey: "nav.support" },
  { to: "/kontakt", labelKey: "nav.contact" },
];

export const SiteHeader = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background transition-base",
        scrolled && "shadow-soft",
      )}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="Lenkerbande"
        >
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
              const isActive = item.children.some(
                (c) => location.pathname === c.to,
              );
              return (
                <div key={item.labelKey} className="group relative">
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-base hover:text-foreground hover:bg-secondary",
                      isActive && "text-foreground bg-secondary",
                    )}
                  >
                    {t(item.labelKey)}
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
                              isActive && "bg-secondary text-foreground",
                            )
                          }
                        >
                          {t(c.labelKey)}
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
                    isActive && "text-foreground bg-secondary",
                  )
                }
              >
                {t(item.labelKey)}
              </RouterNavLink>
            );
          })}
          <LanguageSwitcher className="ml-2" />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher compact />
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card"
            onClick={() => setOpen((o) => !o)}
            aria-label={t("nav.openMenu")}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-wide flex flex-col py-4">
            {nav.map((item) => {
              if ("children" in item) {
                return (
                  <div key={item.labelKey} className="py-2">
                    <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t(item.labelKey)}
                    </p>
                    {item.children.map((c) => (
                      <RouterNavLink
                        key={c.to}
                        to={c.to}
                        className={({ isActive }) =>
                          cn(
                            "block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-base hover:text-foreground hover:bg-secondary",
                            isActive && "text-foreground bg-secondary",
                          )
                        }
                      >
                        {t(c.labelKey)}
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
                      isActive && "text-foreground bg-secondary",
                    )
                  }
                >
                  {t(item.labelKey)}
                </RouterNavLink>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
