import express from 'express';
import { getPublishedMessages } from '../controller/index';

const router = express.Router();

router.post('/:url', getPublishedMessages);

export default router;
