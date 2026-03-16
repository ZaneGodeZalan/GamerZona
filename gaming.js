function indie(melyik){
    document.getElementById('turizmusszovegkeret').style.display='none';
    document.getElementById('turizmuskep').src='img/'+melyik+'.jpg';
    document.getElementById('turizmuskepkeret').style.display='block';   
}

function keprejt(melyik){
  document.getElementById('turizmuskepkeret').style.display='none';
  document.getElementById('turizmusszovegkeret').style.display='block';    
}