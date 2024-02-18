const div = document.querySelector("#map")
mapboxgl.accessToken = 'pk.eyJ1IjoicmlzaGktc2l2YXJhanUiLCJhIjoiY2xrZ3o0MG5jMDRqdzNvcnp4ZnBvZHQ4bCJ9.fjkl7FXHgXdueyxgY2tnUA';
// const divs = new mapboxgl.Map({
//     container: 'map', // container ID
//     projection: 'globe',
//     style: 'mapbox://styles/mapbox/satellite-v9', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9, // starting zoom
// });
var map = new mapboxgl.Map({
    container: 'map',
    projection: 'globe',
    center: [78.9629, 20.5937],
    style: 'mapbox://styles/mapbox/outdoors-v12',
    zoom: 1.5
});
map.on('click', function (e) {
    // Retrieve the longitude and latitude coordinates of the clicked point
    var lngLat = e.lngLat;
    console.log('Longitude: ' + lngLat.lng + ', Latitude: ' + lngLat.lat);
    // You can use these coordinates for further processing, such as displaying them on the map
});