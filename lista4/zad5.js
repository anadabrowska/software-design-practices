const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.on ('line', (name) => {
    console.log(`Witaj ${name}!`)
    readline.close()
  })