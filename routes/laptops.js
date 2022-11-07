var express = require('express');
const fs = require('fs');

var team = require('../data/team')
var router = express.Router();


let read_json_file = () => {
  let file = './data/Laptopsjson.json';
  return fs.readFileSync(file);
}

exports.list = () => {
  return JSON.parse(read_json_file());
};



/* GET users listing. */
router.get('/all', function(req, res, next) {
  
let json_result = JSON.parse(read_json_file());
  res.json(json_result);
});

router.get('/team', function(req, res, next){
  res.json(team)
})

module.exports = router;
