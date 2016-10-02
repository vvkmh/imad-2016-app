var like=document.getElementById('like');
like.onclick= function() {
    
    
    var request= new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200){
                var counter = request.responseText;
                var countlike=document.getElementById('countlike');
                countlike.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET', 'http://vvkmh.imad.hasura-app.io/counter', true);
    request.send(null);
};

window.onload = function(){
        document.getElementById('countlike').innerHTML = counter.toString();
};