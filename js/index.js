
function myMap() {
  const mapCanvas = document.getElementById("map");
  let mapOptions = {
    center: new google.maps.LatLng(50.26, 25.45), zoom: 10
  };
  let map = new google.maps.Map(mapCanvas, mapOptions);
}