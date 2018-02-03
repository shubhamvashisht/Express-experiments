var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/index', function (req, res) {
	var data = JSON.parse(fs.readFileSync('./public/images/data.json', 'utf8'));
  res.render('index', { data })
})

router.get('/cms', function(req,res){
	var data = JSON.parse(fs.readFileSync('./public/images/data.json', 'utf8'));
	res.render('cms',{data})
})

router.post('/node/cms/edit',function(req,res){
	var fileConts = JSON.parse(fs.readFileSync('./public/images/data.json', 'utf8'));
	fileConts[req.body.num]=req.body
	var editedData = JSON.stringify(fileConts)
	fs.writeFile('./public/images/data.json',editedData,'utf8')
	res.send("Edit Succesful")
})

module.exports = router;
