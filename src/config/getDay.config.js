function getDayString(numberOfDay) {
  var weekday = new Array(7);
  weekday[0] = "Minggu";
  weekday[1] = "Senin";
  weekday[2] = "Selasa";
  weekday[3] = "Rabu";
  weekday[4] = "Kamis";
  weekday[5] = "Jum'at";
  weekday[6] = "Sabtu";

  return weekday[numberOfDay];
}

export default getDayString;
