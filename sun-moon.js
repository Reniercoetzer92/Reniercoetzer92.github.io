const checkbox = document.getElementById("dark");
const body = document.body;

checkbox.addEventListener("change", function () {
  if (!checkbox.checked) {
    body.style.backgroundColor = "red";
  } else {
    body.style.backgroundColor = "blue";
  }
});
