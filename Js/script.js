let getWeatherData = {
    apiKey: "6a340e7cc2a75399f3267e3b2b649812",
    fetchWeatherData: function(city){
       fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&appid="+ this.apiKey
        )
        .then((response) => response.json())
        .then((data) =>  this.showWeatherData(data));
    },
    showWeatherData: function(data){
     document.querySelector(".Name").innerHTML = data.name;
     document.querySelector(".celcius").innerHTML = data.main.temp + " °C";
     document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ data.weather[0].icon + ".png";
     document.querySelector(".weather-status").innerHTML = data.weather[0].description;
     document.querySelector(".speed").innerHTML = data.wind.speed +" km/hr";
     document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
     document.querySelector(".container").style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+data.name+"')";
     document.querySelector("section").removeAttribute("class");
    },
    search: function(){
        this.fetchWeatherData(document.querySelector(".search input").value);

    },
};

document.querySelector(".search ion-icon").addEventListener("click",function(){
    getWeatherData.search();
});
document.querySelector(".search input").addEventListener("keyup",function(event){
if(event.key == "Enter"){
    getWeatherData.search();
}
});