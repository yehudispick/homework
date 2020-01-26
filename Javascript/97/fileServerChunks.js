const http = require('http');
const fs = require('fs');
const path = require('path')

const mimTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/js'
}

http.createServer((req, res) => {
    
    console.log(req.url)
    if(req.url === '/'){
        res.statusCode = 301;
        res.setHeader('Location', '/index.html');
        return res.end()
    }
    const stream = fs.createReadStream(`public/${req.url}`)
    stream.on('data', data=>{
        const ext = path.extname(req.url);
        res.setHeader('content-type', mimTypes[ext] || mimTypes['html'])
        res.end(data);

    })
    stream.on('error', err=>{
        switch(err.code){
            case 'ENOENT':
                res.statusCode = 400
                res.setHeader('content-type', 'text/html')
                res.write('<h2 style="color: red"> No such page! 404...</h2>')
                break;
            default:
                res.statusCode = 500;
                res.setHeader('content-type', 'text/html')
                res.write('<h2 style="color: red"> Server Error !</h2>')
                break;
        }
        return res.end()
    })  
}).listen(48);