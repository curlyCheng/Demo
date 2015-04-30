var http = require("http");
var url = require("url");

function start(route,handle){
function onerequest(request,response){
  var pathname = url.parse(request.url).pathname;
  var postData = "";
  console.log("request for "+ pathname);
  
  request.setEncoding("utf8");
  request.addListener("data",function(postDataChunk)
  {
	postData += postDataChunk;
	console.log(postDataChunk);
	});
  request.addListener("end",function()
  {
  route(handle,pathname,response,postData);
	});


};

http.createServer(onerequest).listen(8888);

console.log("server has started");
}

exports.start = start;
