import moment from "moment-jalaali";

const weekObj = {
  Saturday: 1,
  Sunday: 2,
  Monday: 3,
  Tuesday: 4,
  Wednesday: 5,
  Thursday: 6,
  Friday: 7,
};

export default function calculateFirstWeekdayOfMonth(currentMonthNum) {
  const currentYear = new Intl.DateTimeFormat("fa-IR-u-nu-latn", {
    year: "numeric",
  }).format(new Date());

  const firstDayOfJalaaliMonth = moment(
    `${currentYear}/${currentMonthNum}/1`,
    "jYYYY/jM/jD"
  );

  const firstWeekdayOfJalaaliMonthStr = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(new Date(firstDayOfJalaaliMonth));

  const firstWeekdayOfMonth = weekObj[firstWeekdayOfJalaaliMonthStr];

  return firstWeekdayOfMonth;
}
