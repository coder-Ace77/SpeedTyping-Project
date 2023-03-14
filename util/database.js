const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    username:'root',
    database:'weekend-warriors',
    password:'MItuMnHAN@99n'
}); 

module.exports=pool.promise();