const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/', (req, res, next) => {
  res.render('index.pug');
});

// /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   products.push({ title: req.body.title });
//   res.redirect('/');
// });

exports.routes = router;
