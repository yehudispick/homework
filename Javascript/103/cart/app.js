var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const Cart = require('./cart')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'mySecret',
  cookie: {
    maxAge: 20000,
    //secure: true,
  },
  resave: false,
  saveUninitialized: false
}))

app.use((req,res, next) => {
  const cart = new Cart(req.session.cart ? req.session.cart.items : null);
  req.session.cart = cart;
  next()
})
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/shoppingCart', (req, res, next) => {
  const items = req.session.cart.getItems()
  let total = 0;
  console.log(items)
  const Cart = Object.entries(items).map(item => {
    let cartItem = global.items.find(i => i.id === +item[0])
    let subtotal = +cartItem.price*item[1]
    total += subtotal
    //console.log(cartItem)
    return {cartItem, quantity: item[1],subtotal}
  }
  );
  const newShoppingCart ={
    items: Cart,
    total: total
  }
  
  console.log(newShoppingCart.items)
  res.render("layout", {
    title: "Express",
    items: newShoppingCart.items,
    total,
    css: ["index"],
    partials: { content: "cart" }
  });

})
app.use("/addToCart", (req, res, next) => {
  
  //const cart = new Cart(req.session.cart ? req.session.cart.items : null);
  //req.session.cart = cart;

  req.session.cart.addItem(req.body.id, req.body.count);
  console.log(req.session.cart)
  res.redirect('/')
})

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
  res.render('error');
});

global.items = [
  {
    id: 1,
    name: "Pizza",
    description: 'Best Pizza ever',
    price: '10.99',
    img: 'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/extra-cheesy-alfredo-slate-compressed.jpg'
  },
  {
    id: 2,
    name: "Coke",
    description: 'Ice Cold Coke',
    price: '1.99',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/15-09-26-RalfR-WLC-0098.jpg/255px-15-09-26-RalfR-WLC-0098.jpg'
  }
  
]

module.exports = app;
