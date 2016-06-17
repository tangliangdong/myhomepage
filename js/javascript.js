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
		}

		//pc

		/*
		头像hover事件
		 */
		$('.head').hover(function(){
	   	 $('.identity').animate({'left':'72%','opacity':1},500);
		},function(){
			$('.identity').animate({'left':'78%','opacity':0},400);
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
	})