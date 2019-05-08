

function drawChart(data){

Highcharts.chart('container',prepareChartData(data));
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
                            xData.push([('0'+date.getHours()).slice(-2),('0'+date.getMinutes()).slice(-2)].join(":")
                                        +" "+DAYS[date.getDay()]
                                        +" "+date.getDate()
                                        +" "+MONTHS[date.getMonth()]
                                        );
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
                        }]
};


console.log('chartData',chartData);
return chartData;
}
