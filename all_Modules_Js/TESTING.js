export default function testings() {
  // const $btnbasic = document.getElementById("btnAsideSections-Basic"),
  //   $btnMedium = document.getElementById("btnAsideSections-Medium"),
  //   $btnIntroduction = document.getElementById("btnAsideSections-Intruduction"),
  //   $asideBoxSection = document.querySelectorAll(".aside-boxSection");
  // document.addEventListener("click", (e) => {
  //   if (e.target === $btnMedium) {
  //     $asideBoxSection[1].classList.remove("hidden");
  //     $asideBoxSection[0].classList.add("hidden");
  //     $asideBoxSection[2].classList.add("hidden");
  //   } else if (e.target === $btnbasic) {
  //     $asideBoxSection[0].classList.remove("hidden");
  //     $asideBoxSection[1].classList.add("hidden");
  //     $asideBoxSection[2].classList.add("hidden");
  //   } else if (e.target === $btnIntroduction) {
  //     $asideBoxSection[2].classList.remove("hidden");
  //     $asideBoxSection[1].classList.add("hidden");
  //     $asideBoxSection[0].classList.add("hidden");
  //   }
  // });
  // const buttons = document.querySelectorAll("[data-section]");
  // const sections = document.querySelectorAll(".aside-boxSection");
  // document.addEventListener("click", (e) => {
  //   if (e.target.matches("[data-section]")) {
  //     const targetSectionId = e.target.getAttribute("data-section");
  //     sections.forEach((section) => section.classList.add("hidden"));
  //     const targetSection = document.getElementById(targetSectionId);
  //     if (targetSection) {
  //       targetSection.classList.remove("hidden");
  //     }
  //   }
  // });
  // const buttons = document.querySelectorAll("[data-section]");
  // const sections = document.querySelectorAll(".aside-boxSection");
  // console.log(buttons);
  // console.log(sections);
  // buttons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     const targetSectionId = button.dataset.section; // Usa dataset para acceder a los atributos data-*
  //     if (!targetSectionId) {
  //       console.error("El botón no tiene el atributo data-section definido."); // Manejo de error si falta el atributo
  //       return; // Sale de la función si no hay ID
  //     }
  //     sections.forEach((section) => section.classList.add("hidden")); // Oculta todas las secciones
  //     const targetSection = document.getElementById(targetSectionId);
  //     if (targetSection) {
  //       targetSection.classList.remove("hidden");
  //     } else {
  //       console.error(
  //         `No se encontró la sección con el ID: ${targetSectionId}`
  //       ); // Manejo de error si no encuentra la sección
  //     }
  //   });
  // });
  const $asideBoxSections = document.querySelectorAll(".aside-boxSection");
  const $buttons = {
    basic: document.getElementById("btnAsideSections-Basic"),
    medium: document.getElementById("btnAsideSections-Medium"),
    introduction: document.getElementById("btnAsideSections-Intruduction"),
  };
  const $sections = document.querySelectorAll("[data-section]");
  // Función para mostrar una sección y ocultar las demás
  function showSection(sectionIndex) {
    $sections.forEach((section, index) => {
      section.classList.toggle("hidden", index !== sectionIndex);
    });
    $asideBoxSections.forEach((section, index) => {
      if (index === sectionIndex) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
    for (const button in $buttons) {
      const isDisabled = Object.keys($buttons)[sectionIndex] === button;
      $buttons[button].disabled = isDisabled;
      $buttons[button].style.cursor = isDisabled ? "not-allowed" : "pointer";
    }
  }
  // Event listeners para los botones
  $buttons.basic.addEventListener("click", () => showSection(0));
  $buttons.medium.addEventListener("click", () => showSection(1));
  $buttons.introduction.addEventListener("click", () => showSection(2));
  // 🔥🔥🔥Opcional: mostrar la primera sección por defecto al cargar la página
  // showSection(0);
}
