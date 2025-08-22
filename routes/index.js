const express = require('express');
const router = express.Router();

const roleController = require('../controllers/roleController');
const categoryController = require('../controllers/categoryController');
const courseController = require('../controllers/courseController');
const courseChapterController = require('../controllers/courseChapterController');
const progressController = require('../controllers/progressController');
const enrolledCourseController = require('../controllers/enrolledCourseController');
const userController = require('../controllers/userController');

// Role Routes
router.post('/roles', roleController.createRole);
router.get('/roles', roleController.getRoles);
router.get('/roles/:id', roleController.getRoleById);
router.put('/roles/:id', roleController.updateRole);
router.delete('/roles/:id', roleController.deleteRole);

// Category Routes
router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getCategories);
router.get('/categories/:id', categoryController.getCategoryById);
router.put('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);

// Course Routes
router.post('/courses', courseController.createCourse);
router.get('/courses', courseController.getCourses);
router.get('/courses/:id', courseController.getCourseById);
router.put('/courses/:id', courseController.updateCourse);
router.delete('/courses/:id', courseController.deleteCourse);

// Course Chapter Routes
router.post('/chapters', courseChapterController.createChapter);
router.get('/courses/:courseId/chapters', courseChapterController.getChaptersByCourseId);
router.get('/chapters/:id', courseChapterController.getChapterById);
router.put('/chapters/:id', courseChapterController.updateChapter);
router.delete('/chapters/:id', courseChapterController.deleteChapter);

// Progress Routes
router.post('/progress', progressController.updateProgress); // Create or update
router.get('/users/:userId/progress', progressController.getProgressForUser);

// Enrolled Course Routes
router.post('/enrollments', enrolledCourseController.enrollInCourse);
router.get('/users/:userId/enrollments', enrolledCourseController.getEnrolledCoursesByUserId);

// User Routes
router.post('/users/register', userController.createUser); // Typically a register route
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);


module.exports = router;