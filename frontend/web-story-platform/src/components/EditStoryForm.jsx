import React, { useState, useEffect } from 'react';
import StoryService from '../services/StoryService'; // Service to handle API calls
import { useParams, useHistory } from 'react-router-dom'; // Assuming React Router is used

const EditStoryForm = () => {
  const { storyId } = useParams(); // Story ID from the URL
  const history = useHistory(); // To navigate after editing is successful
  const [slides, setSlides] = useState([
    { heading: '', description: '', image: '', category: '' },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStoryData(); // Fetch existing story data when component mounts
  }, []);

  // Fetch story data by ID to prefill the form
  const fetchStoryData = async () => {
    try {
      const response = await StoryService.getStory(storyId);
      setSlides(response.data.slides); // Prefill slides data from the server
      setLoading(false); // Stop the loading spinner
    } catch (error) {
      console.error('Error fetching story', error);
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newSlides = [...slides];
    newSlides[index][name] = value;
    setSlides(newSlides);
  };

  // Handle image change
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    const newSlides = [...slides];
    newSlides[index].image = file;
    setSlides(newSlides);
  };

  // Navigate between slides
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Submit the updated story
  const updateStory = async () => {
    try {
      const formData = new FormData();
      slides.forEach((slide, index) => {
        formData.append(`slides[${index}][heading]`, slide.heading);
        formData.append(`slides[${index}][description]`, slide.description);
        formData.append(`slides[${index}][category]`, slide.category);
        if (slide.image instanceof File) {
          formData.append(`slides[${index}][image]`, slide.image);
        }
      });

      await StoryService.updateStory(storyId, formData);
      alert('Story updated successfully');
      history.push('/your-stories'); // Navigate to another page after success
    } catch (error) {
      console.error('Error updating story', error);
    }
  };

  // Render the form
  if (loading) {
    return <div>Loading...</div>; // Show loading spinner while fetching data
  }

  return (
    <div className="edit-story-form">
      <h2>Edit Slide {currentSlide + 1}</h2>
      <div>
        <label>Heading</label>
        <input
          type="text"
          name="heading"
          value={slides[currentSlide].heading}
          onChange={(e) => handleInputChange(e, currentSlide)}
          placeholder="Your heading"
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={slides[currentSlide].description}
          onChange={(e) => handleInputChange(e, currentSlide)}
          placeholder="Story Description"
        />
      </div>
      <div>
        <label>Image</label>
        <input
          type="file"
          onChange={(e) => handleImageChange(e, currentSlide)}
          accept="image/*"
        />
        {/* Show existing image */}
        {typeof slides[currentSlide].image === 'string' && (
          <img src={slides[currentSlide].image} alt="Current slide" width="100" />
        )}
      </div>
      <div>
        <label>Category</label>
        <select
          name="category"
          value={slides[currentSlide].category}
          onChange={(e) => handleInputChange(e, currentSlide)}
        >
          <option value="">Select category</option>
          <option value="food">Food</option>
          <option value="health">Health</option>
          <option value="travel">Travel</option>
          <option value="movie">Movie</option>
          <option value="education">Education</option>
        </select>
      </div>
      <div>
        <button onClick={() => goToSlide(currentSlide - 1)} disabled={currentSlide === 0}>
          Previous
        </button>
        <button onClick={() => goToSlide(currentSlide + 1)} disabled={currentSlide === slides.length - 1}>
          Next
        </button>
        {currentSlide === slides.length - 1 && (
          <button onClick={updateStory}>Update Story</button>
        )}
      </div>
    </div>
  );
};

export default EditStoryForm;
