export default function sectionsBasic() {
  const d = document,
    url = "./chainsCommands.json";
  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => {
      console.log(data.basicSPF);
      let { mision, vision, exhorto, lema } = data.basicSPF;
      console.log(exhorto);
      // mision
      const $parrafo = d.createElement("p");
      $parrafo.innerHTML = mision[0];
      const $boxmision = d.getElementById("misionInstitucional");
      $boxmision.appendChild($parrafo);
      // vision
      const $boxvision = d.getElementById("visionInstitucional"),
        $parrafoVision = d.createElement("p");
      $parrafoVision.innerHTML = vision[0];
      $boxvision.appendChild($parrafoVision);
      // exhorto
      for (const el of exhorto) {
        const $exhortoLemaInstitucional = d.getElementById(
            "exhortoInstitucional"
          ),
          $parrafosExhorto = d.createElement("p");
        $parrafosExhorto.innerHTML = el;
        $exhortoLemaInstitucional.insertAdjacentElement(
          "beforeend",
          $parrafosExhorto
        );
      }
      //lema
      const $parrafoLema = d.createElement("p"),
        $boxlema = d.getElementById("lemaInstitucional");
      $parrafoLema.innerHTML = lema;
      $boxlema.appendChild($parrafoLema);
    })
    .catch((error) => {
      console.log(error.status);
      let errores =
        `ocurrio un error: ${err.status} errorText: ${err.statusText}` ||
        `algo no estabien `;
      console.log(errores);
    });
}
