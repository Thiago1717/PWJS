import React, { useState, useEffect } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import HourlyForecast from './components/HourlyForecast';
import './App.css';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

function App() {
  const [currentCity, setCurrentCity] = useState('');
  const [cityData, setCityData] = useState(null);
  const [currentWeatherData, setCurrentWeatherData] = useState(null); 
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [selectedHourData, setSelectedHourData] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const weatherDataToDisplay = selectedHourData || currentWeatherData;
  const isDisplayingSelectedHour = !!selectedHourData;

  useEffect(() => {
    if (!currentCity) return;

    const fetchForecastData = async () => {
      setLoading(true);
      setError(null);
      setCityData(null);
      setCurrentWeatherData(null);
      setHourlyForecast([]);
      setSelectedHourData(null); 

      try {
        const response = await fetch(
          `${API_BASE_URL}?q=${currentCity}&appid=${API_KEY}&units=metric&lang=pl&cnt=5`
        );
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Nie znaleziono miasta.');
          }
          throw new Error(`Błąd HTTP: ${response.status}`);
        }
        const data = await response.json();

        if (data.list && data.list.length > 0) {
          setCityData(data.city);
          setCurrentWeatherData(data.list[0]);
          setHourlyForecast(data.list);
        } else {
          throw new Error('Brak danych prognozy w odpowiedzi API.');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForecastData();
  }, [currentCity]);

  const handleSearch = (city) => {
    setCurrentCity(city);
  };

  const handleHourSelect = (hourData) => {
    setSelectedHourData(hourData);
  };

  const showCurrentWeather = () => {
    setSelectedHourData(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplikacja Pogodowa</h1>
      </header>
      <main>
        <WeatherForm onSearch={handleSearch} />
        {loading && <p className="loading-message">Ładowanie danych...</p>}
        {error && <p className="weather-error">{error}</p>}
        {weatherDataToDisplay && cityData && (
          <WeatherDisplay 
            weatherData={weatherDataToDisplay}
            cityData={cityData}
            isCurrent={!isDisplayingSelectedHour} 
          />
        )}
        {isDisplayingSelectedHour && cityData && (
          <button onClick={showCurrentWeather} className="back-to-current-btn">
            Pokaż aktualną pogodę
          </button>
        )}

        {hourlyForecast.length > 0 && (
          <HourlyForecast 
            forecasts={hourlyForecast} 
            onHourSelect={handleHourSelect}
            selectedDt={selectedHourData ? selectedHourData.dt : null} 
          />
        )}
      </main>
      <footer>
      
      </footer>
    </div>
  );
}

export default App;