
const  http = require('http');

const server =http.createServer((req,res)=>{
    if(res.url ==="/"){
        res.end("sono on");
    }
    
})
server.listen(3000);