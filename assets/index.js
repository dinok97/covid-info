const home = document.querySelector('#home');
home.addEventListener('click', function(event){
    showHome();
});

const news = document.querySelector('#news');
news.addEventListener('click', function(event){
    showNews()
});

const spreadMap = document.querySelector('#spread-map');
spreadMap.addEventListener('click',  function(event){
    showSpreadMap()
});

function showHome(){
    document.getElementById('first-content').style.display = "block"
    document.getElementById('second-content').style.display = "none";
    document.getElementById('third-content').style.display = "none";
}
function showNews(){
    document.getElementById('first-content').style.display = "none"
    document.getElementById('second-content').style.display = "block";
    document.getElementById('third-content').style.display = "none";
}
function showSpreadMap(){
    document.getElementById('first-content').style.display = "none"
    document.getElementById('second-content').style.display = "none";
    document.getElementById('third-content').style.display = "block";
}

function gMap() {
    var mapProp= {
      center:new google.maps.LatLng(-4.451356, 117.181211),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("google-map"),mapProp);
}