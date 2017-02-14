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
                    width:2
                }
                
            },

            emphasis:{
                label : {show : true,
                         textStyle:{
                             fontWeight:900 }
                         },
                nodeStyle : {
                    color:'#f1ab66',
                    borderColor : 'rgba(255,255,255,1)',
                    borderWidth : 3
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
                        borderColor:'#18838b',
                        borderWidth:6,
                        borderWidth : 0,
                        label : {
                            show : true,
                            textStyle:{
                                fontSize:15
                            }
                        }
                
                    },

                    emphasis:{
                        borderWidth:6,
                        borderColor:'#fff',
                        label : {
                            show : true,
                            textStyle:{
                                fontSize:15,
                                fontWeight:700
                            }
                        }
                    }
                }
            }, 

            //第二类型节点的样式

            {
                name : '1',
                symbolSize:25,
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
                        borderColor:'#fff',

                        label : {
                            show : true,
                            textStyle:{
                                fontSize:13,
                                fontWeight:700
                            }
                        }
                    }
                }
            }
        ],

        nodes : [
            {id:0,category:0,name:'film',label:'但丁密码',ignore:false,flag:true,initial:[313,360],fixX:true,fixY:true,card:'film'},
            {id:1,category:1,name:'director',label:'导演',ignore:true,flag:true,initial:[380,270],fixX:true,fixY:true},
            {id:2,category:1,name:'scriptwriter',label:'编剧',ignore:true,flag:true,initial:[380,430],fixX:true,fixY:true},
            {id:3,category:1,name:'role0',label:'演员',ignore:true,flag:true,initial:[235,265],fixX:true,fixY:true},
            {id:4,category:1,name:'role1',label:'演员',ignore:true,flag:true,initial:[230,452],fixX:true,fixY:true},
            {id:5,category:1,name:'role2',label:'演员',ignore:true,flag:true,initial:[440,160],fixX:true,fixY:true}, 
            {id:6,category:1,name:'role3',label:'演员',ignore:true,flag:true,initial:[480,230],fixX:true,fixY:true},
            {id:7,category:2,name:'0',label:'朗·霍华德',ignore:true,flag:true,card:'card',initial:[500,390],fixX:true,fixY:true},
            {id:8,category:2,name:'1',label:'大卫凯普',ignore:true,flag:true,card:'card',initial:[480,495],fixX:true,fixY:true},
            {id:9,category:2,name:'2',label:'汤姆·汉克斯',ignore:true,flag:true,card:'card',initial:[435,545],fixX:true,fixY:true},
            {id:10,category:2,name:'3',label:'汤姆·汉克斯',ignore:true,flag:true,card:'card',initial:[220,140],fixX:true,fixY:true},
            {id:11,category:2,name:'4',label:'汤姆·汉克斯',ignore:true,flag:true,card:'card',initial:[170,180],fixX:true,fixY:true},
            {id:12,category:2,name:'5',label:'刘德华',ignore:true,flag:true,card:'card',initial:[130,230],fixX:true,fixY:true}
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
            // {source : 9,target : 2}, 
            {source : 9,target : 3}, 
            {source : 10,target : 4}, 
            {source : 11,target : 5},
            {source : 12,target : 6}
        ]

    }]
};

(function(){
    // alert(option.series[0].links.length)
    //生成角色一级节点
    // 角色一级节点备用节点位置（一般4个，我预备到6个）
    var nodeSetPrep1 = [[125,420],[140,480],[176,526],[220,570],[510,580],[540,640]];
    // 角色二级节点备用节点位置（一般4个，我预备到6个）
    var nodeSetPrep2 = [[35,380],[50,475],[90,545],[150,605],[180,595],[210,580]];
    // 发行公司节点备用节点位置
    var nodeSetPrep3 = [[250,50],[150,63],[350,75]];
    // 导演节点备用节点位置
    var nodeSetPrep4 = [[110,118],[270,33],[120,83]];
    // 编剧节点备用节点位置
    var nodeSetPrep5 = [[50,210],[120,160],[100,290]];
    var linksSet = option.series[0].links;
    var nodesSet = option.series[0].nodes;
    // 用于存放角色一级节点的id的数组
    var roleList1 = [];
    // 用于存放角色二级节点的id的数组
    var roleList2 = [];
    // 用于存放发行公司的id的数组
    var companyList = [];
    // 用于存放导演的id的数组
    var directorList = [];
    // 用于存放编剧的id的数组
    var scriptwriterList = [];

    for(var i = 0; i<linksSet.length; i++){

        if(linksSet[i].target==4){
            roleList1.push(linksSet[i].source);
        }
        if(linksSet[i].target==10){
            companyList.push(linksSet[i].source);
        }
        if(linksSet[i].target==11){
            directorList.push(linksSet[i].source);
        }
        if(linksSet[i].target==12){
            scriptwriterList.push(linksSet[i].source);
        }

    }

    for(var i = 0; i < roleList1.length; i++){
        nodesSet[roleList1[i]].initial = nodeSetPrep1[i];
        nodesSet[roleList1[i]].fixX = true;
        nodesSet[roleList1[i]].fixY = true;
        for(var j = 0; j < linksSet.length;j++){
            if(roleList1[i]==linksSet[j].target){
                roleList2.push(linksSet[j].source)
            }
        }
    }

    for(var i = 0; i < roleList2.length;i++){
        nodesSet[roleList2[i]].initial = nodeSetPrep2[i];
        nodesSet[roleList2[i]].fixX = true;
        nodesSet[roleList2[i]].fixY = true;
    }


    for(var i = 0 ; i < companyList.length ; i++){
        nodesSet[companyList[i]].initial = nodeSetPrep3[i];
        nodesSet[companyList[i]].fixX = true;
        nodesSet[companyList[i]].fixY = true;
    }

    for(var i = 0 ; i < directorList.length ; i++){
        nodesSet[directorList[i]].initial = nodeSetPrep4[i];
        nodesSet[directorList[i]].fixX = true;
        nodesSet[directorList[i]].fixY = true;
    }

    for(var i = 0 ; i < scriptwriterList.length ; i++){
        nodesSet[scriptwriterList[i]].initial = nodeSetPrep5[i];
        nodesSet[scriptwriterList[i]].fixX = true;
        nodesSet[scriptwriterList[i]].fixY = true;
    }
})()

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