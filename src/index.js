import React from 'react';
import ReactDOM from 'react-dom';
import FoodCategories from './Components/FoodCategories/FoodCategories.jsx';
import CourseListing from './Components/CourseListing/CourseListing.jsx';


ReactDOM.render(
  <React.StrictMode>
    <FoodCategories />
    <CourseListing />
    {/* <Footer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);