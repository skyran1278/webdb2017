var run = function() {;
    console.log('執行到了');
    var svg = d3.select('#output');

    var c1 = svg.append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 40)
    .attr('stroke', 'green')
    .attr('stroke-width', 4)
    .attr('fill', 'yellow');
    document.querySelector('#introduce').innerHTML = '<h4>I am Skyran.</h4><hr /><h4>I am very interested in JS.</h4><hr /><h4>Thank you for providing such a good course XDDD</h4>';
};


$('#run').bind('click', run);