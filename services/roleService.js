const Role = require('../models/role');

/**
 * Create a new role
 * @param {object} roleData
 * @returns {Promise<Role>}
 */
const createRole = async (roleData) => {
  return await Role.create(roleData);
};

/**
 * Get all roles
 * @returns {Promise<Role[]>}
 */
const getRoles = async () => {
  return await Role.find({});
};

/**
 * Get a single role by its ID
 * @param {string} id
 * @returns {Promise<Role>}
 */
const getRoleById = async (id) => {
  return await Role.findById(id);
};

/**
 * Update a role by its ID
 * @param {string} id
 * @param {object} roleData
 * @returns {Promise<Role>}
 */
const updateRole = async (id, roleData) => {
  return await Role.findByIdAndUpdate(id, roleData, { new: true });
};

/**
 * Delete a role by its ID
 * @param {string} id
 * @returns {Promise<Role>}
 */
const deleteRole = async (id) => {
  return await Role.findByIdAndDelete(id);
};

module.exports = {
  createRole,
  getRoles,
  getRoleById,
  updateRole,
  deleteRole,
};