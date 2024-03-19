var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["Sunny"] = "sunny";
    WeatherConditions["Cloudy"] = "cloudy";
    WeatherConditions["Rainy"] = "rainy";
    WeatherConditions["Snowy"] = "snowy";
})(WeatherConditions || (WeatherConditions = {}));
;
var currentWeather = WeatherConditions.Cloudy;
console.log("The current weather is : ".concat(currentWeather));
