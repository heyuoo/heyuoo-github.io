const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg"
];
const chosenImage = images[Math.floor(Math.random()* images.length)];

const bgImage = document.createElement("img");

bgImage.src =`img/${chosenImage}`;
bgImage.width = "1000";
bgImage.height = "1000";

document.body.style.backgroundImage = `url("img/${chosenImage}")`;
