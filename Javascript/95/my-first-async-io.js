const fs = require('fs')

fs.readFile(process.argv[2], function(err, data){
    if (!err){
        const str = data.toString().split('\n').length - 1
        console.log(str)
    }
})

