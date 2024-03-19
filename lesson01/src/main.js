var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["Sunny"] = "sunny";
    WeatherConditions["Cloudy"] = "cloudy";
    WeatherConditions["Rainy"] = "rainy";
    WeatherConditions["Snowy"] = "snowy";
})(WeatherConditions || (WeatherConditions = {}));
;
console.log(WeatherConditions.Rainy);
