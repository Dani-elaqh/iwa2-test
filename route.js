const express =  require('express'),
router = express.Router();

var itemCtrl = require('./item-controller');

//refenrencing to where the logic is trough the variable
router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.post('/hello', itemCtrl.postWorld);



//create the routing 
// router.get('/hello/:foo/:bar', (req, res)=>{
//     res.json({message: 'Hello BScBest!', data: [
//         req.params.foo,
//         req.params.bar
//     ]});
// });//end point is hello 
// router.post('/hello', (req,res) => {
//     res.json({result: 'Post was sent', data: req.body});
// });

module.exports = router;