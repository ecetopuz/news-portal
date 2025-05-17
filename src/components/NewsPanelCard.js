import React, { useState } from 'react';
import VisitedNews from './VisitedNews';

function NewsPanelCard() {
  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => {
    setShowHistory(prev => !prev);
  };

  return (
    <div className="news-panel-card card mb-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0 fs-6 fs-md-5">Haber Merkezi</h5>
        <button className="btn btn-outline-secondary btn-sm" onClick={toggleHistory}>
          {showHistory ? 'Kapat' : 'Geçmiş'}
        </button>
      </div>
      <div className="card-body">
        {/*güncel haberler*/}
        <h6 className="mb-0 fs-6 fs-md-5">Son Dakika Gündem Başlıkları</h6>
        <p> 🌧️ Meteoroloji'den Kuvvetli Yağış Uyarısı: İstanbul ve 17 İl İçin Alarm</p>
        <p>⚠️ Gaziantep'te Buhar Kazanı Patladı: 7 Yaralı</p>
        <p>⚠️ Bursa'da Berber Dükkanında Silahlı Saldırı: 1 Ölü</p>
        {showHistory && (
          <div className="mt-3">
            <h6>Ziyaret Edilen Haberler</h6>
            <VisitedNews embedded={true} />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsPanelCard;
