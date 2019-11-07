/*
 * @Author: 闫龙科
 * @Date: 2019-11-07 18:48:29
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-07 19:04:48
 * @Description: 00
 */
const http = require('http');

const fs = require('fs');


const server = http.createServer((req,res) => {
    // 
    if(req.url === '/json'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({code:1,list:[{'title':'title'}]}))  
    }else if(req.url === '/txt'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('txt')
    }else if(req.url === '/jpg'){
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        let bufImg = fs.readFileSync('./timg.jpg');
        res.end(bufImg)
    }else{
        res.end("ok")
    }
})

server.listen(process.env.PORT || 3000)