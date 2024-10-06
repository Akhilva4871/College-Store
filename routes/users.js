var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:'Note Books',
      image:"https://github.com/Akhilva4871/Campus-Store-Website/blob/main/books.png?raw=true"
    },
    {
      name:'Records',
      image:"https://github.com/Akhilva4871/Campus-Store-Website/blob/main/books.png?raw=true"
    },
    {
      name:'Calculators',
      image:"https://github.com/Akhilva4871/Campus-Store-Website/blob/main/calculator.png?raw=true"
    },
    {
      name:'Pen & Pencils',
      image:"https://github.com/Akhilva4871/Campus-Store-Website/blob/main/pen.png?raw=true"
    },
    {
      name:'Others',
      image:"https://github.com/Akhilva4871/Campus-Store-Website/blob/main/others.png?raw=true"
    }
  ]
  res.render('index', {products,admin:false});
});

module.exports = router;
