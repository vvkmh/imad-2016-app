window.onload = function(){
    
        var countlike=document.getElementById('countlike');
        countlike.innerHTML = counter.toString();
};

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

var commentInput=document.getElementById('comment');
var comment=commentInput.value;
var submit=document.getElementById('submit_butn');
submit.onclick= function(){
    
   var names=[ 'name1', 'name2', 'name3'];
   var lsit = '';
   for( var i=0; i< names.length; i++){
       list +='<li>' +names[i] + '</li>';
   }
   var ul = document.getElementById('comments');
   ul.innerHTML = list;
};

