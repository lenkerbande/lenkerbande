import { useTranslation } from "react-i18next";
import { MapPin, Clock, Wrench, Mail, ParkingSquare } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/SectionHeading";
import { TermineList } from "@/components/TermineList";

const RadWG = () => {
  const { t } = useTranslation();

  const cards = [
    { icon: MapPin, label: t("radwg.where"), value: t("radwg.whereV") },
    { icon: Clock, label: t("radwg.when"), value: t("radwg.whenV") },
    { icon: Wrench, label: t("radwg.what"), value: t("radwg.whatV") },
  ];

  return (
    <SiteLayout>
      <PageHeader
        eyebrow={t("radwg.eyebrow")}
        title={t("radwg.title")}
        description={t("radwg.description")}
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

      <section className="bg-gradient-cream py-16 sm:py-20">
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
              <Wrench className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold">{t("radwg.openTitle")}</h3>
            <p className="mt-3 text-base text-muted-foreground">{t("radwg.openP")}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
              <ParkingSquare className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold">{t("radwg.parkingTitle")}</h3>
            <p className="mt-3 text-base text-muted-foreground">{t("radwg.parkingP")}</p>
          </div>
        </div>
      </section>

      <section className="container-wide py-16 sm:py-20">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-warm">
            <Mail className="h-6 w-6" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">{t("radwg.contactTitle")}</h2>
          <p className="mt-3 text-base text-muted-foreground">{t("radwg.contactP")}</p>
          <a
            href="mailto:radwg@lenkerbande.at"
            className="mt-4 inline-block text-lg font-semibold text-primary hover:text-primary-glow transition-base"
          >
            radwg@lenkerbande.at
          </a>
        </div>
      </section>

      <section className="container-wide pb-16 sm:pb-20">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("radwg.upcoming")}</h2>
        <div className="mt-8">
          <TermineList limit={4} showAllLink />
        </div>
      </section>
    </SiteLayout>
  );
};

export default RadWG;
