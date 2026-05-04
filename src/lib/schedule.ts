// Auto-generates upcoming Termine from a recurring weekly schedule.
// Edit the SCHEDULE array below to add/change recurring events.
// Titles, locations and descriptions are translation keys resolved at render time.

import i18n from "@/i18n";

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sun ... 6 = Sat

export interface RecurringEvent {
  /** i18n key for the title */
  titleKey: string;
  weekday: Weekday;
  startTime: string; // "HH:MM"
  endTime: string;   // "HH:MM"
  /** i18n key for the location label */
  locationKey: string;
  address: string;
  url?: string;
  /** i18n key for the description */
  descriptionKey?: string;
  startsOn?: string;
  endsOn?: string;
  excludeDates?: string[];
}

export interface TerminOccurrence extends RecurringEvent {
  date: Date;
}

export const SCHEDULE: RecurringEvent[] = [
  {
    titleKey: "schedule.radwgTitle",
    weekday: 1,
    startTime: "17:00",
    endTime: "21:00",
    locationKey: "schedule.radwgLocation",
    address: "Schmalzhofgasse 8, 1060 Wien, Österreich",
    url: "/radwg-1060",
    descriptionKey: "schedule.description",
  },
  {
    titleKey: "schedule.absteigeTitle",
    weekday: 3,
    startTime: "17:00",
    endTime: "21:00",
    locationKey: "schedule.absteigeLocation",
    address: "Ybbsstraße 26, 1020 Wien, Österreich",
    url: "/absteige-1020",
    descriptionKey: "schedule.description",
  },
];

const pad = (n: number) => n.toString().padStart(2, "0");
const isoDay = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

function nextOccurrence(from: Date, weekday: Weekday): Date {
  const d = new Date(from);
  const diff = (weekday - d.getDay() + 7) % 7;
  d.setDate(d.getDate() + diff);
  return d;
}

function withTime(d: Date, time: string): Date {
  const [h, m] = time.split(":").map(Number);
  const out = new Date(d);
  out.setHours(h, m, 0, 0);
  return out;
}

export function getUpcomingTermine(count = 8, now: Date = new Date()): TerminOccurrence[] {
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);

  const occurrences: TerminOccurrence[] = [];

  for (const evt of SCHEDULE) {
    let cursor = nextOccurrence(today, evt.weekday);
    const startBound = evt.startsOn ? new Date(evt.startsOn) : null;
    const endBound = evt.endsOn ? new Date(evt.endsOn) : null;
    const exclude = new Set(evt.excludeDates ?? []);

    let added = 0;
    while (added < count) {
      const occurrenceStart = withTime(cursor, evt.startTime);
      const beforeStart = startBound && cursor < startBound;
      const afterEnd = endBound && cursor > endBound;
      const excluded = exclude.has(isoDay(cursor));
      const inFuture = occurrenceStart >= now || withTime(cursor, evt.endTime) > now;

      if (!beforeStart && !afterEnd && !excluded && inFuture) {
        occurrences.push({ ...evt, date: occurrenceStart });
        added++;
      }
      cursor = new Date(cursor);
      cursor.setDate(cursor.getDate() + 7);
      if (afterEnd) break;
    }
  }

  occurrences.sort((a, b) => a.date.getTime() - b.date.getTime());
  return occurrences.slice(0, count);
}

export function formatTerminDate(d: Date) {
  const weekdays = i18n.t("schedule.weekdays", { returnObjects: true }) as string[];
  const months = i18n.t("schedule.months", { returnObjects: true }) as string[];
  return {
    weekday: weekdays[d.getDay()],
    day: pad(d.getDate()),
    month: months[d.getMonth()],
    year: d.getFullYear(),
  };
}

export function formatTimeRange(start: string, end: string) {
  return i18n.t("schedule.timeRange", { start, end });
}
