import React from 'react';

function WeatherDisplay({ weatherData, cityData, error, isCurrent = true }) { 
  if (error && isCurrent) {
    return <p className="weather-error">{error}</p>;
  }

  if (!weatherData && isCurrent) {
    return <p>Wpisz miasto, aby zobaczyć pogodę.</p>;
  }

  if (!weatherData) {
    return null; 
  }

  const displayName = cityData && cityData.name ? cityData.name : (weatherData.name || 'Miasto');
  const { main, weather } = weatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  let displayTime = null;
  if (!isCurrent && weatherData.dt_txt) {
    const dateString = weatherData.dt_txt.includes(" ") ? weatherData.dt_txt.replace(" ", "T") + "Z" : weatherData.dt_txt;
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    displayTime = `${hours}:${minutes}, ${date.toLocaleDateString('pl-PL', { weekday: 'short', day: 'numeric', month: 'short' })}`;
  }

  return (
    <div className={`weather-display ${isCurrent ? 'current-weather' : 'selected-hour-weather'}`}>
      {isCurrent && displayName && <h2>Pogoda dla: {displayName}</h2>}
      {!isCurrent && displayName && <h4>Prognoza dla: {displayName}</h4>}
      {displayTime && <p className="weather-time"><strong>Godzina prognozy:</strong> {displayTime}</p>}

      <div className="weather-info">
        <img src={iconUrl} alt={weather[0].description} className="weather-icon"/>
        <div>
            <p><strong>Temperatura:</strong> {main.temp.toFixed(1)} °C</p>
            <p><strong>Odczuwalna:</strong> {main.feels_like.toFixed(1)} °C</p>
            {weatherData.pop !== undefined && <p><strong>Szansa opadów:</strong> {(weatherData.pop * 100).toFixed(0)}%</p>} 
            <p><strong>Wilgotność:</strong> {main.humidity}%</p>
            <p><strong>Ciśnienie:</strong> {main.pressure} hPa</p>
            <p><strong>Pogoda:</strong> {weather[0].description}</p>
            {weatherData.wind && <p><strong>Wiatr:</strong> {weatherData.wind.speed.toFixed(1)} m/s</p>}
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;