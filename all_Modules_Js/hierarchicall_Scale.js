export default function jerarquia() {
  const d = document,
    url = "./chainsCommands.json";
  const $scaleGrades = d.getElementById("scaleGrades"),
    $boxGrades = d.createElement("article");

  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => {
      let { basicScale, oficial, inspector, comisary } =
        data.hierarchicalScale.grade;
      $boxGrades.setAttribute("class", "grades");
      for (const prop in basicScale) {
        const $basicScaleId = d.getElementById("basicScale");
        const $containeFigure = d.createElement("figure"),
          $containeFigcaption = d.createElement("figcaption"),
          $containeImg = d.createElement("img");

        $containeFigure.setAttribute("class", "containerGrades");
        $containeImg.setAttribute("src", basicScale[prop].gradeImg);
        $containeFigcaption.innerHTML = basicScale[prop].gradeScale;
        $containeFigure.appendChild($containeImg);
        $containeFigure.appendChild($containeFigcaption);
        $basicScaleId.appendChild($containeFigure);
      }
      $scaleGrades.appendChild($boxGrades);

      for (const prop in oficial) {
        const $oficialcScaleId = d.getElementById("oficialScale");

        const $containeFigure = d.createElement("figure"),
          $containeFigcaption = d.createElement("figcaption"),
          $containeImg = d.createElement("img");

        $containeFigure.setAttribute("class", "containerGrades");
        $containeImg.setAttribute("src", oficial[prop].gradeImg);
        $containeFigcaption.innerHTML = oficial[prop].gradeScale;

        $containeFigure.appendChild($containeImg);
        $containeFigure.appendChild($containeFigcaption);
        $oficialcScaleId.appendChild($containeFigure);
      }
      for (const prop in inspector) {
        const $inspectorcScaleId = d.getElementById("inspectorScale");

        const $containeFigure = d.createElement("figure"),
          $containeFigcaption = d.createElement("figcaption"),
          $containeImg = d.createElement("img");

        $containeFigure.setAttribute("class", "containerGrades");
        $containeImg.setAttribute("src", inspector[prop].gradeImg);
        $containeFigcaption.innerHTML = inspector[prop].gradeScale;

        $containeFigure.appendChild($containeImg);
        $containeFigure.appendChild($containeFigcaption);
        $inspectorcScaleId.appendChild($containeFigure);
      }
      for (const prop in comisary) {
        const $comisaryScaleId = d.getElementById("ComisarioScale");

        const $containeFigure = d.createElement("figure"),
          $containeFigcaption = d.createElement("figcaption"),
          $containeImg = d.createElement("img");

        $containeFigure.setAttribute("class", "containerGrades");
        $containeImg.setAttribute("src", comisary[prop].gradeImg);
        $containeFigcaption.innerHTML = comisary[prop].gradeScale;

        $containeFigure.appendChild($containeImg);
        $containeFigure.appendChild($containeFigcaption);
        $comisaryScaleId.appendChild($containeFigure);
      }
    })
    .catch((error) => {
      console.log(error.status);
      let errores =
        `ocurrio un error: ${err.status} errorText: ${err.statusText}` ||
        `algo no estabien `;
      console.log(errores);
    });
}
