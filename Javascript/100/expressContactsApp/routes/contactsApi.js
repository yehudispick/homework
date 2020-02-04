var express = require('../node_modules/express');
var router = express.Router();
var contacts = require('../data/contacts')


router.get('/', function(req, res, next) {
  db.query('SELECT * FROM contacts', (error, results, fields) =>{
   
    if (error){
      res.statusCode = 500;
      return res.end(`Unable to fetch contacts: ${error}`)
    } 
    res.send(results)

  })

})

router.post('/addContact', function(req, res, next){
  db.query(`INSERT INTO CONTACTS(FirstName, LastName, Email, Phone)
    Values(?,?,?,?)`,
    [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
    (error, result) =>{
      if (error){
      res.statusCode = 500;
      return res.end(`Unable to fetch contacts: ${error}`)
    } 
      res.statusCode = 201
      res.send({id: result.insertId, contact: req.body} )
    }
  );
  
 
})

router.post('/editContact/:id', function(req, res, next){
  db.query(`UPDATE CONTACTS SET ? WHERE id=?`,
    [req.body, req.params.id],
    (error, result) =>{
      if (error){
        res.statusCode = 500;
        return res.end(`Unable to fetch contacts: ${error}`)
      } 
      res.statusCode = 204;
    }
  );
})

router.get('/deleteContact/:id', function(req, res, next) {
  db.query('DELETE FROM contacts WHERE id=?', [req.params.id], (error, results)=>{
   if (error){
      res.statusCode = 500;
      return res.end(`Unable to fetch contacts: ${error}`)
    } 
    if(results.affectedRows === 0){
      return new Error(`Failed to find contact with id ${req.body.id} to delete`)
    }
    res.statusCode = 204
  })
});

module.exports = router;