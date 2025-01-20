export default function asideAllSections() {
  const d = document,
    $btnBurguerMenus = d.querySelector(".btn-burguerMenu"),
    $menuAside = d.querySelector(".aside-allsections");
  const $bntExitMenuBuerguer = d.querySelector(".btn-exitAside");

  d.addEventListener("click", (e) => {
    if (
      e.target === $btnBurguerMenus ||
      e.target.matches(`.btn-burguerMenu * `)
    ) {
      $menuAside.classList.toggle("is-active-asideMenu");
    }
    if (e.target === $bntExitMenuBuerguer) {
      $menuAside.classList.remove("is-active-asideMenu");
    }
  });
}
