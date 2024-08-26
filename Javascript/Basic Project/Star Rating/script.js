document.addEventListener("DOMContentLoaded", () => {
  const startContainer = document.querySelector("#startContainer");
  for (let index = 0; index < 5; index++) {
    const start = document.createElement("button");
    start.setAttribute("data-value", index + 1);
    start.classList.add("star", "star-empty");
    startContainer.appendChild(start);
  }
  const stars = startContainer.querySelectorAll(".star");
  setsTars = (e) => {
    const startValue = e.target.getAttribute("data-value");
    if (startValue) {
      console.log(startValue);
      for (let count = 0; count < startValue; count++) {
        stars[count].classList.add("star-filled");
      }
      for (let index = startValue; index < stars.length; index++) {
        stars[index].classList.remove("star-filled");
      }
    }
  };
  startContainer.addEventListener("click", setsTars);
});
