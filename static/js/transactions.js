/**
 * Created by zohaib on 10/20/15.
 */
/**
 * Created by zohaib on 10/20/15.
 */
function transaction_chart(data, divid) {
    var height = 400;
    var width = 800;
    var margin = 40;


    var labelX = 'X';
    var labelY = 'Y';
    var svg = d3.select(divid)
        .append('svg')
        .attr('class', 'chart')
        .attr("width", width + margin + margin)
        .attr("height", height + margin + 2 * margin)
        .append("g")
        .attr("transform", "translate(" + margin + "," + margin + ")");

    var x_values = data.map(function(d, i){
            return +d.Latitude;
        });

    var y_values = data.map(function(d, i){
            return +d.Longitude;
        });

    var Payment_Types = data.map(function(d, i){
            return +d['Payment_Types'];
        });
    Payment_Types = new Set(Payment_Types);
    var x = d3.scale.linear()
        .domain([d3.min(x_values), d3.max(x_values)])
        .range([0, width]);

    var y = d3.scale.linear()
        .domain([d3.min(y_values), d3.max(y_values)])
        .range([height, 0]);


    //var scale = d3.scale.linear()
    //    .domain(values_min_max)
    //    .range([5, 30]);
    var color = d3.scale.range(['#ffff00', '#ff0000', '#ff00ff', '#00ffff']).domain(Payment_Types);

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
            return x(d.Latitude);
        })
        .attr("cy", function (d) {
            return y(+d.Longitude);
        })
        .attr("opacity", function (d) {
            return 1;
        })
        .attr("r", function (d) {
            return 2;
        })
        .style("fill", function (d) {
            return color(d['Payment_Types']);
        });

    //$('.x .tick').each(function (i, element) {
    //    var text = $(element).find('text');
    //    text.html(cities[i]);
    //})
}