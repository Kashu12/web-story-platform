// to store the story details in MongoDB database
const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  slides: [
    {
      url: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
    },
  ],
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  bookmarks: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
}, { timestamps: true });

module.exports = mongoose.model('Story', StorySchema);
