import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/SectionHeading";
import { TermineList } from "@/components/TermineList";
import { CalendarDays } from "lucide-react";

const Termine = () => {
  const { t } = useTranslation();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={t("termine.eyebrow")}
        title={t("termine.title")}
        description={t("termine.description")}
      />

      <section className="container-wide py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-warm text-primary-foreground shadow-warm">
                <CalendarDays className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{t("termine.rhythmTitle")}</h3>
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
              <p className="mt-4 text-xs text-muted-foreground">{t("termine.rhythmNote")}</p>
            </div>
            <div className="rounded-2xl border border-dashed border-border bg-card/60 p-6">
              <h3 className="font-display text-base font-semibold">{t("termine.mobileTitle")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t("termine.mobileP")}</p>
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
