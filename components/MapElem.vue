<template>
    <div id="map-relative">
        <div id="map" ref="mapRef"></div>
    </div>
</template>

<script>
import { Map } from 'maplibre-gl';
    export default {
        setup() {
            const mapRef = inject("mapRef");
            return {
                mapRef
            }
        }
    }
</script>

<style scoped>
#map {
    position: relative;
    width: 200px;
    height: 200px;
    top: 0;
    left: 0;
    z-index: 2;
}
#map-relative {
    width: 300px;
    height: 300px;
    position: relative;
    background-color: aquamarine;
    z-index: 1;
}
</style>