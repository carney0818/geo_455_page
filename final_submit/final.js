var mymap = L.map('map', {
    center: [38.85250119246977, -99.60815961021089],
              zoom: 4,
          });
    
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
});

var topo = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
    layers: 'SRTM30-Colored-Hillshade'
}); 

var grayscale = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
   attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
   maxZoom: 11,
   minZoom: 2
 }).addTo(mymap);

var myIcon = new L.Icon({
     iconSize: [10, 10],
     iconAnchor: [5, ],
     popupAnchor:  [1, -24],
     iconUrl: 'icon_ice.png'
 });

var national_polygon = L.geoJson(national_polygon, {
    onEachFeature: function(feature, featureLayer){
        featureLayer.bindPopup('<p>Park Name: '+feature.properties["nat3_XYTableToPoint.labeling"]+ '</br>' +
                               'Website: '+feature.properties["nat3_XYTableToPoint.sourcing"])+'</p>';},
    pointToLayer: function (feature, latlng) {
        var marker = L.marker(latlng,{icon: myIcon});
        return marker;   
    }}).addTo(mymap);


var highways = new L.geoJson(highways).addTo(mymap);

var clustermarkers = L.markerClusterGroup();
nat3_test.features.forEach(function(feature) {
    clustermarkers.addLayer(L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]));
})

mymap.addLayer(clustermarkers);

var cities = L.esri.featureLayer({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Major_Cities/FeatureServer/0',
    pointToLayer: function (geojson, latlng) {
            return L.marker(latlng, {
              icon: icon
            });
          }
        }).addTo(mymap);
              
//scalebar  
L.control.scale({position: 'bottomright', maxWidth: '150', metric: 'True'}).addTo(mymap); 
    
var baseLayers = {
    'Grayscale': grayscale,
    'Streets': streets,
    'Hillshade': topo,
    };

var overlayMaps = {
    "<img src='icon_ice.png' height=16> Parks": national_polygon,
    "<img src='cluster_icon.png' height=16> Clustering of Parks": clustermarkers,
    "<img src='icon_ice.png' height=16> Highways": highways,
};

var legend = L.control.layers(baseLayers, overlayMaps, {collapsed:false}).addTo(mymap);
//inset map
var miniMap = new L.Control.MiniMap(L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=tZnptaeI9RvKHsX18rbW'), {
            toggleDisplay: true,
            position: 'bottomleft'
        }).addTo(mymap);

//zoom button
L.easyButton(("<img src='globe_icon.png', height=85%>"), function(btn, map){
    map.setView([38.85250119246977, -99.60815961021089], 5);
}).addTo(mymap);



var searchControl = new L.Control.Search({
    position:'topright',
    layer: nat3_test,
    propertyName: 'labeling',
    marker: false,
    markeranimate: true,
    delayType: 50,
    collapsed: false,
    textPlaceholder: 'Search by Peak Name: e.g. Acadia, Glacier',   
    moveToLocation: function(latlng, title, map) {mymap.setView(latlng, 15);}});

mymap.addControl(searchControl);  
 
        









