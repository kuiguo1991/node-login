<template>
    <div class="yChartsBar">
        <div id="myChart" style="width: 100%;height: 300px;"></div>
    </div>
</template>
<script>
    export default {
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                this.$ajax .get('/api').then(res=>{
                    var ChartsBar=res.data.ChartsBar;
                    var ChartsBarCity=[];
                    var ChartsBarNumber=[];
                    for(let i=0;i<ChartsBar.length;i++){
                        ChartsBarCity.push(ChartsBar[i].CITY);
                        ChartsBarNumber.push(ChartsBar[i].NUMBER)
                    }
                    this.drawBar(ChartsBarCity,ChartsBarNumber);
                })
            },
            drawBar(DATAONE,DATATWO){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                // 绘制图表
                myChart.setOption({
                    title: { text: '在Vue中使用echart' },
                    tooltip: {},
                    xAxis: {
                        data: DATAONE
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: DATATWO
                    }]
                });
                window.onresize = myChart.resize;
            },
        }
    }
</script>
<style scoped>
    .yChartsBar{
        width: 100%;
    }
</style>