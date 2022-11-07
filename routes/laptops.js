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

function computePrice(json, percent) {
    percent = percent / 100;
    for (let laptop of json) {
        console.log(laptop.price);
        laptop.price = laptop.price * (1 + percent)
        console.log(laptop.price);
    }
    console.log(json);
    return json
}


/* GET users listing. */
router.get('/all/:location?', function(req, res, next) {
    let json_result = JSON.parse(read_json_file());

    let location = req.params.location;
    if (location) {
        location = location.toLocaleLowerCase();
        console.log(`recieved location: ${location}`);
        if (location === 'raleigh') {
            json_result = computePrice(json_result, 7.5);
        } else if (location === 'durham') {
            console.log("TEST");
            json_result = computePrice(json_result, 8);
        } else {
            console.log('not a valid locatioon');
        }
    }
    res.json(json_result);
});

router.get('/team', function(req, res, next) {
    res.json(team)
})

module.exports = router;