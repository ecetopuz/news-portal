import React, { useEffect, useState } from 'react';
import './FinanceMenu.css';

const FinanceMenu = () => {
  const [financeItems, setFinanceItems] = useState([]);

  const BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/api/finance-menu`)
      .then(res => res.json())
      .then(data => setFinanceItems(data.data))  // burayı düzelttim
      .catch(err => console.error('Finance data error:', err));
  }, [BASE_URL]);

  return (
    <div className="finance-bar">
      {financeItems.map((item) => (
        <div className="finance-item" key={item.id}>
          <div className="label">{item.main_menu}</div>
          <div className="value">{item.main_menu_1}</div>
          <div
            className={`change ${item.sub_menu_1?.includes('-') ? 'down' : 'up'}`}
          >
            {item.sub_menu_1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinanceMenu;
