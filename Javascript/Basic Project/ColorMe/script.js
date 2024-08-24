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
