import { useEffect, useState } from 'react';
import axios from '../services/api';

const UserStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    axios.get('/stories/user', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setStories(response.data);  // Set the stories in state
    })
    .catch(error => {
      console.error("Error fetching stories", error);
    });
  }, []);

  return (
    <div>
      <h2>Your Stories</h2>
      <div className="stories-grid">
        {stories.map(story => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt="Story" />
            <h3>{story.title}</h3>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserStories;
