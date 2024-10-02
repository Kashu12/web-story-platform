const express = require('express');
const {
  addStory,
  getAllStories,
  getStory,
  editStory,
  likeStory,
  bookmarkStory,
} = require('../controllers/storyController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();
const Story = require('../models/Story');
const { getUserStories } = require('../controllers/storyController');

exports.getUserStories = async (req, res) => {
  const stories = await Story.find({ userId: req.user.id });
  res.json(stories);
};

router.get('/user', protect, getUserStories);
router.post('/', protect, addStory);
router.get('/', getAllStories);
router.get('/:id', getStory);
router.put('/:id', protect, editStory);
router.post('/:id/like', protect, likeStory);
router.post('/:id/bookmark', protect, bookmarkStory);

module.exports = router;
