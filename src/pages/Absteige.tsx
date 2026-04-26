import { MapPin, Clock, Wrench, Bike, Heart } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/SectionHeading";
import { TermineList } from "@/components/TermineList";
import heroImage from "@/assets/hero-workshop.jpg";
import repairImage from "@/assets/repair.jpg";

const Absteige = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Werkstatt · 1020 Wien"
        title="Die Absteige"
        description="Eine gut ausgestattete Fahrrad- und Elektro-Selbsthilfewerkstatt mitten im 2. Bezirk."
      />

      <section className="container-wide py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { icon: MapPin, label: "Wo?", value: "Souterrain, Ybbsstraße 26\n1020 Wien" },
            { icon: Clock, label: "Wann?", value: "Jeden Mittwoch\n17 – 21 Uhr" },
            { icon: Wrench, label: "Was?", value: "Selbsthilfewerkstatt mit\nWerkzeug & Ersatzteilen" },
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

      <section className="container-wide grid gap-10 pb-12 lg:grid-cols-2 lg:items-center">
        <img src={heroImage} alt="Innenansicht der Absteige" loading="lazy" width={1920} height={1080} className="h-96 w-full rounded-2xl object-cover shadow-soft" />
        <div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Hilfe zur Selbsthilfe</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Eine gut ausgestattete Fahrrad- und Elektro-Selbsthilfewerkstatt, viele Ersatzteile
            und motivierte HelferInnen, die dich bei Bedarf auch dabei unterstützen, dein Rad
            oder defektes Gerät wieder in Schwung zu bringen.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Gebrauchte Ersatzteile, Werkzeug und Hilfestellung gibt es <strong>gegen Spende</strong>.
            Neue Verschleißteile und mit Glück die richtigen Neuteile gibt es ebenso um einen guten Preis.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Wenn du also ein kaputtes Rad hast, das du gerne selber in Ordnung bringen willst,
            aber nicht genau weißt wie, oder dir spezielles Werkzeug fehlt — dann komm gerne
            bei uns vorbei!
          </p>
        </div>
      </section>

      <section className="bg-gradient-cream py-16 sm:py-20">
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
              <Bike className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold">Fahrradspenden</h3>
            <p className="mt-3 text-base text-muted-foreground">
              Gerne nehmen wir während der Öffnungszeiten eure defekten oder ungenutzten
              Fahrräder als Spenden entgegen und kümmern uns um eine sinnvolle Weiterverwendung.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              <strong>Hinweis:</strong> Aus Platzgründen findet an diesem Standort keine Ausgabe
              gespendeter Fahrräder statt.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
              <Heart className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold">Schraubgarten & Holzofen</h3>
            <p className="mt-3 text-base text-muted-foreground">
              Wenn's kalt ist, wärmt uns unser toller Holzofen. Und wenn's warm ist, verwandeln
              wir die Parkplätze vor der Werkstatt in die Grätzloase „Schraubgarten".
            </p>
          </div>
        </div>
      </section>

      <section className="container-wide py-16 sm:py-20">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Nächste Werkstatt-Termine</h2>
        <div className="mt-8">
          <TermineList limit={4} showAllLink />
        </div>
      </section>

      <section className="container-wide pb-16">
        <img src={repairImage} alt="Reparatur" loading="lazy" width={1280} height={960} className="h-80 w-full rounded-2xl object-cover shadow-soft" />
      </section>
    </SiteLayout>
  );
};

export default Absteige;
