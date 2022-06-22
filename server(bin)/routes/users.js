var express = require('express');
var router = express.Router();
var database=require('../database');
// another routes also appear here
// this script to fetch data : sur les activités from MySQL databse table
router.get('/liste-activite', function(req, res, next) {
    var sql='SELECT * FROM activite';
    database.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('liste-activite', { title: 'Liste des activités', userData: data});
  });
});

module.exports = router;
