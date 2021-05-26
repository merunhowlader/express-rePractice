const router=require('express').Router();
 const apiKeyMiddleware=require('../middlewares/apiKey');
 const products=require('../productData');

// router.use(apiKeyMiddleware);

router.get('/about',(req, res) =>{
    res.render('about',{
        title:'about page'
    });
});


router.get('/',(req, res) =>{
    res.render('index',{
        title:'my home page'
    });
});
router.get('/download',(req, res) =>{
    res.download(path.resolve(__dirname)+'/about.html');
});


// router.get('/api/products',apiKeyMiddleware,(req, res) =>{
//    res.json([{
//        id:'123',
//        name:'chrome'
//    },
//    {
//        id:'124',
//        name:'firefox'
//    }

// ])
// });
router.get('/api/products',(req,res)=>{
    res.json(products)
})


module.exports =router;