			var num=0;
            var wraps=document.getElementById('wraps');
            var list=document.getElementById('list').children;
            var timer;
            function run(){
                
                for(var i=0;i<list.length;i++){
                    list[i].removeAttribute('class');
                }
                
                wraps.style.transform='translateX('+500*num+'px)'
                
                list[num].setAttribute('class','current');
            }

            function go(){
                timer=setInterval(function(){
                    num++;
                    if(num>4){
                        num=0;
                    }
                    run();
                    
                },1500)
            }
            go()     
            box.onmouseenter=function(){
                clearInterval(timer);
                left.removeAttribute('class');
                right.removeAttribute('class');
            }          
            box.onmouseleave=function(){
                left.setAttribute('class','play');
                right.setAttribute('class','play');
                go()
            }           
            for(var i=0;i<list.length;i++){
                list[i].index=i;
                list[i].onclick=function(){
                    num=this.index
                    run()
                }
            }
            right.onclick=function(){
                num++;
                if(num>4){
                    num=0;
                }
                run();
            }
            left.onclick=function(){
                num--;
                if(num<0){
                    num=4;
                }
                run();
            }
			// 轮播图
			
			
			
			
			
			var btn1=document.getElementById('btn1');
			// btn1.onclick=function(){
				
			// }
			
			for(var i=0;i<box.length;i++){
				box.children[i].children[0].style.display='inline-block';
			btn1.onclick=function(){
					if (this.childre[0].style.display=='none') {
					this.children[0].style.display='inline-block';	
					} else{
						this.children[0].style.display='none';
					}
				}
			}