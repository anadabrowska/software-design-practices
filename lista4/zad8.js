var fs = require('fs');
const util = require('util');

fs.readFile('text.txt', 'utf-8', function(err, data1) {
    console.log( 'Sposób1:', data1 );
});

//------------------------------------------------------------------------

function fspromise( path, enc ) {
return new Promise( (res, rej) => { fs.readFile( path, enc, (err, data) => {
            if ( err )
                rej(err);
            res(data);
        });
}); }
fspromise('./text.txt', 'utf-8') .then( data => {
    console.log( `sposób2: ${data}` );
}).catch( err => {
    console.log( `err: ${err}` );
})

//------------------------------------------------------------------------

const myReadAsync = util.promisify(fs.readFile);

myReadAsync('./text.txt','utf8')
  .then((text) => {
      console.log('sposób3:', text);
  })
  .catch((err) => {
      console.error(err);
  });

//------------------------------------------------------------------------

var asyncFn = async () =>{
    try{
        var result = await fs.promises.readFile('./text.txt', 'utf-8');
        console.log(`sposób4: ${result}`);
    }
    catch(err){
        console.error(err);
    }
};

asyncFn();


 