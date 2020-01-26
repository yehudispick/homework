const net = require('net')

function addZero(number){
    if (number.toString().length < 2 ){
        number = `0${number}`
    } 
    return number
}

const server = net.createServer((socket)=>{
    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();

    const currentDate = `${year}-${addZero(month)}-${addZero(day)} ${addZero(hour)}:${addZero(min)}\n`
   
    socket.end(currentDate);
})
server.listen(+process.argv[2])