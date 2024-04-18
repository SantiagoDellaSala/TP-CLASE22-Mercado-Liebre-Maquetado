const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/products', (req, res) => res.sendFile(path.join(__dirname, 'views', 'products.html')));
app.get('/users', (req, res) => res.sendFile(path.join(__dirname, 'views', 'users.html')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'views', 'notFound.html')));

app.listen(PORT, () => console.log(`Server running in: http://localhost:${PORT}`));