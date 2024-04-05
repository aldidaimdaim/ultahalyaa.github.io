function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";

  if (h >= 0 && h < 12) {
    session = "Morning";
    document
      .querySelector(".jumbotron")
      .classList.remove("afternoon", "evening");
    document.querySelector(".jumbotron").classList.add("morning");
  } else if (h >= 12 && h < 18) {
    session = "Afternoon";
    document.querySelector(".jumbotron").classList.remove("morning", "evening");
    document.querySelector(".jumbotron").classList.add("afternoon");
  } else if (h >= 18 && h < 24) {
    // tambahan kondisi untuk malam hari
    session = "Evening";
    document
      .querySelector(".jumbotron")
      .classList.remove("morning", "afternoon");
    document.querySelector(".jumbotron").classList.add("evening");
  } else {
    session = "Night"; // jika jam lebih dari 24:00, maka dianggap malam
    document
      .querySelector(".jumbotron")
      .classList.remove("morning", "afternoon");
    document.querySelector(".jumbotron").classList.add("night");
  }

  h = h % 12 || 12; // Convert to 12-hour format

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s;
  var greeting = "Good " + session;

  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  document.getElementById("MyGreeting").innerText = greeting;
  document.getElementById("MyGreeting").textContent = greeting;

  setTimeout(showTime, 1000);
}
showTime();

document.addEventListener("DOMContentLoaded", function () {
  const text1 =
    "Cinta sejati itu memandang kelemahan, lalu dijadikan kelebihan untuk saling mencintai. - B.J. Habibie";
  const text2 =
    "Cinta tidak butuh pengorbanan. Begitu kamu merasa berkorban, kamu sudah tidak cinta. - Raditya Dika";
  const text3 =
    "Cinta adalah kekuatan yang paling dahsyat di dunia. Dia bisa mengubah dunia menjadi surga atau neraka. - Gus Dur";
  const text4 =
    "Another year around the sun, and I'm still lucky to have you by my side";
  const text5 = "You make every day brighter. Happy birthday! ";

  // Menyusun teks-teks menjadi array
  const texts = [text1, text2, text3, text4, text5];
  let currentIndex = 0;
  const textElement = document.getElementById("changingText");

  function changeText() {
    textElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length; // Melakukan pengecekan terhadap indeks
  }

  // Panggil fungsi changeText setiap 10 detik
  setInterval(changeText, 8000);
});

document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk menghitung countdown ulang tahun
  function calculateBirthdayCountdown(birthday) {
    const today = new Date();
    const nextBirthday = new Date(
      today.getFullYear(),
      birthday.getMonth(),
      birthday.getDate()
    );

    if (today > nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const timeDifference = nextBirthday.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
  }

  // Aldi's birthday (21 April 2003)
  const aldiBirthday = new Date(2003, 3, 21); // Months are zero-indexed

  // Alya's birthday (6 April 2003)
  const alyaBirthday = new Date(2003, 3, 6); // Months are zero-indexed

  // Alya's birthday (6 April 2003)
  const anivBirthday = new Date(2019, 8, 19); // Months are zero-indexed

  // Fungsi untuk memperbarui countdown ulang tahun setiap detik
  function updateBirthdayCountdown(birthday, elementId, name) {
    const countdown = calculateBirthdayCountdown(birthday);
    const countdownElement = document.getElementById(elementId);

    if (countdown === 365) {
      countdownElement.innerText = `Happy birthday ayangggg !`;
    } else {
      countdownElement.innerText = `Days until ${name} day: ${countdown}`;
    }
  }

  // Memperbarui countdown ulang tahun Aldi setiap detik
  updateBirthdayCountdown(aldiBirthday, "aldiCountdown", "Aldi");

  // Memperbarui countdown ulang tahun Alya setiap detik
  updateBirthdayCountdown(alyaBirthday, "alyaCountdown", "Alya");

  updateBirthdayCountdown(anivBirthday, "anivCountdown", "Anniversary");

  // Memanggil fungsi updateBirthdayCountdown setiap detik
  setInterval(
    () => updateBirthdayCountdown(aldiBirthday, "aldiCountdown", "Aldi"),
    1000
  );
  setInterval(
    () => updateBirthdayCountdown(alyaBirthday, "alyaCountdown", "Alya"),
    1000
  );
  setInterval(
    () =>
      updateBirthdayCountdown(
        anivBirthdayBirthday,
        "anivCountdown",
        "Anniversary"
      ),
    1000
  );
});
