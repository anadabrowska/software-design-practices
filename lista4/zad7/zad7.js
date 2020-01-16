var readline = require('readline');

var rl = readline.createInterface({
    input: require('fs').createReadStream('./logs.txt')
});

var i = 1;
var arr = {};

var top = [{ip: '', value: 0},
           {ip: '', value: 0},
           {ip: '', value: 0}];

rl.on('close', function() {
    for(let s in arr) {
        for(let i = 0; i < 3; i++) {
            if(arr[s] > top[i].value) {
                top[i].ip = s;
                top[i].value = arr[s];
                break;
            }
        }
    }
    console.log(top);
});

rl.on('line', function (line) {
    s = line.split(' ')[1];
    arr[s] = arr[s] === undefined ? 1 : arr[s]+1;
    // console.log(`Line ${i} from file: ${arr[s]}`);
    i++;
});


    