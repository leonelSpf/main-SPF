export default function sectionChainOfCommands(allCommandsStyle) {
  const d = document,
    $tableToggle = d.getElementsByClassName("btnToggle-tbl"),
    $btnToggleTable = d.querySelector(".fa-table");
  const isActiveClass = d.querySelector(".article-chainCommand");

  d.addEventListener("click", (e) => {
    if (
      e.target.matches(".btnToggle-tbl") ||
      e.target.matches(`.btnToggle-tbl *`)
    ) {
      isActiveClass.classList.toggle("is-activeArticle-chainCommand");
      $btnToggleTable.classList.toggle("fa-table-list");
    } else {
    }
  });
}
