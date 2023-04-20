            var mymap = L.map('map', {
                center: [0.0, 0.0],
                zoom: 2,
            });

            L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {maxZoom: 17,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}
            ).addTo(mymap);

            var pnt_layer = L.layerGroup().addTo(mymap);
            var circle_layer = L.layerGroup().addTo(mymap);
            var midpoint_layer = L.layerGroup().addTo(mymap);

            var points = turf.randomPoint(2);

            L.geoJSON(points, {
                onEachFeature: function(feature, layer) {
                    layer.addEventListener("drag", draw);
                },
                pointToLayer: function(geoJsonPoint, latlng) {
                    return L.marker(latlng, {draggable: true}).bindPopup("Drag me!").openPopup();
                }
            }).addTo(pnt_layer);

            function draw() {
                circle_layer.clearLayers();
                midpoint_layer.clearLayers();

                points = pnt_layer.toGeoJSON();

                greatCircle = turf.greatCircle(points.features[0].geometry.coordinates, points.features[1].geometry.coordinates);
                greatCircle = L.geoJSON(greatCircle);
                greatCircle.addTo(circle_layer);

                mid_p = turf.midpoint(points.features[0].geometry.coordinates, points.features[1].geometry.coordinates);
                mid_p = L.geoJSON(mid_p);
                mid_p.addTo(midpoint_layer);
            }
            draw();