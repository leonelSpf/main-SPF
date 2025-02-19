export default function audioDescription(btnAudio) {
  const boxControlAudio = document.querySelector(".des-box-controlAudio"),
    audioPlay = document.querySelectorAll(".audioArmyDescription");
  for (let i = 0; i < audioPlay.length; i++) {
    const el = audioPlay[i];
    console.log(el.setAttribute("controls", ""));
    el.setAttribute("controls", "");
  }

  console.log();

  document.addEventListener("click", (e) => {
    if (e.target === boxControlAudio || e.target.matches(`${btnAudio} *`)) {
      console.log("caja");
      boxControlAudio.children[0].classList.replace("fa-play", "fa-pause");
      audioPlay.play();
    } else {
      boxControlAudio.children[0].classList.replace("fa-pause", "fa-play");
      audioPlay.pause();
    }
  });
}
