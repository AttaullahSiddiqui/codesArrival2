const express = require('express');
const router = express.Router();
let apiCtrl = require('../api/api.ctrl');
let fetchCtrl = require('../api/fetch.ctrl');
let dltCtrl = require('../api/delete.ctrl');
let putCtrl = require('../api/put.ctrl');
let sortCtrl = require('../api/sort.ctrl');

router.post('/login', apiCtrl.authUser);
router.post('/verifyUserToken', apiCtrl.verifyUserToken);
// router.post('/register', apiCtrl.registerUser);


router.get('/countCoupons', sortCtrl.countCoupons);
router.get('/countBlogs', sortCtrl.countBlogs);
router.get('/countStores', sortCtrl.countStores);
router.get('/countUsers', sortCtrl.countUsers);


router.post('/createCategory', apiCtrl.createCategory);
router.post('/addStore', apiCtrl.addStore);
router.post('/addCoupon', apiCtrl.addCoupon);
router.post('/addDeal', apiCtrl.addDeal);
router.post('/addBlog', apiCtrl.addBlog);
router.post('/addSlide', apiCtrl.addSlide);


router.get('/fetchUsers', fetchCtrl.fetchUsers);
router.get('/fetchCategories', fetchCtrl.fetchCategories);
router.get('/fetchBlogs', fetchCtrl.fetchBlogs);
router.get('/fetchStoresOnlyId', fetchCtrl.fetchStoresOnlyId);
router.get('/fetchStoreById', fetchCtrl.fetchStoreById);
router.get('/fetchStoresWithLimit', fetchCtrl.fetchStoresWithLimit);
router.get('/fetchCouponsById', fetchCtrl.fetchCouponsById);


router.post('/editUser', putCtrl.editUser);
router.post('/editCategory', putCtrl.editCategory);
router.post('/editStore', putCtrl.editStore);
router.post('/editCoupon', putCtrl.editCoupon);
router.post('/editBlog', putCtrl.editBlog);


router.post('/deleteCategory', dltCtrl.deleteCategory);
router.post('/deleteStore', dltCtrl.deleteStore);
router.post('/deleteCoupon', dltCtrl.deleteCoupon);
router.post('/deleteBlog', dltCtrl.deleteBlog);



router.post('/sortCoupons', sortCtrl.sortCoupons);


module.exports = router;