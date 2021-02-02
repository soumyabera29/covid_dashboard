function updateMap() {
    console.log("Updating map with realtime data")
    fetch("https://corona-api.com/countries")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.coordinates.latitude;
                longitude = element.coordinates.longitude;
                cases = element.latest_data.confirmed;
                if (cases < 100) {
                    color = "yellow";
                }
                else if (cases < 1000) {
                    color = "rgb(224, 224, 35)";
                }
                else if (cases < 10000) {
                    color = "orange";
                }
                else if (cases < 100000) {
                    color = "orangered";
                }
                else if (cases < 1000000) {
                    color = "red";
                }
                else {
                    color = "maroon";
                }
                cases = Commas(element.latest_data.confirmed);
                var popup = new mapboxgl.Popup({
                    offset: 25
                }).setText(
                    `Total Number of Cases in ${element.name} is ${cases}.`
                );

                // Mark on the map
                const marker = new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                    .addTo(map)
                    .setPopup(popup);
                marker.getElement().addEventListener('click', datachange);
                function datachange() {
                    var str = element.name;
                    str = str.toUpperCase();
                    document.getElementById('place').innerHTML = str;
                    document.getElementById('cases').innerHTML = Commas(element.latest_data.confirmed);
                    document.getElementById('recovered').innerHTML = Commas(element.latest_data.recovered);
                    document.getElementById('deaths').innerHTML = Commas(element.latest_data.deaths);
                }
            });
        })
}
function Commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
updateMap();
let interval = 7200000;
setInterval(updateMap, interval); 