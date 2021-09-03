var receives = document.getElementsByClassName('receive');
var addcars = document.getElementsByClassName('addcar');

function receive() {
	for (var i = 0; i < receives.length; i++) {
		receives[i].onclick = function() {
			alert("领取成功");
		}
	}
}

receive();

function addcar() {
	for (var i = 0; i < addcars.length; i++) {
		addcars[i].onclick = function() {
			alert("加入购物车成功");
		}
	}
}
addcar();
