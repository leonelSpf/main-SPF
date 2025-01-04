export default function ChainOfCommands() {
  const d = document,
    urlCommands = "./chainsCommands.json",
    $articleClassCommands = d.querySelector(".articles"),
    $template = d.getElementById("tmp-boxCommands").content,
    $containerAllCommands = d.querySelector(".container-allCommands"),
    $ulUserChains = d.querySelector(".box-userChains"),
    $imgKony = d.getElementById("konyImg"),
    $fragment = d.createDocumentFragment();

  fetch(urlCommands)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => {
      $articleClassCommands.appendChild($imgKony);
      const objData = data.chainsOfCommands;
      for (let i = 0; i < objData.length; i++) {
        const el = objData[i];

        $template.querySelector(".indicative").textContent = el.indicativo;
        if (el.indicativo == el.indicativo) {
          ///☢️☢️☢️ FUTURE CHANGE btn Toggle
          // $template.querySelector(".indicative").textContent = "[secreto]";
        }
        $template.querySelector("img").setAttribute("src", `${el.img}`);
        $template.querySelector(".grade").textContent = el.range;
        $template.querySelector(".schollHight").textContent = el.scholl;
        $template.querySelector(".name").textContent = el.names;
        $template.querySelector(".lastName").textContent = el.lastName;
        $template.querySelector(".secondLastName").textContent =
          el.secondLastName;
        $template.querySelector(".comision").textContent = el.rol;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      }
      $imgKony.style.display = "none";
      $articleClassCommands.appendChild($fragment);
    })
    .catch((err) => {
      let errores =
        `ocurrio un error: ${err.status} errorText: ${err.statusText}` ||
        `algo no estabien `;
    });
}
