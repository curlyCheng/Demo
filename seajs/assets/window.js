define(function(require,exports,module){
	var elemCreate = require('./elementCreate');
	var overlayout = require('./overlayout');
	var $ajax = require('./ajax');


	var eleWin = elemCreate.create("div",{
		class: "window"
	});
	var eleBar = elemCreate.create("div",{
		class: "winBar"
	});
	var eleBody = elemCreate.create("div",{
		class: "winBody"
	});
	var eleClose = elemCreate.create("a",{
		href: "javascript:;",
		class: "winClose"
	});
	var overlay = overlayout.overlayout;
	eleWin.appendChild(eleBar);
	eleWin.appendChild(eleClose);
	eleWin.appendChild(eleBody);
	document.body.appendChild(eleWin);

	eleBar.innerHTML = "登录";
	eleClose.innerHTML = "关闭";
	eleClose.onclick = function(){
		flbox.close();
		return false;
	};
	
	var flbox = {
		open: function(url){
			var box =  flbox;
			$ajax.get(url,function(html){
				eleBody.innerHTML = html;
				flbox.position();
			});
		},
		position: function(){
			eleWin.style.display = "block";
			var width = eleWin.clientWidth;
			var height = eleWin.clientHeight;
			overlay.show();
			eleWin.style.marginLeft = "-"+(width/2)+"px";
			
			eleWin.style.top = (screen.availHeight-height-100)/2 + "px";
		},
		close: function(){
			overlay.hide();
			eleWin.style.display = "none";
			eleBody.innerHTML = "";
		}
	}
	exports.open = flbox.open;
});
