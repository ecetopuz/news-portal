import React from 'react';
import './Weather.css';

const Weather = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>Yükleniyor...</div>;
  }

  const current = data[0]; 

  return (
    <div className="weather-widget">
      <div className="weather-header">
        <div className="city-temp">
          <h2>{current.city}</h2>
          <div className="current-temp">{current.high}°C</div>
        </div>

        
        {current.warning && (
          <div className="weather-alert">🌡️ {current.warning}</div>
        )}
      </div>

      <div className="forecast-row">
        {data.map((day, index) => (
          <div key={index} className="forecast-card">
            <div className="day-name">{day.day}</div>
            <div className="icon">
              <img src={day.icon} alt="Hava durumu ikonu" />
            </div>
            <div className="temps">
              <span>{day.high}°</span> / <span>{day.low}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
