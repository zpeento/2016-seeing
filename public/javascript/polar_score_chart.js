//views/single_film/news.html 极性评分

$(function(){
	var myChart = echarts.init(document.getElementById('polar_score_chart'));

	var dataMap = {};

	function dataFormatter(obj) {
	    var pList = ['1','2','3','4','5'];
	    var temp;
	    for (var year = 2002; year <= 2011; year++) {
	        var max = 0;
	        var sum = 0;
	        temp = obj[year];
	        for (var i = 0, l = temp.length; i < l; i++) {
	            max = Math.max(max, temp[i]);
	            sum += temp[i];
	            obj[year][i] = {
	                name : pList[i],
	                value : temp[i]
	            }
	        }
	        obj[year + 'max'] = Math.floor(max / 100) * 100;
	        obj[year + 'sum'] = sum;
	    }
	    return obj;
	}
    // 第一产业
	dataMap.dataPI = dataFormatter({
	    //max : 4000,
	    2011:[136.27,159.72,2905.73,641.42,1306],
	    2010:[124.36,145.58,2562.81,554.48,1095],
	    2009:[118.29,128.85,2207.34,477.59,929],
	    2008:[112.83,122.58,2034.59,313.58,907],
	    2007:[101.26,110.19,1804.72,311.97,762],
	    2006:[88.8,103.35,1461.81,276.77,634],
	    2005:[88.68,112.38,1400,262.42,589],
	    2004:[87.36,105.28,1370.43,276.3,522],
	    2003:[84.11,89.91,1064.05,215.19,420],
	    2002:[82.44,84.21,956.84,197.8,374]
	});
    // 第二产业
	dataMap.dataSI = dataFormatter({
	    //max : 26600,
	    2011:[3752.48,5928.32,13126.86,6635.26,803],
	    2010:[3388.38,4840.23,10707.68,5234,6367],
	    2009:[2855.55,3987.84,8959.83,3993.8,5114],
	    2008:[2626.41,3709.78,8701.34,4242.36,4376],
	    2007:[2509.4,2892.53,7201.88,3454.49,3193],
	    2006:[2191.43,2457.08,6110.43,2755.66,2374],
	    2005:[2026.51,2135.07,5271.57,2357.04,1773],
	    2004:[1853.58,1685.93,4301.73,1919.4,1248],
	    2003:[1487.15,1337.31,3417.56,1463.38,967],
	    2002:[1249.99,1069.08,2911.69,1134.31,754]
	});
	var option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2002-01-01','2003-01-01','2004-01-01','2005-01-01',
                '2006-01-01', '2007-01-01','2008-01-01','2009-01-01','2010-01-01','2011-01-01'
            ],
            label: {
                formatter : function(s) {
                    return (new Date(s)).getFullYear();
                },
                textStyle: {
                   color:'#fff', // 用 legend.textStyle.fontSize 更改示例大小
                   fontSize:20
                }
            }
        },
        title: {
        },
        tooltip: {
            textStyle:{
                fontSize:20
            }
        },
        legend: {
            x: 'right',
            data: ['正向情感', '负向情感'],
            selected: {
            },
            textStyle: {
               color:'#fff',
               fontSize:20 // 用 legend.textStyle.fontSize 更改示例大小
            }
        },
        calculable : true,
        grid: {
            top: 80,
            bottom: 100
        },
        xAxis: [
            {
                'type':'category',
                'axisLabel':{'interval':0},
                'data':[
                    '1','2','3','4','5'
                ],
                splitLine: {show: false},
                axisLine: {
	            	lineStyle: {
	            		color:'#fff'
	            	}
	            },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize:20
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '情感评分',
                axisLine: {
	            	lineStyle: {
	            		color:'#fff'
	            	}
	            },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize:20
                    }
                },
                nameTextStyle:{
                    fontSize:20
                }
            }
        ],
        series: [
            {name: '正向情感', type: 'bar',
            itemStyle:{
                normal:{
                    color:'#2cf8ff'
                }
            }},
            {name: '负向情感', type: 'bar',
            itemStyle:{
                normal:{
                    color:'#c23531',
                    fontSize:20

                }
            }}
        ]
    },
    options: [
        {
            title: {},
            series: [
                {data: dataMap.dataPI['2002']},
                {data: dataMap.dataSI['2002']}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataPI['2003']},
                {data: dataMap.dataSI['2003']}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataPI['2004']},
                {data: dataMap.dataSI['2004']}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataPI['2005']},
                {data: dataMap.dataSI['2005']}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataPI['2006']},
                {data: dataMap.dataSI['2006']}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataPI['2007']},
                {data: dataMap.dataSI['2007']}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataPI['2008']},
                {data: dataMap.dataSI['2008']}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataPI['2009']},
                {data: dataMap.dataSI['2009']}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataPI['2010']},
                {data: dataMap.dataSI['2010']}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataPI['2011']},
                {data: dataMap.dataSI['2011']}
            ]
        }
    ]
};

	myChart.setOption(option);
})
