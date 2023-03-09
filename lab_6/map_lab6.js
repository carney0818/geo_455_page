var mymap = L.map('map', {
    center: [51.48882027639122, -0.1028811094342392],
              zoom: 11
          });

var grayscale = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
   attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
   maxZoom: 11,
   minZoom: 5
 }).addTo(mymap);


function getColor(value) {
    return value > 139 ? '#54278f':
           value > 87  ? '#756bb1':
           value > 53  ? '#9e9ac8':
           value > 32  ? '#cbc9e2':
                         '#f2f0f7';
}

function style(feature){
    return {
        fillColor: getColor(feature.properties.pop_den), 
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
    }

  function highlightFeature(e) {
    var feature = e.target;

    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature, 
            mouseout: resetHighlight,    
        });
    }

    var geojson;  
    function resetHighlight(e) {
        geojson.resetStyle(e.target);
    }

    geojson = L.geoJson(data, {
        style: style,
        onEachFeature: onEachFeature
    }).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
}).addTo(mymap);



  var legend = L.control({position: 'bottomright'}); 

    legend.onAdd = function (mymap) {

        var div = L.DomUtil.create('div', 'legend'),
            grades = [0, 32, 53, 87, 139]; 

        div.innerHTML = '<b>Population Density <br></b>'; 
        
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(mymap);










function getColor1(value) {
    return value > 47  ? '#f54293':
           value > 30  ? '#f5849e':
           value > 17  ? '#d69fab':
           value > 13  ? '#f2c4ce':
           value > 11  ? '#f0d8dd': 
                         '#f2f0f7';
}

function style1(feature){
    return {
        fillColor: getColor1(feature.properties.dens_all), 
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
    }

  function highlightFeature1(e1) {
    var feature = e1.target;

    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}


    function onEachFeature1(feature, layer) {
        layer.on({
            mouseover: highlightFeature1, 
            mouseout: resetHighlight1,    
        });
    }
 var density;  
    function resetHighlight1(e1) {
        density.resetStyle(e1.target);
    }

    density = L.geoJson(density, {
        style: style1,
        onEachFeature: onEachFeature1
    }).bindPopup(function (layer1){
    return layer1.feature.properties.name 
           + '<p style="color:pink">' + layer1.feature.properties.dens_all.toString() + ' people/hectare </p>';       
}).addTo(mymap);


  var legend1 = L.control({position: 'bottomleft'}); 

    legend1.onAdd = function (mymap) {

        var div = L.DomUtil.create('div', 'legend'),
            grades = [0, 11, 13, 17, 30, 47]; 

        div.innerHTML = '<b>English Speaking Households <br></b>'; 
        
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor1(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend1.addTo(mymap);

var baseLayers = {
    'Grayscale': grayscale,
	};

var overlays = {
    'Population Density': geojson,
    'English Speaking Households': density,
};

//Create the menu window
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap); //collapsed: true is defaults

