import { useTranslation } from "react-i18next";
import { Bike, Truck, Clock, Mail } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/SectionHeading";
import bikesImage from "@/assets/bikes-row.jpg";

const Support = () => {
  const { t } = useTranslation();
  const items = [
    { icon: Bike, key: "donate" },
    { icon: Truck, key: "pickup" },
    { icon: Clock, key: "time" },
  ] as const;

  return (
    <SiteLayout>
      <PageHeader
        eyebrow={t("support.eyebrow")}
        title={t("support.title")}
        description={t("support.description")}
      />

      <section className="container-wide py-12 sm:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <article key={it.key} className="hover-lift rounded-2xl border border-border bg-card p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-warm">
                <it.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{t(`support.items.${it.key}.title`)}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t(`support.items.${it.key}.body`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-wide pb-16">
        <div className="overflow-hidden rounded-3xl bg-ink text-ink-foreground">
          <div className="grid gap-0 md:grid-cols-2">
            <img src={bikesImage} alt="" loading="lazy" width={1280} height={960} className="h-72 w-full object-cover md:h-full" />
            <div className="p-10 sm:p-14">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("support.boxTitle")}</h2>
              <p className="mt-3 text-ink-foreground/80">{t("support.boxP")}</p>
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
