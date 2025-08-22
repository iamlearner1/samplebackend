const CourseChapter = require('../models/courseChapter');

const createChapter = async (chapterData) => {
  return await CourseChapter.create(chapterData);
};

const getChaptersByCourseId = async (courseId) => {
  return await CourseChapter.find({ course_id: courseId });
};

const getChapterById = async (id) => {
  return await CourseChapter.findById(id);
};

const updateChapter = async (id, chapterData) => {
  return await CourseChapter.findByIdAndUpdate(id, chapterData, { new: true });
};

const deleteChapter = async (id) => {
  return await CourseChapter.findByIdAndDelete(id);
};

module.exports = {
  createChapter,
  getChaptersByCourseId,
  getChapterById,
  updateChapter,
  deleteChapter,
};