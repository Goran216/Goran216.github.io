
  var map, directionsService, directionsDisplay, infoWindow;
  var pos = new Object();
  // UNCOMMENT THE CODE BELOW BEFORE DEMO!!!
  // UNCOMMENT THE CODE BELOW BEFORE DEMO!!!
  // UNCOMMENT THE CODE BELOW BEFORE DEMO!!!
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here!');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  function initMap() {
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    var center = new google.maps.LatLng(pos.lat, pos.lng);
    var mapOptions = {
      zoom:15,
      center: center
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    infoWindow = new google.maps.InfoWindow;
    directionsDisplay.setMap(map);
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  function calcRoute() {
    var start = "Gordon House, Barrow St, Dublin 4";
    var end = document.getElementById('end').value;
    var travelMode = document.getElementById('travelMode').value;
    if(travelMode=='WALKING' || travelMode == 'DRIVING') {
      document.getElementById("ticket").style.display='none';
    } else {
      document.getElementById("ticket").style.display='inline-block';
    }
    infoWindow = null;
    var request = {
      origin: start,
      destination: end,
      travelMode: travelMode,
    };

    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
         var getKeys = function(obj){
           var keys = [];
           for(var key in obj){
              keys.push(key);
           }
           return keys;
          }
        // alert(getKeys(result));
        // alert(result.request.origin.query);
        // alert(getKeys(result.routes));
        // alert("You got it! the result is: "+result);
      } else {
        alert("Error! Status is: "+status);
      }
    });
  }
