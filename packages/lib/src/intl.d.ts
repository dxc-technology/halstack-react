export {};
declare global {
  namespace Intl {
    interface WeekInfo {
      firstDay: number;
      weekend: number[];
      minimalDays: number;
    }

    interface Locale {
      getWeekInfo(): WeekInfo;
    }
  }
}
