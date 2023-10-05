export const parsingRibuan = (number = 0) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export function formatDateTime(date) {
  const dateTime = new Date(date);

  const day = String(dateTime.getDate()).padStart(2, "0");
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const month = monthNames[dateTime.getMonth()];
  const year = String(dateTime.getFullYear());
  const hours = String(dateTime.getHours()).padStart(2, "0");
  const minutes = String(dateTime.getMinutes()).padStart(2, "0");

  return `${day}${" "}${month}${" "}${year}${"   "}${hours}:${minutes}${" WIB"}`;
}