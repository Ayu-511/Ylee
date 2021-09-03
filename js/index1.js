var num=0;
var wrap=document.getElementById('wraps');
setInterval(function(){
	num++;
	if(num>4){
		num=0;
	}
	wrap.style.transform='translateX('+-385*num+'px)';
},1500)