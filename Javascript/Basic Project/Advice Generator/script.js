document.addEventListener("DOMContentLoaded", () => {
  const advice = document.getElementById("adviceContent");
  const adviceCount = document.getElementById("adviceId");
  const btn = document.getElementById("button");
  const url = "https://api.adviceslip.com/advice";

  let getAdvice = () => {
    let call = fetch(url);
    call
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        advice.innerHTML = data.slip.advice;
        adviceCount.innerHTML = `ADVICE # ` + data.slip.id;
      });
  };

  getAdvice();
  btn.addEventListener("click", getAdvice);
});
