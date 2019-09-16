var fs = require('fs');
var d3 = require('d3');

var args = process.argv.slice(2);

var arg = args[0]
var path = args[1]


let rawdata = fs.readFileSync(path);

let data = JSON.parse(rawdata)



let x = d3
	.scaleLinear()
	.domain(d3.extent(data.map(function(d){return +d[arg]})))
	.nice()
	.range([0, 500]);


let bins = d3
        .histogram()
        .domain(x.domain())
        .thresholds(x.ticks(40))(data.map(function(d){return +d[arg]}));



let binsNew = bins.map(function(d) {
	return {'len': d.length, 'x0':d.x0, 'x1': d.x1}
})

console.log(JSON.stringify(binsNew))