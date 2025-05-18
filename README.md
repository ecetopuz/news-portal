News Portal Project
Project Overview
This project is a news portal web application developed using React for the frontend. The backend is built with Node.js and the Express framework, using SQLite as the database.

Technologies Used
Frontend: React, Redux (for state management), Bootstrap, CSS

Backend: Node.js, Express.js

Database: SQLite (for persistent data storage)

Hosting: Render.com (free hosting with Node.js support)

Project Features
Sticky Ads: Two sticky ads appear on the left and right sides of the page. They can be closed by clicking the close button.
Sticky Responsive Menu: A top menu with static links, with two menu items having 3 submenus each. 
The Finance menu is fetched from the backend API.
News Slider: 10 news headlines are shown in a slider. Slider news data is retrieved from the backend API. Each news item links to its own page.
Weather Data: Shows 5-day weather data fetched from the backend API.
History: The last 10 news headlines visited by the user are stored and displayed using Redux.
Responsive Design: All pages are responsive and work on different devices.

Setup and Running
Backend
Navigate to the backend folder:
cd backend  

Install dependencies:
npm install  

Start the backend server:
npm start  

Frontend (news-portal)

Install dependencies:
npm install  

Start the React app:
npm start  

Notes
The backend API retrieves all data from the SQLite database; no in-memory data is used.

The Finance menu. Weather data and Slider news are dynamically fetched from the backend.

The project is deployed on Render.com.

Ads can be easily closed to improve user experience.


Live Site
https://news-frontend-z9qr.onrender.com/

GitHub Repository
https://github.com/ecetopuz/news-portal



