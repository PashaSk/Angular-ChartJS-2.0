/// <reference path="../../node_modules/karma/lib/cli.js" />

describe('PSklyar CharJs directive', function () {
    'use strict';

    beforeEach(module('ps.chartjs'));

    var $compile, $scope, element, $timeout;

    beforeEach(inject(function (_$compile_, _$rootScope_, _$timeout_) {
        $compile = _$compile_;
        $timeout = _$timeout_;
        $scope = _$rootScope_.$new();
        $scope.data = [];
        $scope.options = {};
    }));

    it('should throw an error if no chart type is supplied', function () {
        function testChartTypeRequiredException() {
            element = $compile('<canvas ps-chart chart-data="data" chart-options="options"	chart-obj="Chart.API" width="300" height="300"></canvas>')($scope);
            $scope.$digest();
        }

        expect(testChartTypeRequiredException).toThrowError('No chart type specified');
    });


});