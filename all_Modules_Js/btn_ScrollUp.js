export default function btnScrollUp(btn) {
  const d = document,
    w = window,
    $btnScroll = d.querySelector(btn);
  w.addEventListener("scroll", (e) => {
    let scrolltop = w.pageYOffset || d.documentElement.scrollTop;
    if (scrolltop > 600) {
      $btnScroll.classList.remove("hidden");
    } else {
      $btnScroll.classList.add("hidden");
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
