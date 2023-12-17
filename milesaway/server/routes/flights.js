import express from 'express';
import controller from '../controllers/flights-controller.js';

const router = express.Router();

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);

router.post('/', controller.post);

router.put('/:slug', controller.put);

router.delete('/:slug', controller.delete);

export default router;
