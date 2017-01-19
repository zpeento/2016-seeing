require.config({
    paths : {
        echarts : '../public/javascript/echarts-2.2.7/build/dist'
    }
});

require([ "echarts", "echarts/chart/bar"], function(ec) {
    var myChart = ec.init(document.getElementById('score_bar'));
    var option = {
        title : {
            show:false,
            text: '世界人口总量',
            subtext: '数据来自网络'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            show:false,
            data:['2011年', '2012年']
        },
        toolbox: {
            show : false
        },
        calculable : false,
        xAxis : [
            {
                type : 'value',
                boundaryGap : [0, 0.01]
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['巴西','印尼','美国','印度','中国','世界人口(万)']
            }
        ],
        series : [
            {
                name:'2011年',
                type:'bar',
                data:[18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
                name:'2012年',
                type:'bar',
                data:[19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    };
    myChart.setOption(option);
})

