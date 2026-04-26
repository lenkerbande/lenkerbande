import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/SectionHeading";
import communityImage from "@/assets/community.jpg";
import bikesImage from "@/assets/bikes-row.jpg";
import repairImage from "@/assets/repair.jpg";

const About = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Über uns"
        title="Wir reanimieren Räder — und schaffen Räume für Menschen."
        description="Seit Anfang 2019 betreiben wir an zwei Standorten in Wien Selbsthilfewerkstätten, in denen Fahrräder mit liebevoller Kleinarbeit repariert und revitalisiert werden."
      />

      <section className="container-wide py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="prose prose-neutral max-w-none">
            <p className="text-lg leading-relaxed text-foreground/90">
              Während einer unserer Standorte, die <strong>Absteige</strong>, aus Platzgründen
              wirklich „nur" eine Selbsthilfewerkstatt ist, ist unser zweiter Standort, die
              <strong> RadWG</strong>, in spannende Projekte eingebunden und bietet mehr Platz.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Daher können wir uns dort, zusätzlich zu einem offenen Werkstatttag pro Woche,
              außerdem um die Aufbereitung und Verteilung gespendeter Räder kümmern.
              Fahrräder, die sonst nur noch als Müll wahrgenommen werden, können so wieder
              fahrbereit gemacht und Personen zur Verfügung gestellt werden, die sich ein
              eigenes Fahrrad ansonsten nicht leisten könnten.
            </p>
          </div>
          <img
            src={communityImage}
            alt="Lenkerbande Community"
            loading="lazy"
            width={1280}
            height={960}
            className="h-80 w-full rounded-2xl object-cover shadow-soft lg:h-full"
          />
        </div>
      </section>

      <section className="bg-gradient-cream py-16 sm:py-20">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Unsere Werte</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: "Niederschwellig", d: "Zugang zu Mobilität, Werkzeug und Wissen — ohne Hürden, gegen Spende." },
              { t: "Solidarisch", d: "Wir bieten Personen mit Fluchthintergrund sinnvolle Tagesstruktur und Weiterbildung." },
              { t: "Ressourcenschonend", d: "Räder reparieren statt wegwerfen. Jedes gerettete Rad ist ein Beitrag zur Stadt." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-display text-xl font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2">
          <img src={bikesImage} alt="Reparierte Räder" loading="lazy" width={1280} height={960} className="h-80 w-full rounded-2xl object-cover shadow-soft" />
          <img src={repairImage} alt="Reparatur Detail" loading="lazy" width={1280} height={960} className="h-80 w-full rounded-2xl object-cover shadow-soft" />
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
