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
    z-index: 2;
    height: 400px;

}
#map-relative {
    position: relative;
    z-index: 1;
}
</style>