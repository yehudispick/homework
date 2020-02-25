const express = require('express');
const app = express();

const socketIo = require('socket.io');
const mongo = require('mongodb');
const session = require('express-session');
const bcrypt = require('bcrypt');


var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
  
  app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
  })

let posts;
let users;
let io;
const limit = 3;


app.locals.title = "PCS Mongo Express Socket.IO Blog"

app.get('/', async(req, res, next)=>{
    try{
        const thePosts = await posts.find().skip(0).limit(limit).toArray();
        thePosts.forEach(p => p.date = p.date.toLocaleString());

        res.render('layout', {
            subtitle: 'Welcome to the blog',
            posts: thePosts,
            links: [{url:'/login', text: "login"},{url:'/logout', text: "log out"},{url:'/addPost',text: 'Add Post'}],
            scripts: ['posts'],
            css: ['posts'],
            partials:{
                content: 'blog',
                comments: 'comments',
                posts: 'posts'
            }
        })
    }catch(e){
        req.session.errorPage = 'posts'
        return next(e)
    }   
});

app.get('/posts', async(req, res, next) =>{
    
    let page = req.query.page
    let nextPost = 0;

    if(page){
          nextPost = page * limit;
    }else{
        page=1;
    }     
   
    try{
          
        const thePosts = await posts.find().skip(nextPost).limit(limit).toArray();
        thePosts.forEach(p => p.date = p.date.toLocaleString());
       
        res.render('posts', {
            posts: thePosts, 
            comments: [thePosts[0].comments], 
            partials: {
                comments: 'comments'
            }
        })

    }catch(e){
        req.session.errorPage = 'posts'
        return next(e)
    }   
})

app.route('/register')
    .get((req, res, next) => {
        res.render('layout', { title: 'Express' , partials:{content: 'register'}});
    })
    .post(async(req, res, next) => {
        if(!req.body.user || !req.body.password){
            req.session.errorPage = 'register'
            return next('User and password are required');
        }
        bcrypt.hash(req.body.password, 10, async(error, hash) =>{
            if(error) {
                req.session.errorPage = 'register'
                return next(error);
            }

            const newUser = {
                username: req.body.user,
                password: hash
            };
            try {
              await users.insertOne(newUser);
              res.redirect('/');
            } catch (e) {
                req.session.errorPage = 'register'
              return next(e);
            }
        });
    });
app.route('/login')
    .get((req, res, next) => {
        res.render('layout', {
            subtitle: 'Login',
            links: [{url:'/register', text: "register"}],
            css: ['login'],
            partials:{
                content: 'login',
            }
        });
    })
    .post(async (req, res, next) => {
        try {
            const user = await users.findOne({username: req.body.user}, {password: 1})
            
            if(!user.password){
                req.session.errorPage = 'login'
                return next(new Error('Invalid username and password'))
            }
            const match = bcrypt.compare(req.body.password, user.password);// (error, results) => {
                
                if(!match){
                    
                    req.session.errorPage = 'login'
                    return next(new Error('Invalid username and password'))
                } 
                req.session.user = req.body.user;
                res.redirect('/')
            
        } catch (error) {
            req.session.errorPage = 'login'
            return next(error);
        }
    });

app.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/')
})

app.use((req, res, next) => {
    if (req.session.user){
      next();
    }else{
        
        req.session.errorPage = 'login'
        return next(new Error('You must log in'));
    }
  })

app.route('/addPost')
    .get((req, res, next) =>{
        res.render('layout',{
            subtitle: 'Write a post',
            links: [{url: '/', text: 'Home'}],
            css: ['addPost'],
            partials: {content: 'addPost'}
        })
    })
    .post(async (req, res, next) => {
        const newPost = {
          title: req.body.title,
          content: req.body.content,
          author: req.session.user,
          date: new Date()
        };
    
        try {
          await posts.insertOne(newPost);
          res.redirect('/');
        } catch (e) {
            req.session.errorPage = 'addPost'
          return next(e);
        }
      });

app.post('/posts/:id/comments', async(req, res, next)=>{
    if(req.session.user){
       
    
        const newComment ={
            content: req.body.content,
            author: req.session.user,
            date: new Date()
        };

        console.log('comment',newComment)
        try {
            await posts.updateOne({_id: mongo.ObjectID(req.params.id)},
                {
                    $push:{
                        comments: newComment
                    }
                }
            );
            res.status(201).end();
            
            //io.emit('comment', {post: req.params.id, comment: newComment})

            res.render('comments', {comments: [newComment]}, (err, htmlString)=>{
                if(err){
                    req.session.errorPage = 'error'
                    return next(err);
                }
                
                io.emit('comment', {postId: req.params.id, comment: htmlString})
            });
        
        
             
        
    } catch (error) {
        req.session.errorPage = 'error'
        return next(error)
        
    }
}
    else{
        return next("you must be signed in")
    }
})
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // render the error page
    res.status(err.status || 500);
    
    res.render('layout', {subtitle:"Error",
    links: [{url:'/login', text: "login"},{url:'/logout', text: "log out"},{url:'/addPost',text: 'Add Post'}],
    partials:{
        content: req.session.errorPage,
    }});
  });
async function connectToMongo(){
    const client = new mongo.MongoClient('mongodb://localhost:27017' , { useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db('blog');
        posts = db.collection('posts');
        users = db.collection('users');
        
    } catch (error) {
        console.log(error)
        
    }
}

connectToMongo().catch(e => {console.log(e)})

io = socketIo.listen(app.listen(80));