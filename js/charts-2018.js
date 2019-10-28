var chartBugByProTest = echarts.init(document.getElementById('chartBugByProTest'),"walden"),
chartBugByXuqiuBug = echarts.init(document.getElementById('chartBugByXuqiuBug'),"walden");
chartBugByMonth = echarts.init(document.getElementById('chartBugByMonth'),"walden");
chartBugByLevel = echarts.init(document.getElementById('chartBugByLevel'),"walden");

// 线上线下bug
chartBugByProTest.setOption({
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['线下bug', '线上bug']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '18%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['蔺智清','王明佳','刘海亮']
    },
    series: [
        {
            name: '线下bug',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [77, 32, 23]
        },
        {
            name: '线上bug',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [9, 7, 4]
        }
    ]
});

// 需求bug总计数
chartBugByXuqiuBug.setOption({
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['需求', 'bug']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '18%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['蔺智清','王明佳','刘海亮']
    },
    series: [
        {
            name: 'bug',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [86, 39, 27]
        },
        {
            name: '需求',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [49, 72, 69]
        }
    ]
});

// bug数按月统计
chartBugByMonth.setOption({
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['蔺智清','王明佳','刘海亮']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '18%',
        containLabel: true
    },
    xAxis:  {
        type: 'category',
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '蔺智清',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'insideTop'
                }
            },
            data: [5, 31, 8, 13, 2, 5, 8, 0, 2, 7, 4, 1]
        },
        {
            name: '王明佳',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'insideTop'
                }
            },
            data: [0, 0, 0, 3, 0, 3, 3, 1, 2, 11, 8, 8]
        },
        {
            name: '刘海亮',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'insideTop'
                }
            },
            data: [0, 0, 0, 0, 2, 6, 6, 1, 8, 4, 0, 0]
        }
    ]
});


// bug数按严重程度分类
chartBugByLevel.setOption({
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['微小', '一般', '严重']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '18%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['蔺智清','王明佳','刘海亮']
    },
    series: [
        {
            name: '微小',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [18, 1, 0]
        },
        {
            name: '一般',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [67, 34, 24]
        },
        {
            name: '严重',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [1, 4, 3]
        }
    ]
});