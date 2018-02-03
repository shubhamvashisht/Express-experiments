var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	var data = JSON.parse(fs.readFileSync('./public/images/data.json', 'utf8'));
  res.render('index', { data })
})

router.get('/cms', function(req,res){
	var data = JSON.parse(fs.readFileSync('./public/images/data.json', 'utf8'));
	res.render('cms',{data})
})

router.post('/cms/edit',function(req,res){
	var data = JSON.parse(fs.readFileSync('./public/images/data.json', 'utf8'));
	data[req.body.num]=req.body
	var editedData = JSON.stringify(data)
	fs.writeFile('./public/images/data.json',editedData,'utf8')
})

module.exports = router;
