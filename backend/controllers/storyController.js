const Story = require('../models/Story');

exports.getUserStories = async (req, res) => {
  const stories = await Story.find({ userId: req.user.id });
  res.json(stories);
};

// Add a new story
exports.addStory = async (req, res) => {
  const { title, slides } = req.body;

  try {
    const story = new Story({
      user: req.user.id,
      title,
      slides,
    });
    await story.save();
    res.status(201).json({ message: 'Story added successfully', story });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all stories
exports.getAllStories = async (req, res) => {
  try {
    const stories = await Story.find().populate('user', 'username').sort({ createdAt: -1 });
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific story
exports.getStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id).populate('user', 'username');
    if (!story) return res.status(404).json({ message: 'Story not found' });
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Edit a story
exports.editStory = async (req, res) => {
  const { title, slides } = req.body;

  try {
    const story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ message: 'Story not found' });

    if (story.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    story.title = title;
    story.slides = slides;
    await story.save();
    res.status(200).json({ message: 'Story updated successfully', story });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Like a story
exports.likeStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ message: 'Story not found' });

    if (!story.likes.includes(req.user.id)) {
      story.likes.push(req.user.id);
    } else {
      story.likes.pull(req.user.id);
    }

    await story.save();
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Bookmark a story
exports.bookmarkStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ message: 'Story not found' });

    if (!story.bookmarks.includes(req.user.id)) {
      story.bookmarks.push(req.user.id);
    } else {
      story.bookmarks.pull(req.user.id);
    }

    await story.save();
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
