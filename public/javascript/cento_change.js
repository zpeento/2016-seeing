// film_general_situation

$(function(){
	var buttons = $('.cento_button button');
	buttons.on('click',function(){
		if(!$(this).hasClass('active')){
			console.log($(this));
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			var cur_content = $('#'+ this.id + '_content')
			cur_content.siblings().hide();
			cur_content.show();
		}
	})
})