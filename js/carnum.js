var allchecks = document.getElementById('allCheck');
//商家
var check1 = document.getElementsByClassName('check1');
//商品
var check2 = document.getElementsByClassName('check2');
//获取商品价格
var prices = document.getElementsByClassName('price');
//计算总价
var allprices = document.getElementsByClassName('allprice');

var list = document.getElementById('lists');

var dels = document.getElementById('dels');
// var dels=document.getElementById('del');


// var num=document.getElementById('nums');
var goodnum = document.getElementsByClassName('goods');
var count;
var sum;
//计算商品数量
function goodnums() {
	count = 0;
	for (var i = 0; i < goodnum.length; i++) {
		count++;
	}
	document.getElementById('nums').innerHTML = '(' + count + ')';
	
	// console.log(count);
}
goodnums();

//单选
function check() {
	var sums=0;
	for (let i = 0; i < check1.length; i++) {
		check1[i].onclick = function() {
			for (let i = 0; i < check2.length; i++) {
				if (check1[i].checked) {
					// sums++;
					check2[i].checked = true;
					
				} else {
					// count--;
					check2[i].checked = false;
					// sum--;
					
				}
				// document.getElementById('sums').innerHTML= '(' + sums + ')';
			}
			
		}
		
	}	
}
check();

//选择一条计算价格
// function checkone() {
// 	sum = 0;
// 	count = 0;
// 	for (let i = 0; i < check2.length; i++) {
// 		check2[i].onclick = function() {
// 			// for (let i = 0; i < check2.length; i++) {
// 				if (check2[i].checked) {
// 					// check1[i]=false;
// 					count++;
// 					sum +=parseFloat( prices[i].innerHTML);
// 					document.getElementById('allprice').innerHTML = sum;
					
					
// 				} else {
// 					// check2[i].checked=false;
// 					check1[i]=false;
// 					count--;
// 					sum -= parseFloat( prices[i].innerHTML);
// 					document.getElementById('allprice').innerHTML = sum;	
// 				}
// 				if (count == 0) {
// 					document.getElementById('allprice').innerHTML = sum;
// 					console.log(document.getElementById('allprice').innerHTML);
// 				}
// 			}
			
// 		}
// }
// checkone();

// 全选
function checkall() {
	if (allchecks.checked) {
		
		for (var i = 0; i < check1.length; i++) {
			check1[i].checked = true;
		}
		for (var j = 0; j < check2.length; j++) {
			check2[j].checked = true;
		}
		
	} else {
		for (var i = 0; i < check1.length; i++) {
			check1[i].checked = false;
		}
		for (var j = 0; j < check2.length; j++) {
			check2[j].checked = false;
		}
	}
	allprice();
	
}
checkall();
// allprice();
// 价格总计
function allprice() {
	sum = 0;
	for (let i = 0; i < check1.length; i++) {
		check1[i].onclick=function(){
				if (check1[i].checked ) {		
					check2[i].checked=true;
					sum +=parseFloat( prices[i].innerHTML);
					document.getElementById('allprice').innerHTML = sum;	
				}
				else{
					check2[i].checked=false;
					sum -= parseFloat( prices[i].innerHTML);
					document.getElementById('allprice').innerHTML = sum;	
				}
		}
	}	
}
allprice();

//删除
dels.onclick = function() {
	var checkbox = list.getElementsByTagName('input');
	confirm('确定要删除选中商品?');
	for (var i = 0; i < checkbox.length; i++) {
		if (checkbox[i].checked) {
			checkbox[i].parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(checkbox[i].parentNode
				.parentNode.parentNode.parentNode);
				
			i--;
			
		}
	}
	goodnums();
	confirm('删除成功');
	
}
