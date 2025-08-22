const Progress = require('../models/progress');

const updateProgress = async (progressData) => {
    const { user_id, course_chapter_id, status } = progressData;
    // Find and update progress, or create it if it doesn't exist
    return await Progress.findOneAndUpdate(
        { user_id, course_chapter_id },
        { status },
        { new: true, upsert: true }
    );
};

const getProgressForUser = async (userId) => {
  return await Progress.find({ user_id: userId }).populate('course_chapter_id');
};

module.exports = {
    updateProgress,
    getProgressForUser,
};