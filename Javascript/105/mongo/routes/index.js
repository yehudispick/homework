var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

async function callMongo(){
  const client = new MongoClient('mongodb://localhost:27017' , { useUnifiedTopology: true });
  try {
      await client.connect();
      const contacts = client.db('contacts').collection('people');

      return contacts;
     
  } catch (error) {
     
      console.error(error)
  }

}

async function findContacts(collection){
  const result = await collection.find();
  
  if(result){
      console.log(result)
  }
}



router.route('/')
.get((req, res, next) => {
  const collection = callMongo()
  if(collection){
   
     const result=findContacts(collection);
     
    
    res.send(result)
  }
  else{
   res.next('ERROR')
  }
 
  
})
.post((req, res, next) => {
  const collection = callMongo()
  if(collection){
  
      collection.insertOne({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone}, (err, result) => {
        if(result){
          res.send(result)
        }
      res.next(err)
      })
  }
  res.next('ERROR')
   

})



module.exports = router;
