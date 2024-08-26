document.addEventListener("DOMContentLoaded", () => {
  const minMSBInput = document.getElementById("minMSBInput");
  const minLSBInput = document.getElementById("minLSBInput");
  const secMSBInput = document.getElementById("secMSBInput");
  const secLSBInput = document.getElementById("secLSBInput");
  const startButton = document.getElementById("start");
  const pauseButton = document.getElementById("pause");
  const resetButton = document.getElementById("reset");

  pauseButton.setAttribute("disabled", true);

  minMSBInput.value = 0;
  minLSBInput.value = 0;
  secMSBInput.value = 0;
  secLSBInput.value = 0;
  minMSBInput.addEventListener("input", (event) => {
    if (parseInt(event.target.value) > 5) {
      event.target.value = 5;
    } else if (parseInt(event.target.value) < 0) {
      event.target.value = 0;
    }
  });
  minLSBInput.addEventListener("input", (event) => {
    if (parseInt(event.target.value) > 9) {
      event.target.value = 9;
    } else if (parseInt(event.target.value) < 0) {
      event.target.value = 0;
    }
  });
  secMSBInput.addEventListener("input", (event) => {
    if (parseInt(event.target.value) > 5) {
      event.target.value = 5;
    } else if (parseInt(event.target.value) < 0) {
      event.target.value = 0;
    }
  });
  secLSBInput.addEventListener("input", (event) => {
    if (parseInt(event.target.value) > 9) {
      event.target.value = 9;
    } else if (parseInt(event.target.value) < 0) {
      event.target.value = 0;
    }
  });
  let interval;

  startButton.addEventListener("click", (event) => {
    startButton.setAttribute("disabled", true);
    pauseButton.removeAttribute("disabled");
    let totalSeconds =
      parseInt(secLSBInput.value) + parseInt(secMSBInput.value) * 10;
    let totalMinutes =
      parseInt(minLSBInput.value) + parseInt(minMSBInput.value) * 10;
    let totalTime = totalMinutes * 60 + totalSeconds;
    if (totalTime === 0) {
      pauseButton.setAttribute("disabled", true);
      startButton.removeAttribute("disabled");
      return;
    }
    interval = setInterval(() => {
      if (totalTime <= 0) {
        clearInterval(interval);
        startButton.removeAttribute("disabled");
        pauseButton.setAttribute("disabled", true);
      } else {
        totalTime--;
        totalMinutes = Math.floor(totalTime / 60);
        totalSeconds = totalTime % 60;
        minMSBInput.value = Math.floor(totalMinutes / 10);
        minLSBInput.value = totalMinutes % 10;
        secMSBInput.value = Math.floor(totalSeconds / 10);
        secLSBInput.value = totalSeconds % 10;
      }
    }, 1000);
  });
  pauseButton.addEventListener("click", (event) => {
    startButton.removeAttribute("disabled");
    pauseButton.setAttribute("disabled", true);
    clearInterval(interval);
  });

  resetButton.addEventListener("click", (event) => {
    clearInterval(interval);
    startButton.removeAttribute("disabled");
    pauseButton.setAttribute("disabled", true);
    minMSBInput.value = 0;
    minLSBInput.value = 0;
    secMSBInput.value = 0;
    secLSBInput.value = 0;
  });
});
