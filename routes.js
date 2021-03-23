const express =  require('express'),
router = express.Router();

var itemCtrl = require('./item-controller');

//refenrencing to where the logic is trough the variable
router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.post('/hello', itemCtrl.postWorld);

module.exports = router;