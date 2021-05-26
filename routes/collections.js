const express = require('express');
const products = require('../static/data/products.json');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('collections', { products });
});

router.get('/:name', (req, res) => {
  const product = products.find(
    (prod) =>
      prod.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-') === req.params.name
  );
  if (product == null) res.redirect('/');
  console.log(product);
  res.render('product', { product });
});

module.exports = router;
