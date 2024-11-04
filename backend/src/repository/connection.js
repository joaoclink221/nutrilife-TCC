import mysql from "mysql2/promise.js"

const con  = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
    typeCast: function(field, next){
        if(field.type === 'TINY' && field.length === 1){
            return(field.string()===1)
        }
        else if(field.type.includes('DECIMAL')){
            return Number(field.string());
        }
        else{
            return next();
        }
    }
})

console.log('database conectado ( ﾉ ﾟｰﾟ)ﾉ');

export default con