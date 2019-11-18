var app = {
 
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
            navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError, { enableHighAccuracy: true });
    }

};

app.initialize();


var onMapSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    alert("Latitud =" + Latitude + "  //  Longitud = " + Longitude);
    crear_mapa(Latitude,Longitude);

   /* 
   getMap(Latitude, Longitude);
   */
}

function crear_mapa(Latitude,Longitude){
    var Latitude = new google.maps.LatLng(Latitude,Longitude);
    var mapOptions = {
        center: latLong,
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}


function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}