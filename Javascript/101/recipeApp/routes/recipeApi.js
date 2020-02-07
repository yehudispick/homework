var express = require('../node_modules/express');
var router = express.Router();
var ApiError = require('./apiError')
const db = require('../pooling');

router.route('/')
  .get((req, res, next) => {
    db.query('SELECT * FROM recipes', (error, results, fields) =>{
      if (error){
       return next(new ApiError(`Unable to fetch recipes: ${error.message}`))
      }  
      res.send(results)
    })
  })
  .post((req, res, next) => {
    db.query(`INSERT INTO recipes(name, category)
      Values(?,?)`,
      [req.body.name, req.body.category],
      (error, result) =>{
        if (error){
          return next(new ApiError(`Unable to fetch recipes: ${error.message}`))
        } 
        if(!result.affectedRows){
          return next(new ApiError(`Failed to add recipe`))
        }
        res.statusCode = 201
        res.send({
          id: result.insertId, 
          name: req.body.name,
          category: req.body.category
        })
      }
    ); 
})

router.route('/:id')
  .get((req, res, next) => {
    db.query('SELECT * FROM recipes WHERE id =?', 
    [req.params.id], 
    (error, [result], fields) =>{
      if (error){
        next(new ApiError(`Unable to fetch recipe: ${req.params.id} ${error.message}`))
      } 
      if(!result){
        return next(new ApiError(`Failed to get recipe with id ${req.params.id}`, 404))
      }
      res.send(result)
    })

  })
  .put((req, res, next) => {
    db.query(`UPDATE RECIPES SET name = ?, category = ? WHERE id = ?`,
    [req.body.name, req.body.category, req.params.id],
    (error, result) =>{
      if (error){
        next(new ApiError(`Unable to fetch recipe ${req.params.id} ${error.message}`))
      } 
      if(!result.changedRows){
        return next(new ApiError(`Failed to find recipe with id ${req.body.id} to update`, 404))
      }
      res.statusCode = 204;
      res.end()
    }
  );

  })
  .delete((req, res, next) => {
    db.query('DELETE FROM RECIPES WHERE id=?', [req.params.id], (error, result)=>{
      if (error){
        next(new ApiError(`Unable to delete contact ${req.params.id}: ${error.message}`))
       } 
       if(!result.affectedRows){
         return next( new Error(`Failed to find contact with id ${req.params.id} to delete`, 404))
       }
       res.statusCode = 204
       res.end()
     })
  })

router.use((error, req, res, next) => {
  res.statusCode = error.statusCode || 500
  res.send({error: error.message});
})

module.exports = router;