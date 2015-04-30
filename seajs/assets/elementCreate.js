define(function(require,exports){
	exports.create = function(tagName, attr)
	{
		var element = null;
		if(typeof tagName === "string")
		{
			element = document.createElement(tagName);
			
			if(typeof attr === "object") { 
				var key, style;
				for(key in attr){
					if(key === "styles" && typeof attr[key] === "object"){
						for(style in attr[key]) {
							element.style[style] = attr[key][style];
							if(style == "opacity" && window.innerWidth+"" == "undefined")
								element.style.filter = "alpha(opacity=" + (attr[key][style]*100) + ")";
						}
					}
				}
				if(key == "class")
					element.className = attr[key];
				else
					element[key] = attr[key];
			}
		}
		return element;
	};
});
