const express = require('express');
const app = express();

const socketIo = require('socket.io');
const mongo = require('mongodb');
const session = require('express-session');
const bcrypt = require('bcrypt');


var path = require('path');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));



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

let numPosts;

app.use(require('cors')({
    origin: "http://localhost:3000"
}
));

/*app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    next()
})*/

const mustBeLoggedIn = (req, res, next) => {
    if (req.session.user){
      next();
    }else{
        return next(new Error('You must log in'));
    }
  }


app.route('/posts')
    .get( async(req, res, next)=>{

        const skip = +req.query.skip;
        const limit = +req.query.limit;
        

        try{
            const thePosts = await posts.find()
                .skip(skip)
                .limit(limit)
                .toArray();
            
            res.send(thePosts)
            
        }catch(e){
            req.session.errorPage = 'posts'
            return next(e)
        }   
    })

    .post([mustBeLoggedIn], async (req, res, next) => {
        const newPost = {
        title: req.body.title,
        content: req.body.content,
        author: req.session.user,
        date: new Date()
        };

        try {
            await posts.insertOne(newPost);
            res.status(201).send(newPost)
        } catch (e) {
            return next(e);
        }
    });


app.route('/register')
    
    .post(async(req, res, next) => {
        if(!req.body.user || !req.body.password){
            return next('User and password are required');
        }
        bcrypt.hash(req.body.password, 10, async(error, hash) =>{
            if(error) {
                return next(error);
            }

            const newUser = {
                username: req.body.user,
                password: hash
            };
            try {
              await users.insertOne(newUser);
              res.status(201).send("success");
              //res.redirect('/');
            } catch (e) {
                
              return next(e);
            }
        });
    });
app.route('/login')
    
    .post(async (req, res, next) => {
        try {
            const user = await users.findOne({username: req.body.user}, {password: 1})
            
            if(!user.password){
                return next(new Error('Invalid username and password'))
            }
            const match = bcrypt.compare(req.body.password, user.password);               
                if(!match){
                    return next(new Error('Invalid username and password'))
                } 
                req.session.user = req.body.user;
                res.status(200).send("success");
                //res.redirect('/')
            
        } catch (error) {
            return next(error);
        }
    });

app.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/')
})



app.post('/posts/:id/comments', [mustBeLoggedIn],async(req, res, next)=>{    
    const newComment ={
        content: req.body.content,
        author: req.session.user,
        date: new Date()
    };

    try {
        await posts.updateOne({_id: mongo.ObjectID(req.params.id)},
            {
                $push:{
                    comments: newComment
                }
            }
        );
        res.status(201).send(newComment);
    
    } catch (error) {
        return next(error)
    }    
})
app.use(function( req, res, next) {
    const err = new Error('No such API method');
    errr.status = 404;
    next(err);
    res.next()
  });

  app.use(function(err, req, res, next) {
      res.status (err.status || 500).send(err.message || 'oops')

  })
async function connectToMongo(){
    const client = new mongo.MongoClient('mongodb://localhost:27017' , { useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db('blog');
        posts = db.collection('posts');
        users = db.collection('users');
        numPosts = await posts.countDocuments();
        
    } catch (error) {
        console.log(error)
        
    }
}

connectToMongo().catch(e => {console.log(e)})

io = socketIo.listen(app.listen(80));