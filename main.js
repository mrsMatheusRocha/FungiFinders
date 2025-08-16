const navToggle = document.querySelector('[aria-controls="primary-navigation"]');
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  const isNavOpen = navToggle.getAttribute("aria-expanded");

  if (isNavOpen === "false") {
    navToggle.setAttribute("aria-expanded", true);
  } else {
    navToggle.setAttribute("aria-expanded", false);
  }
})

const resizeObserver = new ResizeObserver(() => {
  document.body.classList.add("resizing");

  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});

resizeObserver.observe(document.body);