const enrolledCourseService = require('../services/enrolledCourseService');

const enrollInCourse = async (req, res) => {
  try {
    // Assuming user_id will come from auth middleware in a real app
    // For now, we'll pass it in the body.
    const enrollment = await enrolledCourseService.enrollInCourse(req.body);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getEnrolledCoursesByUserId = async (req, res) => {
  try {
    const enrolledCourses = await enrolledCourseService.getEnrolledCoursesByUserId(req.params.userId);
    res.status(200).json(enrolledCourses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  enrollInCourse,
  getEnrolledCoursesByUserId,
};