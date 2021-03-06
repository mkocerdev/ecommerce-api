const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');
const CategoryController = require('../controller/CategoryController');
const BrandController = require('../controller/BrandController');
const auth = require('../middlewares/verifyToken');

router.route('/product/all').post(auth, ProductController.All);
router.route('/product/:id').get(auth, ProductController.Product);
router
  .route('/product/:id/description')
  .get(auth, ProductController.ProductDescription);
router.route('/product/:id/images').get(auth, ProductController.ProductImages);
router
  .route('/product/:id/categories')
  .get(auth, ProductController.ProductCategories);

router.route('/categories/all').get(auth, CategoryController.All);
router.route('/brands/all').get(auth, BrandController.All);

module.exports = router;
