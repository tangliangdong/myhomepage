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

	$('#about').animate({'top':'100px'},800,function(){
		$('.me').animate({'opacity':1}, 400,function(){
			$('#about_hr1').animate({'width':'80%','margin-left':'45px'}, 500,function(){
				$('.major').animate({'opacity':1}, 300,function(){
					$('#about_hr2').animate({'width':'80%','margin-left':'45px'}, 500,function(){
						$('.me_github').animate({'opacity':1}, 300,function(){
							$('#about_hr3').animate({'width':'80%','margin-left':'45px'}, 500,function(){
								$('.me_email').animate({'opacity':1}, 300,function(){
									$('#about_hr4').animate({'width':'80%','margin-left':'45px'},500,function(){
										$('.introduce').animate({'opacity':1}, 300,function(){
											$('.about_nav_head').animate({'opacity':1}, 600,function(){
												$('.nav_div_title').addClass('animated rotateInDownLeft');
												$('#wangxinze').addClass('animated bounceIn');
												setTimeout('label_bounceIn()',400);
											});
										});
									});
								});
							});
						});
					});
				});
				
				
			});
		});


		$('#about_hr1').animate({'width':'80%','margin-left':'45px'}, 400,function(){
			$('#about_hr2').animate({'width':'80%','margin-left':'45px'}, 400,function(){
				$('#about_hr3').animate({'width':'80%','margin-left':'45px'}, 400,function(){
					$('#about_hr4').animate({'width':'80%','margin-left':'45px'}, 400,function(){
						$('.about_nav_head').animate({'opacity':1}, 600);
					});
				});
			});
		});
	});
	$('#about_me').animate({'opacity':1},800);
	$('.about_me_content').animate({'opacity':1},800);
	$('.nav_div').animate({'opacity':1},800);

	var color_set = new Array('#FFC125','#FF4500','#5CACEE','#32CD32','#B23AEE','#EE2C2C','#EE82EE');
	color_set.shuffle();
	var SET_LABEL_COLOR = $('.nav_div .label');
	for (var i = 0; i < SET_LABEL_COLOR.length; i++) {
		$(".label_triangle:eq("+i+")").css('border-right-color',color_set[i]);
		$(".label_main:eq("+i+")").css('background',color_set[i]);
	}
		var origin_color;
	$('.label').hover(function() {
		origin_color = $(this).children('.label_triangle').css('border-right-color');
		origin_color = RGBtoHEX(origin_color);
		var color_list = uniqueArray(color_set,origin_color);
		var random_color_number = _.random(0,color_list.length-2);
		var random_color = color_list[random_color_number];
		
		$(this).children('.label_triangle').css('border-right-color',random_color);
		$(this).children('.label_main').css('background',random_color);
		
	}, function() {
		$(this).children('.label_triangle').css('border-right-color',origin_color);
		$(this).children('.label_main').css('background',origin_color);
	});

	/*右侧菜单事件*/
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

//数组元素乱序高效
if (!Array.prototype.shuffle) {
    Array.prototype.shuffle = function() {
        for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
        return this;
    };
}

//将RGB颜色转换成16进制
function RGBtoHEX(str){
    if (str.substring(0, 3) == 'rgb') {
        var arr = str.split(",");
        var r = arr[0].replace('rgb(','').trim(), g = arr[1].trim(), b = arr[2].replace(')','').trim();
        var hex = [
            toHex(r),
            toHex(g),
            toHex(b)
        ];
        return "#" + hex.join('');              
    }
    else{
        return str;
    }
}
function toHex(N) {
    if (N==null) return "00";
    N=parseInt(N); if (N==0 || isNaN(N)) return "00";
    N=Math.max(0,N); N=Math.min(N,255); N=Math.round(N);
    return "0123456789ABCDEF".charAt((N-N%16)/16) + "0123456789ABCDEF".charAt(N%16);
}
//注意数组下标越界的情况
//去掉数组中去掉color
function uniqueArray(arr,color){
    var newArr = [];
    for(var i in arr){
        if(arr[i]!==color){
           newArr.push(arr[i]);
        }
    }
    return newArr;
}
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
//标签延时出现特效
function label_bounceIn(){
	$('#huangbingbing').addClass('animated bounceIn');
	setTimeout('label_bounceIn2()',400);
}
function label_bounceIn2(){
	$('#hangge').addClass('animated bounceIn');
	setTimeout('label_bounceIn3()',400);
}
function label_bounceIn3(){
	$('#lukonghang').addClass('animated bounceIn');
	setTimeout('label_bounceIn4()',400);
}
function label_bounceIn4(){
	$('#qiyanling').addClass('animated bounceIn');
	setTimeout('label_bounceIn_remove()',400);
}
function label_bounceIn_remove(){
	$('.label').removeClass('animated bounceIn');
	$('.label').css('opacity',1);
}