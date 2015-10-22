/**
 * Created by zohaib on 10/20/15.
 */
function groupchart(dataset, divid) {
    console.log(dataset);
    var data = [{
            x: dataset.cities,
            y: dataset.pop1980,
            type: 'bar',
            name: 'Pop 1980'
        }, {
            x: dataset.cities,
            y: dataset.pop1990,
            type: 'bar',
            name: 'Pop 1990'
        }, {
            x: dataset.cities,
            y: dataset.pop2000,
            type: 'bar',
            name: 'Pop 2000'
        }],
        layout = {
            barmode: 'group'
        };

    Plotly.plot(divid, data, layout);
}

function multi_line_chart(dataset, divid) {
    var x = dataset.cities,
        pop1980 = {
            x: x,
            y: dataset.pop1980,
            name: 'Pop 1980'
        },
        pop1990 = {
            x: x,
            y: dataset.pop1990,
            name: 'Pop 1990'
        },
        pop2000 = {
            x: x,
            y: dataset.pop2000,
            name: 'Pop 2000'
        },
        layout = {
            yaxis: {
                zeroline: false
            }
        };

    Plotly.plot(divid, [pop1980, pop1990, pop2000], layout);
}