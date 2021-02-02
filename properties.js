
function togglemenu() {
    document.getElementById('sidebar').classList.toggle('active');
}
function recentre_light() {
    map.flyTo({
        center: [-50.04, 38.907],
        zoom: 1,
    });
    map.setStyle('mapbox://styles/mapbox/streets-v11');
    document.getElementById('button').style.backgroundColor = 'white';
}
function togglelegend() {
    document.getElementById('toggler').classList.toggle('active');
}
function recentre_dark() {
    map.flyTo({
        center: [-50.04, 38.907],
        zoom: 1,
    });
    map.setStyle('mapbox://styles/mapbox/dark-v10');
    document.getElementById('button').style.backgroundColor = 'rgb(160, 158, 158)';
}
