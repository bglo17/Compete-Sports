function initMap(){
    // locations
    var LaFitness1 = {lat:33.9998,lng:-84.5836};
    var LaFitness2 = {lat:34.0631,lng:-84.3917};
    var LaFitness3 = {lat:33.7982,lng:-84.3708};
    var LaFitness4 = {lat:33.7244,lng:-84.7321};

    // map options
    var options = {
        zoom:8,
        center: {lat:33.7490,lng:-84.3880},
    }

    // new map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // function that adds locations to the map
    function addMarker(props){
        var marker = new google.maps.Marker({
        position: props.coords,
        map:map,
    });
        // content section is for info window
        if(props.content){
            const infowindow = new google.maps.InfoWindow({
                content:props.content,
            });
                // Listener for CLICK
            marker.addListener("click", function(){
                infowindow.open(map, marker);
            });
        };
    };
    
    // call the function for each location
    addMarker({
        coords:LaFitness1,
        content:'<h2>LA Fitness</h2>' + '<p>1185 Ernest W Barrett Pkwy NW, Kennesaw, GA 30144</p>'
    });
    addMarker({
        coords:LaFitness2,
        content:'<h2>LA Fitness</h2>' + '<p>1045 Woodstock Rd, Roswell, GA 30075</p>'
    });
    addMarker({
        coords:LaFitness3,
        content:'<h2>LA Fitness</h2>' + '<p>1544 Piedmont Ave NE Ste 115, Atlanta, GA 30324</p>'
    });
    addMarker({
        coords:LaFitness4,
        content:'<h2>LA Fitness</h2>' + '<p>3020 Chapel Hill Rd, Douglasville, GA 30135</p>'
    });
}