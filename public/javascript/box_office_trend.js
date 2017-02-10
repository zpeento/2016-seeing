//views/single_film/box_office_analysis.html

$(function(){
	box_office_trend(['周一','周二','周三','周四','周五','周六','周日'],[11, 11, 15, 13, 12, 13, 10]);

	function box_office_trend(xDatasets,yDatasets){
 	// 基于准备好的dom，初始化echarts实例
	 	var myChart = echarts.init(document.getElementById('line_chart'));

	    // 指定图表的配置项和数据
	    option = {
			title: {
			},
			tooltip: {
			    trigger: 'axis'
			},
			xAxis:  {
			    type: 'category',
			    boundaryGap: false,
			    data: xDatasets
			},
			yAxis: {
			    type: 'value',
			    name : '(万元)',
			    axisLabel: {
			        formatter: '{value}'
			    }
			},
			series: [
			    {
			        name:'最高气温',
			        type:'line',
			        data:yDatasets
			    }
			]
		};

	    // 使用刚指定的配置项和数据显示图表。
	    myChart.setOption(option);
 	}
}) 

 
    