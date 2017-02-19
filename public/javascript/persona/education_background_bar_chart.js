//views/single_film/persona.html 用户画像-背景特征-教育背景柱状图

$(function(){

	var option = {
	    color: ['#3dffff'],
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	            axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
	            axisTick: {
	                alignWithLabel: true
	            },
	            axisLine: {
	            	lineStyle: {
	            		color:'#3dffff'
	            	}
	            },
	            splitLine: {
	            	show:false
	            }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
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
	            },
	            splitArea: {
		            show: true,
		            areaStyle: {
		            	color:['rgba(2,31,41,0.6)','rgba(2,31,41,0)']
		            }
		        }
	        }
	    ],
	    series : [
	        {
	            name:'直接访问',
	            type:'bar',
	            barWidth: '20%',
	            data:[10, 52, 200, 334, 390, 330, 220],
	            itemStyle : { 
	            	normal: {
	            		label : {
	            			color: '#fff',
	            			show: true, 
	            			position: 'top'
	            		}
	            	}
	            }
	        }
	    ]
	};

	var myChart = echarts.init(document.getElementById('education_background_line'));

    myChart.setOption(option);
})