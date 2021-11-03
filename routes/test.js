import express from 'express';
const router = express.Router();

//Controllers
import tester from '../controllers/testController.js';


router.get('/', tester.test);
router.get('/1', tester.testid)


export default router;