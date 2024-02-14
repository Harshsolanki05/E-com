var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller');
var product = require('../controller/productcontroller');
var category = require('../controller/categorycontroller')


// =============== User's-Api ===============

router.get('/user-data',user.getdata); // user-data
router.post('/user-insert',user.insert); // user-insert    

// =============== Category's-Api ===============

router.get('/category-view',category.getdata); // category-view
router.post('/category-insert',category.insert); // category-insert

// =============== Product's-Api ===============

router.get('/product-list/:id',product.product_list); // product-list/  
router.get('/product-data',product.getproduct); // product-data  
router.post('/product-insert',product.insert); // product-insert
router.get('/single-product-show/:id',product.sin_p); // single-product-show/  

module.exports = router;