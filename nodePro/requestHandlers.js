var querystring = require("querystring");
function start(response,postData){
		console.log("start is called");
		response.writeHead(200,{"Content-Type":"text/html"});
		var content = '<html>'+'<body>'+'<form action="/upload" method="post">'+'<textarea name="text">'+'</textarea>'+'<input type="submit" value="submit"/>'+'</form>'+'</body>'+'</html>';
		response.write(content);
		response.end();
  	}
function upload(response,postData){
		console.log("upload is called");
		response.writeHead(200,{"Content-TYpe":"text/plain"});
		response.write(
		querystring.parse(postData).text
		);
		response.end();
	}

exports.start = start;
exports.upload = upload;
