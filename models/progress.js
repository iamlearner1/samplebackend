const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  course_chapter_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseChapter',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;