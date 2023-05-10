const http = require('http');
const data = require('./utils/data.js')

http.createServer((req, res) =>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;

    if (url.includes("/rickandmorty/character")) 
    {
        const divUrl = url.split('/');
        const id = parseInt(divUrl[divUrl.length - 1]);
        console.log(id);
        //-----------------------------------
        if (id > 5 || id < 1) 
        {
            res.writeHead(400, "content-type", "text/plain");
            res.end('El id debe estar entre 1 y 5');    
        }
        //-----------------------------------
        data.map((char) =>
        {
            if (char.id === id) 
            {
                const character = char.id;    
                res.writeHead(200, {'content-type': 'application/json'});
                return res.end(JSON.stringify(char));
            }
        })
        

    }
}).listen(3001, 'localhost');