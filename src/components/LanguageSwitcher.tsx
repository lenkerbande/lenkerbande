import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  compact?: boolean;
}

const LANGS = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
] as const;

export const LanguageSwitcher = ({ className, compact }: Props) => {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "de").split("-")[0];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-card/70 p-1 backdrop-blur",
        className
      )}
      role="group"
      aria-label={t("common.language")}
    >
      {!compact && (
        <Languages className="ml-1.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
      )}
      {LANGS.map((l) => {
        const active = current === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => i18n.changeLanguage(l.code)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold transition-base",
              active
                ? "bg-gradient-warm text-primary-foreground shadow-warm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
};
