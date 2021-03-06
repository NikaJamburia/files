
function initMap() {


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10, 
        center: {lat: 41.68234735080762, lng: 44.8471791124803},
    });

    // var kmlLayer = new google.maps.KmlLayer("https://nikajamburia.github.io/files/routes-adjara-2.kml", {
    //     map: map,
    //     suppressInfoWindows: true,
    //     preserveViewport: false,
    //   });

    // kmlLayer.addListener('click', function(event) {
    //     console.log(event);
    //     console.log(event.latLng.lat());

    //     map.setCenter( event.latLng );
    //     map.setZoom(12);

    //     var content = event.featureData.infoWindowHtml;
    //     var testimonial = document.getElementById('capture');
    //     testimonial.innerHTML = content;
    //     console.log(getRouteCode(event.featureData.description));
    // });

    var allRoutesData = new google.maps.Data({map: map});
    allRoutesData.loadGeoJson(
        "https://nikajamburia.github.io/files/routes-adjara-2.geojson"
    );

    allRoutesData.setStyle({
        strokeColor: '#ff0051e6',
        strokeWeight: 3
    });
    
    allRoutesData.addListener('click', function(event) {
        allRoutesData.overrideStyle(event.feature, {strokeColor: 'green'});

  
        map.setCenter( event.latLng );
        map.setZoom(12);

        var content = event.feature.i.description;
        console.log(event.feature.i.routeCode);
        document.getElementById('capture').innerHTML = content;

    });

  }

  function getRouteCode(content) {

      var trimBeggining = content.replace('მარშრუტის კოდი:', '')
      return trimBeggining
        .substring(0, trimBeggining.indexOf("<br>"))
        .trim();
  }