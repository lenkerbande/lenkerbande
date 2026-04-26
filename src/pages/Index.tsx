import { Link } from "react-router-dom";
import { ArrowRight, Bike, Wrench, Heart, Sparkles, MapPin, Mail } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { TermineList } from "@/components/TermineList";
import { SectionHeading } from "@/components/SectionHeading";
import heroImage from "@/assets/hero-workshop.jpg";
import communityImage from "@/assets/community.jpg";
import bikesImage from "@/assets/bikes-row.jpg";

const angebot = [
  {
    icon: Bike,
    title: "Du brauchst ein Fahrrad?",
    body: "Wir arbeiten eifrig an einer Lösung, um möglichst vielen Menschen einen niederschwelligen Zugang zur schönsten Form der Mobilität zu ermöglichen.",
    href: "/kontakt",
    cta: "Anfragen",
  },
  {
    icon: Wrench,
    title: "Dein Fahrrad braucht Hilfe?",
    body: "Komm in einer unserer Selbsthilfewerkstätten vorbei. Werkzeug, Ersatzteile und engagierte HelferInnen warten auf dich.",
    href: "/absteige-1020",
    cta: "Werkstätten",
  },
  {
    icon: Heart,
    title: "Du willst uns unterstützen?",
    body: "Du kannst dich mit unseren Zielen identifizieren? Wir freuen uns über jede helfende Hand. Schreib uns an hallo@lenkerbande.at.",
    href: "/support",
    cta: "Mitmachen",
  },
];

const stats = [
  { value: "2", label: "Standorte in Wien" },
  { value: "2019", label: "Gründung" },
  { value: "100%", label: "ehrenamtlich" },
];

const Index = () => {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-20 flex min-h-[92vh] items-center overflow-hidden bg-ink">
        <img
          src={heroImage}
          alt="Fahrrad-Selbsthilfewerkstatt der Lenkerbande in Wien"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink/90" />
        <div className="container-wide relative z-10 pb-12 pt-32 sm:pt-40">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
              Räder für alle.
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-ink-foreground sm:text-6xl md:text-7xl">
              Die schönste Form der{" "}
              <span className="text-gradient-warm">Mobilität</span>{" "}
              für alle zugänglich machen.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-foreground/80 sm:text-xl">
              Lenkerbande betreibt seit 2019 Fahrrad-Selbsthilfewerkstätten in Wien.
              Reparieren, spenden, mitmachen — gemeinsam, niederschwellig, ehrenamtlich.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/absteige-1020"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition-base hover:scale-[1.02]"
              >
                Werkstätten entdecken
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/termine"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/5 px-6 py-3 text-sm font-semibold text-ink-foreground backdrop-blur transition-base hover:bg-ink-foreground/10"
              >
                Anstehende Termine
              </Link>
            </div>

            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-semibold text-ink-foreground sm:text-4xl">{s.value}</dt>
                  <dd className="mt-1 text-xs text-ink-foreground/60 sm:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ANGEBOT */}
      <section className="bg-background py-20 sm:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Angebot"
            title="Was wir tun"
            description="Drei einfache Wege, mit Lenkerbande in Berührung zu kommen — egal ob du Hilfe suchst, brauchst oder geben möchtest."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {angebot.map((a, i) => (
              <Link
                to={a.href}
                key={a.title}
                className="hover-lift group flex flex-col rounded-2xl border border-border bg-card p-7 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-base group-hover:bg-gradient-warm group-hover:text-primary-foreground">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {a.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TERMINE */}
      <section className="bg-gradient-cream py-20 sm:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              eyebrow="Termine"
              title="Komm vorbei."
              description="Unsere offenen Werkstattzeiten generieren sich automatisch aus dem Wochenplan. Spontan vorbeikommen ist immer willkommen."
            />
            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Wochenrhythmus</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Mittwoch · 17 – 21 Uhr · Absteige 1020
                </li>
              </ul>
              <Link
                to="/termine"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow transition-base"
              >
                Vollständigen Kalender ansehen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <TermineList limit={4} />
        </div>
      </section>

      {/* UND SONST SO */}
      <section className="bg-background py-20 sm:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Und sonst so?"
            title="Mehr als nur Werkstatt."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-xl font-semibold">Ehrenamtliches Engagement</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Wir sehen das Fahrrad als sehr gutes Mittel, um handwerkliche Fähigkeiten zu vermitteln.
                Bei unseren Aktivitäten wollen wir Personen mit Fluchthintergrund eine sinnvolle
                Tagesstruktur bieten und ihre Kenntnisse weiter ausbauen.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-xl font-semibold">Mobile Fahrradchecks</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Buche unser Team für einen mobilen Fahrradcheck bei deiner Veranstaltung!
              </p>
              <a
                href="mailto:hallo@lenkerbande.at"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow transition-base"
              >
                <Mail className="h-4 w-4" /> hallo@lenkerbande.at
              </a>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-xl font-semibold">Rahmenprogramm</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Fahrradreparaturkurse, gemeinsame Ausfahrten und spannende Aktivitäten ohne
                Fahrradbezug — Grillabende, gemeinsames Gärtnern und mehr.
              </p>
            </article>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <img src={bikesImage} alt="Reparierte Fahrräder vor der Werkstatt" loading="lazy" width={1280} height={960} className="h-72 w-full rounded-2xl object-cover shadow-soft" />
            <img src={communityImage} alt="Lenkerbande Community" loading="lazy" width={1280} height={960} className="h-72 w-full rounded-2xl object-cover shadow-soft" />
            <img src={heroImage} alt="Werkstatt-Innenraum" loading="lazy" width={1920} height={1080} className="h-72 w-full rounded-2xl object-cover shadow-soft sm:col-span-2 lg:col-span-1" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-ink-foreground sm:px-16 sm:py-20">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-warm opacity-30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent opacity-30 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Werde Teil der <span className="text-gradient-warm">Lenkerbande</span>.
              </h2>
              <p className="mt-4 text-lg text-ink-foreground/80">
                Spende dein altes Rad, schenk uns deine Zeit oder komm einfach auf einen
                Schraubabend vorbei. Wir freuen uns auf dich.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/support"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition-base hover:scale-[1.02]"
                >
                  Unterstützen <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-6 py-3 text-sm font-semibold text-ink-foreground transition-base hover:bg-ink-foreground/10"
                >
                  <MapPin className="h-4 w-4" /> Kontakt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
