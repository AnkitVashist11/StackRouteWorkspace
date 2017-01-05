var httpmodule =require('http');
var dispatchermodule = require('httpdispatcher');

var fs =require('fs');
var dispatcher = new HttpDispatcher();


const PORT =4040;

function handleRequest(request,response){
   try {
       console.log('requested');
       dispatcher.dispatch(request,response);
       }
       catch(err){
           console.log(err);
       }

      }

   /*for get*/
      function providingHTML(path, response) {
         fs.readFile(path, null, function(error,data) {
              if(error) {
                  response.writeHead(404);
                  response.write('file not found');
              } else {
                  response.write(data);
              }
              response.end('\n file loaded ');
         });
      }


  /*for post*/
          function writeFileAsync(file,data,response) {
              fs.writeFile(file, data, function (err)
                {
                 if (err) throw err;
                    console.log('File Saved');

                });
             providingHTML('submit.txt',response);
          }

        dispatcher.onGet("/firstGet",function(request, response){
              response.writeHead(200, {'Content-Type': 'text/html'});
              console.log('data is sent to the page');
              providingHTML('firstGet.txt',res);
          });

            dispatcher.onGet("/secondGet",function(request, response){
                  response.writeHead(200, {'Content-Type': 'text/html'});
                  console.log('data is sent to the page');
                  providingHTML('secondGet.txt',response);
              }); 
            dispatcher.onGet("/departments",function(request, response){
                  response.writeHead(200, {'Content-Type': 'text/html'});
                  console.log('data is sent to the page');
                  providingHTML('departments.txt',response);
              });
            dispatcher.onGet("/view",function(request, response){
                  response.writeHead(200, {'Content-Type': 'text/html'});
                  console.log('data is sent to the page');
                  providingHTML('submit.txt',response);
              }); 

        dispatcher.onPost("/submit",function(request, response){
              response.writeHead(200, {'Content-Type': 'text/html'});
              console.log( request.body );
              writeFileAsync("submit.txt",request.body,response);
              
          });

          dispatcher.onError(function(request, response) {
                response.writeHead(404);
                response.end(' 404 error file not found');
            });


var server = httpmodule.createServer(handleRequest);

server.listen(PORT, function(){
   console.log("server is listening to the port %s",PORT);
});