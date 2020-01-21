const http = require('http')

http.get(process.argv[2], function callback(response){
    response.setEncoding('utf-8')

    numberOfCharacters = 0
    dataString = ''
    
    response.on('data', (data)=>{
        for(let i = 0; i < data.length; i++){
            numberOfCharacters++
        }
        dataString += data
    })
    response.on('error', (error)=>{
        console.error(error)
    })
    response.on('end', ()=>{
        console.log(numberOfCharacters)
        console.log(dataString)
    })
    
})