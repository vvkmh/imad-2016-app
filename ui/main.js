var like=document.getElementById('like');
var counter=0;
like.onclick= function() {
    
    var countlike=document.getElementById('countlike');
    counter = counter + 1;
    countlike.innerHTML = counter.toString();
};

