
function initMap() {


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2, 
        center: {lat: -19.257753, lng: 146.823688},
    });

    var src = "https://drive.google.com/u/0/uc?id=13fB9iAVGC4ShtooDQNoNZ3p79PdnduRX&export=download"
    var kmlLayer = new google.maps.KmlLayer({
        url: src,
        suppressInfoWindows: true,
        preserveViewport: false,
        zoom: 2,
        map: map
    });

    // kmlLayer.addListener('click', function(event) {
    // var content = event.featureData.infoWindowHtml;
    // var testimonial = document.getElementById('capture');
    // testimonial.innerHTML = content;
    // });
  }