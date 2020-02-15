// year
const yearToMonth = sal => sal / 12;
const yearToWeek = sal => sal / 52;
const yearToHour = sal => sal / 1680;

// month
const monthToYear = sal => sal * 12;
const monthToWeek = sal => sal / 4;
const monthToHour = sal => sal / 160;

// week
const weekToYear = sal => sal * 52;
const weekToMonth = sal => sal * 4;
const weekToHour = sal => sal / 40;

// hour
const hourToYear = sal => sal * 1680;
const hourToMonth = sal => sal * 160;
const hourToWeek = sal => sal * 40;

export default {
  yearToMonth,
  yearToWeek,
  yearToHour,
  monthToYear,
  monthToWeek,
  monthToHour,
  weekToYear,
  weekToMonth,
  weekToHour,
  hourToYear,
  hourToMonth,
  hourToWeek,
};
