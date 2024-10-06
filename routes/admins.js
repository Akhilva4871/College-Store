var express = require('express');
var router = express.Router();
var productHelper=require('../helpers/product-helpers');
const productHelpers = require('../helpers/product-helpers');
/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:'Classmate',
      category: 'Note Books',
      specification: 'Ruled(24x18)',
      price: "60.00",
      image:"https://www.mandiraja.com/wp-content/uploads/2021/07/Untitled-1-copy.jpg"
    },
    {
      name:'Fair Record',
      category:'Records',
      specification:'Ruled',
      price:'85',
      image:"https://github.com/Akhilva4871/Campus-Store-Website/blob/main/books.png?raw=true"
    },
    {
      name:'Rough Record',
      category:'Records',
      specification:'Ruled',
      price:'50',
      image:"https://github.com/Akhilva4871/Campus-Store-Website/blob/main/books.png?raw=true"
    },
    {
      name:'Papergrid',
      category: 'Note Books',
      specification: 'Ruled(30x21)',
      price: "65.00",
      image:"https://images-eu.ssl-images-amazon.com/images/I/71LamIssQnL._AC_UL600_SR600,600_.jpg"
    }
  ]
  res.render('admin/view-products',{admin:true,products});
});

router.get('/add-products', function(req, res, next){
  res.render('admin/add-products');
})
router.post('/add-products',(req,res)=>{
  console.log(req.body)
  console.log(req.files.Image)
  productHelpers.addProduct(req.body,(result)=>{
    res.render('admin/add-products')
  })
})

module.exports = router;
