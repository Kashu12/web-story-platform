import React, { useState } from 'react';

const AddStoryForm = () => {
  const [slides, setSlides] = useState([
    { heading: '', description: '', image: '', category: '' },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add new slide
  const addSlide = () => {
    if (slides.length < 6) {
      setSlides([...slides, { heading: '', description: '', image: '', category: '' }]);
    } else {
      alert('You can only add up to 6 slides');
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

  // Submit story
  const submitStory = async () => {
    try {
      const formData = new FormData();
      slides.forEach((slide, index) => {
        formData.append(`slides[${index}][heading]`, slide.heading);
        formData.append(`slides[${index}][description]`, slide.description);
        formData.append(`slides[${index}][category]`, slide.category);
        formData.append(`slides[${index}][image]`, slide.image);
      });
      await StoryService.postStory(formData);
      alert('Story posted successfully');
    } catch (error) {
      console.error('Error posting story', error);
    }
  };

  return (
    <div className="add-story-form">
      <h2>Slide {currentSlide + 1}</h2>
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
        {currentSlide === slides.length - 1 && slides.length < 6 && (
          <button onClick={addSlide}>Add Slide</button>
        )}
        <button onClick={() => goToSlide(currentSlide + 1)} disabled={currentSlide === slides.length - 1}>
          Next
        </button>
        {currentSlide === slides.length - 1 && (
          <button onClick={submitStory}>Post</button>
        )}
      </div>
    </div>
  );
};

export default AddStoryForm;
