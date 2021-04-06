const express = require('express'),
router = express.Router();
//move to another folder 
//var itemCtrl = require('./item-controller'),
userCtrl = require('./user-controller');
//getworld give the functionalty

//router.get('/hello', itemCtrl.getWorld);
//router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);
//router.post('/hello', itemCtrl.postWorld);

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

//creater var that will tell where upload file are
module.exports.UPLOAD_PATH= "uploads";
//include module multer, middleware takes care of uploading
var multer = requiere("multer");
//create instance of multer, provide path
var upload = multer({ dest: module.exports.UPLOAD_PATH});
//provide functionality to the route that we gonna create
var imageCtrl = requiere('./image-controller');

router.post('/image', upload.single('image'), imageCtrl.uploadIamge);


module.exports = router;