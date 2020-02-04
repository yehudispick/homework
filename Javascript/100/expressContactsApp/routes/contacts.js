var debug = require('debug')('contacts:contacts');
var express = require('../node_modules/express');
var router = express.Router();
//var contacts = require('../data/contacts.js')

//let nextId = contacts.length + 1;

/* GET home page. */

router.get('/', function(req, res, next) {
  db.query('SELECT * FROM contacts', (error, results, fields) =>{
    console.log(results)
    if (error) next(error);
    res.render('layout', { 
      title: 'Contacts', 
      contacts: results,
      partials:{content: 'contacts'},
      noContacts: !results.length,
      css: ['contacts']
    });

  })
  
});

router.get('/addContact', function(req, res, next) {
  res.render('layout', { 
      title: 'Add Contact', 
      //contacts: results,
      partials:{content: 'addContact'},
      css: ['addContact']
    });
});

router.post('/addContact', function(req, res, next){
 // req.body.id = nextId++
  //console.log(req.body)
  //var contact =  req.body
  db.query(`INSERT INTO CONTACTS(FirstName, LastName, Email, Phone)
    Values(?,?,?,?)`,
    [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
    (err, result) =>{
      if(err) next(error);
      res.redirect('/contacts')
    }
  );
  
 
})

router.get('/editContact/:id', function(req, res, next) {
 db.query('SELECT * FROM contacts WHERE id=?', [req.params.id],
   (err, result) =>{
      if(err) next(error);
      res.render('layout', { 
      title: 'Edit Contact', 
      contact: result,
      partials:{content: 'editContact'},
      css: ['addContact']
    },
    console.log(result));
    })
  
 //console.log("id", result)
});

router.post('/editContact/:id', function(req, res, next){
  debug("editContact", req.body)
 // req.body.id = nextId++
  //console.log(req.body)
  //var contact =  req.body
  db.query(`UPDATE CONTACTS SET ? WHERE id=?`,
    [req.body, req.params.id],
    (err, result) =>{
      if(err) next(error);
      res.redirect('/contacts')
    }
  );
  
 
})

router.get('/deleteContact/:id', function(req, res, next) {
  //contacts = contacts.filter(c => c.id !== +req.params.id);
  
  db.query('DELETE FROM contacts WHERE id=?', [req.params.id], (error, results)=>{
    if (error) next(error);
    if(results.affectedRows === 0){
      return new Error(`Failed to find contact with id ${req.body.id} to delete`)
    }
    res.redirect('/contacts')
  })
 
});





module.exports = router;