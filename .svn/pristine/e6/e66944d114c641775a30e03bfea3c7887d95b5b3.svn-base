<template>
    <div class="yChartsPie">
        <div id="container" style="min-width:400px;height:300px"></div>
    </div>
</template>
<script>
    //引入highcharts
    import Highcharts from 'highcharts/highstock';
    import HighchartsMore from 'highcharts/highcharts-more';
    import HighchartsDrilldown from 'highcharts/modules/drilldown';
    import Highcharts3D from 'highcharts/highcharts-3d';
    import Highmaps from 'highcharts/modules/map';

    HighchartsMore(Highcharts);
    HighchartsDrilldown(Highcharts);
    Highcharts3D(Highcharts);
    Highmaps(Highcharts);
    export default {
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                this.$ajax .get('/api').then(res=>{
                    var ChartsPie=res.data.ChartsPie;
                    var data=[];
                    for (let i=0;i<ChartsPie.length;i++){
                        data.push({
                            name:ChartsPie[i].CITY,
                            y:ChartsPie[i].NUMBER
                        })
                    }
                    this.drawPie(data);
                })
            },
            drawPie(data){
                Highcharts.chart('container', {
                    title: {
                        text: '人口<br>占比',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 50
                    },
                    tooltip: {
                        headerFormat: '{series.name}<br>',
                        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                distance: -50,
                                style: {
                                    fontWeight: 'bold',
                                    color: 'white',
                                    textShadow: '0px 1px 2px black'
                                }
                            },
                            startAngle: -90, // 圆环的开始角度
                            endAngle: 90,    // 圆环的结束角度
                            center: ['50%', '75%']
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '浏览器占比',
                        innerSize: '50%',
                        data: data
                    }]
                });
            }
        }
    }
</script>
<style scoped>
    .yChartsPie{
        width: 100%;
    }
</style>