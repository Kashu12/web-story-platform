import React, { useState, useEffect } from 'react';
import BookmarkService from '../services/BookmarkService';

const Bookmark = ({ storyId, initialIsBookmarked }) => {
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);

  const handleBookmark = async () => {
    if (isBookmarked) {
      // Unbookmark the story
      await BookmarkService.removeBookmark(storyId);
      setIsBookmarked(false);
    } else {
      // Bookmark the story
      await BookmarkService.addBookmark(storyId);
      setIsBookmarked(true);
    }
  };

  return (
    <button onClick={handleBookmark} className="bookmark-button">
      {isBookmarked ? 'Unbookmark' : 'Bookmark'}
    </button>
  );
};

export default Bookmark;
