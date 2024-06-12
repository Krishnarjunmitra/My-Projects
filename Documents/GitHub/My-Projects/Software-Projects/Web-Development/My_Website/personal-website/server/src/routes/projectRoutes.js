const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/projects', projectController.createProject);
router.get('/projects', projectController.getProjects);
router.get('/projects/:projectId', projectController.getProject);
router.put('/projects/:projectId', projectController.updateProject);
router.delete('/projects/:projectId', projectController.deleteProject);

module.exports = router;