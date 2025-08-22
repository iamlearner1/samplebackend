const mongoose = require('mongoose');

const courseChapterSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  resource_link: {
    type: String,
    required: true,
  },
  resource_name: {
    type: String,
    required: true,
  },
  chapter_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const CourseChapter = mongoose.model('CourseChapter', courseChapterSchema);

module.exports = CourseChapter;