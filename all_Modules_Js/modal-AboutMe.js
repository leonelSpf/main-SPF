export default function modalAboutMe(modalContainer) {
  const d = document,
    $closedModalAboutMe = d.getElementById("headerClosedModalAboutMe"),
    $modalcontainer = d.querySelector(modalContainer),
    $btnModalCloses = d.querySelector(".closedModalAboutMe"),
    $btnModalContainer = d.querySelector(".btn-modalContainer");
  const $pruebaAudio = d.getElementById("phraseAudio");
  const showModal = () => {
    $modalcontainer.classList.remove("hidden");
    localStorage.setItem("popUpSaw", "true");
    $btnModalContainer.classList.add("hidden");
  };
  const hiddenModal = () => {
    $modalcontainer.classList.toggle("hidden");
    localStorage.setItem("popUpSaw", "false");
    $btnModalContainer.classList.remove("hidden");
  };
  d.addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target === $closedModalAboutMe || e.target === $btnModalCloses) {
      hiddenModal();
      $pruebaAudio.play();
      $pruebaAudio.volume = 0.1;
    } else if (e.target === $btnModalCloses) {
      showModal();
    }
  });
  d.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("popUpSaw") === null) {
      localStorage.setItem("popUpSaw", "true");
    }
    if (localStorage.getItem("popUpSaw") === "true") showModal();
    if (localStorage.getItem("popUpSaw") === "false") hiddenModal();
  });
}
