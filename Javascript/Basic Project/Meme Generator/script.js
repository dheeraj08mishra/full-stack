document.addEventListener("DOMContentLoaded", () => {
  const memeDiv = document.querySelector(".meme");
  const memeGenerateBtn = document.querySelector(".generate-Meme-btn");
  const memeHeading = document.createElement("h2");
  const image = document.createElement("img");
  const author = document.createElement("p");

  generateMeme = () => {
    let data = fetch("https://meme-api.com/gimme/wholesomememes");
    data
      .then((response) => {
        return response.json();
      })
      .then((finalData) => {
        memeHeading.textContent = finalData.title;
        image.src = finalData.url;
        author.textContent = "Meme by:" + finalData.author;
        memeDiv.appendChild(memeHeading);
        memeDiv.appendChild(image);
        memeDiv.appendChild(author);
      });
  };
  generateMeme();
  memeGenerateBtn.addEventListener("click", () => {
    memeDiv.innerHTML = "";
    generateMeme();
  });
  memeDiv.appendChild(memeHeading);
});
