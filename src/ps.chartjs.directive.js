/* IMPORTANT!
 - attribute should be applied to canvas
 - ChartJS 2.0 is required
 */


(function() {
    angular.module('ps.chartjs', [])
        .directive("psChart",[psChart]);

    function psChart() {
        return {
            restrict: "A",
            scope: {
                chartType: "@",
                chartData: "=",
                chartOptions: "=",
                chartObj: "=",
                chartShow: "="
            },
            link: function($scope, element, attrs) {
                var ctx = element[0].getContext("2d");
                var chartObj = {};

                if ($scope.chartShow == undefined) {
                    initChart();
                }

                $scope.$watch("chartShow", function(val) {
                    val === true ? initChart() : destroyChart();
                });

                function initChart() {
                    chartObj = new Chart(ctx, {
                        type: $scope.chartType,
                        data: $scope.chartData,
                        options: $scope.options || {}
                    });

                    if ($scope.chartObj) {
                        $scope.chartObj = chartObj;
                    }
                }

                function destroyChart() {
                    if (chartObj.destroy != undefined)  chartObj.destroy();
                }
            }
        }
    }
})();
