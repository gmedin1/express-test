const express = require('express');
const app = express();
const path = require('path');
const usage = require('./static/data/usage.json');
const projects = require('./static/data/projects.json');
const product_router = require('./routes/collections');
const PORT = 3000;

// Config
app.set('view engine', 'ejs');

// Methods
app.get('/', (req, res) => {
  res.render('index', { usage, projects });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.use('/products', product_router);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));

// Listen
app.listen(process.env.PORT || PORT, () => {
  console.log('Server running on port ' + PORT);
});
