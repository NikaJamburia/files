
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
    //     var content = event.featureData.infoWindowHtml;
    //     console.log(event.featureData);
    //     var testimonial = document.getElementById('capture');
    //     testimonial.innerHTML = content;
    // });

    var allRoutesData = new google.maps.Data({map: map});
    allRoutesData.loadGeoJson(
        "https://nikajamburia.github.io/files/routes-adjara.geojson"
    );

    allRoutesData.setStyle({
        strokeColor: 'green',
        strokeWeight: 3
    });
    
    allRoutesData.addListener('click', function(event) {
        allRoutesData.overrideStyle(event.feature, {strokeColor: 'red'});

        console.log(event.feature.g.g[1]);


        var routeMiddle = event.feature.g.g[Math.round((event.feature.g.g.length - 1) / 2)];
        console.log(routeMiddle);
        map.setCenter({ lat: routeMiddle.lat, lng: routeMiddle.lng });
        map.setZoom(12);

        console.log(event.feature);
    });

  }