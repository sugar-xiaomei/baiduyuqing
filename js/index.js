$(function(){
	$('#fullpage').fullpage({
		navigation:true,
		navigationTooltips:['登录百度舆情','领先：数据收集与处理','全面：舆情分析逻辑与构架','专业：专业数据可视化'],
	    onLeave:function(index,next,dir){
           if(index===1){
           	$('#header .deng').css('display','inline')
           }
	    },
	    afterLoad:function(name,index){
           if(index===1){
           	$('#header .deng').css('display','none')
           }
	    },
	});

	$('.next').on('click',function(){
		$.fn.fullpage.moveSectionDown()
	})
      $('.app').hover(function(){
         	$('.sanjiao,.popup').css('display','block')
      },function(){
           $('.sanjiao,.popup').css('display','none')
      })
})
  