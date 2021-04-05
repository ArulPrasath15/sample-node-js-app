
const http=require('http')
const fs=require('fs')
const l=require('lodash');

const port = process.env.PORT || 3000;

const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader('content-type','text/html');
    let path='./Files/';
    switch(req.url)
    {
        case '/':path+='index.html';
                 res.statusCode=200;
                 break;

        case '/index':path+='index.html';
                 res.statusCode=200;
                 break;

        case '/about':path+='about.html';
                 res.statusCode=200;
                 break;

        case '/aboutus':res.statusCode=301;
                res.setHeader('location','/about');
                res.end();
                break;
                
        default: path+='404.html';
                 res.statusCode=404;
                 break;
                  
    }
    
    fs.readFile(path,(err,data)=>{
        if(err)
        {
            console.log(err);
            res.end();
        }
        else
        {
            res.end(data);
        }
    })



});

server.listen(port,'localhost',()=>{
    console.log(`Server running on http://localhost:${port}/`);
});

