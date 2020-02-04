var createError = require('./node_modules/http-errors');
var express = require('./node_modules/express');
var path = require('path');
var cookieParser = require('./node_modules/cookie-parser');
var logger = require('./node_modules/morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactsRouter = require('./routes/contacts');
var contactsApiRouter = require('./routes/contactsApi')

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contacts', contactsRouter);
app.use('/api/contacts', contactsApiRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('layout', {partials: {content: 'error'}, css: ['error']});
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nodeuser',
  password : 'test123',
  database : 'nodeuser'
});
 
connection.connect();
global.db = connection;
 

app.locals.appTitle = 'PCS Contacts App';

module.exports = app;
