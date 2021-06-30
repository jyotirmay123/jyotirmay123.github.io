// HIGH CHART STUFF
// Always put japi at the end of all import in html.

var chart;
$(document).ready(function() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'reputation-graph',
            defaultSeriesType: 'line',
            zoomType: 'xy',
            backgroundColor: '#ebedf0',
            spacingRight: 20                    },
        credits: {
            enabled: false
        },
        title: {
            text: null
        },
        xAxis: {
            type: 'datetime',
            maxZoom: 14 * 24 * 3600000, // fourteen days
            title: {
                text: null
            },
            labels: {
                style: {
                    "font-family": "'Helvetica Neue',Helvetica,Arial,sans-serif;"
                }
            }
        },
        yAxis: {
            title: {
                text: null
            },
            labels: {
                style: {
                    "font-family": "'Helvetica Neue',Helvetica,Arial,sans-serif;"
                }
            },
            min: 0.6,
            startOnTick: false
        },
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -10,
            y: 50,
            borderWidth: 0,
            itemStyle: {
                "font-family": "'Helvetica Neue',Helvetica,Arial,sans-serif;"
            }
        },
        plotOptions: {
            line: {
                lineWidth: 2,
                marker: {
                    enabled: false,
                    states: {
                        hover: {
                            enabled: true,
                            radius: 5
                        }
                    }
                },
                shadow: false,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                }
            },
            series: {
                animation: false
            }
        },
    
        series: [

            {
                name: 'Stack Overflow',
                pointInterval: 24 * 3600 * 1000,
                pointStart: Date.UTC(2015, 5, 6),
                data: [1,1,1,1,13,13,13,13,13,13,13,13,13,13,13,13,13,23,23,23,23,23,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,65,65,65,65,65,65,87,87,87,87,87,87,87,87,87,87,89,89,89,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,119,139,159,159,159,159,159,159,159,159,159,159,159,169,169,169,169,179,179,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,181,206,206,206,216,218,218,218,218,218,228,228,228,228,228,228,228,228,238,238,237,237,228,232,232,182,180,178,178,178,176,196,228,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,266,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,276,286,286,286,286,286,286,286,286,286,286,286,286,288,288,288,288,288,288,288,288,288,288,288,288,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,300,300,300,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,310,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,320,330,330,330,330,330,330,330,330,330,440,440,440,436,436,436,436,436,436,436,436,436,436,436,436,446,446,446,446,446,446,446,446,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,466,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,476,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,486,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,506,506,506,506,506,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,496,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,506,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,516,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,526,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,528,538,538,538,538,538,538,538,538,538,538,538,538,538,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,548,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,558,568,568,568,568,568,568,568,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,583,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,603,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,613,623,623,623,623,623,623,623,623,623,623,623,623,623,623,623,623,623,623,623,623,623,623,623,633,633,633,633,633,633,633,633,633,633,633,633,633,633,633,633,633,633,633,633,633,633,633,633,633,643,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,653,663,663,663,663,663,673,673,623,623,633,633,633,633,643,653,653,653,653,653,653,653,653,653,653,653,653,653,663,663,663,663,663,663,663,663,683,683,683,683,683,683,683,683,683,693,693,693,693,693,693,693,703,703,703,703,703,703,703,703,703,703,703,713,713,713,723,723,723,723,723,723,723,723,723,723,723,723,723,723,748,748,748,748,748,748,748,748,748,748,748,748,748,748,748,748,748,748,748,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,752,762,762,762,762,762,762,762,762,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,772,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,782,792,792,802,802,802,802,802,802,802,802,802,802,812,812,822,822,822,822,822,822,822,822,832,832,832,832,832,832,832,832,832,832,832,832,832,832,832,832,842,842,842,842,842,842,842,842,842,842,842,842,842,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,852,862,862,862,862,862,862,862,862,862,872,872,872,872,872,872,872,882,882,882,882,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,892,902,902,912,912,912,922,922,922,922,922,922,922,922,922,932,932,932,932,932,932,932,932,932,932,932,932,932,932,932,932,932,932,932,932,932,932,941,941,941,941,941,941,941,941,951,951,951,951,951,961,961,961,961,961,961,961,961,961,961,961,961,961,971,971,971,971,971,971,981,981,981,981,981,981,981,981,981,981,981,981,981,981,981,981,981,981,981,981,981,981,991,1001],
                visible: true
            }
        ]
    });

});
