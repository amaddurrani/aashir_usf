!function ($) {
    "use strict";
    $("#sparkline8").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7], {
        type: 'bar',
        barWidth: 15,
        height: '150px',
        barColor: '#149957',
        negBarColor: '#40b87b'});
    $(".sparkline8").sparkline([4, 2], {
        type: 'pie',
        sliceColors: ['#01a8fe', '#ddd']
    });
    $(".sparkline9").sparkline([3, 2], {
        type: 'pie',
        sliceColors: ['#01a8fe', '#ddd']
    });
    $(".sparkline10").sparkline([4, 1], {
        type: 'pie',
        sliceColors: ['#01a8fe', '#ddd']
    });
    $(".sparkline11").sparkline([1, 3], {
        type: 'pie',
        sliceColors: ['#01a8fe', '#ddd']
    });
    $(".sparkline12").sparkline([3, 5], {
        type: 'pie',
        sliceColors: ['#01a8fe', '#ddd']
    });
    $(".sparkline13").sparkline([6, 2], {
        type: 'pie',
        sliceColors: ['#01a8fe', '#ddd']
    });

    //moris chart
    $(function () {


        if ($('#c-weather')[0]) {
            $.simpleWeather({
                location: 'Austin, TX',
                woeid: '',
                unit: 'f',
                success: function (weather) {
                    var html = '<div class="cw-current media">' +
                            '<div class="pull-left cwc-icon cwci-' + weather.code + '"></div>' +
                            '<div class="cwc-info media-body">' +
                            '<div class="cwci-temp">' + weather.temp + '&deg;' + weather.units.temp + '</div>' +
                            '<ul class="cwci-info">' +
                            '<li>' + weather.city + ', ' + weather.region + '</li>' +
                            '<li>' + weather.currently + '</li>' +
                            '</ul>' +
                            '</div>' +
                            '</div>' +
                            '<div class="cw-upcoming"></div>';

                    $("#c-weather").html(html);

                    setTimeout(function () {


                        for (i = 0; i < 5; i++) {
                            var l = '<ul class="clearfix">' +
                                    '<li class="m-r-15">' +
                                    '<i class="cwc-icon cwci-sm cwci-' + weather.forecast[i].code + '"></i>' +
                                    '</li>' +
                                    '<li class="cwu-forecast">' + weather.forecast[i].high + '/' + weather.forecast[i].low + '</li>' +
                                    '<li>' + weather.forecast[i].text + '</li>' +
                                    '</ul>';

                            $('.cw-upcoming').append(l);
                        }
                    });
                },
                error: function (error) {
                    $("#c-weather").html('<p>' + error + '</p>');
                }
            });
        }



        var lineData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Example dataset",
                    fillColor: "transparent",
                    strokeColor: "#d447d3",
                    pointColor: "#d447d3",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#FFCA28",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
				{
                    label: "Example dataset",
                    fillColor: "transparent",
                    strokeColor: "#FFCA28",
                    pointColor: "#009688",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#FFCA28",
                    data: [45, 39, 60, 51, 86, 35, 60]
                },
				{
                    label: "Example dataset",
                    fillColor: "transparent",
                    strokeColor: "#fd982c",
                    pointColor: "#fd982c",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#FFCA28",
                    data: [35, 79, 60, 81, 46, 75, 20]
                },
                {
                    label: "Example dataset",
                    fillColor: "rgba(127, 216, 248, 0.5)",
                    strokeColor: "#7fd8f8",
                    pointColor: "#F44336",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#009688",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        var lineOptions = {
            scaleShowGridLines: true,
            scaleGridLineColor: "#ddd",
            scaleGridLineWidth: 1,
            bezierCurve: true,
            bezierCurveTension: 0.4,
            pointDot: true,
            pointDotRadius: 4,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: true,
            datasetStrokeWidth: 2,
            datasetFill: true,
            responsive: true
        };


        var ctx = document.getElementById("lineChart").getContext("2d");
        var myNewChart = new Chart(ctx).Line(lineData, lineOptions);


        var polarData = [
            {
                value: 300,
                color: "#F44336",
                highlight: "#3d3f4b",
                label: "App"
            },
            {
                value: 140,
                color: "#8BC34A",
                highlight: "#3d3f4b",
                label: "Software"
            },
            {
                value: 200,
                color: "#FFCA28",
                highlight: "#3d3f4b",
                label: "Laptop"
            }
        ];

        var polarOptions = {
            scaleShowLabelBackdrop: true,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBeginAtZero: true,
            scaleBackdropPaddingY: 1,
            scaleBackdropPaddingX: 1,
            scaleShowLine: true,
            segmentShowStroke: true,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: true,
            animateScale: false,
            responsive: true

        };

        var ctx = document.getElementById("polarChart").getContext("2d");
        var myNewChart = new Chart(ctx).PolarArea(polarData, polarOptions);

        var barData = {
            labels: ["Monday", "Tuesday", "Wedneday", "Thrusday", "Friday"],
            datasets: [
                {
                    label: "My Second dataset",
                    fillColor: "#F44336",
                    strokeColor: "#F44336",
                    highlightFill: "#8BC34A",
                    highlightStroke: "#8BC34A",
                    data: [28, 48, 40, 19, 86]
                }
            ]
        };

        var barOptions = {
            scaleBeginAtZero: true,
            scaleShowGridLines: true,
            scaleGridLineColor: "rgba(0,0,0,.01)",
            scaleGridLineWidth: 1,
            barShowStroke: true,
            barStrokeWidth: 1,
            barValueSpacing: 1,
            barDatasetSpacing: 1,
            responsive: true
        };


   

        var radarData = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
             datasets: [
                {
                    label: "Example dataset",
                    fillColor: "transparent",
                    strokeColor: "#d447d3",
                    pointColor: "#d447d3",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#FFCA28",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
				{
                    label: "Example dataset",
                    fillColor: "transparent",
                    strokeColor: "#FFCA28",
                    pointColor: "#009688",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#FFCA28",
                    data: [45, 39, 60, 51, 86, 35, 60]
                },
				{
                    label: "Example dataset",
                    fillColor: "transparent",
                    strokeColor: "#fd982c",
                    pointColor: "#fd982c",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#FFCA28",
                    data: [35, 79, 60, 81, 46, 75, 20]
                },
                {
                    label: "Example dataset",
                    fillColor: "rgba(127, 216, 248, 0.5)",
                    strokeColor: "#7fd8f8",
                    pointColor: "#F44336",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#009688",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        var radarOptions = {
            scaleShowLine: true,
            angleShowLineOut: true,
            scaleShowLabels: false,
            scaleBeginAtZero: true,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 10,
            pointLabelFontColor: "#666",
            pointDot: true,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: true,
            datasetStrokeWidth: 2,
            datasetFill: true,
            responsive: true
        };

      

        var data = [{
                label: "Sales 1",
                data: 21,
                color: "#d3d3d3"
            }, {
                label: "Sales 2",
                data: 3,
                color: "#bababa"
            }, {
                label: "Sales 3",
                data: 15,
                color: "#79d2c0"
            }, {
                label: "Sales 4",
                data: 52,
                color: "#01a8fe"
            }];

        var doughnutData = [
            {
                value: 300,
                color: "#6cc5f3",
                highlight: "#01a8fe",
                label: "Chorme"
            },
            {
                value: 150,
                color: "#dedede",
                highlight: "#01a8fe",
                label: "Mozilla"
            },
            {
                value: 130,
                color: "#43b9f5",
                highlight: "#01a8fe",
                label: "Safari"
            }
        ];

        var doughnutOptions = {
            segmentShowStroke: true,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 4,
            percentageInnerCutout: 45, // This is 0 for Pie charts
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: true,
            animateScale: false,
            responsive: true
        };


       

    });

     Morris.Bar({
        element: 'morris-bar-chart',
        data: [{ y: '2006', a: 60, b: 50 },
            { y: '2007', a: 75, b: 65 },
            { y: '2008', a: 50, b: 40 },
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 90 } ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true,
          gridTextColor: '#949ba2',
        barColors: ['#21bdf8', '#ff9833']
        
    });
	
	    //line chart
     Morris.Line({
        element: 'morris-line-chart',
        data: [{ y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75, b: 65 },
            { y: '2008', a: 50, b: 40 },
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 90 } ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true,
          gridTextColor: '#949ba2',
        lineColors: ['#21bdf8','#ff9833']
    });
    (function () {
        $('#cw-body').fullCalendar({
                                                                                                                   
                                                         header: {
                left: 'prev, next',
                center: 'title',
                right: 'month, agendaWeek, agendaDay'
            },
            buttonIcons: {
                prev: 'none fa fa-arrow-left',
                next: 'none fa fa-arrow-right',
                prevYear: 'none fa fa-arrow-left',
                nextYear: 'none fa fa-arrow-right'
            },
                                                          defaultDate: '2014-06-12',
                                                          editable: true,
                                                          events: [
                                                              {
                                                                  title: 'All Day',
                                                                  start: '2014-06-01',
                                                                  className: 'bgm-cyan'
                                                              },
                                                              {
                                                                  title: 'Long',
                                                                  start: '2014-06-07',
                                                                  end: '2014-06-8',
                                                                  className: 'bgm-orange'
                                                              },
                                                              {
                                                                  id: 999,
                                                                  title: 'Repeat',
                                                                  start: '2014-06-09',
                                                                  className: 'bgm-lightgreen'
                                                              },
                                                              {
                                                                  id: 999,
                                                                  title: 'Repeat',
                                                                  start: '2014-06-16',
                                                                  className: 'bgm-lightblue'
                                                              },
                                                              {
                                                                  title: 'Meet',
                                                                  start: '2014-06-12',
                                                                  end: '2014-06-12',
                                                                  className: 'bgm-green'
                                                              },
                                                              {
                                                                  title: 'Lunch',
                                                                  start: '2014-06-10',
                                                                  className: 'bgm-cyan'
                                                              },
                                                              {
                                                                  title: 'Birthday',
                                                                  start: '2014-06-13',
                                                                  className: 'bgm-amber'
                                                              },
                                                              {
                                                                  title: 'Google',
                                                                  url: 'http://google.com/',
                                                                  start: '2014-06-28',
                                                                  className: 'bgm-amber'
                                                              }
                                                          ]
                                                      });
    })();
}(window.jQuery);