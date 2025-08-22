const EnrolledCourse = require('../models/enrolledCourse');

const enrollInCourse = async (enrollmentData) => {
    // Check if already enrolled to prevent duplicates
    const existingEnrollment = await EnrolledCourse.findOne(enrollmentData);
    if (existingEnrollment) {
        throw new Error('User is already enrolled in this course');
    }
  return await EnrolledCourse.create(enrollmentData);
};

const getEnrolledCoursesByUserId = async (userId) => {
  return await EnrolledCourse.find({ user_id: userId }).populate('course_id');
};

module.exports = {
  enrollInCourse,
  getEnrolledCoursesByUserId,
};