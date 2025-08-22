const Course = require('../models/course');

const createCourse = async (courseData) => {
  return await Course.create(courseData);
};

const getCourses = async () => {
  return await Course.find({ isDeleted: false });
};

const getCourseById = async (id) => {
  return await Course.findById(id);
};

const updateCourse = async (id, courseData) => {
  return await Course.findByIdAndUpdate(id, courseData, { new: true });
};

const deleteCourse = async (id) => {
  return await Course.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};