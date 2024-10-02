import React from 'react';
import '../styles/SecondPage.css';

const SecondPage = () => {
  return (
    <div className="second-page">
      {/* Category Row */}
      <div className="category-row">
        <div className="category active">All</div>
        <div className="category">Medical</div>
        <div className="category">Fruits</div>
        <div className="category">World</div>
        <div className="category">India</div>
      </div>

      {/* Top Stories Section */}
      <section className="stories-section">
        <h2>Top Stories About food</h2>
        <div className="stories-container">
          <div className="story-card">
            <img src="frontend\web-story-platform\src\assets\story.jpg" alt="Story" />
            <div className="story-content">
              <h3>Heading comes here</h3>
              <p>
                Impedit voluptas veniam. Nostrum sed est earum saepe iusto
                necessitatibus ex quibusdam.
              </p>
            </div>
          </div>
          <div className="story-card">
            <img src="frontend\web-story-platform\src\assets\story.jpg" alt="Story" />
            <div className="story-content">
              <h3>Heading comes here</h3>
              <p>
                Impedit voluptas veniam. Nostrum sed est earum saepe iusto
                necessitatibus ex quibusdam.
              </p>
            </div>
          </div>
          <div className="story-card">
            <img src="frontend\web-story-platform\src\assets\story.jpg" alt="Story" />
            <div className="story-content">
              <h3>Heading comes here</h3>
              <p>
                Impedit voluptas veniam. Nostrum sed est earum saepe iusto
                necessitatibus ex quibusdam.
              </p>
            </div>
          </div>
          <div className="story-card">
            <img src="frontend\web-story-platform\src\assets\story.jpg" alt="Story" />
            <div className="story-content">
              <h3>Heading comes here</h3>
              <p>
                Impedit voluptas veniam. Nostrum sed est earum saepe iusto
                necessitatibus ex quibusdam.
              </p>
            </div>
          </div>
        </div>
        <button className="see-more-btn">See more</button>
      </section>

      {/* Another Top Stories Section */}
      <section className="stories-section">
        <h2>Top Stories About food</h2>
        <div className="stories-container">
          <div className="story-card">
            <img src="frontend\web-story-platform\src\assets\story.jpg" alt="Story" />
            <div className="story-content">
              <h3>Heading comes here</h3>
              <p>
                Impedit voluptas veniam. Nostrum sed est earum saepe iusto
                necessitatibus ex quibusdam.
              </p>
            </div>
          </div>
          <div className="story-card">
            <img src="frontend\web-story-platform\src\assets\story.jpg" alt="Story" />
            <div className="story-content">
              <h3>Heading comes here</h3>
              <p>
                Impedit voluptas veniam. Nostrum sed est earum saepe iusto
                necessitatibus ex quibusdam.
              </p>
            </div>
          </div>
          <div className="story-card">
            <img src="frontend\web-story-platform\src\assets\story.jpg" alt="Story" />
            <div className="story-content">
              <h3>Heading comes here</h3>
              <p>
                Impedit voluptas veniam. Nostrum sed est earum saepe iusto
                necessitatibus ex quibusdam.
              </p>
            </div>
          </div>
          <div className="story-card">
            <img src="frontend\web-story-platform\src\assets\story.jpg" alt="Story" />
            <div className="story-content">
              <h3>Heading comes here</h3>
              <p>
                Impedit voluptas veniam. Nostrum sed est earum saepe iusto
                necessitatibus ex quibusdam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondPage;
