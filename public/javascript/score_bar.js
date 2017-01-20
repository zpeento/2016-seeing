// film_general_situation

$(function(){
    //读取数据
    score_bar(['11.8%','34.4%','42.3%','9.7%','1.8%'])
})

function score_bar () {
    var stars = $('.star');
    var bars = $('.bar');
    var percents = $('.percent');

    //将百分比数组转化为小数数组
    var param_trans = arguments[0].map(function(value,i){
        console.log(value)
        percents[i].innerHTML = value;
        return parseFloat(value)/100
    });

    //找到数组中最大的数
    var max_percent = param_trans.map(
        function(value){
            return value
        }
    ).sort()[param_trans.length-1];    

    //根据传入的数据设定长度
    param_trans.map(function(value,i){
        console.log(value/max_percent)
        bars[i].style.width = (value/max_percent)*200 + 'px';
    })
} 
