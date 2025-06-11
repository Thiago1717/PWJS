import React, { useState } from 'react';

function WeatherForm({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="weather-form">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Wpisz nazwę miasta"
        aria-label="Nazwa miasta"
      />
      <button type="submit">Szukaj</button>
    </form>
  );
}

export default WeatherForm;