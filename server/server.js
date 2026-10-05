import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import catalogRoutes from './routes/catalogRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import ordersRoutes from './routes/ordersRoutes.js';

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['POST', 'GET'],
  credentials: true,
}));
app.use(cookieParser());

app.use(catalogRoutes);
app.use(productsRoutes);
app.use(authRoutes);
app.use(cartRoutes);
app.use(ordersRoutes);

app.listen(4000, () => {
  console.log('Server listening on port 4000!');
});
