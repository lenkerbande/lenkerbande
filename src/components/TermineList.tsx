import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { getUpcomingTermine, formatTerminDate, formatTimeRange, type TerminOccurrence } from "@/lib/schedule";
import { cn } from "@/lib/utils";

interface Props {
  limit?: number;
  className?: string;
  showAllLink?: boolean;
}

export const TermineList = ({ limit = 6, className, showAllLink = false }: Props) => {
  const { t, i18n } = useTranslation();
  // i18n.language is referenced so list re-renders on language change
  void i18n.language;
  const termine = getUpcomingTermine(limit);

  if (termine.length === 0) {
    return <p className="text-muted-foreground">{t("common.noDates")}</p>;
  }

  return (
    <div className={cn("space-y-4", className)}>
      {termine.map((occ, i) => (
        <TerminCard key={`${occ.titleKey}-${occ.date.toISOString()}`} t={occ} index={i} />
      ))}
      {showAllLink && (
        <Link
          to="/termine"
          className="group inline-flex items-center gap-2 pt-2 text-sm font-semibold text-primary hover:text-primary-glow transition-base"
        >
          {t("common.allDates")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
};

const TerminCard = ({ t: occ, index }: { t: TerminOccurrence; index: number }) => {
  const { t } = useTranslation();
  const f = formatTerminDate(occ.date);
  return (
    <article
      className="hover-lift group grid grid-cols-[auto_1fr] gap-5 rounded-2xl border border-border bg-card p-5 sm:p-6 animate-fade-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex w-20 flex-col items-center justify-center rounded-xl bg-gradient-warm p-3 text-primary-foreground shadow-warm sm:w-24">
        <span className="text-xs font-semibold uppercase tracking-wider opacity-90">{f.month}</span>
        <span className="font-display text-3xl font-bold leading-none sm:text-4xl">{f.day}</span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-wider opacity-80">{f.weekday}</span>
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">{t(occ.titleKey)}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" />
            {formatTimeRange(occ.startTime, occ.endTime)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary" />
            {t(occ.locationKey)}
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{occ.address}</p>
        {occ.descriptionKey && (
          <p className="mt-3 text-sm text-foreground/80">{t(occ.descriptionKey)}</p>
        )}
        {occ.url && (
          <Link
            to={occ.url}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-glow transition-base"
          >
            {t("common.readMore")} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </article>
  );
};

export const TermineEmpty = () => {
  const { t } = useTranslation();
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
      <Calendar className="mx-auto h-8 w-8 text-muted-foreground" />
      <p className="mt-3 text-sm text-muted-foreground">{t("common.noDates")}</p>
    </div>
  );
};
