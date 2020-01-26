const http = require('http')
const url = require('url')

function parsetime(time){
   return JSON.stringify({
       "hour": time.getHours(),
       "minute": time.getMinutes(),
       "second": time.getSeconds()
   })
}

function unixtime(time){
    return JSON.stringify({
        "unixtime": time.getTime()
    })
}

const server = http.createServer((req, res)=>{  
    const theUrl = url.parse(req.url, true)
    const date = new Date(theUrl.query.iso)

    res.setHeader('content-type', 'application/json')
    
    switch(theUrl.pathname){
        case '/api/parsetime':
            res.write(parsetime(date))
            break;
        case '/api/unixtime':
            res.write(unixtime(date))
            break;
        default:
            res.statusCode = 404;
            res.write('<h2 style="color: red"> No such page! 404...</h2>')  
    }
    res.end();
})


server.listen(+process.argv[2])