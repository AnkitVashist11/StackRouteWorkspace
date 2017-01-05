var express=require('express');
var app= express();

const PORT=8080;

var router=express.Router();
router.get("/",function(req,res){
	res.json({"value":"hiiiiii"});
       /*console.log(res);*/
  res.end("checking working");
});
router.get("/emp",function(req,res){
	res.json({"value":"emp here..... "});
    /*console.log(res);*/

});
router.get("/emp2",function(req,res){
	res.json(JSON.stringify(req.query));
/*    console.log(res);
*/    
});
router.post("/",function(req, res){
	res.json({"value":"giving value"});
/*       console.log(res);
*/
});
/*app.use("/emp",router);
*/
app.use("/",router);

app.listen(PORT,function(){
	console.log("the port we are running %s",PORT);
});