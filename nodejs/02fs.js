
const fs =require('fs');
// // readFile
// fs.readFile('test.txt','utf8',function (err,dataStr){
//     if(err){
//         return console.log(err.message);
//     }
//     console.log(dataStr);
// })

// writeFile
fs.writeFile('test.txt','hello aron',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("write file success")
})

// readFile
fs.readFile('test.txt','utf8',function (err,dataStr){
    if(err){
        return console.log(err.message);
    }
    console.log(dataStr);
})
