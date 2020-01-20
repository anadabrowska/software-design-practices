var fs = require('fs');
var https = require('https');

const port = 3000;

(async function () {
    var pfx = await fs.promises.readFile('domain.pfx');
    var server = https.createServer({ 
        pfx: pfx,
        passphrase: '123456'
    },
    (req, res) => {
        res.setHeader('Content-type', 'text/html; charset=utf-8');
        res.end(`hello world ${new Date()}`);
    });
    server.listen(port, (error) => {
        if(error){
            console.log(`Error: ${error}`);
        }else{
            console.log(`Server running on port ${port}`)
        }
    })
})();