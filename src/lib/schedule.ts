// Auto-generates upcoming Termine from a recurring weekly schedule.
// Edit the SCHEDULE array below to add/change recurring events.

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sun ... 6 = Sat

export interface RecurringEvent {
  title: string;
  weekday: Weekday;
  startTime: string; // "HH:MM"
  endTime: string;   // "HH:MM"
  location: string;
  address: string;
  url?: string;
  description?: string;
  startsOn?: string;       // ISO date — first valid occurrence (inclusive)
  endsOn?: string;         // ISO date — last valid occurrence (inclusive)
  excludeDates?: string[]; // ISO dates to skip (holidays, breaks)
}

export interface TerminOccurrence extends RecurringEvent {
  date: Date;
}

/**
 * Wiederkehrender Veranstaltungsplan.
 * Hier können neue Termine ergänzt oder Pausen über `excludeDates` eingetragen werden.
 */
export const SCHEDULE: RecurringEvent[] = [
  {
    title: "RadWG 1060 — offene Radwerkstatt",
    weekday: 1, // Montag
    startTime: "17:00",
    endTime: "21:00",
    location: "RadWG Offene Radwerkstatt",
    address: "Schmalzhofgasse 8, 1060 Wien, Österreich",
    description: "Komm vorbei und repariere dein Rad mit Werkzeug, Ersatzteilen und Hilfestellung.",
  },
  {
    title: "Absteige 1020 — offene Selbsthilfewerkstatt",
    weekday: 3, // Mittwoch
    startTime: "17:00",
    endTime: "21:00",
    location: "Absteige Offene Radwerkstatt",
    address: "Ybbsstraße 26, 1020 Wien, Österreich",
    url: "/absteige-1020",
    description: "Komm vorbei und repariere dein Rad mit Werkzeug, Ersatzteilen und Hilfestellung.",
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

/**
 * Returns the next `count` upcoming occurrences across all recurring events,
 * sorted ascending by start time.
 */
export function getUpcomingTermine(count = 8, now: Date = new Date()): TerminOccurrence[] {
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);

  const occurrences: TerminOccurrence[] = [];

  for (const evt of SCHEDULE) {
    let cursor = nextOccurrence(today, evt.weekday);
    const startBound = evt.startsOn ? new Date(evt.startsOn) : null;
    const endBound = evt.endsOn ? new Date(evt.endsOn) : null;
    const exclude = new Set(evt.excludeDates ?? []);

    // Generate up to `count` future dates per event (we'll merge & trim later)
    let added = 0;
    while (added < count) {
      const occurrenceStart = withTime(cursor, evt.startTime);

      const beforeStart = startBound && cursor < startBound;
      const afterEnd = endBound && cursor > endBound;
      const excluded = exclude.has(isoDay(cursor));
      const inFuture = occurrenceStart >= now ||
        // Include today if it hasn't ended yet
        withTime(cursor, evt.endTime) > now;

      if (!beforeStart && !afterEnd && !excluded && inFuture) {
        occurrences.push({ ...evt, date: occurrenceStart });
        added++;
      }
      // Move to next week
      cursor = new Date(cursor);
      cursor.setDate(cursor.getDate() + 7);

      if (afterEnd) break;
    }
  }

  occurrences.sort((a, b) => a.date.getTime() - b.date.getTime());
  return occurrences.slice(0, count);
}

const WEEKDAYS_DE = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
const MONTHS_DE = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

export function formatTerminDate(d: Date) {
  return {
    weekday: WEEKDAYS_DE[d.getDay()],
    day: pad(d.getDate()),
    month: MONTHS_DE[d.getMonth()],
    year: d.getFullYear(),
  };
}

export function formatTimeRange(start: string, end: string) {
  return `${start} – ${end} Uhr`;
}
