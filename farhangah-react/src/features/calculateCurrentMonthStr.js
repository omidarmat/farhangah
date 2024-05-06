const months = new Map([
  [1, "فروردین"],
  [2, "اردیبهشت"],
  [3, "خرداد"],
  [4, "تیر"],
  [5, "مرداد"],
  [6, "شهریور"],
  [7, "مهر"],
  [8, "آبان"],
  [9, "آذر"],
  [10, "دی"],
  [11, "بهمن"],
  [12, "اسفند"],
]);

export default function calculateCurrentMonthStr(currentMonthNum) {
  return months.get(currentMonthNum);
}
