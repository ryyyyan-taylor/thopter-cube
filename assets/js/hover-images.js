const modal = document.getElementById("image-modal");
const previewImage = document.getElementById("image-preview");

document.querySelectorAll(".hover-text").forEach(el => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    const imgSrc = e.target.getAttribute("data-image");
    previewImage.src = imgSrc;

    modal.classList.add("show");
    // Delay setting display so transition works
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("show"), 10);
  });
});

// Hide modal with fade-out
modal.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300); // Matches CSS transition time
});

previewImage.addEventListener("click", (e) => {
  e.stopPropagation();
});