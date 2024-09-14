import { Router } from 'express';
import { readProducts } from '../utils.js';
const router = Router();

// Listar productos de un carrito por ID
router.get('/', (req, res) => {
  const productos = readProducts();
  res.render("home", {productos});
});

// Listar productos de un carrito por ID
router.get('/realtimeproducts', (req, res) => {
  const productos = readProducts();
  res.render("home", {productos});
});

export default router;
