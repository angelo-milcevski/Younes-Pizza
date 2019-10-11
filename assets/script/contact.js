window.onload = function(){
    initMap();
}
// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 57.04511, lng: 9.92075};
    // The map, centered at Uluru
    var map = new google.maps.Map(
    document.getElementById('map'), {
        zoom: 15, 
        center: uluru,
        zoomControl: true,
        scaleControl: false,
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}
    
 src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA2C2COuQLmKAejuQ04QVruGINQjZ51tls&callback=initMap" 

/*Credit to: https://developers.google.com/maps/documentation/javascript/adding-a-google-map */
  