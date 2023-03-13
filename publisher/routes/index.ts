import express from 'express';
import { createSubscription, publish } from '../controller';

const router = express.Router();

router.post('/subscriber/:topic', createSubscription);
router.post('/publish/:topic', publish);

export default router;
