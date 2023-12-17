import express from 'express';
import controller from '../controllers/accounts-controller.js';

const router = express.Router();

router.get('/', controller.get);
router.get('/:email/:password', controller.getByEmailAndPassword);

router.post('/', controller.post);

router.put('/:email/:password', controller.put);
router.put('/flightCart/:email/:password', controller.addFlightToCart);
router.put('/stayCart/:email/:password', controller.addStayToCart);

router.delete('/:email/:password', controller.delete);

export default router;
