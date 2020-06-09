'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoibGVlc2VsIiwiYSI6ImNrYjcya2V5bzAxcDMyeW1rcGF4Mmh6NXEifQ.WTBOnsfr3p7d0bRtefesew'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/leesel/ckb7wvwhg0jxo1ipixxyc9zmx',
    center: [-73.96216,40.80779],
    zoom: 16
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})