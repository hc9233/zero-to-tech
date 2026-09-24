var mm=0;
function changeText() {
    
    switch(mm){
        case 0:
            document.getElementById('msg').textContent = '你刚刚触发了一段 JavaScript。';
            break;
        case 1:
            document.getElementById('msg').textContent = '你再次触发了一段 JavaScript。';
            break;
        case 2:
             document.getElementById('msg').textContent = '你又一次触发了一段 JavaScript。';
             btn.disabled = true;
            break;
}   
    mm=(mm+1)%3;
}
  
