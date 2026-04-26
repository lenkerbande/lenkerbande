import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/SectionHeading";
import { TermineList } from "@/components/TermineList";
import { CalendarDays } from "lucide-react";

const Termine = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Kalender"
        title="Anstehende Termine"
        description="Unsere offenen Werkstattzeiten — automatisch generiert aus dem Wochenplan. Vorbeikommen ist immer willkommen."
      />

      <section className="container-wide py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-warm text-primary-foreground shadow-warm">
                <CalendarDays className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">Wöchentlicher Rhythmus</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Montag · 17 – 21 Uhr · RadWG 1060
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Mittwoch · 17 – 21 Uhr · Absteige 1020
                </li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Termine werden automatisch aus dem hinterlegten Wochenplan generiert. Pausen oder
                Sondertermine bitte per Mail anfragen.
              </p>
            </div>
            <div className="rounded-2xl border border-dashed border-border bg-card/60 p-6">
              <h3 className="font-display text-base font-semibold">Mobile Fahrradchecks?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Buche unser Team für deine Veranstaltung:
              </p>
              <a
                href="mailto:hallo@lenkerbande.at"
                className="mt-3 inline-block text-sm font-semibold text-primary hover:text-primary-glow transition-base"
              >
                hallo@lenkerbande.at
              </a>
            </div>
          </aside>
          <div>
            <TermineList limit={12} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Termine;
