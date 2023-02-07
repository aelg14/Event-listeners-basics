const zoomInButton = document.querySelector(".zoom-in-btn");
const zoomOutButton = document.querySelector(".zoom-out-btn");
const image = document.querySelector("#image");
const originalWidth = 100;

function zoomIn() {
  image.width += 100;
}

function zoomOut() {
  if (image.width <= originalWidth) {
    image.width = originalWidth;
  } else {
    image.width -= 100;
  }
}

zoomInButton.addEventListener("click", zoomIn);
zoomOutButton.addEventListener("click", zoomOut);
