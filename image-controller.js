var UPLOAD_PATH = require('./routes').UPLOAD_PATH;
var Image = requiere('./models/image');
path = require('path'),
fs = require('fs'),
del = require('del');

//functions, creating new image and assambling pieces of data that we need newImage, part we need there 
exports.uploadImage = finction(req, res)
{
    let newImage = new Image();
    newImage.filename = req.file.filename;
    newImage.originalName = req.file.originalname;
    newImage.desc = req.body.desc;
    newImage.save(err =>{
        if(err) {
            return res.sendStatus(400);
        }
        res.status(201).send({ newImage })
    })

}

