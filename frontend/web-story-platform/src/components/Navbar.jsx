import React from 'react';
import '../styles/Navbar.css';
import Register from '../pages/Register';
import Login from '../pages/Login';
import '../styles/Register.css';  

const categories = [
  { name: 'All', image: 'frontend\web-story-platform\src\assets\news.jpg' },
  { name: 'Medical', image: 'frontend\web-story-platform\src\assets\medical.jpg' },
  { name: 'Fruits', image: 'frontend\web-story-platform\src\assets\fruits.jpg' },
  { name: 'World', image: 'frontend\web-story-platform\src\assets\world.jpg' },
  { name: 'India', image: 'frontend\web-story-platform\src\assets\india.jpg' },
];

const Navbar = () => {

  return (
    <div className="navbar">
      {/* Header with Register and Sign In buttons */}
      <header className="header">
        <button className="register-btn">Register Now</button>
        <button className="signin-btn">Sign In</button>
      </header>

      {/* Category Scroll Section */}
      <div className="categories">
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <img src={category.image} alt={category.name} className="category-img" />
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      {/* Story Sections */}
      <section className="story-section">
        <h2>Top Stories About Food</h2>
        <div className="stories-placeholder">No stories available</div>
      </section>

      <section className="story-section">
        <h2>Top Stories About Medical</h2>
        <div className="stories-placeholder">No stories available</div>
      </section>

    </div>
  );
};

export default Navbar;
