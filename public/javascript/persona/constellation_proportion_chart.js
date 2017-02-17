//views/single_film/persona.html 用户画像-背景特征-教育背景柱状图

$(function(){

	var dataSet = [
	    [55,77,56,16,18,54,24,32,19,64,78,33,20],
	    [25,11,21,50,34,9,22,60,70,30,40,50,24]

	];

	var lineStyle = {
	    normal: {
	        width: 1,
	        opacity: 0.5
	    }
	};

	var option = {
	    title: {
	        left: 'center',
	        textStyle: {
	            color: '#eee'
	        }
	    },
	    // legend: {
	    //     bottom: 5,
	    //     data: ['北京', '上海', '广州'],
	    //     itemGap: 20,
	    //     textStyle: {
	    //         color: '#fff',
	    //         fontSize: 14
	    //     },
	    //     selectedMode: 'single'
	    // },
	    // visualMap: {
	    //     show: true,
	    //     min: 0,
	    //     max: 20,
	    //     dimension: 6,
	    //     inRange: {
	    //         colorLightness: [0.5, 0.8]
	    //     }
	    // },
	    radar: {
	        indicator: [
	            {name: '白羊座', max: 100},
	            {name: '狮子座', max: 100},
	            {name: '巨蟹座', max: 100},
	            {name: '天秤座', max: 100},
	            {name: '射手座', max: 100},
	            {name: '水瓶座', max: 100},
	            {name: '双鱼座', max: 100},
	            {name: '摩羯座', max: 100},
	            {name: '天蝎座', max: 100},
	            {name: '处女座', max: 100},
	            {name: '双子座', max: 100},
	            {name: '金牛座', max: 100}
	        ],
	        shape: 'circle',
	        splitNumber: 4,
	        name: {
	            textStyle: {
	                color: '#fff'
	            }
	        },
	        splitLine: {
	            lineStyle: {
	                color: [
	                    'none'
	                ]
	            }
	        },
	        splitArea: {
	            show: true,
	            areaStyle: {
	            	color:['rgba(1,226,144,0.18)','rgba(1,226,144,0.11)']
	            }
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#034448'
	            }
	        }
	    },
	    series: [
	        {
	            name: '广州',
	            type: 'radar',
	            lineStyle: lineStyle,
	            data: dataSet,
	            symbol: 'none',
	            itemStyle: {
	                normal: {
	                    color: '#bfd07a'
	                }
	            },
	            areaStyle: {
	                normal: {
	                    opacity: 0.5
	                }
	            }
	        }
	    ]
	}

	var myChart = echarts.init(document.getElementById('constellation_proportion'));

    myChart.setOption(option);
})