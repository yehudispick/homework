

const fs = require('fs')
const path = require('path');



module.exports = (dirname, extname , callback) => {
    const ext = '.' + extname

    fs.readdir(dirname, function(err, list){
        if(err){
            return callback(err)
        }
        
        list = list.filter(file =>{
            if(path.extname(file) === ext){
               return file
            }
        })
        return callback(null, list)
   
   
})
}