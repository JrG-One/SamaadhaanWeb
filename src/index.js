import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar.jsx';
import Ad from './Components/Ad/Ad.jsx'
import FoodCategories from './Components/FoodCategories/FoodCategories.jsx';
import CourseListing from './Components/CourseListing/CourseListing.jsx';
import VideoPage from './Components/VideoPage/VideoPage.jsx';
import VideoListing from './Components/VideoListing/VideoListing.jsx'
import Footer from './Components/Footer/Footer.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Ad/>
              <FoodCategories />
              <VideoListing />
              <CourseListing />
              <Footer/>
            </>
          }
        />
        <Route
          path="/video-page"
          element={
            <>
              <Navbar />
              <VideoPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
