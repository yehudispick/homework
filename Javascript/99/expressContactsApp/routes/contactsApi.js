var express = require('express');
var router = express.Router();
var contacts = require('../data/contacts')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(contacts));
});

router.post('/', function(req, res, next){
   var contact =  req.body
   contacts.push(contact);
   res.send(JSON.stringify(contacts))
})

module.exports = router;