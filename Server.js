const express =require('express');
const path=require('path');
const app= express();
const mainRouter=require('./routes/index');
const apiKeyMiddleware=require('./middlewares/apiKey');
const  productRouter=require('./routes/products');

const PORT=process.env.PORT|| 3000;

app.set('view engine','ejs');

//console.log(app.get('views'));

//static midleware
//app.use(express.static('public'));
app.use(express.static('public'));
app.use(productRouter);

app.use(mainRouter);

// app.use('/en',mainRouter);

// app.get('/',(req, res) =>{
//     res.sendFile( path.resolve(__dirname)+'/index.html');
// });


// app.get('/',(req, res) =>{
//     res.render('index',{
//         title:'my home page'
//     });
// });


// app.get('/about',(req, res) =>{
//     res.render('about');
// });
// app.get('/about',(req, res) =>{
//     res.render('about',{
//         title:'about page'
//     });
// });
// app.get('/download',(req, res) =>{
//     res.download(path.resolve(__dirname)+'/about.html');
// });


app.listen(PORT,()=>  console.log(`listening on port ${PORT}`));