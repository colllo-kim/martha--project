import {Router} from 'express'
import { saveUser,getStatistics,getAnalyticsData , addBlog, getBlog, getBlogs, updateBlog, deleteBlog} from '../controllers/blogController.js'
import { auth } from '../middleWare/auth.js';
import upload from '../middleWare/upload.js';
const router = Router();


router.post('/add',  upload.single('image'), addBlog);
router.post('/save-user', saveUser);
router.get('/stats',  getStatistics);
router.get("/analytics", getAnalyticsData);
router.get('/id/:blogId', getBlog);
router.get('/blog-items', getBlogs);
router.patch('/:blogId',upload.single('image'), updateBlog);
router.delete('/:blogId', deleteBlog);

export default router;