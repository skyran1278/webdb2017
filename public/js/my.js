var run = function() {;
    console.log('執行到了');
    // var svg = d3.select('#output');

    // var c1 = svg.append('circle')
    // .attr('cx', 50)
    // .attr('cy', 50)
    // .attr('r', 40)
    // .attr('stroke', 'green')
    // .attr('stroke-width', 4)
    // .attr('fill', 'yellow');
    document.getElementById('det').className = 'head';
    document.querySelector('#introduce').innerHTML = '<h4 class="who">I am Skyran.<hr />I am very interested in JS.<hr />Thank you for providing such a good course XDDD</h4>';

    // Pause(this,1000);//調用暫停函數
    // this.NextStep = function(){
      
    // }
    // SetTimeOut(,1000);
    
       
    

};

$('#run').bind('click', run);