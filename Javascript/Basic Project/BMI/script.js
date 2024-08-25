document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#BMIform");
  const height = document.querySelector("#height");
  const weight = document.querySelector("#weight");
  const result = document.querySelector("#result");
  const bmiValue = document.querySelector("#bmiValue");
  const status = document.querySelector("#status");
  const optimumRangeWeight = document.querySelector("#OptimumRangeWeight");
  const errorMessage = document.createElement("div");
  errorMessage.id = "error-message";
  form.insertBefore(errorMessage, form.firstChild);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    errorMessage.textContent = "";
    result.style.display = "none";

    const heightValue = parseFloat(height.value);
    const weightValue = parseFloat(weight.value);

    if (
      isNaN(heightValue) ||
      isNaN(weightValue) ||
      heightValue <= 0 ||
      weightValue <= 0
    ) {
      errorMessage.textContent =
        "Please enter valid and positive values for height and weight.";
      return;
    }

    const bmi = (weightValue * 10000) / (heightValue * heightValue);
    bmiValue.textContent = bmi.toFixed(2);
    optimumRangeWeight.textContent = `${(
      (18.5 * heightValue * heightValue) /
      10000
    ).toFixed(2)} - ${((24.9 * heightValue * heightValue) / 10000).toFixed(2)}`;
    optimumRangeWeight.style.color = "green";

    if (bmi < 18.5) {
      result.classList.remove("green", "orange");
      result.classList.add("red");
      status.textContent = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.classList.remove("red", "orange");
      result.classList.add("green");
      status.textContent = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.classList.remove("green", "red");
      result.classList.add("orange");
      status.textContent = "Overweight";
    } else if (bmi >= 30) {
      result.classList.remove("green", "orange");
      result.classList.add("red");
      status.textContent = "Obese";
    }

    result.style.display = "flex";
  });
});
