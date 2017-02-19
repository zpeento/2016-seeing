//views/single_film/news.html 极性评分

$(function(){
	var myChart = echarts.init(document.getElementById('polar_score_chart'));

	var dataMap = {};

	function dataFormatter(obj) {
	    var pList = ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆'];
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

	dataMap.dataGDP = dataFormatter({
	    //max : 60000,
	    2011:[16251.93,11307.28,24515.76,11237.55,14359],
	    2010:[14113.58,9224.46,20394.26,9200.86,11672],
	    2009:[12153.03,7521.85,17235.48,7358.31,9740],
	    2008:[11115,6719.01,16011.97,7315.4,8496.2],
	    2007:[9846.81,5252.76,13607.32,6024.45,6423],
	    2006:[8117.78,4462.74,11467.6,4878.61,4944],
	    2005:[6969.52,3905.64,10012.11,4230.53,3905],
	    2004:[6033.21,3110.97,8477.63,3571.37,3041],
	    2003:[5007.21,2578.03,6921.29,2855.23,2388],
	    2002:[4315,2150.76,6018.28,2324.8,1940]
	});

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

	dataMap.dataTI = dataFormatter({
	    //max : 25000,
	    2011:[12363.18,5219.24,8483.17,3960.87,5015],
	    2010:[10600.84,4238.65,7123.77,3412.38,4209],
	    2009:[9179.19,3405.16,6068.31,2886.92,3696],
	    2008:[8375.76,2886.65,5276.04,2759.46,3212],
	    2007:[7236.15,2250.04,4600.72,2257.99,2467],
	    2006:[5837.55,1902.31,3895.36,1846.18,1934],
	    2005:[4854.33,1658.19,3340.54,1611.07,1542],
	    2004:[4092.27,1319.76,2805.47,1375.67,1270],
	    2003:[3435.95,1150.81,2439.68,1176.65,1000],
	    2002:[2982.57,997.47,2149.75,992.69,811.47]
	});

	dataMap.dataEstate = dataFormatter({
	    //max : 3600,
	    2011:[1000,411,918,224,384],
	    2010:[1006.52,377.59,697.79,192,309],
	    2009:[1062.47,308.73,612.4,173.31,286.65],
	    2008:[844.59,227.88,513.81,166.04,273.3],
	    2007:[821.5,183.44,467.97,134.12,191.01],
	    2006:[658.3,156.64,397.14,117.01,136.5],
	    2005:[493.73,122.67,330.87,106,98.75],
	    2004:[436.11,106.14,231.08,95.1,73.81],
	    2003:[341.88,92.31,185.19,78.73,61.05],
	    2002:[298.02,73.04,140.89,65.83,51.48]
	});

	dataMap.dataFinancial = dataFormatter({
	    //max : 3200,
	    2011:[2215.41,756.5,746.01,519.32,447.46,755.57,207.65,370.78,2277.4,2600.11,2730.29,503.85,862.41,357.44,1640.41,868.2,674.57,501.09,2916.13,445.37,105.24,704.66,868.15,297.27,456.23,31.7,432.11,145.05,62.56,134.18,288.77],
	    2010:[1863.61,572.99,615.42,448.3,346.44,639.27,190.12,304.59,1950.96,2105.92,2326.58,396.17,767.58,241.49,1361.45,697.68,561.27,463.16,2658.76,384.53,78.12,496.56,654.7,231.51,375.08,27.08,384.75,100.54,54.53,97.87,225.2],
	    2009:[1603.63,461.2,525.67,361.64,291.1,560.2,180.83,227.54,1804.28,1596.98,1899.33,359.6,612.2,165.1,1044.9,499.92,479.11,402.57,2283.29,336.82,65.73,389.97,524.63,194.44,351.74,23.17,336.21,88.27,45.63,75.54,198.87],
	    2008:[1519.19,368.1,420.74,290.91,219.09,455.07,147.24,177.43,1414.21,1298.48,1653.45,313.81,497.65,130.57,880.28,413.83,393.05,334.32,1972.4,249.01,47.33,303.01,411.14,151.55,277.66,22.42,287.16,72.49,36.54,64.8,171.97],
	    2007:[1302.77,288.17,347.65,218.73,148.3,386.34,126.03,155.48,1209.08,1054.25,1251.43,223.85,385.84,101.34,734.9,302.31,337.27,260.14,1705.08,190.73,34.43,247.46,359.11,122.25,168.55,11.51,231.03,61.6,27.67,51.05,149.22],
	    2006:[982.37,186.87,284.04,169.63,108.21,303.41,100.75,74.17,825.2,653.25,906.37,166.01,243.9,79.75,524.94,219.72,174.99,204.72,899.91,129.14,16.37,213.7,299.5,89.43,143.62,6.44,152.25,50.51,23.69,36.99,99.25],
	    2005:[840.2,147.4,213.47,135.07,72.52,232.85,83.63,35.03,675.12,492.4,686.32,127.05,186.12,69.55,448.36,181.74,127.32,162.37,661.81,91.93,13.16,185.18,262.26,73.67,130.5,7.57,127.58,44.73,20.36,32.25,80.34],
	    2004:[713.79,136.97,209.1,110.29,55.89,188.04,77.17,32.2,612.45,440.5,523.49,94.1,171,65.1,343.37,170.82,118.85,118.64,602.68,74,11.56,162.38,236.5,60.3,118.4,5.4,90.1,42.99,19,27.92,70.3],
	    2003:[635.56,112.79,199.87,118.48,55.89,145.38,73.15,32.2,517.97,392.11,451.54,87.45,150.09,64.31,329.71,165.11,107.31,99.35,534.28,61.59,10.68,147.04,206.24,48.01,105.48,4.74,77.87,42.31,17.98,24.8,64.92],
	    2002:[561.91,76.86,179.6,124.1,48.39,137.18,75.45,31.6,485.25,368.86,347.53,81.85,138.28,76.51,310.07,158.77,96.95,92.43,454.65,35.86,10.08,134.52,183.13,41.45,102.39,2.81,67.3,42.08,16.75,21.45,52.18]
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
                '2002-01-01','2003-01-01','2004-01-01',
                {
                    value: '2005-01-01',
                    tooltip: {
                        formatter: '{b} GDP达到一个高度'
                    },
                    symbol: 'diamond',
                    symbolSize: 16
                },
                '2006-01-01', '2007-01-01','2008-01-01','2009-01-01','2010-01-01',
                {
                    value: '2011-01-01',
                    tooltip: {
                        formatter: function (params) {
                            return params.name + 'GDP达到又一个高度';
                        }
                    },
                    symbol: 'diamond',
                    symbolSize: 18
                },
            ],
            label: {
                formatter : function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
        },
        tooltip: {},
        legend: {
            x: 'right',
            data: ['第一产业', '第二产业', '第三产业', 'GDP', '金融', '房地产'],
            selected: {
                'GDP': false, '金融': false, '房地产': false
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
                    '北京','天津','河北','山西','内蒙古'
                ],
                splitLine: {show: false},
                axisLine: {
	            	lineStyle: {
	            		color:'#fff'
	            	}
	            }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'GDP（亿元）',
                axisLine: {
	            	lineStyle: {
	            		color:'#fff'
	            	}
	            }
            }
        ],
        series: [
            {name: 'GDP', type: 'bar'},
            {name: '金融', type: 'bar'},
            {name: '房地产', type: 'bar'},
            {name: '第一产业', type: 'bar'},
            {name: '第二产业', type: 'bar'},
            {name: '第三产业', type: 'bar'},
            {
                name: 'GDP占比',
                type: 'pie',
                center: ['75%', '35%'],
                radius: '28%'
            }
        ]
    },
    options: [
        {
            title: {},
            series: [
                {data: dataMap.dataGDP['2002']},
                {data: dataMap.dataFinancial['2002']},
                {data: dataMap.dataEstate['2002']},
                {data: dataMap.dataPI['2002']},
                {data: dataMap.dataSI['2002']},
                {data: dataMap.dataTI['2002']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2002sum']},
                    {name: '第二产业', value: dataMap.dataSI['2002sum']},
                    {name: '第三产业', value: dataMap.dataTI['2002sum']}
                ]}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataGDP['2003']},
                {data: dataMap.dataFinancial['2003']},
                {data: dataMap.dataEstate['2003']},
                {data: dataMap.dataPI['2003']},
                {data: dataMap.dataSI['2003']},
                {data: dataMap.dataTI['2003']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2003sum']},
                    {name: '第二产业', value: dataMap.dataSI['2003sum']},
                    {name: '第三产业', value: dataMap.dataTI['2003sum']}
                ]}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataGDP['2004']},
                {data: dataMap.dataFinancial['2004']},
                {data: dataMap.dataEstate['2004']},
                {data: dataMap.dataPI['2004']},
                {data: dataMap.dataSI['2004']},
                {data: dataMap.dataTI['2004']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2004sum']},
                    {name: '第二产业', value: dataMap.dataSI['2004sum']},
                    {name: '第三产业', value: dataMap.dataTI['2004sum']}
                ]}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataGDP['2005']},
                {data: dataMap.dataFinancial['2005']},
                {data: dataMap.dataEstate['2005']},
                {data: dataMap.dataPI['2005']},
                {data: dataMap.dataSI['2005']},
                {data: dataMap.dataTI['2005']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2005sum']},
                    {name: '第二产业', value: dataMap.dataSI['2005sum']},
                    {name: '第三产业', value: dataMap.dataTI['2005sum']}
                ]}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataGDP['2006']},
                {data: dataMap.dataFinancial['2006']},
                {data: dataMap.dataEstate['2006']},
                {data: dataMap.dataPI['2006']},
                {data: dataMap.dataSI['2006']},
                {data: dataMap.dataTI['2006']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2006sum']},
                    {name: '第二产业', value: dataMap.dataSI['2006sum']},
                    {name: '第三产业', value: dataMap.dataTI['2006sum']}
                ]}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataGDP['2007']},
                {data: dataMap.dataFinancial['2007']},
                {data: dataMap.dataEstate['2007']},
                {data: dataMap.dataPI['2007']},
                {data: dataMap.dataSI['2007']},
                {data: dataMap.dataTI['2007']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2007sum']},
                    {name: '第二产业', value: dataMap.dataSI['2007sum']},
                    {name: '第三产业', value: dataMap.dataTI['2007sum']}
                ]}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataGDP['2008']},
                {data: dataMap.dataFinancial['2008']},
                {data: dataMap.dataEstate['2008']},
                {data: dataMap.dataPI['2008']},
                {data: dataMap.dataSI['2008']},
                {data: dataMap.dataTI['2008']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2008sum']},
                    {name: '第二产业', value: dataMap.dataSI['2008sum']},
                    {name: '第三产业', value: dataMap.dataTI['2008sum']}
                ]}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataGDP['2009']},
                {data: dataMap.dataFinancial['2009']},
                {data: dataMap.dataEstate['2009']},
                {data: dataMap.dataPI['2009']},
                {data: dataMap.dataSI['2009']},
                {data: dataMap.dataTI['2009']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2009sum']},
                    {name: '第二产业', value: dataMap.dataSI['2009sum']},
                    {name: '第三产业', value: dataMap.dataTI['2009sum']}
                ]}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataGDP['2010']},
                {data: dataMap.dataFinancial['2010']},
                {data: dataMap.dataEstate['2010']},
                {data: dataMap.dataPI['2010']},
                {data: dataMap.dataSI['2010']},
                {data: dataMap.dataTI['2010']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2010sum']},
                    {name: '第二产业', value: dataMap.dataSI['2010sum']},
                    {name: '第三产业', value: dataMap.dataTI['2010sum']}
                ]}
            ]
        },
        {
            title : {},
            series : [
                {data: dataMap.dataGDP['2011']},
                {data: dataMap.dataFinancial['2011']},
                {data: dataMap.dataEstate['2011']},
                {data: dataMap.dataPI['2011']},
                {data: dataMap.dataSI['2011']},
                {data: dataMap.dataTI['2011']},
                {data: [
                    {name: '第一产业', value: dataMap.dataPI['2011sum']},
                    {name: '第二产业', value: dataMap.dataSI['2011sum']},
                    {name: '第三产业', value: dataMap.dataTI['2011sum']}
                ]}
            ]
        }
    ]
};

	myChart.setOption(option);
})
