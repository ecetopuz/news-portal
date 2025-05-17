import React, { useEffect, useState } from 'react';
import './SliderNews.css';
import { useDispatch } from 'react-redux';
import { addVisitedNews } from '../redux/visitedNewsSlice';  

const SliderNews = () => {
  const [sliderNews, setSliderNews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
const BASE_URL = process.env.REACT_APP_API_URL;

useEffect(() => {
  fetch(`${BASE_URL}/api/slider-news`)
    .then(res => res.json())
    .then(data => setSliderNews(data.data));
}, [BASE_URL]);

  useEffect(() => {
    const carousel = document.getElementById('newsCarousel');
    if (!carousel) return;

    const handleSlide = (e) => {
      const nextIndex = parseInt(e.relatedTarget?.getAttribute('data-index')) || 0;
      setActiveIndex(nextIndex);
    };

    carousel.addEventListener('slid.bs.carousel', handleSlide);
    return () => carousel.removeEventListener('slid.bs.carousel', handleSlide);
  }, []);

  
  const handleNewsClick = (news) => {
    dispatch(addVisitedNews(news));
  };

  return (
    <div className="slider-wrapper mt-4">
      <div id="newsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {sliderNews.map((news, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={news.id}
              data-index={index}
            >
              <a
                href={news.news_url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={() => handleNewsClick(news)} 
              >
                <img
                  src={news.image}
                  className="d-block w-100"
                  alt={news.title}
                />
                <div className="carousel-caption d-block">
                  <h5>{news.title}</h5>
                  <p>{news.content || 'Açıklama bulunamadı.'}</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {sliderNews.length > 0 && (
          <div className="slide-indicator">
            {activeIndex + 1} / {sliderNews.length}
          </div>
        )}

        <button className="carousel-control-prev" type="button" data-bs-target="#newsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Önceki</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#newsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Sonraki</span>
        </button>
      </div>
    </div>
  );
};

export default SliderNews;
