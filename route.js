const express =  require('express'),
router = express.Router();




//create the routing 
router.get('/hello/:foo/:bar', (req, res)=>{
    res.json({message: 'Hello BScBest!', data: [
        req.params.foo,
        req.params.bar
    ]});
});//end point is hello 
router.post('/hello', (req,res) => {
    res.json({result: 'Post was sent', data: req.body});
});

module.exports = router;