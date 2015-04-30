define(function(require,exports,module){
	var elementCreate = require('./elementCreate.js');
	var overlayout = (function(){
		var elem = elementCreate.create("div", {

				class: "overlayout"
		
		});
		document.body.appendChild(elem);
		return {
			display : false,
			show : function(){
				elem.style.display = "block";
				this.display = true;
				return this;
			},
			hide : function(){
				elem.style.display = "none";
				this.display = false;
				return this;
			}
		};
	})();
	exports.overlayout = overlayout;
})
