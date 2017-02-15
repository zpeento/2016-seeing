//views/single_film/box_office_analysis.html

$(function(){
	box_office_trend(['周一','周二','周三','周四','周五','周六','周日'],[11, 11, 15, 13, 12, 13, 10]);

	function box_office_trend(xDatasets,yDatasets){
 	// 基于准备好的dom，初始化echarts实例
	 	var myChart = echarts.init(document.getElementById('line_chart'));

	    // 指定图表的配置项和数据
	    var option = {
			title: {
			},
			tooltip: {
			    trigger: 'axis'
			},
			xAxis:  {
			    type: 'category',
			    boundaryGap: false,
			    data: xDatasets,
			    splitLine: {
	            	show:false
	            },
	            axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisLine: {
	            	lineStyle: {
	            		color:'#3dffff'
	            	}
	            }
			},
			yAxis: {
			    type: 'value',
			    name : '(万元)',
			    axisLabel: {
			        formatter: '{value}'
			    },
			    axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisLine: {
	            	lineStyle: {
	            		color:'none'
	            	}
	            },
	            splitLine: {
	            	show:false
	            }
			},
			series: [
			    {
			        name:'票房(万元)',
			        type:'line',
			        data:yDatasets,
			        itemStyle : {  
	                    normal : {  
	                        color:'#f1ab66',  
	                        lineStyle:{  
	                            color:'#f1ab66'  
	                        }  
	                    }  
	                }
			    }
			]
		};

	    // 使用刚指定的配置项和数据显示图表。
	    myChart.setOption(option);
 	}
}) 

 
    