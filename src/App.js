import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import StickyAds from './components/StickyAds';
import FinanceMenu from './components/FinanceMenu';
import SliderNews from './components/SliderNews';
import Weather from './components/Weather';
import NewsPanelCard from './components/NewsPanelCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/api/weather-data`)
      .then(res => res.json())
      .then(data => setWeatherData(data.data));
  }, [BASE_URL]);

  return (
    <div className="container-fluid p-0">
      <Navbar />
      <FinanceMenu />

      <div className="row m-0">
        {/*reklamlar */}
        <div className="col-md-2 d-none d-md-block">
          <StickyAds />
        </div>

        <div className="col-md-7 slider-col">
          <SliderNews />
        </div>

        {/* Haber merkezi ve hava durumu */}
        <div className="col-md-3 d-flex flex-column gap-3 mt-4">
          <NewsPanelCard />
          <Weather data={weatherData} />
        </div>
      </div>
    </div>
  );
}

export default App;
