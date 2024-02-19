const div = document.querySelector("#map")
const info = document.querySelector(".info")
mapboxgl.accessToken = 'pk.eyJ1IjoicmlzaGktc2l2YXJhanUiLCJhIjoiY2xrZ3o0MG5jMDRqdzNvcnp4ZnBvZHQ4bCJ9.fjkl7FXHgXdueyxgY2tnUA';
// const divs = new mapboxgl.Map({
//     container: 'map', // container ID
//     projection: 'globe',
//     style: 'mapbox://styles/mapbox/satellite-v9', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9, // starting zoom
// });
let map = new mapboxgl.Map({
    container: 'map',
    projection: 'globe',
    center: [78.9629, 20.5937],
    style: 'mapbox://styles/mapbox/outdoors-v12',
    zoom: 1.5
});
map.on('click', async (e) => {
    let lngLat = e.lngLat;
    let lat = lngLat.lat;
    let lon = lngLat.lng;
    let con = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/ ${lon},${lat}.json?access_token=pk.eyJ1IjoicmlzaGktc2l2YXJhanUiLCJhIjoiY2xrZ3o0MG5jMDRqdzNvcnp4ZnBvZHQ4bCJ9.fjkl7FXHgXdueyxgY2tnUA`)
    console.log(con)
    let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb5de4977205403a59132f425bfb51a2&units=metric`);
    let Temperature = res.data.main.temp
    info.innerHTML = `<b style="font-weight:bold; margin-left:20%; padding-top:30%;"> Temperature:</b>${Temperature}`
    console.log(res.data)
});