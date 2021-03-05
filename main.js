
function initMap() {


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2, 
        center: {lat: -19.257753, lng: 146.823688},
    });

    var kmlLayer = new google.maps.KmlLayer('https://nikajamburia.github.io/files/routes-adjara.kml', {
        suppressInfoWindows: true,
        map: map
    });

    google.maps.event.addListener(kmlLayer,'status_changed',function() {
        console.log(kmlLayer.getStatus());
        console.log(kmlLayer);
    });

    // kmlLayer.addListener('click', function(event) {
    // var content = event.featureData.infoWindowHtml;
    // var testimonial = document.getElementById('capture');
    // testimonial.innerHTML = content;
    // });
  }