var express =require('express');
const app =express();
var bodyparser=require('body-parser');
var mon = require('mongoose');
var Site =require('./models/db');
 

app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));

mon.connect('mongodb+srv://sid:sid@2020@cluster0.6kc9e.mongodb.net/imgallery?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mon.connection.on('connected',()=>{
    console.log("Mongoose is connected");
})

app.get('/',function(req,res){
    res.render('index');
});
app.get('/add',function(req,res){
    res.render('add');
})
app.post('/index',function(req,res){
    var image=req.body.image;
    var name=req.body.name;
    var country=req.body.country;
    var continent=req.body.continent;
    Site.create(add,function(err,createpost){
        if(err)
        {
            console.log(err);
        }else{
            console.log("Added");
            res.redirect("/");
            
        }
    });
})



app.listen(3000,console.log('server up'));