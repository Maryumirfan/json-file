const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.statuscode = 200;
    res.setHeader('Content-Type', 'html/text');
    fs.readFile('data.json', 'utf8', (err, data) => {
     if(err) {
        console.error(err);
        res.end('Error reading data.json');
     } else{
        try{
            const jsonData = JSON.parse(data);
            if (Array.isArray(jsonData.questions)) {
                const newsData = jsonData.questions;
                const newsHTML = newsData.map((newsItem) => {
                return 
                <div>
                <h2>$(newsItems.author)</h2>
                <h3>$(newsItems.question)</h3>
                <h3>$(newsItems.answer)</h3>
                </div>
                ;
                }).join('');
                const htmlPage = 
                <html>
                <head>
                <title> News Pages </title>
                </head>
                <body>
                $(newsHTML)
                </body>
                </html>;
                res.end(htmlPage);
            } else{
                res.end('invalid data format in data.json');
              }
     } catch (jsonError){
         res.end('Error parsing data.json');
     }
    }
    });
});
server.listen(3000, () => {
    console.log('Server listining port: 3000');
});