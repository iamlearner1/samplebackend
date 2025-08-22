const axios = require('axios');

const baseURL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' }
});

// A simple logger to make output clear
const log = (message, data = '') => {
  console.log(`\n--- ${message} ---`);
  if (data) {
    console.log(data);
  }
};

async function runTestFlow() {
  try {
    // Step 1: Setup
    log('Creating admin role...');
    const adminRoleRes = await api.post('/roles', { name: 'admin_script' });
    const adminRoleId = adminRoleRes.data._id;
    log('Admin role created', adminRoleId);

    log('Creating user role...');
    const userRoleRes = await api.post('/roles', { name: 'user_script' });
    const userRoleId = userRoleRes.data._id;
    log('User role created', userRoleId);

    // Step 2: Register User
    log('Registering student user...');
    await api.post('/users/register', {
      email: `student-${Date.now()}@example.com`,
      password: 'password123',
      roleId: userRoleId,
    });
    // In a real scenario, you'd log in. Here we'll just fetch the user.
    const usersRes = await api.get('/users');
    const student = usersRes.data.find(u => u.roleId === userRoleId);
    if (!student) throw new Error('Student user not found!');
    const studentUserId = student._id;
    log('Student user found', studentUserId);

    // Step 3: Create Content
    log('Creating category...');
    const categoryRes = await api.post('/categories', { name: 'Scripting Category' });
    const categoryId = categoryRes.data._id;
    log('Category created', categoryId);
    
    log('Creating course...');
    const courseRes = await api.post('/courses', {
      name: 'Course by Script',
      description: 'A test course.',
      categoryId: categoryId,
      price: 10
    });
    const courseId = courseRes.data._id;
    log('Course created', courseId);
    
    log('Creating chapter...');
    const chapterRes = await api.post('/chapters', {
      course_id: courseId,
      chapter_name: 'Intro Chapter',
      description: 'First chapter.',
      resource_name: 'video.mp4',
      resource_link: 'http://example.com'
    });
    const chapterId = chapterRes.data._id;
    log('Chapter created', chapterId);

    // Step 4: Student Actions
    log('Enrolling student in course...');
    await api.post('/enrollments', { user_id: studentUserId, course_id: courseId });
    log('Student enrolled.');
    
    log('Updating progress...');
    const progressRes = await api.post('/progress', {
      user_id: studentUserId,
      course_chapter_id: chapterId,
      status: 'completed'
    });
    log('Progress updated', progressRes.data);

    // Step 5: Verification
    log('Fetching student progress to verify...');
    const finalProgress = await api.get(`/users/${studentUserId}/progress`);
    log('Verification successful!', finalProgress.data);
    
    console.log("\n✅ ENTIRE API FLOW COMPLETED SUCCESSFULLY!");

  } catch (error) {
    console.error("\n❌ API FLOW FAILED!");
    // Log more detailed error from axios
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
}

runTestFlow();