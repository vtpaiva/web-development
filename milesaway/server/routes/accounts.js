import express from 'express';
import controller from '../controllers/accounts-controller.js';

const router = express.Router();

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:slug', controller.delete);

export default router;
