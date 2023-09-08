var count = 11;
setInterval(function(){
    count--;
    document.getElementById('countDown').innerHTML = count;
    if (count <= 0) {
        window.location.href = 'index.html'; 
    }
},1000);