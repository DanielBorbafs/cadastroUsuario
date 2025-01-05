import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();

const prisma = new PrismaClient();
router.get('/usuarios', async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

export default router;
