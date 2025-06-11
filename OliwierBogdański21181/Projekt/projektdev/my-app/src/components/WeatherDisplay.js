import React from 'react';

function WeatherDisplay({ weatherData, error }) {
  if (error) {
    return <p className="weather-error">Błąd: {error}</p>;
  }

  if (!weatherData) {
    return <p>Wpisz miasto, aby zobaczyć pogodę.</p>;
  }

  const { name, main, weather } = weatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-display">
      <h2>Pogoda dla: {name}</h2>
      <div className="weather-info">
        <img src={iconUrl} alt={weather[0].description} className="weather-icon"/>
        <div>
            <p><strong>Temperatura:</strong> {main.temp.toFixed(1)} °C</p>
            <p><strong>Odczuwalna:</strong> {main.feels_like.toFixed(1)} °C</p>
            <p><strong>Wilgotność:</strong> {main.humidity}%</p>
            <p><strong>Ciśnienie:</strong> {main.pressure} hPa</p>
            <p><strong>Pogoda:</strong> {weather[0].description}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;