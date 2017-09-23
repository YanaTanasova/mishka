function initMap() {
        var uluru = {lat: 59.936525, lng: 30.321235};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: new google.maps.LatLng(59.936525, 30.321235),
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(59.936525, 30.321235),
            map: map,
            icon: {
                url: "img/map-pin.svg",
            }
        });
}