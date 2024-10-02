import React from 'react';
import Bookmark from '../pages/Bookmark';

const StoryCard = ({ story }) => {
  return (
    <div className="story-card">
      <img src={story.image} alt={story.heading} />
      <h3>{story.heading}</h3>
      <p>{story.description}</p>
      <Bookmark storyId={story._id} initialIsBookmarked={story.isBookmarked} />
    </div>
  );
};

export default StoryCard;
