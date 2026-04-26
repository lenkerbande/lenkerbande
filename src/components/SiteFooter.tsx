import { Link } from "react-router-dom";
import { Mail, Phone, Bike } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-warm text-primary-foreground shadow-warm">
              <Bike className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="font-display text-xl font-semibold">Lenkerbande</span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-ink-foreground/70">
            Räder für alle. Wir betreiben Selbsthilfewerkstätten in Wien und ermöglichen
            niederschwelligen Zugang zur schönsten Form der Mobilität.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
            <li><Link to="/about" className="hover:text-primary-glow transition-base">Über uns</Link></li>
            <li><Link to="/absteige-1020" className="hover:text-primary-glow transition-base">Werkstätten</Link></li>
            <li><Link to="/termine" className="hover:text-primary-glow transition-base">Termine</Link></li>
            <li><Link to="/support" className="hover:text-primary-glow transition-base">Unterstützen</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold">Kontakt</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/70">
            <li>
              <a href="mailto:hallo@lenkerbande.at" className="inline-flex items-center gap-2 hover:text-primary-glow transition-base">
                <Mail className="h-4 w-4" /> hallo@lenkerbande.at
              </a>
            </li>
            <li>
              <a href="tel:+436776350211" className="inline-flex items-center gap-2 hover:text-primary-glow transition-base">
                <Phone className="h-4 w-4" /> +43 677 6350 2115
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-wide flex flex-col items-start justify-between gap-2 py-6 text-xs text-ink-foreground/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Lenkerbande — Verein zur Förderung niederschwelliger Mobilität.</p>
          <Link to="/kontakt" className="hover:text-primary-glow transition-base">Impressum</Link>
        </div>
      </div>
    </footer>
  );
};
