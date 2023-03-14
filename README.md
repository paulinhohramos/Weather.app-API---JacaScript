## Weather App JavaScript API

This is a JavaScript library that allows you to retrieve weather data using various APIs. The library is designed to be easy to use and flexible, allowing you to retrieve weather data from different sources and display it in different ways.

## Getting Started

To use the Weather App JavaScript API, you will need to include the weather.js file in your HTML document:

<script src="weather.js"></script>

## Usage

## Retrieving Weather Data

To retrieve weather data, you will need to call the 'getWeatherData' function, passing in the latitude and longitude of the location you want to retrieve weather data for. You can also specify the API you want to use, and any other options you want to use to customize the request.

// Example usage
getWeatherData(lat, lon, apiName, options)

The 'getWeatherData' function returns a Promise that resolves with the weather data. The format of the weather data will depend on the API you are using

## Supported APIs

The Weather App JavaScript API currently supports the following weather APIs:

- OpenWeatherMap

// Retrieve weather data for London using OpenWeatherMap

//<script>getWeatherData(51.5072, -0.1276, 'openweathermap', { units: 'metric' }) .then(data => console.log(data)) .catch(error => console.error(error));<script>

## Issues can occur

There is error that occur with the connection between the API and the JavaScript code lines.

- If you have an alternative for it solution, feel free the send your contribution.

## Contributing

If you would like to contribute to the Weather App JavaScript API, please fork the repository and submit a pull request.cd
