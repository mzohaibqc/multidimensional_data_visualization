/**
 * Created by zohaib on 10/20/15.
 */
function bubble_chart(data, cities) {
    var height = 400;
    var width = 800;
    var margin = 40;


    var labelX = 'X';
    var labelY = 'Y';
    var svg = d3.select('#bubble_chart')
        .append('svg')
        .attr('class', 'chart')
        .attr("width", width + margin + margin)
        .attr("height", height + margin + 2 * margin)
        .append("g")
        .attr("transform", "translate(" + margin + "," + margin + ")");

    var x = d3.scale.ordinal()
        .domain(cities)
        .rangeBands([0, width]);

    var y = d3.scale.ordinal()
        .domain([1980, 1990, 2000])
        .rangeBands([height, 0]);

    var values_min_max = [d3.min(data, function (d) {
        return d.size;
    }), d3.max(data, function (d) {
        return d.size;
    })];
    var scale = d3.scale.linear()
        .domain(values_min_max)
        .range([5, 30]);
    var color = d3.scale.category10().domain(cities);

    var xAxis = d3.svg.axis().scale(x);
    var yAxis = d3.svg.axis().scale(y).orient("left");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", 20)
        .attr("y", -margin)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(labelY);
    // x axis and label
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("x", width + 20)
        .attr("y", margin - 10)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(labelX);

    svg.selectAll("circle")
        .data(data)
        .enter()
        .insert("circle")
        .attr("cx", function (d) {
            return d.x * x.rangeBand() + x.rangeBand() / 2;
        })
        .attr("cy", function (d) {
            return y(d.y) + y.rangeBand() / 2;
        })
        .attr("opacity", function (d) {
            return 1;
        })
        .attr("r", function (d) {
            return scale(d.size);
        })
        .style("fill", function (d) {
            return color(d.name);
        });

    $('.x .tick').each(function (i, element) {
        var text = $(element).find('text');
        text.html(cities[i]);
    })
}