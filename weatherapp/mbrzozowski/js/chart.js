

function drawChart(data){

var chart = Highcharts.chart('container',prepareChartData(data));
};


function prepareChartData(data){
var chartData = {
                chart: {
                        type: 'line'
                },
                title: {
                        text: 'Daily weather and forecast in ' + data.city.name +', '+data.city.country
                },
                xAxis: {
                        categories: function(){
                        var xData = [];
                        for (x in data.list){
                            var date = new Date(data.list[x].dt*1000)
                            xData.push([('0'+date.getHours()).slice(-2),('0'+date.getMinutes()).slice(-2)].join(":"));
                            }
                        return xData;
                        }()
                },
                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                            }
                        },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                                    },
                            enableMouseTracking: false
                                }
                },
                 series: [{
                        data: function(){
                                        var xData = [];
                                        for (x in data.list){
                                                xData.push(data.list[x].main.temp)
                                            }
                                        return xData;
                                        }()
                        },
                        {
                        data: function(){
                                        xData = [];
                                        for (x in data.list){
                                            xData.push(data.list[x].main.temp_max)
                                        }
                                        return xData;
                                        }()
                        }]
};


console.log('chartData',chartData);
return chartData;
}


var mockChartData = {
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: 'Monthly Average Temperature'
                    },
                    subtitle: {
                        text: 'Source: WorldClimate.com'
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    yAxis: {
                        title: {
                            text: 'Temperature (°C)'
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true
                            },
                            enableMouseTracking: false
                        }
                    },
                    series: [{
                        name: 'Tokyo',
                        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                    }, {
                        name: 'London',
                        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                    }]
                }


