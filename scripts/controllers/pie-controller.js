define([
    './controllers'
], function (controllers) {
    'use strict';

    controllers.controller('pieController', ['$scope', 'echartService', function ($scope, echartService) {
        $scope.pie1 = {
            options: {
                title: {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                toolbox: {
                    show: false,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {"value": 0, "name": "直接访问"},
                            {"value": 0, "name": "邮件营销"},
                            {"value": 0, "name": "联盟广告"},
                            {"value": 0, "name": "视频广告"},
                            {"value": 0, "name": "搜索引擎"}
                        ]
                    }
                ]
            }
        }

      echartService.getPullRequests("./data-demo/pie2.json")
            .then(function (data) {
               var ajaxData = [];
                angular.forEach(data, function (value, key) {
                    ajaxData.push({'name': value['name'], 'value': value['value']});
                });
                $scope.pie1.options.series[0].data = ajaxData;
            });


    }]);
});