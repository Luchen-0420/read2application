import express from 'express';
import cors from 'cors';
import { PrismaClient } from './generated/client';

export const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

import apiRoutes from './routes';

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
