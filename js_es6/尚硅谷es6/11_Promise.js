

/**
 * Promise
 */

// 基本使用Promise

const p = new Promise(function (resolve, reject){
    let data = "data";
    // resolve(data);

    let err = "err";
    reject(err);

}).then( (value)=>{
    console.log(value);
},(err)=>{
    console.log(err);
    }
)