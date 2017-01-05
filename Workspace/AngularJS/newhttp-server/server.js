var http=require('http');

var server = http.createServer(handleRequest);


function handleRequest(req,resp){
   try {
       console.log('requested');
       resp.end("checking working");
       }
       catch(err){
           console.log(err);
       }

      }
      
  	  server.listen(PORT, function(){
   	 console.log("server is listening to the port %s",PORT);

});