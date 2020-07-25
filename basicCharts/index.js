// 数据
let arr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
// 柱形图
let barCharts = echarts.init(document.querySelector('.barCharts'));
let barOption = {
    title: {
        text: 'ECharts 柱形图入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量'],
        right: 10
    },
    xAxis: {
        data: arr
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
barCharts.setOption(barOption);
// 饼状图
// 饼状图数据
let pieArr = [{
        name: '衬衫',
        value: 10
    }, {
        name: '羊毛衫',
        value: 20
    },
    {
        name: '雪纺衫',
        value: 20
    },
    {
        name: '裤子',
        value: 10
    },
    {
        name: '高跟鞋',
        value: 20
    },
    {
        name: '袜子',
        value: 20
    }
]
let pieCharts = echarts.init(document.querySelector('.pieCharts'));
let pieOptions = {
    title: {
        text: 'ECharts 饼状图入门示例'
    },
    tooltip: {},
    series: [{
        type: 'pie',
        data: pieArr
    }]
}
pieCharts.setOption(pieOptions)
// 环形图
let ringArr = [{
        name: '衬衫',
        value: 10
    }, {
        name: '羊毛衫',
        value: 20
    },
    {
        name: '雪纺衫',
        value: 20
    },
    {
        name: '裤子',
        value: 10
    },
    {
        name: '高跟鞋',
        value: 20
    },
    {
        name: '袜子',
        value: 20
    }
]
let ringCharts = echarts.init(document.querySelector('.ringCharts'));
let ringOptions = {
    title: {
        text: 'ECharts 环型图入门示例'
    },
    tooltip: {},
    series: [{
        type: 'pie',
        data: ringArr,
        radius: ['25%', "38%"]
    }, ],

}
ringCharts.setOption(ringOptions)
// 折线图

let lineCharts = echarts.init(document.querySelector('.lineCharts'));
let lineOptions = {
    title: {
        text: 'ECharts 折线图入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量'],
        right: 10
    },
    xAxis: {
        data: arr
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
    }]
}
lineCharts.setOption(lineOptions)