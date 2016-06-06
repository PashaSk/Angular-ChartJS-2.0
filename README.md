# Angular-ChartJS-2.0
Simple and flexible angular directive for charting with ChartJS 2.0

##Usage Example:

**for this version you should append function to your custom directive:**

example:
```
myModule.directive("mcChart", [mcChartJs]);

```


```
Embedding the canvas
<canvas id="chart"
				mc-chart
				chart-type="bar"
				chart-data="data"
				chart-options="options"
				chart-obj="ChartControllObject"
				chart-show="SomeShowCondition"
				class="some_class"></canvas>
```

###Required params:
- chart-type: string, "bar, line, etc.."
- chart-data: object, {labels: [], datasets: {}} f.e.:

```
Data example:
$scope.data = {
				labels: [1, 4, 5, 1, 3, 10],
				datasets: [{
					label: "foo",
					backgroundColor: 'rgba(255,204,51,0.8)',
					hoverBackgroundColor: 'rgba(255,204,51,1)',
					borderColor: 'rgba(255,204,51,1 )',
					hoverBorderColor: 'rgba(255,204,51,1 )',
					data: [50, 23, 10, 200, 30, 40]
				}, {
					label: "bar",
					backgroundColor: 'rgba(239,130,32,0.8)',
					hoverBackgroundColor: 'rgba(239,111,32,1)',
					borderColor: 'rgba(239,130,32,0.8)',
					hoverBorderColor: 'rgba(239,111,32,1)',
					data: [1, 2, 3, 55, 77, 10]
				}]
			};
```

- chart-options: ChartJS 2.0 options, from [DOCS](http://www.chartjs.org/docs/)
- chart-obj[optional]: a variable, to controll chart from outside, using default API from docs.
- chart-show[optional]: bool, some condition to hide/show chart if needed

