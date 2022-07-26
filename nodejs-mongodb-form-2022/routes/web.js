import express from 'express'
const router = express.Router();
import homeController from '../controller/homeController.js';



router.get('/',homeController.getAllDoc);
router.post('/',homeController.createDoc);
router.get('/edit/:id',homeController.editDoc)
router.post('/update/:id',homeController.updateDocById);
router.post('/delete/:id',homeController.deleteDocById);



export default router;