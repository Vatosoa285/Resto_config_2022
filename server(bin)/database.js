const express = require('express');
const mysql = require ('mysql2');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
var connection = mysql.createConnection({
    host : '127.0.0.1',
    user :'local_rdc_server',
    password :'openrdc',
    database : 'restosapp', 
    port : 3306,
    socketPath : '/var/run/mysqld/mysqld.sock'
}) 

connection.connect ((err)=>{
    if (err){
        throw err
    } else {
        console.log("connected")
    }
})

/*connection.query('select * from activite',(err,res)=>{
    console.log(res); 
}); */

module.exports = connection; 

const port = process.env.PORT || 5000; 

app.listen(port, function() {
 console.log('App listening on port '+ port); 
});

//it is possible to read and write on the database from the server 

// view engine setup
app.use('/', indexRouter);
app.use('/users', usersRouter);


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = connection; 
module.exports = app;