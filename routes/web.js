const express = require('express')
const UserController = require('../controllers/UserController')
const CategoryController = require('../controllers/CategoryController')
const ProductController = require('../controllers/ProductController')
const router = express.Router()

//usercontroller
router.get('/getalluser',UserController.getalluser)
router.post('/userinsert',UserController.userinsert)
router.get('/getuserdetails',UserController.getuserdetails)
router.post('/verifylogin',UserController.verifylogin)

//categorycontroller
router.post('/categoryinsert',CategoryController.categoryinsert)
router.get('/categorydisplay',CategoryController.categorydisplay)
router.get('/categoryview',CategoryController.categoryview)
router.post('/categoryupdate',CategoryController.categoryupdate)
router.get('/categorydelete',CategoryController.categorydelete)

//product controller
router.get('/getallproduct',ProductController.getallproduct)
router.post('/createproduct',ProductController.createproduct)
router.get('/getallproductdetail/:id',ProductController.getallproductdetail)
router.post('/updateproduct/:id',ProductController.updateproduct)
router.get('/deleteproduct',ProductController.deleteproduct)



module.exports = router