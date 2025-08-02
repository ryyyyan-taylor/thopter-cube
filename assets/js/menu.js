const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Optional: hide menu after clicking a link
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

document.addEventListener("click", (event) => {
  // If the menu is open, and the click target isn't inside it or the button
  if (
    menu.classList.contains("show") &&
    !menu.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    menu.classList.remove("show");
  }
});
