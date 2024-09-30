//.fs module file system
const fs = require('node:fs');

//could either be used like const {readFile, readFileSync}

//fs.readFile(); non-blocking 
const text = fs.readFile('./HarryPotter.txt','utf8',(err,data)=>{
    if(err) {
        throw err;
    }else{
        console.log(data);
    }
});


console.log('The world of Harry Potter');
console.log(' ');// This runs immediately, before the file is read