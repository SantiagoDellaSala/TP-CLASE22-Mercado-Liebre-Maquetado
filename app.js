const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const methodOverride = require('method-override');
const indexRouter = require('./routes/index.router');

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.get('/', indexRouter);
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'views', 'notFound.html')));

app.listen(PORT, () => console.log(`Server running in: http://localhost:${PORT}`));