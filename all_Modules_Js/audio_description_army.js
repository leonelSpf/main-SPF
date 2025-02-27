export default function audioDescription(btnAudio) {
  const boxControlAudio = document.querySelectorAll(".des-box-controlAudio");
  const audioPlay = document.querySelectorAll(".audioArmyDescription");

  boxControlAudio.forEach((box, index) => {
    const audio = audioPlay[index];
    const button = document.createElement("i");
    button.classList.add("fa-solid", "fa-volume-high");

    button.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        button.classList.remove("fa-solid", "fa-volume-high");
        button.classList.remove("fa-solid", "fa-play");
        button.classList.add("fa-solid", "fa-pause");
      } else {
        audio.pause();
        button.classList.add("fa-solid", "fa-play");
      }
    });

    box.appendChild(button);
  });
}
