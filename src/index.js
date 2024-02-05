import React from 'react';
import ReactDOM from 'react-dom';
import FoodCategories from './Components/FoodCategories/FoodCategories.jsx';
import CourseListing from './Components/CourseListing/CourseListing.jsx';
// import Footer from './Components/Footer/Footer.jsx';
import VideoPage from './Components/VideoPage/VideoPage.jsx';


ReactDOM.render(
  <React.StrictMode>
    <FoodCategories />
    <CourseListing />
    {/* <Footer /> */}
    <VideoPage/>
  </React.StrictMode>,
  document.getElementById('root')
);