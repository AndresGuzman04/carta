let cover = document.getElementById("cover");
let clickHere = document.getElementsByClassName("clickHere")[0];
let letterSheet = document.getElementById("letterSheet");
let letter = document.getElementById("letter");
let shadowLetter = document.getElementById("shadowLetter");

const unlockTime = new Date("2025-11-22T14:00:00-06:00").getTime();

function openLetter() {

  const now = new Date().getTime();

      if (now < unlockTime) {
        // Aún no es hora → Solo ALERTA
        Swal.fire({
          icon: "error",
          title: "Aún no Cosita 💌",
          text: "Espera a verme(cuando me des un beso se abrira).",
        });
        return;
      }

  cover.classList.add("open");
  setTimeout(() => {
    letterSheet.style.zIndex = "2";
    clickHere.style.display = "none";
    letter.style.animationIterationCount = "1";
    shadowLetter.style.animationIterationCount = "1";
    letterSheet.classList.add("zoomIn");
  }, 1500);
}
