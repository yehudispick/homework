const http = require('http')

let url = [process.argv[2], process.argv[3], process.argv[4]]
let storage = []
urlnumber = 0;

for(let i = 0; i < url.length; i++){
    http.get(url[i], function (response){
        dataString = ''
        response.setEncoding('utf-8')        
        response.on('data', (data)=>{
            dataString += data
        })
        response.on('error', (error)=>{
            console.error(error)
        })
        response.on('end', ()=>{        
          storage[i] = dataString
          urlnumber++
          if( urlnumber === url.length){
            storage.forEach(string =>{
                console.log(string)
            })
          }
          
        })
        
    })
  
}


