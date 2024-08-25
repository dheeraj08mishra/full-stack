document.addEventListener("DOMContentLoaded", () => {
  const colorBtn = document.querySelector("#colorBtn");
  const colorNumberValue = document.querySelector("#colorNumber");

  const gridContainer = document.querySelector("#grid");
  for (let i = 1; i <= 9; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.textContent = i;
    gridContainer.appendChild(gridItem);
  }

  const gridItemValues = document.querySelectorAll(".grid-item");
  colorBtn.addEventListener("click", () => {
    if (colorNumberValue.value === "") {
      alert("Please enter a number between 1 and 9");
      return;
    }
    if (
      parseInt(colorNumberValue.value) > 9 ||
      parseInt(colorNumberValue.value) < 1
    ) {
      alert("Please enter a number between 1 and 9");
      colorNumberValue.value = "";
      return;
    }
    gridItemValues.forEach((currentGridItem) => {
      currentGridItem.classList.remove("active");
      if (
        parseInt(currentGridItem.textContent) ===
        parseInt(colorNumberValue.value)
      ) {
        currentGridItem.classList.add("active");
      }
    });
  });
});
