var mysql = require('mysql');

var connection = mysql.createConnection({
    'secret': "Passphrase for encryption should be 45-50 char long",
    host : 'braven.cswpfttpsdcj.us-east-1.rds.amazonaws.com',
    user : 'admin',
    password : 'Hack4Good',
    database : 'bravendb',
    insecureAuth: true
});

connection.connect(function(err){
    if(err)
       throw err;
    else
        console.log('connected')     
 });

module.exports = connection;
