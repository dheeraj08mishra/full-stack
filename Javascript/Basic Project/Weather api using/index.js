document.getElementById("btn").addEventListener("click", function () {
  checkInputDetails();
});

document.getElementById("input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkInputDetails();
  }
});

function checkInputDetails() {
    if (document.getElementById("input").value.trim() === "") {
        alert("Please enter a value");
        return;
      }
        fetchWeatherInfo(document.getElementById("input").value.trim());
}

fetchWeatherInfo = (currentCity) => {
    document.getElementById("weatherInfo").innerHTML = '';
    fetch(`https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${currentCity}&aqi=no`)
    .then(function (res) {
      return res.json();
    }).then(function(data){
      console.log(data);
     const cityRef= document.createElement('div')
     cityRef.setAttribute('id', 'city');
     cityRef.textContent = data.location.name;
      document.getElementById('weatherInfo').appendChild(cityRef);
  
      const tempRef= document.createElement('div')
      tempRef.setAttribute('id', 'temp');
      tempRef.textContent = data.current.temp_c + '°C';
       document.getElementById('weatherInfo').appendChild(tempRef);
  
       const imageRef= document.createElement('img')
       imageRef.src = data.current.condition.icon;
       document.getElementById('weatherInfo').appendChild(imageRef);
  
  
       const conditionRef= document.createElement('div')
       conditionRef.setAttribute('id', 'condition');
       conditionRef.textContent = data.current.condition.text;
        document.getElementById('weatherInfo').appendChild(conditionRef);
  
       document.getElementById("input").value = "";
       
    }) .catch(err => {
        alert('Failed to fetch weather data');
        console.error(err);
    });
}