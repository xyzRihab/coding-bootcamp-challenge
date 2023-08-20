const imagesrc = ["./images/image-tanya.jpg", "./images/image-john.jpg"];

const profilePic = document.getElementById("profile-pic");
const tanyaText = document.getElementById("Tanya-text");
const johnText = document.getElementById("John-text");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;

function previous() {
  return index > 0 ? index - 1 : 1;
}

function nextMe() {
  return index < 1 ? index + 1 : 0;
}

function doAction(action) {
  index = action();

  profilePic.src = imagesrc[index];
  tanyaText.style.display = index === 0 ? "block" : "none";
  johnText.style.display = index === 1 ? "block" : "none";
}

next.addEventListener("click", function () {
  doAction(previous);
});

prev.addEventListener("click", function () {
  doAction(nextMe);
});
