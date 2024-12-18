document
  .getElementById("parkingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const platNomor = document.getElementById("platNomor").value;
    const parkingSlot = getParkingSlot(platNomor);

    const resultDiv = document.getElementById("result");
    if (parkingSlot !== null) {
      resultDiv.innerHTML = `Slot parkir untuk plat nomor <strong>${platNomor}</strong> adalah: <strong>${parkingSlot}</strong>`;
    } else {
      resultDiv.innerHTML =
        "Plat nomor tidak valid. Pastikan 3 angka terakhir adalah angka.";
    }
  });

function getParkingSlot(platNomor) {
  // Mengambil 3 angka terakhir dari plat nomor
  const lastThreeDigits = platNomor.slice(-3);

  // Mengonversi ke integer
  const lastThreeInt = parseInt(lastThreeDigits, 10);

  // Memastikan bahwa 3 angka terakhir adalah angka
  if (isNaN(lastThreeInt)) {
    return null;
  }

  // Menghitung slot parkir menggunakan fungsi hash
  const parkingSlot = lastThreeInt % 51; // Slot parkir dari 0 hingga 50

  return parkingSlot;
}
