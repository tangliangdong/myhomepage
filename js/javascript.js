$(function(){
	var IS_PHONE=false;
	if(navigator.platform.indexOf('Win32')!=-1){ 
        //做pc端
        IS_PHONE=false;
    }else{ 
       	//做手机端
       	IS_PHONE=true;
    }
	
	if(IS_PHONE===false){
		$('.blog').attr('href','blog/');
		$('.whatever').attr('href','imageWall/');
	}else{
		$('#head').removeClass('head').addClass('head_phone');
	}

	//pc

	/*
	头像hover事件
	 */
	$('#head').hover(function(){
   	 	$('.identity').animate({'left':'66%','opacity':1},500);
   	 	linkTime();
	},function(){
		$('.identity').animate({'left':'72%','opacity':0},400);
	});
	/*
	小链接hover事件
	 */
	$('.blog img').hover(function(){
		var title = $('.blog').attr('data');
		$('.hint em').text(title);
		
		$('.hint').animate({'opacity':1,'top':'520px'},500,function(){
			$('.blog img').bind('click',function(){
				 window.location.href="blog/";
			})
		});
	},function(){
		$('.hint').animate({'opacity':0,'top':'550px'},400);
		$('.blog img').unbind('click');
		
	});

	$('.whatever img').hover(function(){
		var title = $('.whatever').attr('data');
		$('.hint2 em').text(title);
		
		$('.hint2').animate({'opacity':1,'top':'670px'},500,function(){
			$('.whatever img').bind('click',function(){
				 window.location.href="imageWall/";
			})
		});
	},function(){
		$('.hint2').animate({'opacity':0,'top':'700px'},400);
		$('.whatever img').unbind('click');
	});
	//右侧菜单事件
	window.Item_isclick=false;
	var	link_ishover=false;
	window.navClock;
	$('.item').on({
		mousedown:function(){
			$('.item span').css({'box-shadow':'none','background':'#4f4f4f'});
			console.log('123');
		},
		click:function(){
			if(!Item_isclick){
				$('.nav1').css('display','block');
				$('.nav1').animate({'opacity':1},600);
				navClock=setTimeout('linkTime()',4000);
				Item_isclick=true;
			}else{
				clearTimeout(navClock);
				$('.nav1').animate({'opacity':0},600,function(){
					$('.nav1').css('display','none');
				});
				
				Item_isclick=false;
			}
			
		},
		mouseup:function(){
			$('.item span').css({'box-shadow':'2px 3px 1px #D3D3D3','background':'#333333'});
		}
	});
	$('.nav1').hover(function(){
		clearTimeout(navClock);
	},function(){
		navClock=setTimeout('linkTime()',4000);
	})
	
	
})
//右侧菜单延时消失的事件
function linkTime(){
	if(Item_isclick){
		clearTimeout(navClock);
		$('.nav1').animate({'opacity':0},600,function(){
			$('.nav1').css('display','none');

			Item_isclick=false;
		});
			
	}
}