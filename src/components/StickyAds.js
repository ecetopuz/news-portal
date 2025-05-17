import React, { useState } from 'react';
import './StickyAds.css';

const StickyAds = () => {
  const [showLeftAd, setShowLeftAd] = useState(true);
  const [showRightAd, setShowRightAd] = useState(true);

  return (
    <>
      {showLeftAd && (
        <div className="sticky-ad left-ad">
          <button className="close-btn" onClick={() => setShowLeftAd(false)}>×</button>
          <a href="https://www.magnumicecream.com/tr/home.html" target="_blank" rel="noopener noreferrer">
            <img src="/images/ads/mgnm1.jpg" alt="Sol Reklam" />
          </a>
        </div>
      )}

      {showRightAd && (
        <div className="sticky-ad right-ad">
          <button className="close-btn" onClick={() => setShowRightAd(false)}>×</button>
          <a href="https://www.magnumicecream.com/tr/home.html" target="_blank" rel="noopener noreferrer">
            <img src="/images/ads/mgnm2.jpg" alt="Sağ Reklam" />
          </a>
        </div>
      )}
    </>
  );
};

export default StickyAds;
