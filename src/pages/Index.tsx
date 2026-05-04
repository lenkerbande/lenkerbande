import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Bike, Wrench, Heart, Sparkles, MapPin, Mail } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { TermineList } from "@/components/TermineList";
import { SectionHeading } from "@/components/SectionHeading";
import heroImage from "@/assets/hero-workshop.jpg";
import communityImage from "@/assets/community.jpg";
import bikesImage from "@/assets/bikes-row.jpg";

const Index = () => {
  const { t } = useTranslation();

  const angebot = [
    { icon: Bike, key: "bike", href: "/kontakt" },
    { icon: Wrench, key: "repair", href: "/absteige-1020" },
    { icon: Heart, key: "help", href: "/support" },
  ] as const;

  const stats = [
    { value: "2", label: t("home.stats.locations") },
    { value: "2019", label: t("home.stats.founded") },
    { value: "100%", label: t("home.stats.volunteer") },
  ];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-20 flex min-h-[92vh] items-center overflow-hidden bg-ink">
        <img
          src={heroImage}
          alt="Lenkerbande"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink/90" />
        <div className="container-wide relative z-10 pb-12 pt-32 sm:pt-40">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
              {t("home.badge")}
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-ink-foreground sm:text-6xl md:text-7xl">
              {t("home.titleA")}{" "}
              <span className="text-gradient-warm">{t("home.titleB")}</span>{" "}
              {t("home.titleC")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-foreground/80 sm:text-xl">
              {t("home.intro")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/absteige-1020"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition-base hover:scale-[1.02]"
              >
                {t("home.ctaWorkshops")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/termine"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/5 px-6 py-3 text-sm font-semibold text-ink-foreground backdrop-blur transition-base hover:bg-ink-foreground/10"
              >
                {t("home.ctaDates")}
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
            eyebrow={t("home.offerEyebrow")}
            title={t("home.offerTitle")}
            description={t("home.offerDescription")}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {angebot.map((a, i) => (
              <Link
                to={a.href}
                key={a.key}
                className="hover-lift group flex flex-col rounded-2xl border border-border bg-card p-7 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-base group-hover:bg-gradient-warm group-hover:text-primary-foreground">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{t(`home.offers.${a.key}.title`)}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{t(`home.offers.${a.key}.body`)}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {t(`home.offers.${a.key}.cta`)}
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
              eyebrow={t("home.datesEyebrow")}
              title={t("home.datesTitle")}
              description={t("home.datesDescription")}
            />
            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">{t("home.weekRhythm")}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {t("home.rhythmRadwg")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {t("home.rhythmAbsteige")}
                </li>
              </ul>
              <Link
                to="/termine"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow transition-base"
              >
                {t("home.fullCalendar")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <TermineList limit={4} />
        </div>
      </section>

      {/* UND SONST SO */}
      <section className="bg-background py-20 sm:py-28">
        <div className="container-wide">
          <SectionHeading eyebrow={t("home.moreEyebrow")} title={t("home.moreTitle")} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-xl font-semibold">{t("home.cards.volunteer.title")}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t("home.cards.volunteer.body")}</p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-xl font-semibold">{t("home.cards.mobile.title")}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t("home.cards.mobile.body")}</p>
              <a
                href="mailto:hallo@lenkerbande.at"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow transition-base"
              >
                <Mail className="h-4 w-4" /> hallo@lenkerbande.at
              </a>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-xl font-semibold">{t("home.cards.program.title")}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t("home.cards.program.body")}</p>
            </article>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <img src={bikesImage} alt="" loading="lazy" width={1280} height={960} className="h-72 w-full rounded-2xl object-cover shadow-soft" />
            <img src={communityImage} alt="" loading="lazy" width={1280} height={960} className="h-72 w-full rounded-2xl object-cover shadow-soft" />
            <img src={heroImage} alt="" loading="lazy" width={1920} height={1080} className="h-72 w-full rounded-2xl object-cover shadow-soft sm:col-span-2 lg:col-span-1" />
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
                {t("home.ctaTitleA")} <span className="text-gradient-warm">{t("home.ctaTitleB")}</span>.
              </h2>
              <p className="mt-4 text-lg text-ink-foreground/80">{t("home.ctaText")}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/support"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition-base hover:scale-[1.02]"
                >
                  {t("home.ctaSupport")} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-6 py-3 text-sm font-semibold text-ink-foreground transition-base hover:bg-ink-foreground/10"
                >
                  <MapPin className="h-4 w-4" /> {t("nav.contact")}
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
