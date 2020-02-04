var express = require('express');
var router = express.Router();
var contacts = require('../data/contacts.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { 
      title: 'Contacts', 
      contacts: contacts,
      partials:{content: 'contacts'}
    });
});

module.exports = router;