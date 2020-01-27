const url = require('url');
module.exports = function(req,res, next){
    const parsedUrl = url.parse(req.url, true)
    req.query = parsedUrl.query;
   
    if(req.query.magicWord === 'please'){
        next()
    }
    else{
        next(new Error('Sorry, you do not have the write credentials to access this site '))
    }
    
}