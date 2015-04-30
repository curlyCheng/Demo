define(function(require,exports,module){
	var flbox = require("./window.js"),
		url = require("./urlRandom.js");
	exports.bind = function(elem){
		elem.onclick = function(){
			var href = this.href;
			flbox.open(href);
			return false;
		};
	};
})
