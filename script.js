const contactDialog = document.getElementById("confirm-dialog");
const sendButton = document.getElementById("send-message");

contactDialog.addEventListener("click", function (event) {
  if (event.target !== contactDialog) {
    return;
  }
  console.log(event.target.tagName);
  if (
    event.offsetX < 0 ||
    event.offsetX > event.target.offsetWidth ||
    event.offsetY < 0 ||
    event.offsetY > event.target.offsetHeight
  ) {
    closeContactForm();
  }
});

function showContactForm() {
  contactDialog.style.clipPath = "unset";
  contactDialog.showModal();
  contactDialog.style.transform = "scale(1)";
}
function closeContactForm() {
  contactDialog.style.clipPath = "unset";
  contactDialog.style.transform = "scale(0)";
  contactDialog.close();
  sendButton.classList.remove("spinner");
  sendButton.classList.add("hover-effect");
}
function showShowcase() {
  location.hash = "#portfolio";
  document.getElementById("portfolio").scrollIntoView();
}

//only used to get path length for animation.
const logo = document.querySelectorAll("#big-circle");
for (let i = 0; i < logo.length; i++) {
  console.log(logo[i].getTotalLength());
}

sendButton.addEventListener("click", (e) => {
  /*let offsetTop = e.target.offsetTop;
           let offsetLeft = e.target.offsetLeft;
           let offsetHeight = e.target.offsetHeight;*/
  let { offsetLeft, offsetTop, offsetHeight, offsetWidth } = e.target;
  let strClipPath =
    "polygon(" +
    offsetLeft +
    "px " +
    offsetTop +
    "px, " +
    (offsetLeft + offsetWidth + 5) +
    "px " +
    offsetTop +
    "px, " +
    (offsetLeft + offsetWidth + 5) +
    "px " +
    (offsetTop + offsetHeight + 5) +
    "px, " +
    offsetLeft +
    "px " +
    (offsetTop + offsetHeight + 5) +
    "px)";
  contactDialog.style.clipPath = strClipPath;
  contactDialog.style.transform = "translate(-25%, -25%)";

  sendButton.classList.remove("hover-effect");
  sendButton.classList.add("spinner");
  setTimeout(closeContactForm, 1500);
});

const snowContainer = document.getElementById("snow-container");
const snowContent = ['&#10052', '&#10053', '&#10054']

const random = (num) => {
  return Math.floor(Math.random() * num);
}

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
}

const createSnow = (num) => {
  for (var i = num; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(3)]
    snowContainer.append(snow);
  }
}

window.addEventListener("load", () => {
  createSnow(30)
  setTimeout(removeSnow, (1000 * 60))
});

window.addEventListener("click", () => {
  removeSnow()
});

