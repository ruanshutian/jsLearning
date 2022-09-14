/**
 *
 * 操作数据库
 *
 */

const  mysql = require('mysql');

// const connection = mysql.createConnection({
//     host:'127.0.0.1',
//     user:'root',
//     password:'admin123',
//     database:'my_db_01'
// });
//
// connection.connect();
//
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) return console.log(error) ;
//     console.log('The solution is: ', results);
// });


const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'my_db_01'
});

// db.query('select 1',(err,result)=>{
//     if(err){
//         return console.log(err.message);
//     }
//     console.log(result);
// });

/**
 * 查询数据——return：数组
 * @type {string}
 */
// const sqlStr = 'select * from users';
// db.query(sqlStr,(err,result)=>{
//     if(err){
//         return console.log(err.message);
//     }
//     console.log(result);
// });

/**
 * 插入数据
 */
// const user = {username:"spider-man",password:"123"};
// const sqlStrInsert = "insert into users(username,password) values('rst','rst')";
// db.query(sqlStrInsert,[user.username,user.password],(err,result)=>{
//     if(err)return console.log(err.message);
//     if(result.affectedRows ===1){
//         console.log("insert success");
//     }
// });

// const user = {username:"spider-man22",password:"122313"};
// const sqlStrInsert = "insert into users set ?";
// db.query(sqlStrInsert,user,(err,result)=>{
//     if(err)return console.log(err.message);
//     if(result.affectedRows ===1){
//         console.log("insert success");
//     }
// });

/**
 * 更新数据
 */
// const user = {id:9, username:"sp",password:"00000"};
// const sqlStrInsert = "update users set username=?,password=? where id =?";
// db.query(sqlStrInsert,[user.username,user.password,user.id],(err,result)=>{
//     if(err)return console.log(err.message);
//     if(result.affectedRows ===1){
//         console.log("update success");
//     }
// });

// const user = {id:9, username:"sp",password:"000111"};
// const sqlStr = "update users set ? where id =?";
// db.query(sqlStr,[user,user.id],(err,result)=>{
//     if(err)return console.log(err.message);
//     if(result.affectedRows ===1){
//         console.log("update success");
//     }
// });

/**
 * delete删除数据
 */

// const user = {id:9, username:"sp",password:"000111"};
const sqlStr = "delete from users where id =?";
db.query(sqlStr,5,(err,result)=>{
    if(err)return console.log(err.message);
    if(result.affectedRows ===1){
        console.log("delete success");
    }
});

/**
 * 标记删除 ___update status状态
 */



