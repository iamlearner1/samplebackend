const User = require('../models/user');

const createUser = async (userData) => {
  return await User.create(userData);
};

const getUsers = async () => {
  return await User.find({}).select('-password'); // Exclude password from result
};

const getUserById = async (id) => {
  return await User.findById(id).select('-password');
};

const updateUser = async (id, userData) => {
  // If password is being updated, it will be hashed by the 'pre-save' hook in the model
  const user = await User.findById(id);
  if (!user) {
      return null;
  }
  Object.assign(user, userData);
  await user.save();
  // We need to manually exclude the password after the update
  const updatedUser = user.toObject();
  delete updatedUser.password;
  return updatedUser;
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

const getUserByEmail = async (email) => {
    return await User.findOne({ email });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail,
};