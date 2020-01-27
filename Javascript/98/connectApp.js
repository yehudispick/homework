const app = require('connect')();

app.use((req, res, next) => {
    res.setHeader('content-type', 'text/html');
    next()
});

app.use(require('./authorization'));

app.use('/home', (req, res, next) => {
    res.write('<h1>Welcome to PCS!</h1>');
    next()
});
app.use('/about', (req, res, next) => {
    res.write('<h1>PCS is a great place</h1>');
    next()
});




app.use('/sayHello', (req, res, next) => {
    res.end(`Hello ${req.query.name || 'stranger'} `);
});

app.use('/sayGoodbye', (req, res, next) => {
    res.end(`Goodbye ${req.query.name || 'stranger'} `);
});

app.use( (error, req, res, next) => {
    res.statusCode = 500;
    res.end(`<h1>Server error: ${error.message}</h1>`)
});




app.listen(81)