var areaData = [[1246406400000, 12.5], [1246492800000, 22.1], [1246579200000, 16], [1246665600000, 17.8], [1246752000000, 21.4], [1246838400000, 21.3], [1246924800000, 18.3], [1247011200000, 15.4]];

var pieData = [["80后", 43], ["70后", 25], ["90后", 14], ["60后", 10], ["00后", 5], ["50后", 3]];

var columnData = [13.9, 4.4, 6.5, 3.1, 7.7, 14.4, 5.8, 12.8, 1.9, 16.1, 0.8, 12.6];

var plotOptions = {

    // 饼状图
    pie: {
        startAngle: -180,
        endAngle: 180,
        innerSize: 170,
        size: 225,
        borderWidth: 0
    },

    // 区域图
    area: {
        fillColor: {
            linearGradient: [0, 300, 0, 0],
            stops: [
                [0, 'rgba(0, 243, 255, 0.1)'],
                [1, 'rgba(0, 243, 255, 0.8)']
            ]
        },
        lineWidth: 2,
        tooltip: {
            shape: 'callout'
        }
    },

    // 柱状图
    column: {
        borderRadius: 4,
        borderWidth: 0,
        minPointLength: 20 // 柱的最小高度
    },

    // 所有类型
    series: {
        tooltip: {
            shape: 'quare'
        }
    }
};

Highcharts.setOptions({

    // 全部图表不需要title
    title: {text: ''},

    // 默认颜色取值数组
    colors: ['#1fbba6', '#3be3cc', '#8e8c8c', '#a6a6a6', '#bfbebe', '#dadada'],

    // 不要显示图表备注信息
    credits: { enabled: false },

    // tooltip的统一样式
    tooltip: {
        borderColor: 'white',
        backgroundColor: 'white',
        shadow: false,
        style: {
            fontSize: '14px'
        }
    },

    // 全部不需要图例
    legend: { enabled: false },

    // y轴全部不要title
    yAxis: { title: {text: ''} },

    plotOptions: plotOptions,

    // chart统一设置为左侧无边距，不能重新适配绘制，统一背景颜色
    chart: {
        spacingLeft: 0,
        reflow: false,
        backgroundColor: '#efefef'
    }
});

$('body').append($('<div></div>').highcharts({
    chart: { type: 'area' },
    xAxis: { type: 'datetime' },
    series: [{
        name: '每天心情',
        data: areaData
    }]
})).append($('<div></div>').highcharts({
    chart: { type: 'column' },
    xAxis: {
        categories: ["水瓶", "双鱼", "白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯"]
    },
    series: [{
        name: '星座数值',
        data: columnData
    }]
})).append($('<div></div>').highcharts({
    chart: { type: 'pie' },
    series: [{
        name: '年龄分布',
        data: pieData
    }]
})).children().attr('class', 'demo');
