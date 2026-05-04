import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/SectionHeading";
import communityImage from "@/assets/community.jpg";
import bikesImage from "@/assets/bikes-row.jpg";
import repairImage from "@/assets/repair.jpg";

const About = () => {
  const { t } = useTranslation();
  const valueKeys = ["access", "connect", "sustain"] as const;

  return (
    <SiteLayout>
      <PageHeader
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        description={t("about.description")}
      />

      <section className="container-wide py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="prose prose-neutral max-w-none">
            <p className="text-lg leading-relaxed text-foreground/90">
              {t("about.p1_pre")}
              <strong>{t("about.p1_a")}</strong>
              {t("about.p1_mid")}
              <strong>{t("about.p1_b")}</strong>
              {t("about.p1_post")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t("about.p2")}</p>
          </div>
          <img
            src={communityImage}
            alt=""
            loading="lazy"
            width={1280}
            height={960}
            className="h-80 w-full rounded-2xl object-cover shadow-soft lg:h-full"
          />
        </div>
      </section>

      <section className="bg-gradient-cream py-16 sm:py-20">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("about.valuesTitle")}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {valueKeys.map((k) => (
              <div key={k} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-display text-xl font-semibold">{t(`about.values.${k}.t`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(`about.values.${k}.d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2">
          <img src={bikesImage} alt="" loading="lazy" width={1280} height={960} className="h-80 w-full rounded-2xl object-cover shadow-soft" />
          <img src={repairImage} alt="" loading="lazy" width={1280} height={960} className="h-80 w-full rounded-2xl object-cover shadow-soft" />
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
