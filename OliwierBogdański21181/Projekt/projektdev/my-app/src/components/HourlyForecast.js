import React from 'react';

function HourlyForecast({ forecasts, onHourSelect, selectedDt }) { 
  if (!forecasts || forecasts.length === 0) {
    return null;
  }

  return (
    <div className="hourly-forecast-container">
      <h3>Prognoza</h3>
      <div className="hourly-forecast">
        {forecasts.map((forecastItem) => {
          const dateString = forecastItem.dt_txt.includes(" ") ? forecastItem.dt_txt.replace(" ", "T") + "Z" : forecastItem.dt_txt;
          const date = new Date(dateString);
          const hours = date.getHours().toString().padStart(2, '0');
          const minutes = date.getMinutes().toString().padStart(2, '0');
          const iconUrl = `http://openweathermap.org/img/wn/${forecastItem.weather[0].icon}@2x.png`;
          
          const isSelected = selectedDt === forecastItem.dt;

          return (
            <div 
              key={forecastItem.dt}
              className={`hour-tile ${isSelected ? 'selected' : ''}`} 
              onClick={() => onHourSelect(forecastItem)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && onHourSelect(forecastItem)}
            >
              <p className="hour-time">{hours}:{minutes}</p>
              <img src={iconUrl} alt={forecastItem.weather[0].description} className="hour-icon" />
              <p className="hour-temp">{forecastItem.main.temp.toFixed(1)}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HourlyForecast;