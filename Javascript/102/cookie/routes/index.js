var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  const stateOfUser = req.cookies['name'] ? 'logout' : 'login';
  const name = req.cookies['name'] ? JSON.parse(req.cookies['name']) : 'Stranger';
  console.log('prints out',stateOfUser, name)
  res.render('layout', {
    title: 'Express',
     partials:{
       content: 'index'
      },
      stateOfUser: stateOfUser,
      name: name
    });
});

router.route('/login')
  .get( function(req, res, next) {
    res.render('layout', { title: 'Express', partials:{content: 'login'} });
  })
  .post(function(req, res, next) {
    res.cookie('name', JSON.stringify(req.body.name));
    res.locals.name = req.body.name;
    res.redirect('/')
  })

router.get('/logout', function(req, res, next) {
  res.clearCookie('name');
  res.redirect('/');
  
})

module.exports = router;
