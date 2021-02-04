<template>
    <div class="yChartsLine">
        <div id="myChartLine" style="width: 100%;height: 300px;" ></div>
    </div>
</template>
<script>
    //引入highcharts
    import Highcharts from 'highcharts/highstock';
    import HighchartsMore from 'highcharts/highcharts-more';
    import HighchartsDrilldown from 'highcharts/modules/drilldown';
    import Highcharts3D from 'highcharts/highcharts-3d';
    import Highmaps from 'highcharts/modules/map';

    export default {
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                this.$ajax.get('/wsdl/Weather/getRegionProvince').then(res=>{
                    //   console.log(res.data.result)
                      var ddd = res.data.result;
                      var data=[];
                      for(var i=0;i<ddd.length;i++){
                          data.push([
                             ddd[i].name,
                             ddd[i].number
                          ])
                      }
                    //   console.log(data)
                      this.getLine(data)
                })
            },
            getLine(data){
                var chart = Highcharts.chart('myChartLine', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: '全球各大城市人口排行'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45  // 设置轴标签旋转角度
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '人口 (万)'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: '人口总量: <b>{point.y:.1f} 万</b>'
                },
                series: [{
                    name: '总人口',
                    data:data,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}', // :.1f 为保留 1 位小数
                        y: 10
                    }
                }]
            });
            }
        }

    }
</script>


