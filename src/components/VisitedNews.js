import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisitedNews } from '../redux/visitedNewsSlice';  

const VisitedNews = () => {
  const visitedNews = useSelector(selectVisitedNews);

  
  const lastTenNews = visitedNews.slice(-10);

  return (
    <div>
      <ul>
        {lastTenNews.length === 0 && <li>Henüz ziyaret edilen haber yok.</li>}
        {lastTenNews.map((news, index) => (
          <li key={index}>{news.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default VisitedNews;
