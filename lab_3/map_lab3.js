var mymap = L.map("map").setView([64.261085, -19.709013], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
var myIconIce = L.icon({
    iconUrl: 'g_images/icon_ice.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon1 = L.icon({
    iconUrl: 'g_images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon2 = L.icon({
    iconUrl: 'g_images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon3 = L.icon({
    iconUrl: 'g_images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon4 = L.icon({
    iconUrl: 'g_images/icon_lab4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon5 = L.icon({
    iconUrl: 'g_images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon6 = L.icon({
    iconUrl: 'g_images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon7 = L.icon({
    iconUrl: 'g_images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon8 = L.icon({
    iconUrl: 'g_images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon9 = L.icon({
    iconUrl: 'g_images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon10 = L.icon({
    iconUrl: 'g_images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon11 = L.icon({
    iconUrl: 'g_images/icon_11.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon12 = L.icon({
    iconUrl: 'g_images/icon_12.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon13 = L.icon({
    iconUrl: 'g_images/icon_13.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon14 = L.icon({
    iconUrl: 'g_images/icon_14.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon15 = L.icon({
    iconUrl: 'g_images/icon_15.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var iceland = L.marker([64.261085, -19.709013], {icon: myIconIce}).bindPopup("<b>Iceland").addTo(mymap);

var iceland = L.marker([64.11452, -21.24526], {icon: myIcon1}).bindPopup("<b>Nesjavellir Geothermal Power Station").addTo(mymap);

var iceland = L.marker([63.52535, -19.49072], {icon: myIcon2}).bindPopup("<b>Kvernufoss").addTo(mymap);

var iceland = L.marker([64.31816, -20.10901], {icon: myIcon3}).bindPopup("<b>Gullfoss Falls").addTo(mymap);

var iceland = L.marker([63.52782, -19.51241], {icon: myIcon4}).bindPopup("<b>Skogafoss").addTo(mymap);

var iceland = L.marker([64.11348, -21.29616], {icon: myIcon5}).bindPopup("<b>Mt. Vorou-Skeggi").addTo(mymap);

var iceland = L.marker([64.0419, -20.8865], {icon: myIcon6}).bindPopup("<b>Kerid Crater").addTo(mymap);

var iceland = L.marker([64.3097, -20.3027680], {icon: myIcon7}).bindPopup("<b>Geysir Hot Spring").addTo(mymap);

var iceland = L.marker([64.1374, -20.3096], {icon: myIcon8}).bindPopup("<b>Secret Lagoon").addTo(mymap);

var iceland = L.marker([63.8671, -22.3156480], {icon: myIcon9}).bindPopup("<b>Fagradalsfjall").addTo(mymap);

var iceland = L.marker([63.4043, -19.0447], {icon: myIcon10}).bindPopup("<b>Reynisfjara Beach").addTo(mymap);

var iceland = L.marker([63.5351, -19.3503], {icon: myIcon11}).bindPopup("<b>Solheimjokull").addTo(mymap);

var iceland = L.marker([64.2406, -20.5245], {icon: myIcon12}).bindPopup("<b>Bruarfoss").addTo(mymap);

var iceland = L.marker([63.6157, -19.9926], {icon: myIcon13}).bindPopup("<b>Seljalandsfoss").addTo(mymap);

var iceland = L.marker([63.4238, -18.7664], {icon: myIcon14}).bindPopup("<b>Gigjagja and Hjorleifshofd").addTo(mymap);

var iceland = L.marker([64.2557, -21.1292], {icon: myIcon15}).bindPopup("<b>Thingvellir").addTo(mymap);