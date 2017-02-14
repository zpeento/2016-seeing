//views/single_film/topic_identification.html 人物评价

require.config({
    paths : {
        echarts : '../../public/javascript/lib/echarts-2.2.7/build/dist'
    }
});

require([ "echarts", "echarts/chart/force"], function(ec) {
var myChart = ec.init(document.getElementById('character_evaluation_force'), 'macarons');
var option = {
    tooltip : {
        show : false
    },
    calculable : false,
    animation: false,
    series : [ {
        type : 'force',
        name : "Force tree",
        draggable:false,
        // useWorker:true,
        steps:1,
        gravity:0.6,
        roam:false,
        itemStyle : {

            normal : {
                linkStyle: {
                    type: 'curve',
                    color:'#2aaa90',
                }
                
            },

            emphasis:{
                nodeStyle : {
                    borderWidth : 0
                }
            }
        },

        categories : [ 

            //第一类型节点的样式

            {
                name : '0',
                symbolSize:40,
                itemStyle:{
                    normal:{
                        color:'#24b1b6',
                        borderColor:'#2d7b7e',
                        borderWidth:8,
                        label : {
                            show : true,
                            textStyle:{
                                fontSize:15
                            }
                        }
                
                    },

                    emphasis:{
                        borderWidth:0,
                        borderColor:'#24b1b6'
                        // borderColor:'#fff',
                    }
                }
            }, 

            //第二类型节点的样式

            {
                name : '1',
                symbolSize:15,
                itemStyle:{
                    normal:{
                        color:'#2aaa90',
                        borderWidth : 0,
                        label : {
                            show : true,
                            textStyle:{
                                fontSize:8
                            }
                        } 
                    } 
                }
            }, 

            //第三类型节点的样式

            {
                name : '2',
                symbolSize:30,
                itemStyle:{
                    normal:{
                        color:'#24b6bc',
                        borderWidth : 0,
                        label : {
                            show : true,
                            textStyle:{
                                fontSize:13
                            }
                        } 
                    },

                    emphasis:{
                        borderWidth:4,
                        borderColor:'#637e76',
                        color:'#f1ab66',
                        label : {
                            show : true,
                            textStyle:{
                                fontSize:13
                            }
                        }
                    }
                }
            }
        ],

        nodes : [
            {id:0,category:0,name:'film',label:'但丁密码',ignore:false,flag:true,initial:[255,245],fixX:true,fixY:true,card:'film'},
            {id:1,category:1,name:'director',label:'导演',ignore:false,flag:true,initial:[330,155],fixX:true,fixY:true},
            {id:2,category:1,name:'scriptwriter',label:'编剧',ignore:false,flag:true,initial:[210,140],fixX:true,fixY:true},
            {id:3,category:1,name:'role0',label:'演员',ignore:false,flag:true,initial:[130,225],fixX:true,fixY:true},
            {id:4,category:1,name:'role1',label:'演员',ignore:false,flag:true,initial:[170,342],fixX:true,fixY:true},
            {id:5,category:1,name:'role2',label:'演员',ignore:false,flag:true,initial:[300,367],fixX:true,fixY:true}, 
            {id:6,category:1,name:'role3',label:'演员',ignore:false,flag:true,initial:[375,255],fixX:true,fixY:true},
            {id:7,category:2,name:'0',label:'朗·霍华德',ignore:false,flag:true,card:'card',initial:[335,55],fixX:true,fixY:true},
            {id:8,category:2,name:'1',label:'大卫凯普',ignore:false,flag:true,card:'card',initial:[125,90],fixX:true,fixY:true},
            {id:9,category:2,name:'2',label:'汤姆·汉克斯',ignore:false,flag:true,card:'card',initial:[55,290],fixX:true,fixY:true},
            {id:10,category:2,name:'3',label:'汤姆·汉克斯',ignore:false,flag:true,card:'card',initial:[160,425],fixX:true,fixY:true},
            {id:11,category:2,name:'4',label:'汤姆·汉克斯',ignore:false,flag:true,card:'card',initial:[382,415],fixX:true,fixY:true},
            {id:12,category:2,name:'5',label:'刘德华',ignore:false,flag:true,card:'card',initial:[465,205],fixX:true,fixY:true}
        ],

        links : [ 
            {source : 1,target : 0}, 
            {source : 2,target : 0}, 
            {source : 3,target : 0},
            {source : 4,target : 0}, 
            {source : 5,target : 0}, 
            {source : 6,target : 0}, 
            {source : 7,target :1}, 
            {source : 8,target : 2}, 
            {source : 9,target : 3}, 
            {source : 10,target : 4}, 
            {source : 11,target : 5},
            {source : 12,target : 6}
        ]

    }]
};

myChart.setOption(option);

var ecConfig = require('echarts/config');

//当鼠标点击节点，会展开该节点的延伸

function showNodes(param) {
    var data = param.data;
    if(data.flag == false){
        return false;
    }
    var option = myChart.getOption();
    var nodesOption = option.series[0].nodes;
    var linksOption = option.series[0].links;
    //用于存放所选节点的子节点
    var linksNodes = [];
    //如果flag值为false即为不可点击
    var categoryLength = option.series[0].categories.length;
    //如果所选节点category值最小，即没有子节点，则返回，不执行下面操作
    if (data.category == (categoryLength - 1)) {
        return false;
    }

    //在控制台中打印出相关信息
    // console.log('option:'+JSON.stringify(option));
    // console.log('data:'+JSON.stringify(data));
    
    if (data != null && data != undefined) {
        //如果data值中存在id属性，即点击的是node节点
        if ('id' in data) {
            //将flag值修改为false
            data.flag = false;
            //遍历linksOption,找出所有目标为当前所选节点的结点
            //并将下一级结点的id值存放在linksNodes数组中
            for(var i = 0; i < linksOption.length ; i++){
                if(data.id == linksOption[i].target){
                    linksNodes.push(linksOption[i].source)
                }
            }
            //遍历nodesOption数组，将对应的结点的ignore属性设置为false，即展示出来
            for(var j = 0; j < linksNodes.length ; j++){
                nodesOption[linksNodes[j]].ignore = false;
            }
            //重新配置
            myChart.setOption(option);
        }
    }
}

//当鼠标点击节点时，会显示该节点对应的卡片

function showCard(param) {
    var data = param.data;
    console.log(data);
    if('card' in data){
        var cards = $('.card');

        cards.hide();

        var card_current = $('#'+data.card+'_card');
        card_current[0].style.marginLeft = '0px';
        card_current.fadeIn();

        card_current.animate({marginLeft:"20px"},160);
    }   
}

myChart.on(ecConfig.EVENT.HOVER,showNodes);
myChart.on(ecConfig.EVENT.CLICK,showCard);
});