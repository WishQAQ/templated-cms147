// JavaScript Document
$(document).ready(function(){
    var curr = 0;
    var imgLen=$('#iPlayer #ImgBox').find('a').length;

	$('#iPlayer #LenBox a').each(function(i){
		$(this).click(function(){
			curr = i;
			$('#iPlayer #ImgBox a').eq(i).fadeIn('slow').siblings('a').hide();
			$(this).siblings('a').removeClass('hover').end().addClass('hover');
			return false;
		});
	});
	//鼠标悬停在触发器上时停止自动翻
	$("#iPlayer #ImgBox").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			todo = (curr + 1) % imgLen;
			$('#iPlayer #LenBox a').eq(todo).click();
		},4000);
	}).trigger('mouseleave');
	
	$('#iPlayer #LenBox a').eq(0).click();
});

$(document).ready(function(){
	//案例tab切换
	$(".iCases .iBTitle a:first").addClass("current");
	$(".iCases .ct:first").show().siblings("ul").hide();
	$(".iCases .iBTitle a").hover(function(){
		var index = $(this).index();
		$(this).addClass("current").siblings("a").removeClass("current");
		$(".iCases .ct").eq(index).show().siblings("ul").hide();
	});
	//hover
	$(".iCases li,.iTujie li,.iService a").hover(function(){$(this).addClass("hover");},function(){$(this).removeClass("hover");});
	//首页营销活动
	$(".iSpec li").hover(function(){if(! $(this).hasClass("hover")){$(this).addClass("hover");$(this).siblings("li").removeClass("hover");}});
	//首页设计团队
	$(".iTeam ul li").hover(function(){
		$(this).addClass("hover");
		var i = Math.floor(Math.random()*4+1);
		var $dom = $(this).find(".msg");
		$dom.stop(true,true);
		switch(i){
			case 1:	$dom.css({'top':'-137px','left':'0px'}).attr({'_top':'-137px','_left':'0px'}).animate({'top':'0px','left':'0px'},300);break;
			case 2:	$dom.css({'top':'137px','left':'0px'}).attr({'_top':'137px','_left':'0px'}).animate({'top':'0px','left':'0px'},300);break;
			case 3:	$dom.css({'top':'0px','left':'-184px'}).attr({'_top':'0px','_left':'-184px'}).animate({'top':'0px','left':'0px'},300);break;
			case 4:	$dom.css({'top':'0px','left':'184px'}).attr({'_top':'0px','_left':'184px'}).animate({'top':'0px','left':'0px'},300);break;
		}
	},function(){
		$(this).removeClass("hover");
		var $dom = $(this).find(".msg");
		$dom.stop(true,true);
		var _top = $dom.attr('_top');
		var _left = $dom.attr('_left');
		$dom.animate({'top':_top,'left':_left},300);
	});
	//首页设计团队搜索
	$(".iTeam .form .button").click(function(){
		var position = $(".iTeam #position").val() ? "&keytype=position&keyext="+$(".iTeam #position").val() : '';
		var workday = $(".iTeam #workday").val() ? "&keytype=workday&keyext="+$(".iTeam #workday").val() : '';
		var cost = $(".iTeam #cost").val() ? "&keytype=cost&keyext="+$(".iTeam #cost").val() : '';
		$(".iTeam .form .button").attr("href","/search?mid=106"+ position + workday + cost);
	});

});
