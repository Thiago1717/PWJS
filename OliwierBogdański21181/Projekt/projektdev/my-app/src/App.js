import React, { useState, useEffect } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css'; 

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [currentCity, setCurrentCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currentCity) return;

    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);
      setWeatherData(null); 

      try {
        const response = await fetch(
          `${API_BASE_URL}?q=${currentCity}&appid=${API_KEY}&units=metric&lang=pl`
        );
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Nie znaleziono miasta.');
          }
          throw new Error(`Błąd HTTP: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [currentCity]);

  const handleSearch = (city) => {
    setCurrentCity(city);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pogodynka</h1>
      </header>
      <main>
        <WeatherForm onSearch={handleSearch} />
        {loading && <p className="loading-message">Ładowanie danych...</p>}
        <WeatherDisplay weatherData={weatherData} error={error} />
      </main>
      <footer>
        <p>Dane pogodowe dostarczane przez OpenWeatherMap</p>
      </footer>
    </div>
  );
}

export default App;