jQuery(function() {
    var placeMarkerAndPanTo, updateFields;
    var markersArray = [];
    var lat_field = $('#location_latitude');
    var lng_field = $('#location_longitude');
    window.initMap = function() {
        var map;
        if ($('#map').size() > 0) {
            map = new google.maps.Map(document.getElementById('map'), {
              center: {
                lat: 47.8388,
                lng: 35.139567
              },
              zoom: 8
            });
            //----------------------------------------------------------------
            map.addListener('click', function(e) {
                placeMarkerAndPanTo(e.latLng, map);
                return updateFields(e.latLng);
            });
            return $('#find-on-map').click(function(e) {
                e.preventDefault();
                return placeMarkerAndPanTo({
                    lat: parseInt(lat_field.val(), 10),
                    lng: parseInt(lng_field.val(), 10)
                }, map);
            });
        }
    };
    placeMarkerAndPanTo = function(latLng, map) {
        var marker;
        while (markersArray.length) {
          markersArray.pop().setMap(null);
        }
        marker = new google.maps.Marker({
          position: latLng,
          map: map
        });
        map.panTo(latLng);
        return markersArray.push(marker);
    };
    return updateFields = function(latLng) {
        lat_field.val(latLng.lat());
        return lng_field.val(latLng.lng());
    };
});