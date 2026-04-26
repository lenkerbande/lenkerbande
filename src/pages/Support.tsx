import { Bike, Truck, Clock, Mail } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/SectionHeading";
import bikesImage from "@/assets/bikes-row.jpg";

const items = [
  {
    icon: Bike,
    title: "Fahrrad spenden",
    body: "Du hast ein altes oder ungenutztes Fahrrad und möchtest es einer sinnvollen Verwendung zuführen? Wir machen dein Fahrrad wieder fit und geben es jemandem, der es braucht.",
  },
  {
    icon: Truck,
    title: "Abholungen, Kellerräumung",
    body: "Auch größere Spenden mit mehreren Rädern sind gerne gesehen. Wir kümmern uns um die Räumung deines Kellers oder Fahrradraums und die sinnvolle Verwertung der Räder. Terminvereinbarung per Mail.",
  },
  {
    icon: Clock,
    title: "Zeit spenden",
    body: "Du interessierst dich für Menschen und Räder und möchtest uns tatkräftig unterstützen? Wir freuen uns über jede helfende Hand!",
  },
];

const Support = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Unterstützen"
        title="So kannst du helfen."
        description="Räder, Zeit, Räumlichkeiten — jede Form von Unterstützung bringt uns weiter."
      />

      <section className="container-wide py-12 sm:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="hover-lift rounded-2xl border border-border bg-card p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-warm">
                <it.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{it.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-wide pb-16">
        <div className="overflow-hidden rounded-3xl bg-ink text-ink-foreground">
          <div className="grid gap-0 md:grid-cols-2">
            <img src={bikesImage} alt="Fahrradspenden" loading="lazy" width={1280} height={960} className="h-72 w-full object-cover md:h-full" />
            <div className="p-10 sm:p-14">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Schreib uns einfach.
              </h2>
              <p className="mt-3 text-ink-foreground/80">
                Egal ob Spende, Abholtermin oder Mitarbeit: Eine kurze Mail genügt.
              </p>
              <a
                href="mailto:hallo@lenkerbande.at"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition-base hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4" /> hallo@lenkerbande.at
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Support;
