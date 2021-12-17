const firstToggler = document.querySelector(".background-1");
const secondToggler = document.querySelector(".background-2");
const thirdToggler = document.querySelector(".background-3");
const { body } = document;

/////////////////////////////////////
// Functions

const changeBackground = function (number) {
  // Check if background is already showing
  let previousBackground;

  if (body.className) {
    previousBackground = body.className;
  }
  body.className = "";
  switch (number) {
    case "1":
      return previousBackground === "background-1"
        ? false
        : body.classList.add("background-1");
    case "2":
      return previousBackground === "background-2"
        ? false
        : body.classList.add("background-2");
    case "3":
      return previousBackground === "background-3"
        ? false
        : body.classList.add("background-3");
    default:
      break;
  }
};

/////////////////////////////////
// Event Listeners
firstToggler.addEventListener("click", () => changeBackground("1"));
secondToggler.addEventListener("click", () => changeBackground("2"));
thirdToggler.addEventListener("click", () => changeBackground("3"));
