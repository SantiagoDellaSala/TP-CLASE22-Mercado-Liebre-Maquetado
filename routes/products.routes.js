const express = require('express');
const { products } = require('../controllers/productController');
const router = express.Router();

//Todos los productos
router.get('/products', products);

//Detalle del producto
router.get('/products/:id');

//Crear
router.get('/products/create');
router.post('/products/create/')

//Editar
router.get('/products/edit/:id');
router.put('/products/update/:id');

//Borrar
router.delete('/products/delete:id');