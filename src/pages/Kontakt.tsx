import { Mail, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/SectionHeading";

const Kontakt = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Kontakt"
        title="Sag Hallo."
        description="Allgemeine Anfragen, Terminvereinbarungen, Spenden, Mitmachen — wir freuen uns auf deine Nachricht."
      />

      <section className="container-wide py-12 sm:py-16">
        <div className="grid gap-6">
          <a
            href="mailto:hallo@lenkerbande.at"
            className="hover-lift group rounded-2xl border border-border bg-card p-8"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-warm">
              <Mail className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold">E-Mail</h3>
            <p className="mt-2 text-base text-primary group-hover:text-primary-glow transition-base">
              hallo@lenkerbande.at
            </p>
          </a>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-8">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
            <MapPin className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-display text-xl font-semibold">Absteige (Werkstatt 1020)</h3>
          <p className="mt-2 text-base text-muted-foreground">
            Souterrain, Ybbsstraße 26, 1020 Wien, Österreich
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Geöffnet jeden Mittwoch von 17 – 21 Uhr.
          </p>
        </div>

        <div className="mt-16 rounded-2xl border border-dashed border-border bg-card/60 p-8">
          <h2 className="font-display text-2xl font-semibold">Impressum</h2>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <p><strong>Lenkerbande</strong> — Verein zur Förderung niederschwelliger Mobilität</p>
            <p>Ybbsstraße 26, 1020 Wien, Österreich</p>
            <p>E-Mail: <a className="text-primary hover:text-primary-glow transition-base" href="mailto:hallo@lenkerbande.at">hallo@lenkerbande.at</a></p>
            <p>Telefon: <a className="text-primary hover:text-primary-glow transition-base" href="tel:+436776350211">+43 677 6350 2115</a></p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Kontakt;
