
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    document.body.style.backgroundImage = "url('./images/background2.jpg')";
  } else {
    document.body.style.backgroundImage = "url('./images/background1.jpg')";
  }
});

const carousel = new bootstrap.Carousel("#myCarousel");
