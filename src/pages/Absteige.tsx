import { useTranslation } from "react-i18next";
import { MapPin, Clock, Wrench, Bike, Heart } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/SectionHeading";
import { TermineList } from "@/components/TermineList";
import heroImage from "@/assets/hero-workshop.jpg";
import repairImage from "@/assets/repair.jpg";

const Absteige = () => {
  const { t } = useTranslation();

  const cards = [
    { icon: MapPin, label: t("absteige.where"), value: t("absteige.whereV") },
    { icon: Clock, label: t("absteige.when"), value: t("absteige.whenV") },
    { icon: Wrench, label: t("absteige.what"), value: t("absteige.whatV") },
  ];

  return (
    <SiteLayout>
      <PageHeader
        eyebrow={t("absteige.eyebrow")}
        title={t("absteige.title")}
        description={t("absteige.description")}
      />

      <section className="container-wide py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {cards.map((c) => (
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
        <img src={heroImage} alt="" loading="lazy" width={1920} height={1080} className="h-96 w-full rounded-2xl object-cover shadow-soft" />
        <div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("absteige.helpTitle")}</h2>
          <p className="mt-4 text-base text-muted-foreground">{t("absteige.helpP1")}</p>
          <p className="mt-3 text-base text-muted-foreground">
            {t("absteige.helpP2_pre")}<strong>{t("absteige.helpP2_strong")}</strong>{t("absteige.helpP2_post")}
          </p>
          <p className="mt-3 text-base text-muted-foreground">{t("absteige.helpP3")}</p>
        </div>
      </section>

      <section className="bg-gradient-cream py-16 sm:py-20">
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
              <Bike className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold">{t("absteige.donationsTitle")}</h3>
            <p className="mt-3 text-base text-muted-foreground">{t("absteige.donationsP1")}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              <strong>{t("absteige.donationsHint_strong")}</strong>{t("absteige.donationsHint_post")}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
              <Heart className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold">{t("absteige.gardenTitle")}</h3>
            <p className="mt-3 text-base text-muted-foreground">{t("absteige.gardenP")}</p>
          </div>
        </div>
      </section>

      <section className="container-wide py-16 sm:py-20">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("absteige.upcoming")}</h2>
        <div className="mt-8">
          <TermineList limit={4} showAllLink />
        </div>
      </section>

      <section className="container-wide pb-16">
        <img src={repairImage} alt="" loading="lazy" width={1280} height={960} className="h-80 w-full rounded-2xl object-cover shadow-soft" />
      </section>
    </SiteLayout>
  );
};

export default Absteige;
