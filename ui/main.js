console.log('Loaded!');

var img = getElementById('fb');
img.src = 'image.png';
img.onclick = function() {
    window.location.href = 'http://putyourlocationhere/';
};
document.body.appendChild(img);