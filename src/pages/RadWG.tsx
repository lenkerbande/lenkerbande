import { MapPin, Clock, Wrench, Mail, ParkingSquare } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/SectionHeading";
import { TermineList } from "@/components/TermineList";

const RadWG = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Werkstatt · 1060 Wien"
        title="Die RadWG"
        description="Selbsthilfewerkstatt und Fahrrad-Abstellplätze im 6. Bezirk."
      />

      <section className="container-wide py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { icon: MapPin, label: "Wo?", value: "Schmalzhofgasse 8\n1060 Wien" },
            { icon: Clock, label: "Wann?", value: "Jeden Montag\n17 – 21 Uhr" },
            { icon: Wrench, label: "Was?", value: "Selbsthilfewerkstatt &\nFahrrad-Abstellplätze" },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl border border-border bg-card p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-warm">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{c.label}</h3>
              <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-cream py-16 sm:py-20">
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
              <Wrench className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold">Offene Werkstatt</h3>
            <p className="mt-3 text-base text-muted-foreground">
              Komm vorbei und repariere dein Rad mit Werkzeug, Ersatzteilen und Hilfestellung —
              jeden Montag von 17 bis 21 Uhr.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
              <ParkingSquare className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold">Fahrrad-Abstellplätze</h3>
            <p className="mt-3 text-base text-muted-foreground">
              Neben der Werkstatt bieten wir vor Ort auch sichere Abstellplätze für Fahrräder an.
            </p>
          </div>
        </div>
      </section>

      <section className="container-wide py-16 sm:py-20">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-warm">
            <Mail className="h-6 w-6" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
            Bei Fragen und Interesse
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Schreib uns einfach eine Nachricht — wir freuen uns!
          </p>
          <a
            href="mailto:radwg@lenkerbande.at"
            className="mt-4 inline-block text-lg font-semibold text-primary hover:text-primary-glow transition-base"
          >
            radwg@lenkerbande.at
          </a>
        </div>
      </section>

      <section className="container-wide pb-16 sm:pb-20">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Nächste Werkstatt-Termine</h2>
        <div className="mt-8">
          <TermineList limit={4} showAllLink />
        </div>
      </section>
    </SiteLayout>
  );
};

export default RadWG;
