const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    document.body.style.backgroundImage = "url('/Images/background2.jpg')";
  } else {
    document.body.style.backgroundImage = "url('/Images/background1.jpg')";
  }
});

const carousel = new bootstrap.Carousel("#myCarousel");
