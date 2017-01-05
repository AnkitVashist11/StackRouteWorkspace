module.exports={"key":function(req,res){
   try {
       console.log(res.url);
/*       resp.end("checking working");
*/       res.writeHead(200, {'Content-Type': 'app/json'});
       }
       catch(err){
           console.log(err);
       }
      var obj1={"name":"ankit"};
      var obj2={"name":"annn"};

      var obj3={"name":"akkk"};
      var obj4={"name":"assss"};

      if(req.url=="/"){
      	res.write(JSON.stringify(obj1));
      }
      if(req.url=="/dept"){
      	res.write(JSON.stringify(obj2));
      }
      if(req.url=="/emp"){
      	res.write(JSON.stringify(obj3));
      }

    res.end("checking working");

      },
      key2:function(req,res){
        res.end("is it works");
      }
    }