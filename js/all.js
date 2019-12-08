var map;//使用googleMap api
function initMap() {//Google Map api
  map = new google.maps.Map(document.querySelector('.map'),{
    center: {lat:25.015286, lng:121.505052},
    zoom: 12
  });

  var marker = new google.maps.Marker({
    position:{lat:25.015286, lng:121.505052},
    map:map,
    title:'公園店'
  })
 
}





