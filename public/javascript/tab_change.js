// tab切换

$(function(){
	var buttons = $(".tab_change_buttons li");

	buttons.on('click',function(){
		if(!$(this).hasClass('active')){
			console.log(this.id);
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			var cur_content = $('#'+ this.id + '_content');
			cur_content.siblings().hide();
			cur_content.show();
		}
	})
})