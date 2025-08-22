const progressService = require('../services/progressService');

const updateProgress = async (req, res) => {
  try {
    // Assuming user_id will come from auth middleware in a real app
    // For now, we'll pass it in the body.
    const progress = await progressService.updateProgress(req.body);
    res.status(200).json(progress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProgressForUser = async (req, res) => {
  try {
    // Assuming user_id comes from URL params
    const progress = await progressService.getProgressForUser(req.params.userId);
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    updateProgress,
    getProgressForUser,
};