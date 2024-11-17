import mysql from "mysql2/promise.js"

const con  = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    
    typeCast: function(field, next){
        if(field.type === 'TINY' && field.length === 1){
            return parseInt(field.string(), 10) === 1;
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