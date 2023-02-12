var count = 110;
var interval = setInterval(function(){
  document.getElementById('countdown').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('countdown').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);