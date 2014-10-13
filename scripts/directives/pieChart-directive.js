define([
    './directives',
    'echarts',
    'echarts/chart/pie'
], function (directives, echarts) {
    'use strict';
    directives.directive('pieChart', [function () {

        return {
            restrict: 'E',
            template: '<div class="chart"></div>',
            replace: true,
            scope: {
                "options": "=",
                "height": "="
            },
            link: function (scope, element) {
                //设置饼图高度
                element[0].style.height = scope.height + "px";

                // 基于准备好的dom，初始化echarts图表
                var myChart = echarts.init(element[0]);

                //监听options变化
                scope.$watch('options', function () {
                    myChart.setOption(scope.options);
                }, true);


            }
        };
    }]);
});