//views/single_film/user_reputation.html 用户口碑——话题识别——力导图

$(function(){
	var myChart = echarts.init(document.getElementById('topic_identification_force'));
	myChart.showLoading();
	$.get('../../public/javascript/data/topic_identification_data.gexf', function (xml) {
	    myChart.hideLoading();

	    var graph = echarts.dataTool.gexf.parse(xml);
	    var categories = [];
	    for (var i = 0; i < 9; i++) {
	        categories[i] = {
	            name: '话题' + i
	        };
	    }
	    graph.nodes.forEach(function (node) {
	        node.itemStyle = null;
	        node.value = node.symbolSize;
	        node.symbolSize /= 1.5;
	        node.label = {
	            normal: {
	                show: node.symbolSize > 30
	            }
	        };
	        node.category = node.attributes.modularity_class;
	    });
	    var option = {
	        title: {
	            // text: 'Les Miserables',
	            // subtext: 'Default layout',
	            top: 'bottom',
	            left: 'right'
	        },
	        tooltip: {},
	        // legend: [{
	        //     // selectedMode: 'single',
	        //     data: categories.map(function (a) {
	        //         return a.name;
	        //     })
	        // }],
	        
	        animationDuration: 1500,
	        animationEasingUpdate: 'quinticInOut',
	        series : [
	            {
	                // name: 'Les Miserables',
	                type: 'graph',
	                layout: 'none',
	                data: graph.nodes,
	                links: graph.links,
	                categories: categories,
	                roam: true,
	                label: {
	                    normal: {
	                        position: 'right',
	                        formatter: '{b}'
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        color: 'source',
	                        curveness: 0.3
	                    }
	                }
	            }
	        ]
	    };

	    myChart.setOption(option);
	}, 'xml');

})