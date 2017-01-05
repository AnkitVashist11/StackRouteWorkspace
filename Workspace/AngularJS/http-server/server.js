var httpmodule=require('http');	
var dispatcher= require('httpdispatcher');

const PORT=4040;
function handlerequest(request,response){
	try{
		console.log('requested');
	    dispatcher.dispatch(request,response);
		}
		catch(err){
			console.log(err);
		}
 	}
	dispatcher.onGet("/getting1",function(request,response){
		response.writeHead(200,{'Content-Type':'text/plain'});
		console.log('data sending to page/client');
		response.end('Page one');
	});
	dispatcher.onPost("/posting1",function(request,response){
		response.writeHead(200,{'Content-Type':'text/plain'});
		console.log('data sending to database');
		response.end('got post data');
	});

 var server=httpmodule.createServer(handlerequest);

 server.listen(PORT,function(){
   console.log('checking server is listing to port 4040');
 });
