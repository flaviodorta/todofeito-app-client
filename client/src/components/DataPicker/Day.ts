import { getWeekNumber } from './helpers';

export class Day {
  Date: Date;
  dayOfMonth: number;
  dayNumberOfWeek: number;
  dayNameOfWeek: string;
  dayNameOfWeekShort: string;
  year: number;
  yearShort: number;
  month: string;
  monthNumber: number;
  monthShort: string;
  timestamp: number;
  week: number;

  constructor(day: Date | null = null, lang = 'default') {
    day = day ?? new Date();

    this.Date = day;
    /* date */ this.dayOfMonth = day.getDate();
    /* dayNumber */ this.dayNumberOfWeek = day.getDay() + 1;
    /* day */ this.dayNameOfWeek = day.toLocaleString(lang, {
      weekday: 'long',
    });
    /* dayShort */ this.dayNameOfWeekShort = day.toLocaleString(lang, {
      weekday: 'short',
    });
    this.year = day.getFullYear();
    this.yearShort = Number(day.toLocaleString(lang, { year: '2-digit' }));
    this.month = day.toLocaleString(lang, { month: 'long' });
    this.monthNumber = day.getMonth() + 1;
    this.monthShort = day.toLocaleString(lang, { month: 'short' });
    this.timestamp = day.getTime();
    this.week = getWeekNumber(day);
  }

  get isToday() {
    return this.isEqualTo(new Date());
  }

  isEqualTo(day: Day | Date) {
    day = day instanceof Day ? day.Date : day;

    return (
      day.getDate() === this.dayOfMonth &&
      day.getMonth() === this.monthNumber - 1 &&
      day.getFullYear() === this.year
    );
  }

  format(dateStr: string) {
    return dateStr
      .replace(/\bYYYY\b/, this.year.toString())
      .replace(/\b(YYY|YY)\b/, this.yearShort.toString())
      .replace(/\bWWW\b/, this.week.toString().padStart(2, '0'))
      .replace(/\bW\b/, this.week.toString())
      .replace(/\bMMMM*\b/, this.month)
      .replace(/\bMMMM\b/, this.month)
      .replace(/\bMMM\b/, this.monthShort)
      .replace(/\bMM\b/, this.monthNumber.toString())
      .replace(/\bM\b/, this.monthNumber.toString())
      .replace(/\bDDDD\b/, this.dayNameOfWeek)
      .replace(/\bDD\b/, this.dayOfMonth.toString().padStart(2, '0'))
      .replace(/\bD\b/, this.dayNumberOfWeek.toString());
  }
}
