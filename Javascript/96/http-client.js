const http = require('http')

http.get(process.argv[2], function callback(response){
    response.setEncoding('utf-8')
    response.on('data', (data)=>{
        console.log(data)
    })
    response.on('error', (error)=>{
        console.error(error)
    })
    
})